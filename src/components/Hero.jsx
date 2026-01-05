import React from 'react';
import Button from './Button';

const Hero = ({ onOpenDonate }) => {
    const handleScrollToDonate = () => {
        const element = document.getElementById('donate');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
                    alt="Tanzanian children learning"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-black/30"></div>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center text-white max-w-5xl mx-auto space-y-8 mt-16">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms] drop-shadow-lg">
                    Restoring Hope for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-white">Tanzania’s Future.</span>
                </h1>

                <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms] drop-shadow-md font-medium">
                    Protecting and empowering the vulnerable, marginalized, and voiceless children of our communities.
                </p>

                <div className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:1000ms] pt-6 flex flex-col md:flex-row justify-center gap-4">
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
                </div>
            </div>


        </section>
    );
};

export default Hero;
