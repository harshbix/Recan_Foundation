import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import WatermarkedImage from './WatermarkedImage';

const galleryImages = [
    { src: '/images/DSC_0250.JPG', alt: 'Community support in action' },
    { src: '/images/pexels-fatinmark-21675772.jpg', alt: 'Youth empowerment moment' },
    { src: '/images/recan.JPG', alt: 'Recan Foundation community gathering' },
    { src: '/images/_MG_2347.JPG', alt: 'Team supporting children' },
    { src: '/images/_MG_2348.JPG', alt: 'Children in a safe learning space' },
    { src: '/images/_MG_2348%20(1).JPG', alt: 'Care and mentorship program' },
    { src: '/images/_MG_2351.JPG', alt: 'Community outreach day' },
    { src: '/images/anora.JPG', alt: 'Celebrating childhood milestones' },
    { src: '/images/atalia%201st%20bday%203.JPG', alt: 'Foundation family celebration' },
];

const Gallery = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section id="gallery" className="py-20 md:py-28 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent-terra font-bold tracking-widest uppercase text-sm">Our Gallery</span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-3">Moments of Impact</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Real stories and real lives touched through compassion, education, and protection.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            className="mb-6 break-inside-avoid"
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : index * 0.03 }}
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-16px_rgba(15,23,42,0.35)] border border-gray-100/80 bg-white">
                                <WatermarkedImage
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full"
                                    objectFit="cover"
                                    detectFaces={true}
                                    fill={false}
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    fallbackMode="reveal"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
