import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import WatermarkedImage from './WatermarkedImage';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
    { id: 0, src: '/images/0.JPG', alt: 'Students receiving essential learning materials from RECAN Foundation' },
    { id: 1, src: '/images/1.JPG', alt: 'Volunteer engaging with local community members during outreach' },
    { id: 2, src: '/images/2.JPG', alt: 'RECAN team facilitating a rural outreach event' },
    { id: 3, src: '/images/3.JPG', alt: 'Community program featuring group learning activities' },
    { id: 4, src: '/images/4.JPG', alt: 'Children participating in a RECAN educational workshop' },
    { id: 5, src: '/images/5.JPG', alt: 'Foundation leaders coordinating support services on site' },
    { id: 6, src: '/images/6.JPG', alt: 'Foundation representatives presenting vital resources to families' },
    { id: 7, src: '/images/7.jpeg', alt: 'Joyful celebration with program beneficiaries and mentors' },
    { id: 8, src: '/images/8.JPG', alt: 'Community members sharing success stories with RECAN staff' },
];

const Gallery = () => {
    const prefersReducedMotion = useReducedMotion();
    const { t } = useLanguage();
    const images = useMemo(() => [...galleryImages].sort((a, b) => a.id - b.id), []);
    const [activeIndex, setActiveIndex] = useState(null);
    const closeButtonRef = useRef(null);
    const dialogRef = useRef(null);

    const openLightbox = useCallback((index) => {
        setActiveIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setActiveIndex(null);
    }, []);

    const showNext = useCallback(() => {
        setActiveIndex((prev) => {
            if (prev === null) return prev;
            return (prev + 1) % images.length;
        });
    }, [images.length]);

    const showPrevious = useCallback(() => {
        setActiveIndex((prev) => {
            if (prev === null) return prev;
            return (prev - 1 + images.length) % images.length;
        });
    }, [images.length]);

    useEffect(() => {
        if (activeIndex === null) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeLightbox();
            }
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                showNext();
            }
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                showPrevious();
            }
            if (event.key === 'Tab' && dialogRef.current) {
                const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
                const focusableElements = dialogRef.current.querySelectorAll(focusableSelectors);

                if (focusableElements.length === 0) {
                    return;
                }

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                const isShiftPressed = event.shiftKey;

                if (!isShiftPressed && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }

                if (isShiftPressed && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeIndex, closeLightbox, showNext, showPrevious]);

    useEffect(() => {
        if (activeIndex !== null) {
            closeButtonRef.current?.focus({ preventScroll: true });
        }
    }, [activeIndex]);

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="group"
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.05 }}
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            <button
                                type="button"
                                onClick={() => openLightbox(index)}
                                className="group relative block w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-terra/40 rounded-2xl"
                                aria-label={`${t('galleryViewImage') ?? 'View image'} ${image.id}`}
                            >
                                <WatermarkedImage
                                    src={image.src}
                                    alt={image.alt}
                                    className="aspect-[4/3] rounded-2xl shadow-lg border border-gray-200/70 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl"
                                    objectFit="cover"
                                    fill
                                    aspectRatio="4 / 3"
                                    sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 33vw, (min-width: 640px) 48vw, 92vw"
                                    fallbackMode="reveal"
                                />
                                <span className="pointer-events-none absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-accent-terra text-white text-sm font-semibold shadow-md">
                                    {image.id}
                                </span>
                                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <span className="sr-only">{image.alt}</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {activeIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm px-4 py-8">
                    <div
                        className="absolute inset-0"
                        onClick={closeLightbox}
                        aria-hidden="true"
                    />
                    <div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${t('galleryLightboxLabel') ?? 'Gallery image viewer'} ${images[activeIndex].id}`}
                        className="relative z-10 w-full max-w-5xl"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between gap-4 text-white">
                                <div className="text-sm font-medium text-white/90">
                                    {images[activeIndex].alt}
                                </div>
                                <button
                                    type="button"
                                    ref={closeButtonRef}
                                    onClick={closeLightbox}
                                    className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-md transition hover:bg-white"
                                >
                                    {t('close') ?? 'Close'}
                                </button>
                            </div>

                            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/40 shadow-2xl">
                                <WatermarkedImage
                                    src={images[activeIndex].src}
                                    alt={images[activeIndex].alt}
                                    className="w-full aspect-[4/3]"
                                    objectFit="cover"
                                    fill
                                    aspectRatio="4 / 3"
                                    sizes="(min-width: 1024px) 70vw, 100vw"
                                    priority
                                    fallbackMode="reveal"
                                />

                                <button
                                    type="button"
                                    onClick={showPrevious}
                                    className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-3 text-primary shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-terra/50"
                                    aria-label={t('previous') ?? 'Previous image'}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                        <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={showNext}
                                    className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-3 text-primary shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-terra/50"
                                    aria-label={t('next') ?? 'Next image'}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                        <path fill="currentColor" d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
