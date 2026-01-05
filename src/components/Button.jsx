import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-accent-terra text-white hover:bg-opacity-90 hover:-translate-y-0.5 shadow-md focus:ring-accent-terra",
        secondary: "bg-primary-green text-white hover:bg-opacity-90 hover:-translate-y-0.5 shadow-md focus:ring-primary-green",
        outline: "border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white focus:ring-primary-green",
        ghost: "text-primary hover:bg-gray-100 hover:text-primary-green",
        nav: "text-primary-green hover:text-accent-terra font-semibold px-4 py-2"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'nav']),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
