import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GiftsPreview from '../components/GiftsPreview';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import useReveal from '../hooks/useReveal';

const HomePage = () => {
    useReveal();

    return (
        <>
            <Hero />
            <Services />
            <GiftsPreview />
            <Portfolio />
            <Contact />
        </>
    );
};

export default HomePage;
