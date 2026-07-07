import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const prefersReducedMotion = useReducedMotion();
    const { language, t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isUserPaused, setIsUserPaused] = useState(false);
    const [isInteractionPaused, setIsInteractionPaused] = useState(false);
    const [direction, setDirection] = useState(1);
    const isPaused = isUserPaused || isInteractionPaused;

    const slides = useMemo(
        () => [
            {
                id: 'james-1-27',
                reference: t('inspirationSlide1Reference'),
                quote: t('inspirationSlide1Quote'),
            },
            {
                id: 'jeremiah-29-11',
                reference: t('inspirationSlide2Reference'),
                quote: t('inspirationSlide2Quote'),
            },
            {
                id: '1-john-3-18',
                reference: t('inspirationSlide3Reference'),
                quote: t('inspirationSlide3Quote'),
            },
        ],
        [t]
    );

    useEffect(() => {
        setActiveIndex(0);
        setDirection(1);
    }, [language]);

    useEffect(() => {
        if (prefersReducedMotion || isPaused || slides.length <= 1) {
            return undefined;
        }

        const timer = window.setInterval(() => {
            setDirection(1);
            setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
        }, 7000);

        return () => window.clearInterval(timer);
    }, [isPaused, prefersReducedMotion, slides.length]);

    const changeSlide = (targetIndex) => {
        if (targetIndex === activeIndex) {
            return;
        }

        setDirection(targetIndex > activeIndex ? 1 : -1);
        setActiveIndex(targetIndex);
    };

    const goToPrevious = () => {
        setDirection(-1);
        setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setDirection(1);
        setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goToPrevious();
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            goToNext();
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.14,
                delayChildren: prefersReducedMotion ? 0 : 0.1,
            },
        },
    };

    const labelVariants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const slideVariants = {
        hidden: (slideDirection) => ({
            opacity: 0,
            y: prefersReducedMotion ? 0 : 18 * slideDirection,
            scale: prefersReducedMotion ? 1 : 0.985,
            filter: prefersReducedMotion ? 'none' : 'blur(10px)',
        }),
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                duration: prefersReducedMotion ? 0 : 1.1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: (slideDirection) => ({
            opacity: 0,
            y: prefersReducedMotion ? 0 : -14 * slideDirection,
            scale: prefersReducedMotion ? 1 : 0.985,
            filter: prefersReducedMotion ? 'none' : 'blur(8px)',
            transition: {
                duration: prefersReducedMotion ? 0 : 0.75,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    return (
        <section
            id="inspiration"
            aria-roledescription="carousel"
            aria-label={t('inspirationLabel')}
            className="relative overflow-hidden border-y border-white/70 bg-bg-cream py-12 sm:py-14 md:py-16 min-h-[38vh]"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsInteractionPaused(true)}
            onMouseLeave={() => setIsInteractionPaused(false)}
            onFocusCapture={() => setIsInteractionPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsInteractionPaused(false);
                }
            }}
            tabIndex={0}
        >
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,79,59,0.08),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(205,132,56,0.10),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,250,242,0.96))]" />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.28)_48%,transparent_100%)] opacity-60" />
                <motion.div
                    className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-green/8 blur-3xl"
                    animate={prefersReducedMotion ? undefined : { opacity: [0.5, 0.75, 0.55], scale: [1, 1.04, 1] }}
                    transition={prefersReducedMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <motion.div
                    className="mx-auto flex max-w-5xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={sectionVariants}
                >
                    <motion.span
                        className="inline-flex items-center justify-center gap-3 text-[0.68rem] md:text-xs font-bold tracking-[0.4em] text-accent-terra uppercase"
                        variants={labelVariants}
                    >
                        <span className="h-px w-7 bg-accent-terra/55" />
                        {t('inspirationLabel')}
                        <span className="h-px w-7 bg-accent-terra/55" />
                    </motion.span>

                    <div className="mt-5 flex w-full items-start justify-center gap-3 sm:gap-4 md:gap-6">
                        <motion.span
                            aria-hidden="true"
                            className="select-none font-heading text-5xl leading-none text-accent-gold/80 sm:text-6xl md:text-7xl"
                            variants={labelVariants}
                        >
                            “
                        </motion.span>

                        <motion.div
                            className="relative w-full max-w-[760px] pt-1 sm:pt-2"
                            variants={labelVariants}
                        >
                            <AnimatePresence mode="wait" custom={direction} initial={false}>
                                <motion.blockquote
                                    key={slides[activeIndex].id}
                                    aria-live="polite"
                                    aria-atomic="true"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="mx-auto flex flex-col items-center"
                                >
                                    <motion.p
                                        className="max-w-[700px] font-heading text-[1.35rem] leading-[1.45] text-primary sm:text-[1.7rem] md:text-[2.1rem] lg:text-[2.35rem]"
                                        animate={prefersReducedMotion ? undefined : { opacity: [0.96, 1], y: [0, -1, 0] }}
                                        transition={prefersReducedMotion ? undefined : { duration: 1.2, ease: 'easeOut' }}
                                    >
                                        {slides[activeIndex].quote}
                                    </motion.p>

                                    <motion.footer
                                        className="mt-5 text-sm sm:text-base md:text-lg font-semibold tracking-[0.22em] text-accent-terra uppercase"
                                        animate={prefersReducedMotion ? undefined : { opacity: [0.88, 1], letterSpacing: ['0.18em', '0.22em'] }}
                                        transition={prefersReducedMotion ? undefined : { duration: 1.1, ease: 'easeOut' }}
                                    >
                                        {slides[activeIndex].reference}
                                    </motion.footer>
                                </motion.blockquote>
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-7 flex items-center justify-center gap-3 sm:gap-4"
                        variants={labelVariants}
                    >
                        <motion.button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-terra/20 bg-white/45 text-accent-terra shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-colors duration-300 hover:border-accent-terra/40 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra/50"
                            onClick={goToPrevious}
                            aria-label={t('inspirationPrevious')}
                            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                        >
                            <ChevronLeft size={18} />
                        </motion.button>

                        <div className="flex items-center justify-center gap-2" aria-label={t('inspirationLabel')}>
                            {slides.map((slide, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <motion.button
                                        key={slide.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-current={isActive ? 'true' : undefined}
                                        aria-label={`${t('inspirationGoToVerse')} ${slide.reference}`}
                                        className={`relative h-3 rounded-full border border-accent-terra/25 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra/40 ${isActive ? 'w-10 bg-accent-terra' : 'w-3 bg-white/75 hover:bg-accent-terra/40'}`}
                                        onClick={() => changeSlide(index)}
                                        whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                                        whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                                    >
                                        <span className="sr-only">{slide.reference}</span>
                                        {isActive ? (
                                            <motion.span
                                                aria-hidden="true"
                                                className="absolute inset-0 rounded-full bg-accent-terra"
                                                layoutId="inspiration-active-indicator"
                                                transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: 'easeOut' }}
                                            />
                                        ) : null}
                                    </motion.button>
                                );
                            })}
                        </div>

                        <motion.button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-terra/20 bg-white/45 text-accent-terra shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-colors duration-300 hover:border-accent-terra/40 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra/50"
                            onClick={goToNext}
                            aria-label={t('inspirationNext')}
                            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                        >
                            <ChevronRight size={18} />
                        </motion.button>

                        <motion.button
                            type="button"
                            className="ml-2 inline-flex items-center gap-2 rounded-full border border-accent-terra/20 bg-white/45 px-3.5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-accent-terra shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-colors duration-300 hover:border-accent-terra/40 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra/50"
                            onClick={() => setIsUserPaused((current) => !current)}
                            aria-label={isPaused ? t('inspirationPlay') : t('inspirationPause')}
                            whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                        >
                            {isPaused ? <Play size={14} /> : <Pause size={14} />}
                            <span className="hidden sm:inline">{isPaused ? t('inspirationPlay') : t('inspirationPause')}</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;