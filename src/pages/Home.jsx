import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Donate from '../components/Donate';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = ({ onOpenDonate }) => {
    useEffect(() => {
        const setMeta = (key, content, isProperty = false) => {
            const selector = isProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`;
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                if (isProperty) {
                    element.setAttribute('property', key);
                } else {
                    element.setAttribute('name', key);
                }
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        document.title = "RECAN Foundation - Restoring Hope for Tanzania's Future";
        setMeta('description', 'RECAN Foundation protects and empowers vulnerable children in Tanzania through education, healthcare, and protection programs.');

        setMeta('og:title', "RECAN Foundation - Restoring Hope for Tanzania's Future", true);
        setMeta('og:description', 'Protecting and empowering vulnerable children in Tanzania. Join us in building a sustainable future.', true);
        setMeta('og:type', 'organization', true);
        setMeta('og:image', '/images/pexels-lagosfoodbank-9823013.jpg', true);

        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', "RECAN Foundation - Restoring Hope for Tanzania's Future");
        setMeta('twitter:description', 'Protecting and empowering vulnerable children in Tanzania through education, healthcare, and protection programs.');
        setMeta('twitter:image', '/images/pexels-lagosfoodbank-9823013.jpg');
    }, []);

    return (
        <Layout onOpenDonate={onOpenDonate}>
            <Hero onOpenDonate={onOpenDonate} />
            <About />
            <Gallery />
            <Testimonials />
            <Team />
            <FAQ />
            <Donate onOpenDonate={onOpenDonate} />
        </Layout>
    );
};

Home.propTypes = {
    onOpenDonate: PropTypes.func.isRequired,
};

export default Home;
