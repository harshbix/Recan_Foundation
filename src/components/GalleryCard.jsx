import React from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { Maximize2, Tag } from 'lucide-react';
import WatermarkedImage from './WatermarkedImage';
import { useLanguage } from '../context/LanguageContext';
import { getTopicById } from '../data/galleryData';

const GalleryCard = ({ item, index, onSelect }) => {
  const { language, t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const isSwahili = language === 'sw';

  const topic = getTopicById(item.topicId);
  const topicName = isSwahili ? (topic?.swName || topic?.name) : topic?.name;
  const topicBadge = isSwahili ? (topic?.swBadge || topic?.badge) : topic?.badge;
  const title = isSwahili ? (item.swTitle || item.title) : item.title;
  const caption = isSwahili ? (item.swCaption || item.caption) : item.caption;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : Math.min(index * 0.04, 0.24) }}
      className="group h-full"
    >
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="group relative flex flex-col w-full h-full text-left bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200/80 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-terra/40"
        aria-label={`${title} - ${caption}`}
      >
        {/* Visual Frame */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">
          <WatermarkedImage
            src={item.src}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            objectFit="cover"
            fill
            aspectRatio="4 / 3"
            sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 33vw, (min-width: 640px) 48vw, 92vw"
            fallbackMode="reveal"
          />

          {/* Topic Tag Pill (always visible on photo) */}
          <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/95 text-primary shadow-sm backdrop-blur-sm">
              <Tag className="w-2.5 h-2.5 text-primary-green" />
              {topicBadge || topicName}
            </span>
          </div>

          {/* Hover Overlay: Caption Quote & View Image Button */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5 flex flex-col justify-end transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-events-none">
            <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed line-clamp-3 mb-3.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              "{caption}"
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/70 font-medium">{item.date || '2026'}</span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent-terra text-white shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Maximize2 className="w-3.5 h-3.5" />
                {t('galleryViewImage') || 'View image'}
              </span>
            </div>
          </div>
        </div>

        {/* Card Body: Balanced, clean, and handsome when not hovered */}
        <div className="p-4 sm:p-5 bg-white border-t border-gray-100/80 flex flex-col justify-center flex-grow">
          <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mb-1.5">
            <span className="font-semibold text-primary-green uppercase tracking-wider text-[11px]">
              {topicBadge || topicName}
            </span>
            <span>{item.date || '2026'}</span>
          </div>
          <h4 className="font-heading font-bold text-base text-primary leading-snug group-hover:text-primary-green transition-colors line-clamp-2">
            {title}
          </h4>
        </div>
      </button>
    </motion.div>
  );
};

GalleryCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    topicId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    swTitle: PropTypes.string,
    caption: PropTypes.string.isRequired,
    swCaption: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default GalleryCard;
