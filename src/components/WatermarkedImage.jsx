import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import useFaceDetection from '../hooks/useFaceDetection';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WatermarkedImage = ({
  src,
  alt,
  className = '',
  objectFit = 'cover',
  priority = false,
  detectFaces = true,
  blur = false,
  srcSet = undefined,
  sizes = undefined,
}) => {
  const imageRef = useRef(null);
  const hasProcessedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurMask, setBlurMask] = useState(null);
  const [showBlurredFallback, setShowBlurredFallback] = useState(blur);
  const [hasBlurToggle, setHasBlurToggle] = useState(false);
  const { detect, isReady } = useFaceDetection();
  const { elementRef: observerRef, isVisible } = useIntersectionObserver();

  const applyPixelation = useCallback((canvas, pixelSize = 15) => {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;

    for (let y = 0; y < height; y += pixelSize) {
      for (let x = 0; x < width; x += pixelSize) {
        // Sample pixel from top-left of block
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        // Fill entire block with sampled color
        for (let dy = 0; dy < pixelSize && y + dy < height; dy++) {
          for (let dx = 0; dx < pixelSize && x + dx < width; dx++) {
            const blockIdx = ((y + dy) * width + (x + dx)) * 4;
            data[blockIdx] = r;
            data[blockIdx + 1] = g;
            data[blockIdx + 2] = b;
            data[blockIdx + 3] = a;
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  const processFaceDetection = useCallback(async () => {
    if (!imageRef.current || !isReady || !detectFaces || !isVisible || hasProcessedRef.current) {
      return;
    }

    try {
      const img = imageRef.current;

      const processingCanvas = typeof OffscreenCanvas !== 'undefined'
        ? new OffscreenCanvas(img.naturalWidth, img.naturalHeight)
        : document.createElement('canvas');

      processingCanvas.width = img.naturalWidth;
      processingCanvas.height = img.naturalHeight;

      const ctx = processingCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, processingCanvas.width, processingCanvas.height);

      const forceFallback = typeof window !== 'undefined' && window.__RECAN_TEST_FORCE_FALLBACK__;
      const forceFaceDetection = typeof window !== 'undefined' && window.__RECAN_TEST_FACE_DETECTION__;

      // Run face detection
      const result = forceFallback
        ? { success: false, faces: [], error: 'Forced fallback' }
        : forceFaceDetection
          ? {
            success: true,
            faces: [
              {
                x: img.naturalWidth * 0.32,
                y: img.naturalHeight * 0.18,
                width: img.naturalWidth * 0.22,
                height: img.naturalHeight * 0.22,
              },
            ],
          }
          : await detect(imageData);

      if (result.success && result.faces && result.faces.length > 0) {
        const maskCanvas = document.createElement('canvas');
        maskCanvas.width = img.naturalWidth;
        maskCanvas.height = img.naturalHeight;
        const maskCtx = maskCanvas.getContext('2d');

        // Draw image onto mask canvas
        maskCtx.drawImage(img, 0, 0);

        // Apply pixelation to each detected face
        result.faces.forEach((face) => {
          const x = Math.max(0, Math.floor(face.x));
          const y = Math.max(0, Math.floor(face.y));
          const width = Math.min(Math.floor(face.width), maskCanvas.width - x);
          const height = Math.min(Math.floor(face.height), maskCanvas.height - y);

          if (width <= 0 || height <= 0) return;

          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = width;
          tempCanvas.height = height;
          const tempCtx = tempCanvas.getContext('2d');
          tempCtx.drawImage(maskCanvas, x, y, width, height, 0, 0, width, height);

          applyPixelation(tempCanvas, 14);
          maskCtx.drawImage(tempCanvas, x, y, width, height);
        });

        setBlurMask(maskCanvas.toDataURL());
        setShowBlurredFallback(false);
        setHasBlurToggle(false);
      } else {
        // If detection failed or faces not confidently detected, apply full-image blur
        setShowBlurredFallback(true);
        setHasBlurToggle(true);
      }

      hasProcessedRef.current = true;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Face detection processing error:', error);
      }
      setShowBlurredFallback(true);
      setHasBlurToggle(true);
      hasProcessedRef.current = true;
    }
  }, [isReady, detectFaces, isVisible, detect, applyPixelation]);

  // Trigger detection when image loads and becomes visible
  useEffect(() => {
    if (isLoaded && isVisible && detectFaces && isReady && !hasProcessedRef.current) {
      const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 50));
      idleCallback(() => processFaceDetection());
    }
  }, [isLoaded, isVisible, detectFaces, isReady, processFaceDetection]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const toggleBlur = (e) => {
    e.stopPropagation();
    setShowBlurredFallback((prev) => !prev);
  };

  const handlePointerEnter = (event) => {
    if (hasBlurToggle && event.pointerType === 'mouse') {
      setShowBlurredFallback(false);
    }
  };

  const handlePointerLeave = (event) => {
    if (hasBlurToggle && event.pointerType === 'mouse') {
      setShowBlurredFallback(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-gray-200 group ${className}`}
      style={{ aspectRatio: 'auto' }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      data-watermarked-image
    >
      <div ref={observerRef} className="absolute inset-0">
        {/* Base Image */}
        <img
          ref={imageRef}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          onLoad={handleImageLoad}
          className="w-full h-full"
          style={{
            objectFit,
            transition: 'opacity 0.3s ease',
            opacity: !showBlurredFallback && !blurMask ? 1 : 0.95,
            filter: showBlurredFallback && !blurMask ? 'blur(20px)' : 'none',
          }}
          decoding="async"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />

        {/* Face Blur Mask Canvas Overlay */}
        {blurMask && (
          <img
            src={blurMask}
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{ objectFit, pointerEvents: 'none' }}
            aria-hidden="true"
            data-face-blur-mask
          />
        )}

        {/* Fallback Full-Image Blur Overlay */}
        {!blurMask && showBlurredFallback && (
          <div
            className="absolute inset-0 bg-black/10"
            aria-hidden="true"
            data-fallback-blur
          />
        )}

        {/* Watermark Overlay */}
        <div className="absolute bottom-4 right-4 pointer-events-none z-10" data-watermark>
          <div className="text-white/85 text-xs font-bold px-2 py-1 rounded bg-black/30 backdrop-blur-sm whitespace-nowrap mix-blend-luminosity shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
            Recan Foundation
          </div>
        </div>

        {/* Blur Toggle Button */}
        {hasBlurToggle && (
          <button
            onClick={toggleBlur}
            className="absolute top-4 right-4 z-20 px-3 py-2 rounded bg-black/50 text-white text-xs font-medium hover:bg-black/70 transition-all backdrop-blur-sm"
            aria-label={showBlurredFallback ? 'Show image' : 'Hide image'}
          >
            {showBlurredFallback ? '👁️ Reveal' : '👁️ Hide'}
          </button>
        )}

        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse" />
        )}
      </div>
    </div>
  );
};

WatermarkedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  objectFit: PropTypes.string,
  priority: PropTypes.bool,
  detectFaces: PropTypes.bool,
  blur: PropTypes.bool,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
};

export default WatermarkedImage;
