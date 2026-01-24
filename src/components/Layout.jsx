import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onOpenDonate }) => {
    return (
        <div className="flex flex-col min-h-screen bg-bg-cream text-primary antialiased">
            <a 
                href="#main" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
            >
                Skip to main content
            </a>
            <Navbar onOpenDonate={onOpenDonate} />
            <main id="main" className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    onOpenDonate: PropTypes.func,
};

export default Layout;
