import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={`font-heading font-bold text-lg transition-colors ${isOpen ? 'text-primary-green' : 'text-primary group-hover:text-primary-green'}`}>
                    {question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-green text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-primary-green/10'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pr-12 text-gray-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How is my donation used?",
            answer: "We believe in complete transparency. 90% of your donation goes directly to our programs (Education, Health, and Protection). The remaining 10% covers essential administrative costs to ensure our operations run smoothly and securely."
        },
        {
            question: "Can I donate tangible items instead of money?",
            answer: "Yes! We accept donations of school supplies, clothes, books, and non-perishable food. Please contact our team at info@recanfoundation.org to coordinate a drop-off at our Mikocheni office."
        },
        {
            question: "Is RECAN Foundation a registered NGO?",
            answer: "Absolutely. RECAN Foundation is a fully registered Non-Governmental Organization in Tanzania, operating in compliance with all local regulations and dedicated to serving the public interest."
        },
        {
            question: "How can I volunteer with RECAN?",
            answer: "We are always looking for passionate individuals! Whether you're a medical professional, teacher, or just have a heart for service, visit our office or email us to learn about upcoming volunteer opportunities."
        }
    ];

    return (
        <section className="py-20 bg-bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Header Side */}
                    <div className="lg:w-1/3 space-y-6">
                        <span className="text-accent-terra font-bold tracking-widest uppercase text-sm">Common Questions</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                            Curious about our work?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Transparency helps build trust. Here are answers to some of the most common questions we receive from our partners and donors.
                        </p>
                        <div className="hidden lg:block pt-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-green/10 text-primary-green rounded-full flex items-center justify-center">
                                    <HelpCircle size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-primary text-sm">Still have questions?</p>
                                    <a href="#contact" className="text-primary-green font-semibold text-sm hover:underline">Contact our team &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ List Side */}
                    <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100/50">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
