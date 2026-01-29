import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import WatermarkedImage from './WatermarkedImage';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
    { id: 0, src: '/images/DSC_0250.JPG', alt: 'Educational materials and support in action' },
    { id: 1, src: '/images/DSC_0248.JPG', alt: 'Community outreach with children' },
    { id: 2, src: '/images/recan.JPG', alt: 'Community members in RECAN program' },
    { id: 3, src: '/images/_MG_2347.JPG', alt: 'Children smiling during community outreach' },
    { id: 4, src: '/images/_MG_2348.JPG', alt: 'Students benefiting from support' },
    { id: 5, src: '/images/_MG_2348%20(1).JPG', alt: 'Team members providing mentorship' },
    { id: 6, src: '/images/_MG_2351.JPG', alt: 'Foundation staff engagement' },
    { id: 7, src: '/images/anora.JPG', alt: 'Child celebrating milestone' },
    { id: 8, src: '/images/atalia%201st%20bday%203.JPG', alt: 'Birthday celebration supported by RECAN' },
    { id: 9, src: '/images/WhatsApp%20Image%202026-01-27%20at%2011.21.33.jpeg', alt: 'Community gathering in Tanzania' },
];

const Gallery = () => {
    const prefersReducedMotion = useReducedMotion();
    const { t } = useLanguage();

    return (
        <section id="gallery" className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-accent-terra font-bold tracking-widest uppercase text-xs lg:text-sm px-4 py-2 bg-accent-terra/10 rounded-full mb-4">
                            {t('galleryPill')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-heading font-bold text-4xl md:text-5xl lg:text-5xl text-primary mt-6 leading-tight"
                    >
                        {t('galleryTitle')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed"
                    >
                        {t('gallerySubtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {galleryImages.sort((a, b) => a.id - b.id).map((image) => (
                        <motion.div
                            key={image.id}
                            className="group relative h-80 lg:h-96 overflow-hidden"
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : image.id * 0.05 }}
                            viewport={{ once: true, margin: '-80px' }}
                            whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200/60 bg-white">
                                {/* Image number badge */}
                                <div className="absolute top-4 left-4 z-10 bg-accent-terra text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md group-hover:bg-opacity-90 transition-all duration-300">
                                    {image.id}
                                </div>
                                
                                <WatermarkedImage
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    objectFit="cover"
                                    fill={false}
                                    aspectRatio="4 / 3"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    fallbackMode="reveal"
                                />
                                
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
