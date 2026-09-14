import React, { useState, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Filter, Camera } from 'lucide-react';
import Layout from '../components/Layout';
import GalleryCard from '../components/GalleryCard';
import GalleryModal from '../components/GalleryModal';
import { useLanguage } from '../context/LanguageContext';
import {
  galleryTopics,
  galleryItems,
  getImagesByTopic,
  getTopicCounts,
  getTopicById,
} from '../data/galleryData';

const GalleryPage = ({ onOpenDonate }) => {
  const { language, t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const isSwahili = language === 'sw';

  const [selectedTopicId, setSelectedTopicId] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = isSwahili
      ? 'Maktaba ya Picha | RECAN Foundation'
      : 'Photo Gallery | RECAN Foundation';
  }, [isSwahili]);

  // Topic counts for filter tabs
  const topicCounts = useMemo(() => getTopicCounts(), []);

  // Filtered images for the dedicated page (all images belonging to topic)
  const currentImages = useMemo(() => {
    return getImagesByTopic(selectedTopicId);
  }, [selectedTopicId]);

  // Current active topic metadata
  const currentTopic = useMemo(() => {
    return getTopicById(selectedTopicId);
  }, [selectedTopicId]);

  // Modal navigation across the filtered collection
  const currentModalIndex = useMemo(() => {
    if (!activeModalItem) return -1;
    return currentImages.findIndex((item) => item.id === activeModalItem.id);
  }, [activeModalItem, currentImages]);

  const handleOpenModal = useCallback((item) => {
    setActiveModalItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModalItem(null);
  }, []);

  const handleNextModal = useCallback(() => {
    if (currentModalIndex === -1 || currentImages.length === 0) return;
    const nextIndex = (currentModalIndex + 1) % currentImages.length;
    setActiveModalItem(currentImages[nextIndex]);
  }, [currentModalIndex, currentImages]);

  const handlePreviousModal = useCallback(() => {
    if (currentModalIndex === -1 || currentImages.length === 0) return;
    const prevIndex = (currentModalIndex - 1 + currentImages.length) % currentImages.length;
    setActiveModalItem(currentImages[prevIndex]);
  }, [currentModalIndex, currentImages]);

  return (
    <Layout onOpenDonate={onOpenDonate}>
      <div className="pt-28 md:pt-36 pb-24 md:pb-32 bg-stone-50/60 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Top Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-primary-green transition group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>{t('galleryBackHome') || 'Back to Home'}</span>
            </Link>
          </div>

          {/* Page Hero Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-green/10 text-primary-green mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>{t('galleryPill') || 'Our Gallery'}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              {t('galleryPageTitle') || 'Moments of Hope & Action'}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              {t('galleryPageSubtitle') ||
                'Explore our complete photographic archive documenting community outreach, educational care, partnerships, and vocational programs across Tanzania.'}
            </p>
          </div>

          {/* Topic Filter Tabs */}
          <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-200/80 mb-8 sm:mb-10">
            <div className="flex items-center justify-between gap-4 flex-wrap pb-3 sm:pb-0 sm:border-b-0 border-b border-gray-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5 text-primary-green" />
                <span>{t('galleryFilterBy') || 'Filter Stories'}:</span>
              </div>

              {/* Counter summary */}
              <div className="text-xs text-gray-400 font-medium">
                {t('galleryShowing') || 'Showing'}{' '}
                <strong className="text-primary font-bold">{currentImages.length}</strong>{' '}
                {t('galleryStories') || 'stories'}
              </div>
            </div>

            <div className="mt-3 sm:mt-3 flex flex-wrap gap-2">
              {galleryTopics.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                const count = topicCounts[topic.id] || 0;
                const topicLabel = isSwahili ? (topic.swName || topic.name) : topic.name;

                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green ${
                      isSelected
                        ? 'bg-primary-green text-white shadow-sm shadow-primary-green/30 scale-[1.01]'
                        : 'bg-stone-50 text-gray-600 hover:text-primary hover:bg-stone-100 border border-gray-200/70'
                    }`}
                  >
                    <span>{topicLabel}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200/80 text-gray-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Topic Context Snippet */}
            {currentTopic && (
              <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 italic">
                {isSwahili ? (currentTopic.swDescription || currentTopic.description) : currentTopic.description}
              </div>
            )}
          </div>

          {/* Full Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {currentImages.map((image, index) => (
                <GalleryCard
                  key={image.id}
                  item={image}
                  index={index}
                  onSelect={handleOpenModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State Fallback (Defensive) */}
          {currentImages.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border border-gray-200 p-8 max-w-lg mx-auto">
              <Sparkles className="w-10 h-10 text-gray-400 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg text-primary">No images in this topic yet</h3>
              <p className="text-sm text-gray-500 mt-2">Check back soon as we document more moments from the field.</p>
              <button
                type="button"
                onClick={() => setSelectedTopicId('all')}
                className="mt-6 px-6 py-2.5 rounded-full bg-primary-green text-white text-xs font-semibold shadow hover:bg-primary-green/90"
              >
                View all stories
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Post-Style Image Modal */}
      <GalleryModal
        isOpen={activeModalItem !== null}
        item={activeModalItem}
        currentIndex={currentModalIndex}
        totalItems={currentImages.length}
        onClose={handleCloseModal}
        onNext={handleNextModal}
        onPrevious={handlePreviousModal}
      />
    </Layout>
  );
};

GalleryPage.propTypes = {
  onOpenDonate: PropTypes.func,
};

export default GalleryPage;

