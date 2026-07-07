import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Testimonials = () => {
    const prefersReducedMotion = useReducedMotion();
    const [activeIndex, setActiveIndex] = useState(null);

    const testimonials = [
        {
            id: 1,
            quote: "RECAN Foundation stepped in when we had lost all hope. Thanks to their education support program, my daughter is now top of her class and dreaming of becoming a doctor.",
            author: "Mama Baraka",
            role: "Parent Beneficiary",
            location: "Kinondoni"
        },
        {
            id: 2,
            quote: "Volunteering with RECAN changed my perspective on community service. The transparency and direct impact of their projects are truly inspiring to witness.",
            author: "James M.",
            role: "Volunteer",
            location: "Dar es Salaam"
        },
        {
            id: 3,
            quote: "The health camp organized last month provided critical care for over 200 children in our ward. RECAN doesn't just promise; they deliver real results.",
            author: "Dr. Sarah K.",
            role: "Partner Physician",
            location: "Mikocheni"
        }
    ];

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

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: prefersReducedMotion ? 0 : 28,
            scale: prefersReducedMotion ? 1 : 0.98,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: prefersReducedMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
                viewport={{ once: true, margin: '-120px' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-green/[0.03] via-transparent to-accent-terra/[0.04]" />
                <motion.div
                    className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-green/10 blur-3xl"
                    animate={prefersReducedMotion ? undefined : { y: [0, 16, 0], x: [0, -10, 0] }}
                    transition={prefersReducedMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent-terra/10 blur-3xl"
                    animate={prefersReducedMotion ? undefined : { y: [0, -14, 0], x: [0, 12, 0] }}
                    transition={prefersReducedMotion ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-120px' }}
                    variants={sectionVariants}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 text-accent-terra font-bold tracking-[0.28em] uppercase text-xs md:text-sm"
                        variants={{
                            hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: prefersReducedMotion ? 0 : 0.55 },
                            },
                        }}
                    >
                        <span className="h-px w-6 bg-accent-terra/60" />
                        Voices of Impact
                        <span className="h-px w-6 bg-accent-terra/60" />
                    </motion.span>
                    <motion.h2
                        className="font-heading font-bold text-3xl md:text-4xl text-primary mt-4"
                        variants={{
                            hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.08 },
                            },
                        }}
                    >
                        Community Stories
                    </motion.h2>
                    <motion.p
                        className="mt-5 text-gray-500 md:text-lg leading-relaxed"
                        variants={{
                            hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.16 },
                            },
                        }}
                    >
                        A quiet collection of moments that show how care, trust, and consistent action change lives.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-120px' }}
                    variants={sectionVariants}
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            onHoverStart={() => setActiveIndex(index)}
                            onFocus={() => setActiveIndex(index)}
                            onBlur={() => setActiveIndex(null)}
                            tabIndex={0}
                            className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gray-100/80 bg-bg-cream p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] outline-none transition-all duration-300 will-change-transform md:hover:-translate-y-1 md:hover:shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
                            animate={{
                                opacity: activeIndex === null || activeIndex === index ? 1 : 0.72,
                                scale: activeIndex === index ? 1.02 : 1,
                            }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: 'easeOut' }}
                        >
                            <motion.div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                                style={{
                                    background: 'radial-gradient(circle at top, rgba(16,79,59,0.12), transparent 65%)',
                                }}
                            />
                            <motion.div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[1.75rem] ring-1 ring-transparent"
                                animate={{
                                    boxShadow: activeIndex === index
                                        ? '0 0 0 1px rgba(16,79,59,0.16), 0 24px 60px rgba(15,23,42,0.12)'
                                        : '0 0 0 1px rgba(148,163,184,0.08), 0 10px 30px rgba(15,23,42,0.05)',
                                }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                            />
                            <div className="absolute top-6 right-6 text-accent-gold/20">
                                <Quote size={40} />
                            </div>
                            
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-accent-gold fill-accent-gold" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed font-medium relative z-10">
                                "{item.quote}"
                            </p>

                            <div className="mt-auto flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green font-bold text-lg font-heading transition-transform duration-300 group-hover:scale-105">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{item.author}</h4>
                                    <p className="text-xs text-accent-terra uppercase tracking-[0.22em] font-bold transition-colors duration-300 group-hover:text-primary-green">{item.role}</p>
                                    <p className="text-xs text-gray-400">{item.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
