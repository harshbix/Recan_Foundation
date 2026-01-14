import React from 'react';
import PropTypes from 'prop-types';
import { ShieldCheck, BookOpen, HeartPulse } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const PillarCard = ({ icon: Icon, title, description, delay }) => (
    <div
        className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col items-center text-center md:items-start md:text-left"
        style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
        <div className="w-16 h-16 bg-primary-green/5 rounded-2xl flex items-center justify-center mb-6 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="font-heading font-bold text-2xl text-primary mb-4 group-hover:text-primary-green transition-colors">{title}</h3>
        <p className="text-gray-500 leading-relaxed font-sans">{description}</p>
    </div>
);

PillarCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.string.isRequired,
};

const About = () => {
    return (
        <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Mission Statement - Side by Side Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold font-bold text-xs tracking-widest uppercase mb-2">
                                <span className="w-2 h-2 rounded-full bg-accent-gold"></span>
                                Our Mission
                            </div>
                            <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] tracking-tight">
                                Protecting & Empowering<br />
                                <span className="text-primary-green">Tanzania's Future</span>
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg text-gray-600/90 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            <p>
                                RECAN Foundation aims at protecting, empowering, and establishing balance in the lives of the marginalized and vulnerable in Tanzania. The increase of teen mothers and children facing homelessness in our communities, is a problem that needs urgent response.
                            </p>
                            <p>
                                We believe every child deserves a chance to dream, learn and grow in a healthy and safe environment, both physically and mentally.
                            </p>
                        </div>

                        {/* Decorative Divider */}
                        <div className="w-24 h-1 bg-accent-terra rounded-full mx-auto lg:mx-0 opacity-80"></div>
                    </div>

                    {/* Image Content - Refined & Stable */}
                    <div className="flex-1 w-full relative group animate-fade-in-up [animation-delay:200ms]">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/50 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                            <img
                                src="/images/pexels-lagosfoodbank-9823013.jpg"
                                alt="Smiling Tanzanian children"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-40"></div>

                            {/* Quote Overlay - Adds emotional depth */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="font-heading font-bold text-lg">"Every smile we restore is a future we secure."</p>
                            </div>
                        </div>

                        {/* Refined Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary-green/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>

                {/* Core Pillars - ID Programs for Nav Link */}
                <div id="programs" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PillarCard
                        icon={ShieldCheck}
                        title="Protection"
                        description="Advocating and safeguarding teen mothers and homeless children from abuse and ensuring their needs and rights are met, both physically and psychologically."
                        delay="200ms"
                    />
                    <PillarCard
                        icon={BookOpen}
                        title="Education"
                        description="Advocating for children on the streets and young girls who were chased out of school due to pregnancy, providing learning opportunities and skills training."
                        delay="400ms"
                    />
                    <PillarCard
                        icon={HeartPulse}
                        title="Health"
                        description="Improving standards of living, basic care, and mental well-being for vulnerable children."
                        delay="600ms"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
