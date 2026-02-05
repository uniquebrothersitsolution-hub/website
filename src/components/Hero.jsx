import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section-padding">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Best <span className="red">LED Design</span> & <br />
                        <span className="blue">Computer Centre</span> in Thittacheri
                    </h1>
                    <p className="hero-subtitle">
                        Experience the <strong>best graphics design</strong> and <strong>best LED design in Nagapattinam</strong>. Your trusted local hub in Thittacheri for <strong>E-Sevai services</strong>, custom stickers, and professional computer assistance, operated by Founder Shaher.
                    </p>
                    <div className="hero-btns">
                        <a href="#portfolio" className="btn-primary">View Our Work</a>
                        <a href="#services" className="btn-secondary">Explore Services</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-card">
                        <div className="led-glow"></div>
                        <img src="/hero-led-arabic.png" alt="Arabic LED Sign Board Design" className="hero-img" />
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
