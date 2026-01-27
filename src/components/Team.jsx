import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ name, role, imageSrc, imagePosition = 'center' }) => (
    <div className="group relative flex flex-col items-center text-center p-7 bg-white/70 backdrop-blur rounded-2xl border border-white/60 shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-green/10 via-transparent to-accent-terra/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-primary-green to-accent-terra shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                    src={imageSrc}
                    alt={`${name} profile photo`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    style={{ objectPosition: imagePosition }}
                    loading="lazy"
                />
            </div>
        </div>
        <h3 className="relative mt-5 font-heading font-bold text-lg text-primary">{name}</h3>
        <p className="relative mt-2 inline-flex items-center gap-2 text-xs text-accent-terra font-semibold uppercase tracking-[0.2em] bg-accent-terra/10 px-3 py-1 rounded-full">
            {role}
        </p>
    </div>
);

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imagePosition: PropTypes.string,
};

const Team = () => {
    const leadership = [
        { name: "Elly Njau Benichou", role: "Chairperson", imageSrc: "/images/elly edwin njau.jpeg" },
        {
            name: "Estella Cliff Mgaya",
            role: "Vice-Chairperson",
            imageSrc: "/images/estella edwin njau.jpeg",
            imagePosition: "50% 20%",
        },
        { name: "Anna Margareth Njau", role: "Treasurer", imageSrc: "/images/anna edwin njau.png" },
        { name: "Aika Edwin Njau", role: "Asst. Treasurer", imageSrc: "/images/aika njau.jpeg" },
        {
            name: "Christina Edwin Njau",
            role: "Executive Secretary",
            imageSrc: "/images/christina edwin njau.jpeg",
            imagePosition: "50% 18%",
        },
        {
            name: "Caroline Edwin Njau",
            role: "Asst. Secretary",
            imageSrc: "/images/caroline edwin njau.jpeg",
            imagePosition: "50% 22%",
        },
    ];

    return (
        <section id="team" className="py-20 md:py-28 bg-bg-cream border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent-terra font-bold tracking-widest uppercase text-sm">Our Leadership</span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-3">Meet the Team</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Dedicated individuals committed to making a difference in the lives of Tanzanian children.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {leadership.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
