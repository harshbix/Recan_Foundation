import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Heart, Gift, CreditCard, ChevronRight } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const DonationCard = ({ icon: Icon, title, amount, description, recommended, onDonate }) => (
    <div
        className={`relative p-8 rounded-xl border transition-all duration-300 transform hover:-translate-y-2
    ${recommended
                ? 'bg-primary text-white border-primary shadow-xl scale-105 z-10'
                : 'bg-white text-primary border-gray-100 hover:border-primary-green/30 shadow-sm hover:shadow-lg'
            }`}
    >
        {recommended && (
            <div className="absolute top-0 right-0 bg-accent-gold text-primary-green text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                Most Impactful
            </div>
        )}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6
      ${recommended ? 'bg-white/10 text-accent-gold' : 'bg-primary-green/10 text-primary-green'}`}
        >
            <Icon size={24} />
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
        <div className="text-3xl font-bold mb-4 font-heading">
            {amount}<span className="text-sm font-medium opacity-60">/mo</span>
        </div>
        <p className={`text-sm mb-8 leading-relaxed ${recommended ? 'text-gray-300' : 'text-gray-500'}`}>
            {description}
        </p>
        <Button
            variant={recommended ? 'primary' : 'outline'}
            className="w-full justify-between group"
            onClick={onDonate}
            aria-label={`Donate ${amount} per month as ${title}`}
        >
            Donate Now
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Button>
    </div>
);

DonationCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    recommended: PropTypes.bool,
    onDonate: PropTypes.func.isRequired,
};

const Donate = ({ onOpenDonate }) => {
    return (
        <section id="donate" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-green blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-accent-gold blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-accent-terra font-bold tracking-widest uppercase text-sm">Make a Difference</span>
                    <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mt-3 mb-6">
                        Your Support Changes Lives
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Every contribution directly funds education, healthcare, and protection for vulnerable Tanzanian children. Join us in building a sustainable future.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    <DonationCard
                        icon={Heart}
                        title="Supporter"
                        amount="50,000 Tsh"
                        description="Provides school supplies and basic hygiene kits for one child."
                        onDonate={() => onOpenDonate('50000')}
                    />
                    <DonationCard
                        icon={Gift}
                        title="Guardian"
                        amount="100,000 Tsh"
                        description="Ensures daily nutritious meals and medical checkups for a student."
                        recommended={true}
                        onDonate={() => onOpenDonate('100000')}
                    />
                    <DonationCard
                        icon={CreditCard}
                        title="Champion"
                        amount="250,000 Tsh"
                        description="Funds full tuition, uniform, and mentorship programs for a future leader."
                        onDonate={() => onOpenDonate('250000')}
                    />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        Custom amount or one-time donation?
                    </p>
                    <a href="#contact" className="text-primary-green font-semibold hover:text-accent-terra underline underline-offset-4 transition-colors">
                        Contact us for bank transfer details
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Donate;
