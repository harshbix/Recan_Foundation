import React, { useEffect, useState } from 'react';
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
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const allowFallbackBlur = fallbackMode === 'blur';
  const [showBlurredFallback, setShowBlurredFallback] = useState(blur && allowFallbackBlur);
  const [hasBlurToggle, setHasBlurToggle] = useState(blur);

  useEffect(() => {
    setShowBlurredFallback(blur && allowFallbackBlur);
    setHasBlurToggle(blur);
  }, [src, blur, allowFallbackBlur]);

  const handleImageLoad = () => {
    setIsLoaded(true);
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
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          className={fill ? "w-full h-full" : "w-full h-auto block"}
          style={{
            objectFit: fill ? objectFit : 'cover',
            transition: 'opacity 0.3s ease',
            opacity: showBlurredFallback ? 0.95 : 1,
            filter: showBlurredFallback ? 'blur(20px)' : 'none',
          }}
          decoding="async"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />

        {/* Fallback Full-Image Blur Overlay */}
        {showBlurredFallback && (
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
  blur: PropTypes.bool,
  fallbackMode: PropTypes.oneOf(['blur', 'reveal']),
  fill: PropTypes.bool,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  aspectRatio: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default WatermarkedImage;
