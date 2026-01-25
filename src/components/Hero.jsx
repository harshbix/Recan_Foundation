import React from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import Button from './Button';
import WatermarkedImage from './WatermarkedImage';

const Hero = ({ onOpenDonate }) => {
    const prefersReducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.2,
                delayChildren: prefersReducedMotion ? 0 : 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: prefersReducedMotion ? 0 : 0.8 },
        },
    };

    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <WatermarkedImage
                    src="/images/DSC_0248.JPG"
                    alt="Tanzanian children learning"
                    className="w-full h-full"
                    objectFit="cover"
                    priority={true}
                    sizes="100vw"
                    fallbackMode="reveal"
                />
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-black/30"></div>
            </div>

            {/* Content */}
            <motion.div
                className="container relative z-10 px-4 md:px-6 text-center text-white max-w-5xl mx-auto space-y-8 mt-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight drop-shadow-lg"
                    variants={itemVariants}
                >
                    Restoring Hope for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-white">Tanzania’s Future.</span>
                </motion.h1>

                <motion.p
                    className="font-sans text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium"
                    variants={itemVariants}
                >
                    Protecting and empowering the vulnerable, marginalized, and voiceless children of our communities.
                </motion.p>

                <motion.div
                    className="pt-6 flex flex-col md:flex-row justify-center gap-4"
                    variants={itemVariants}
                >
                    <Button
                        variant="primary"
                        className="text-lg px-10 py-4 shadow-xl shadow-accent-terra/20"
                        onClick={() => onOpenDonate && onOpenDonate()}
                    >
                        Support Our Mission
                    </Button>
                    <Button
                        variant="outline"
                        className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-primary"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Learn More
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

Hero.propTypes = {
    onOpenDonate: PropTypes.func,
};

export default Hero;
