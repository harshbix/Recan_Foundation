import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone, AtSign } from 'lucide-react';

// eslint-disable-next-line react/prop-types, no-unused-vars
const SocialIcon = ({ href, icon: Icon, label }) => (
    <a
        href={href}
        aria-label={label}
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-terra hover:text-white transition-all duration-300 hover:-translate-y-1"
    >
        <Icon size={20} />
    </a>
);

const Footer = () => {
    return (
        <footer id="contact" className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                    {/* Left Column: Info & Map */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="font-heading font-bold text-3xl tracking-tight text-white">
                                RECAN <span className="text-primary-green">FOUNDATION</span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed max-w-md">
                                Restoring hope and empowering the vulnerable children of Tanzania for a brighter, sustainable future. Founded on principles of transparency, direct impact, and community partnership.
                            </p>

                            <div className="flex space-x-3 pt-2">
                                <SocialIcon href="#" icon={Facebook} label="Facebook" />
                                <SocialIcon href="#" icon={Instagram} label="Instagram" />
                                <SocialIcon href="#" icon={Twitter} label="X (Twitter)" />
                                <SocialIcon href="#" icon={AtSign} label="Threads" />
                                <SocialIcon href="#" icon={Youtube} label="YouTube" />
                                <SocialIcon href="#" icon={Linkedin} label="LinkedIn" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <h4 className="font-heading font-semibold text-lg text-accent-gold mb-4">Head Office</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    08 Njau Road, Regent Estate,<br />
                                    Nearby Mikocheni Ward,<br />
                                    Kinondoni District,<br />
                                    Dar es Salaam Region.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold text-lg text-accent-gold mb-4">Postal Address</h4>
                                <p className="text-gray-300">P.O. BOX 6883,</p>
                                <p className="text-gray-300">Dar es Salaam, Tanzania.</p>

                                <h4 className="font-heading font-semibold text-lg text-accent-gold mt-6 mb-2">Contact</h4>
                                <a href="mailto:info@recanfoundation.org" className="block text-gray-300 hover:text-secondary hover:underline">info@recanfoundation.org</a>
                                {/* Placeholder Phone */}
                                <span className="flex items-center text-gray-300 mt-2 gap-2">
                                    <Phone size={14} /> +255 123 456 789
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Map */}
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
                        {/* Google Maps Embed - Centered on Regent Estate, Dar es Salaam (Approx) */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.63675086054!2d39.239618!3d-6.780182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bf4a0e90925%3A0x705252875185572e!2sRegent%20Estate%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Recan Foundation Location"
                            className="grayscale group-hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        <div className="absolute top-4 right-4 bg-white text-primary text-xs font-bold px-3 py-1 rounded shadow-md pointer-events-none">
                            📍 Head Office
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2026 RECAN FOUNDATION. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
