import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Donate from '../components/Donate';

const Home = ({ onOpenDonate }) => {
    return (
        <Layout onOpenDonate={onOpenDonate}>
            <Hero onOpenDonate={onOpenDonate} />
            <About />
            <Team />
            <Donate onOpenDonate={onOpenDonate} />
        </Layout>
    );
};

Home.propTypes = {
    onOpenDonate: PropTypes.func.isRequired,
};

export default Home;
