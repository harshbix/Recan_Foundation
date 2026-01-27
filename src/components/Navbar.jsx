import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import clsx from 'clsx';

const Navbar = ({ onOpenDonate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                setScrolled(window.scrollY > 20);
                ticking = false;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Our Story', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'The Team', href: '#team' },
        { name: 'Programs', href: '#programs' },
        { name: 'Contact Us', href: '#contact' },
    ];

    const handleScrollTo = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            setIsOpen(false);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={clsx(
                    "fixed w-full z-50 transition-all duration-500 ease-in-out",
                    scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
                        : "bg-transparent py-6 bg-gradient-to-b from-black/60 to-transparent"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    {/* Brand */}
                    <div className="flex-shrink-0 relative z-50">
                        <a href="#" onClick={(e) => handleScrollTo(e, '#home')} className="font-heading font-bold text-2xl tracking-tighter group">
                            <span className={clsx("transition-colors duration-300", scrolled ? "text-primary" : "text-white")}>
                                RECAN
                            </span>{' '}
                            <span className={clsx("transition-colors duration-300", scrolled ? "text-primary-green" : "text-accent-gold")}>
                                FOUNDATION
                            </span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className={clsx(
                                    "text-sm font-medium transition-colors px-4 py-2 rounded-full hover:bg-white/10",
                                    scrolled ? "text-primary hover:text-primary-green hover:bg-primary-green/5" : "text-white/90 hover:text-white"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="ml-4 pl-2">
                            <Button
                                variant={scrolled ? "primary" : "primary"} // Keep distinct if needed, but primary works well for both
                                onClick={() => onOpenDonate && onOpenDonate()}
                                className={clsx("shadow-lg", !scrolled && "border-2 border-transparent hover:border-white/20")}
                            >
                                Donate Now
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden relative z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={clsx(
                                "focus:outline-none transition-colors",
                                scrolled || isOpen ? "text-primary" : "text-white"
                            )}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleScrollTo(e, link.href)}
                        className="text-2xl font-heading font-bold text-primary hover:text-primary-green"
                    >
                        {link.name}
                    </a>
                ))}
                <div className="pt-4">
                    <Button
                        variant="primary"
                        className="text-lg px-8 py-3"
                        onClick={() => {
                            setIsOpen(false);
                            onOpenDonate && onOpenDonate();
                        }}
                    >
                        Donate Now
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
