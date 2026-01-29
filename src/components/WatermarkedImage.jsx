import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const WatermarkedImage = ({
  src,
  alt,
  className = '',
  objectFit = 'cover',
  priority = false,
  blur = false,
  fallbackMode = 'blur',
  fill = true,
  srcSet = undefined,
  sizes = undefined,
  aspectRatio = undefined,
  width = undefined,
  height = undefined,
  optimize = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const allowFallbackBlur = fallbackMode === 'blur';
  const [showBlurredFallback, setShowBlurredFallback] = useState(blur && allowFallbackBlur);
  const [hasBlurToggle, setHasBlurToggle] = useState(blur);
  const [hasError, setHasError] = useState(false);
  const [currentSource, setCurrentSource] = useState(src);
  const [isCompressed, setIsCompressed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setShowBlurredFallback(blur && allowFallbackBlur);
    setHasBlurToggle(blur);
    setIsLoaded(false);
    setHasError(false);
    setCurrentSource(src);
    setIsCompressed(false);
  }, [src, blur, allowFallbackBlur]);

  const compressImage = (imageElement) => {
    if (!optimize || isCompressed || typeof window === 'undefined') {
      return;
    }

    try {
      const naturalWidth = imageElement.naturalWidth;
      const naturalHeight = imageElement.naturalHeight;

      if (!naturalWidth || !naturalHeight) {
        return;
      }

      const maxDimension = 1600;
      const maxSizeBytes = 600 * 1024; // 600KB target budget
      const scale = Math.min(1, maxDimension / Math.max(naturalWidth, naturalHeight));
      const targetWidth = Math.round(naturalWidth * scale);
      const targetHeight = Math.round(naturalHeight * scale);

      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const context = canvas.getContext('2d');

      if (!context) {
        return;
      }

      context.drawImage(imageElement, 0, 0, targetWidth, targetHeight);

      const qualitySteps = [0.72, 0.62, 0.52];
      for (let i = 0; i < qualitySteps.length; i += 1) {
        const quality = qualitySteps[i];
        const dataUrl = canvas.toDataURL('image/webp', quality);
        const base64Length = dataUrl.length - (dataUrl.indexOf(',') + 1);
        const fileSizeBytes = base64Length * 0.75;

        if (fileSizeBytes <= maxSizeBytes || i === qualitySteps.length - 1) {
          setIsCompressed(true);
          setCurrentSource(dataUrl);
          break;
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(`[WatermarkedImage] Unable to optimize image: ${src}`, error);
    }
  };

  const handleImageLoad = (event) => {
    setIsLoaded(true);

    if (!hasError && optimize && !isCompressed) {
      const imageElement = event?.currentTarget ?? imgRef.current;
      if (imageElement) {
        if (typeof window !== 'undefined' && typeof window.setTimeout === 'function') {
          window.setTimeout(() => compressImage(imageElement), 0);
        } else {
          compressImage(imageElement);
        }
      }
    }
  };

  const handleImageError = () => {
    if (!hasError) {
      // eslint-disable-next-line no-console
      console.warn(`[WatermarkedImage] Failed to load image source: ${src}`);
      setHasError(true);
      setIsLoaded(true);
    }
  };

  const toggleBlur = (e) => {
    e.stopPropagation();
    setShowBlurredFallback((prev) => !prev);
  };

  const handlePointerEnter = (event) => {
    if (hasBlurToggle && allowFallbackBlur && event.pointerType === 'mouse') {
      setShowBlurredFallback(false);
    }
  };

  const handlePointerLeave = (event) => {
    if (hasBlurToggle && allowFallbackBlur && event.pointerType === 'mouse') {
      setShowBlurredFallback(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-gray-200 group ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      data-watermarked-image
    >
      <div className={fill ? "absolute inset-0" : "relative"}>
        {/* Base Image */}
        <img
          ref={imgRef}
          src={currentSource}
          srcSet={isCompressed ? undefined : srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`${fill ? 'w-full h-full' : 'w-full h-auto block'} ${hasError ? 'hidden' : ''}`}
          style={{
            objectFit: fill ? objectFit : 'cover',
            transition: 'opacity 0.3s ease',
            opacity: hasError ? 0 : showBlurredFallback ? 0.95 : 1,
            filter: showBlurredFallback && !hasError ? 'blur(20px)' : 'none',
          }}
          decoding="async"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />

        {/* Fallback Full-Image Blur Overlay */}
        {showBlurredFallback && !hasError && (
          <div
            className="absolute inset-0 bg-black/10"
            aria-hidden="true"
            data-fallback-blur
          />
        )}

        {/* Watermark Overlay */}
        <div className={`absolute bottom-4 right-4 pointer-events-none z-10 ${hasError ? 'hidden' : ''}`} data-watermark>
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

        {/* Error Fallback */}
        {hasError && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/70 text-white text-center px-4"
            role="img"
            aria-label={alt}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 h-10 text-white"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M1.5 20.25h21l-10.5-16.5zm11.25-3h-1.5v-1.5h1.5zm0-3h-1.5v-3h1.5z"
              />
            </svg>
            <span className="mt-3 text-sm font-medium">Image unavailable</span>
          </div>
        )}

        {/* Loading Skeleton */}
        {!isLoaded && !hasError && (
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
  blur: PropTypes.bool,
  fallbackMode: PropTypes.oneOf(['blur', 'reveal']),
  fill: PropTypes.bool,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  aspectRatio: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  optimize: PropTypes.bool,
};

export default WatermarkedImage;
