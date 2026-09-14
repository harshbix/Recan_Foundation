import React, { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import GalleryCard from './GalleryCard';
import GalleryModal from './GalleryModal';
import { useLanguage } from '../context/LanguageContext';
import {
  galleryTopics,
  galleryItems,
  getFeaturedImages,
  getImagesByTopic,
} from '../data/galleryData';

const Gallery = () => {
  const { language, t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const isSwahili = language === 'sw';

  const [selectedTopicId, setSelectedTopicId] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Compute displayed images for home page (capped at 6 items for fast load)
  const displayedImages = useMemo(() => {
    if (selectedTopicId === 'all') {
      return getFeaturedImages(6);
    }
    // For a specific topic, get up to 6 images belonging to that topic
    const topicImages = getImagesByTopic(selectedTopicId);
    return topicImages.slice(0, 6);
  }, [selectedTopicId]);

  // Modal navigation across the currently displayed subset
  const currentModalIndex = useMemo(() => {
    if (!activeModalItem) return -1;
    return displayedImages.findIndex((item) => item.id === activeModalItem.id);
  }, [activeModalItem, displayedImages]);

  const handleOpenModal = useCallback((item) => {
    setActiveModalItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModalItem(null);
  }, []);

  const handleNextModal = useCallback(() => {
    if (currentModalIndex === -1 || displayedImages.length === 0) return;
    const nextIndex = (currentModalIndex + 1) % displayedImages.length;
    setActiveModalItem(displayedImages[nextIndex]);
  }, [currentModalIndex, displayedImages]);

  const handlePreviousModal = useCallback(() => {
    if (currentModalIndex === -1 || displayedImages.length === 0) return;
    const prevIndex = (currentModalIndex - 1 + displayedImages.length) % displayedImages.length;
    setActiveModalItem(displayedImages[prevIndex]);
  }, [currentModalIndex, displayedImages]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-white via-stone-50/50 to-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-1.5 text-accent-terra font-bold tracking-widest uppercase text-xs px-4 py-1.5 bg-accent-terra/10 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {t('galleryPill')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary leading-tight"
          >
            {t('galleryTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed"
          >
            {t('gallerySubtitle')}
          </motion.p>
        </div>

        {/* Dynamic Topic Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {galleryTopics.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            const topicLabel = isSwahili ? (topic.swName || topic.name) : topic.name;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedTopicId(topic.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green ${
                  isSelected
                    ? 'bg-primary-green text-white shadow-md shadow-primary-green/20 scale-[1.02]'
                    : 'bg-white text-gray-600 hover:text-primary hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {topicLabel}
              </button>
            );
          })}
        </div>

        {/* Grid of Featured Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedImages.map((image, index) => (
              <GalleryCard
                key={image.id}
                item={image}
                index={index}
                onSelect={handleOpenModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Banner: Link to Dedicated Full Gallery Page */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary/20 hover:bg-primary-green transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-terra/40"
          >
            <span>{t('galleryViewAll') || 'View Full Gallery'}</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 font-bold">
              {galleryItems.length}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Post-Style Image Modal */}
      <GalleryModal
        isOpen={activeModalItem !== null}
        item={activeModalItem}
        currentIndex={currentModalIndex}
        totalItems={displayedImages.length}
        onClose={handleCloseModal}
        onNext={handleNextModal}
        onPrevious={handlePreviousModal}
      />
    </section>
  );
};

export default Gallery;
