import React, { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
const Gallery = lazy(() => import('../components/Gallery'));
const Team = lazy(() => import('../components/Team'));
const Donate = lazy(() => import('../components/Donate'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ = lazy(() => import('../components/FAQ'));

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

        document.title = "RECAN Foundation | Protecting Tanzania’s Children";
        setMeta('description', 'RECAN Foundation protects vulnerable children in Tanzania through education, healthcare, and protection programs that restore hope and dignity.');

        setMeta('og:title', "RECAN Foundation | Protecting Tanzania’s Children", true);
        setMeta('og:description', 'Protecting vulnerable children in Tanzania through education, healthcare, and protection programs that restore hope and dignity.', true);
        setMeta('og:type', 'website', true);
        setMeta('og:url', 'https://recanfoundation.vercel.app/', true);
        setMeta('og:image', '/images/DSC_0248.JPG', true);

        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', "RECAN Foundation | Protecting Tanzania’s Children");
        setMeta('twitter:description', 'Protecting vulnerable children in Tanzania through education, healthcare, and protection programs that restore hope and dignity.');
        setMeta('twitter:image', '/images/DSC_0248.JPG');

        const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', 'https://recanfoundation.vercel.app/');
        if (!canonical.parentElement) document.head.appendChild(canonical);
    }, []);

    return (
        <Layout onOpenDonate={onOpenDonate}>
            <Hero onOpenDonate={onOpenDonate} />
            <About />
            <Suspense fallback={<div className="min-h-[320px]" aria-hidden="true" />}>
                <Gallery />
                <Testimonials />
                <Team />
                <FAQ />
                <Donate onOpenDonate={onOpenDonate} />
            </Suspense>
        </Layout>
    );
};

Home.propTypes = {
    onOpenDonate: PropTypes.func.isRequired,
};

export default Home;
