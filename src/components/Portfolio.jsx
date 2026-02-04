import React from 'react';
import './Portfolio.css';

const items = [
    { image: "/work-1.png", category: "LED Board", title: "Premium Islamic Wall Art" },
    { image: "/work-2.jpg", category: "LED Board", title: "Golden Mirror Signage" },
    { image: "/work-3.jpg", category: "Design", title: "Custom Special Food Menu" },
    { image: "/work-4.jpg", category: "LED Board", title: "Professional Name Plate" }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our <span className="blue">Creative</span> Portfolio</h2>
                    <p className="section-subtitle">A glimpse into our recent projects. We take pride in delivering top-notch design and quality for every client.</p>
                </div>
                <div className="portfolio-grid">
                    {items.map((item, index) => (
                        <div key={index} className="portfolio-item">
                            <img src={item.image} alt={item.title} className="portfolio-img" />
                            <div className="portfolio-info">
                                <span className="portfolio-cat">{item.category}</span>
                                <h3 className="portfolio-item-title">{item.title}</h3>
                                <a href="https://www.instagram.com/unique_brothers__" target="_blank" rel="noopener noreferrer" className="portfolio-link">View Post</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="portfolio-cta">
                    <a href="https://www.instagram.com/unique_brothers__" target="_blank" rel="noopener noreferrer" className="btn-instagram">
                        See More on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
