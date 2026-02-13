import React from 'react';
import './Hero.css';

const Hero = () => {
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section id="home" className="hero section-padding">
            <div className="container hero-container">
                <div className="hero-content reveal-left">
                    <h1 className="hero-title">
                        Best <span className="red">E-Sevai Centre</span> & <br />
                        <span className="blue">Graphic Design</span> in Nagapattinam
                    </h1>
                    <p className="hero-subtitle">
                        Experience the <strong>best graphics design in Nagapattinam</strong> and <strong>best E-Sevai in Thittacheri</strong>. Your trusted <strong>Unique Brothers Nagapattinam</strong> digital service center for Aadhaar, PAN card, and professional <strong>computer center</strong> services, operated by Founder Shaher.
                    </p>
                    <div className="hero-btns">
                        <a href="#portfolio" className="btn-primary">View Our Work</a>
                        <a href="#services" className="btn-secondary">Explore Services</a>
                    </div>
                </div>
                <div className="hero-visual reveal-right">
                    <div className="visual-card" onMouseMove={handleMouseMove}>
                        <div className="led-glow"></div>
                        <img src="/hero-led-arabic.png" alt="Unique Brothers - Best LED Sign Board Design and Professional Graphics in India" className="hero-img" />
                        <div className="visual-overlay">
                            <span>Premium LED Work</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
