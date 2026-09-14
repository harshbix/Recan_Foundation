import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag, Instagram } from 'lucide-react';
import WatermarkedImage from './WatermarkedImage';
import { useLanguage } from '../context/LanguageContext';
import { getTopicById } from '../data/galleryData';

const GalleryModal = ({
  isOpen,
  item,
  currentIndex,
  totalItems,
  onClose,
  onNext,
  onPrevious,
}) => {
  const { language, t } = useLanguage();
  const closeButtonRef = useRef(null);
  const isSwahili = language === 'sw';

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus({ preventScroll: true });
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const topic = getTopicById(item.topicId);
  const topicName = isSwahili ? (topic?.swName || topic?.name) : topic?.name;
  const topicBadge = isSwahili ? (topic?.swBadge || topic?.badge) : topic?.badge;
  const title = isSwahili ? (item.swTitle || item.title) : item.title;
  const caption = isSwahili ? (item.swCaption || item.caption) : item.caption;
  const description = isSwahili ? (item.swDescription || item.description) : item.description;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative z-10 flex flex-col lg:flex-row w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left / Hero Column: Focus Image */}
          <div className="relative flex-1 bg-slate-950 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[380px] lg:min-h-[540px]">
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center"
            >
              <WatermarkedImage
                src={item.src}
                alt={title}
                className="w-full h-full min-h-[260px] sm:min-h-[380px] lg:min-h-[540px]"
                objectFit="contain"
                fill
                priority
                fallbackMode="reveal"
              />
            </motion.div>

            {/* In-Image Navigation Controls (desktop & tablet) */}
            <button
              type="button"
              onClick={onPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-md transition hover:bg-black/75 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra"
              aria-label={t('previous')}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-md transition hover:bg-black/75 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra"
              aria-label={t('next')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Right Column: Social-Post Details */}
          <div className="w-full lg:w-[380px] xl:w-[420px] flex flex-col justify-between bg-white overflow-y-auto max-h-[50vh] lg:max-h-[580px] p-6 sm:p-7 border-t lg:border-t-0 lg:border-l border-gray-100">
            {/* Top Bar: Topic Badge, Meta, Close Button */}
            <div>
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-green/10 text-primary-green">
                    <Tag className="w-3 h-3" />
                    {topicBadge || topicName}
                  </span>
                  <a
                    href="https://www.instagram.com/recanfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-gray-500 bg-gray-100 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 border border-transparent transition-all"
                    title="Follow @recanfoundation on Instagram"
                  >
                    <Instagram className="w-3 h-3 text-pink-600" />
                    <span className="hidden sm:inline font-semibold">@recanfoundation</span>
                  </a>
                </div>

                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-primary transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra"
                  aria-label={t('galleryCloseModal') || 'Close story'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Caption */}
              <div className="mt-5 space-y-3">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary leading-snug">
                  {title}
                </h3>

                <p className="text-sm sm:text-base font-medium text-accent-terra leading-relaxed">
                  "{caption}"
                </p>

                {/* Extended Narrative Description */}
                <div className="pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                  <p className="whitespace-pre-line">{description}</p>
                </div>

                {/* Contextual Metadata: Location & Date */}
                <div className="pt-3 flex flex-wrap gap-y-2 gap-x-4 text-xs text-gray-400">
                  {item.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {item.location}
                    </span>
                  )}
                  {item.date && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {item.date}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Bar: Post Footer Navigation & Counter */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-400">
                {t('galleryShowing') || 'Story'} <strong className="text-primary font-bold">{currentIndex + 1}</strong> {t('galleryStoryOf') || 'of'} <strong className="text-primary font-bold">{totalItems}</strong>
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:text-primary hover:bg-gray-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t('previous')}
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary-green hover:bg-primary-green/90 transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
                >
                  {t('next')}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

GalleryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    topicId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    swTitle: PropTypes.string,
    caption: PropTypes.string.isRequired,
    swCaption: PropTypes.string,
    description: PropTypes.string.isRequired,
    swDescription: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }),
  currentIndex: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default GalleryModal;

