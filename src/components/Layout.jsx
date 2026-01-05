import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onOpenDonate }) => {
    return (
        <div className="flex flex-col min-h-screen bg-bg-cream text-primary antialiased">
            <Navbar onOpenDonate={onOpenDonate} />
            <main className="flex-grow">
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
