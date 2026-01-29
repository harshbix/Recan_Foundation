import React from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, BookOpen, HeartPulse } from 'lucide-react';
import WatermarkedImage from './WatermarkedImage';
import { useLanguage } from '../context/LanguageContext';

const PillarCard = ({ icon: Icon, title, description, delay, reduceMotion }) => (
    <motion.div
        className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col items-center text-center md:items-start md:text-left"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : parseFloat(delay) / 1000, duration: reduceMotion ? 0 : 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
    >
        <div className="w-16 h-16 bg-primary-green/5 rounded-2xl flex items-center justify-center mb-6 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="font-heading font-bold text-2xl text-primary mb-4 group-hover:text-primary-green transition-colors">{title}</h3>
        <p className="text-gray-500 leading-relaxed font-sans">{description}</p>
    </motion.div>
);

PillarCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.string.isRequired,
    reduceMotion: PropTypes.bool.isRequired,
};

const About = () => {
    const prefersReducedMotion = useReducedMotion();
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.2,
            },
        },
    };

    return (
        <section id="about" className="relative py-20 md:py-28 bg-gradient-to-b from-white via-bg-cream/40 to-white overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-green/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-terra/10 blur-3xl" />
            <div className="container mx-auto px-4 md:px-6 relative">

                {/* Mission Statement - Redesigned Feature Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 lg:gap-16 mb-32">
                    {/* Text Content */}
                    <motion.div
                        className="text-center lg:text-left space-y-8"
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <div className="rounded-3xl border border-white/70 bg-white/70 backdrop-blur-md shadow-[0_20px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10 space-y-8">
                            <div className="space-y-4">
                                <motion.div
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold font-bold text-xs tracking-widest uppercase mb-2"
                                    initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="w-2 h-2 rounded-full bg-accent-gold"></span>
                                    {t('aboutPill')}
                                </motion.div>
                                <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] tracking-tight">
                                    {t('aboutTitleLine1')}
                                    <br />
                                    <span className="text-primary-green">{t('aboutTitleLine2')}</span>
                                </h2>
                            </div>
                            <div className="space-y-6 text-lg text-gray-600/90 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                <p>{t('aboutBody1')}</p>
                                <p>{t('aboutBody2')}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="rounded-2xl border border-primary-green/10 bg-primary-green/5 p-4 text-left">
                                    <p className="text-sm text-gray-500">{t('statChildren')}</p>
                                    <p className="text-2xl font-heading font-bold text-primary">50+</p>
                                </div>
                                <div className="rounded-2xl border border-accent-terra/10 bg-accent-terra/5 p-4 text-left">
                                    <p className="text-sm text-gray-500">{t('statPrograms')}</p>
                                    <p className="text-2xl font-heading font-bold text-primary">9+</p>
                                </div>
                                <div className="rounded-2xl border border-accent-gold/10 bg-accent-gold/5 p-4 text-left">
                                    <p className="text-sm text-gray-500">{t('statVolunteer')}</p>
                                    <p className="text-2xl font-heading font-bold text-primary">1,500+</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content - Stacked Feature Cards */}
                    <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-white/70 aspect-[4/5]">
                            <WatermarkedImage
                                src="/images/hero-background.JPG"
                                alt="Families gathering during a RECAN community day"
                                className="w-full h-full"
                                objectFit="cover"
                                priority={true}
                                sizes="(min-width: 1024px) 40vw, 100vw"
                                fallbackMode="reveal"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-40 pointer-events-none"></div>
                        </div>

                        <div className="absolute -bottom-8 -left-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-xl border border-white/70 bg-white">
                            <WatermarkedImage
                                src="/images/3.JPG"
                                alt="Young participants learning together during a workshop"
                                className="w-full h-full"
                                objectFit="cover"
                                sizes="(min-width: 1024px) 20vw, 40vw"
                                fallbackMode="reveal"
                            />
                        </div>

                        <div className="absolute -top-6 -right-6 w-40 sm:w-52 rounded-2xl overflow-hidden shadow-xl border border-white/70 bg-white">
                            <WatermarkedImage
                                src="/images/6.JPG"
                                alt="RECAN mentors guiding families through resources"
                                className="w-full h-full"
                                objectFit="cover"
                                sizes="(min-width: 1024px) 20vw, 40vw"
                                fallbackMode="reveal"
                            />
                        </div>

                        <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 backdrop-blur border border-white/70 px-4 py-3 shadow-lg">
                            <p className="text-xs uppercase tracking-[0.2em] text-accent-terra font-semibold">{t('impactLabel')}</p>
                            <p className="font-heading font-bold text-primary text-lg">{t('impactValue')}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Pillars - ID Programs for Nav Link */}
                <motion.div 
                    id="programs" 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <PillarCard
                        icon={ShieldCheck}
                        title="Protection"
                        description="Advocating and safeguarding teen mothers and homeless children from abuse and ensuring their needs and rights are met, both physically and psychologically."
                        delay="200ms"
                        reduceMotion={prefersReducedMotion}
                    />
                    <PillarCard
                        icon={BookOpen}
                        title="Education"
                        description="Advocating for children on the streets and young girls who were chased out of school due to pregnancy, providing learning opportunities and skills training."
                        delay="400ms"
                        reduceMotion={prefersReducedMotion}
                    />
                    <PillarCard
                        icon={HeartPulse}
                        title="Health"
                        description="Improving standards of living, basic care, and mental well-being for vulnerable children."
                        delay="600ms"
                        reduceMotion={prefersReducedMotion}
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default About;
