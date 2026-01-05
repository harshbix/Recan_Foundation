import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ name, role }) => (
    <div className="flex flex-col items-center text-center p-6 bg-bg-cream rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100">
        <div className="w-24 h-24 rounded-full bg-primary-green/10 text-primary-green flex items-center justify-center font-heading font-bold text-2xl mb-4">
            {name.split(' ')[0][0]}{name.split(' ')[1] ? name.split(' ')[1][0] : ''}
        </div>
        <h3 className="font-heading font-bold text-lg text-primary">{name}</h3>
        <p className="text-sm text-accent-terra font-medium uppercase tracking-wide mt-1">{role}</p>
    </div>
);

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};

const Team = () => {
    const leadership = [
        { name: "Elly Njau Benichou", role: "Chairperson" },
        { name: "Estella Cliff Mgaya", role: "Vice-Chairperson" },
        { name: "Anna Margareth Njau", role: "Treasurer" },
        { name: "Aika Edwin Njau", role: "Asst. Treasurer" },
        { name: "Christina Edwin Njau", role: "Executive Secretary" },
        { name: "Caroline Edwin Njau", role: "Asst. Secretary" },
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {leadership.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
