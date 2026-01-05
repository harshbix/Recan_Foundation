import React from 'react';
import PropTypes from 'prop-types';
import { ShieldCheck, BookOpen, HeartPulse } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const PillarCard = ({ icon: Icon, title, description, delay }) => (
    <div
        className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up opacity-0 [animation-delay:var(--delay)]"
        style={{ '--delay': delay }}
    >
        <div className="w-14 h-14 bg-bg-cream rounded-full flex items-center justify-center mb-6 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors">
            <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="font-heading font-bold text-xl text-primary mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed font-sans">{description}</p>
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
        <section id="about" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Mission Statement - Side by Side Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-accent-gold/10 text-accent-gold font-bold text-xs tracking-widest uppercase mb-4">
                                Our Mission
                            </span>
                            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary leading-tight">
                                Protecting & Empowering<br />Tanzania's Future
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            The increase of street children in most Tanzania communities is a problem which needs serious response. These children face challenges including lacking necessary basic needs such as food, shelter, and protection.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            RECAN FOUNDATION aims at protecting, ensuring stability, survival, participation, and balance in children's lives. We believe every child deserves a chance to dream, learn, and grow in a safe environment.
                        </p>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 w-full relative animate-fade-in-up [animation-delay:200ms]">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent-terra/20 rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/about.jpg"
                                alt="Smiling Tanzanian children"
                                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-green/20 rounded-full blur-2xl -z-10"></div>
                    </div>
                </div>

                {/* Core Pillars - ID Programs for Nav Link */}
                <div id="programs" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PillarCard
                        icon={ShieldCheck}
                        title="Protection"
                        description="Safeguarding street children from abuse and ensuring their basic rights provided by the community."
                        delay="200ms"
                    />
                    <PillarCard
                        icon={BookOpen}
                        title="Education"
                        description="Advocating for future development through accessible learning opportunities and skills training."
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
