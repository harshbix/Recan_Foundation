import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
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

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent-terra font-bold tracking-widest uppercase text-sm">Voices of Impact</span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-3">Community Stories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-bg-cream p-8 rounded-2xl relative border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="absolute top-6 right-6 text-accent-gold/20">
                                <Quote size={40} />
                            </div>
                            
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-accent-gold fill-accent-gold" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed font-medium">
                                "{item.quote}"
                            </p>

                            <div className="mt-auto flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green font-bold text-lg font-heading">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{item.author}</h4>
                                    <p className="text-xs text-accent-terra uppercase tracking-wide font-bold">{item.role}</p>
                                    <p className="text-xs text-gray-400">{item.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
