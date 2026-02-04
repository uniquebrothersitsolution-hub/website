import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section-padding">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Best <span className="red">LED Design</span> & <br />
                        <span className="blue">Computer Centre</span> in Thittacherry
                    </h1>
                    <p className="hero-subtitle">
                        Crafting premium LED boards, custom stickers, and unique gifts. Your local hub in Thittacherry (Thittacheri) operated by Founder Shaher. Expert designing and computer services.
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
