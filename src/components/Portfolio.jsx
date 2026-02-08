import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
    const [zoomIndex, setZoomIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);

    // Portfolio preview images - diverse samples from categories
    const portfolioGallery = [
        { url: "/ai-led-sign.png", title: "LED Signage" },
        { url: "/portfolio/flyers/Arabs_cafe.jpg", title: "Restaurant Branding" },
        { url: "/portfolio/flyers/MJ_1.jpg", title: "Corporate Identity" },
        { url: "/portfolio/flex/Humaina_1.jpg", title: "Event Banners" },
        { url: "/portfolio/flyers/Invitation.jpg", title: "Invitations" },
        { url: "/portfolio/flyers/Nisha_Burka.jpg", title: "Fashion & Retail" }
    ];

    const openZoom = (url) => {
        const index = portfolioGallery.findIndex(img => img.url === url);
        setZoomIndex(index !== -1 ? index : 0);
        document.body.classList.add('no-scroll');
    };

    const closeZoom = () => {
        setZoomIndex(null);
        document.body.classList.remove('no-scroll');
    };

    const nextZoom = (e) => {
        if (e) e.stopPropagation();
        setZoomIndex((prev) => (prev + 1) % portfolioGallery.length);
    };

    const prevZoom = (e) => {
        if (e) e.stopPropagation();
        setZoomIndex((prev) => (prev - 1 + portfolioGallery.length) % portfolioGallery.length);
    };

    const onTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
        setIsSwiping(false);
    };

    const onTouchMove = () => setIsSwiping(true);

    const onTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        const threshold = 30;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) nextZoom();
            else prevZoom();
        }
    };

    const handleOverlayClick = (e) => {
        if (!isSwiping && e.target.classList.contains('image-zoom-overlay')) {
            closeZoom();
        }
    };

    return (
        <section id="portfolio" className="portfolio section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Creative <span className="blue">Portfolio</span></h2>
                    <p className="section-subtitle">A glimpse into our diverse range of professional design and signage projects.</p>
                </div>

                <div className="portfolio-preview-container">
                    <div className="portfolio-preview-card">
                        <div className="portfolio-preview-img-wrapper">
                            <img
                                src="/ai-led-sign.png"
                                alt="Creative Portfolio Preview"
                                className="portfolio-preview-featured-img"
                                onClick={() => openZoom("/ai-led-sign.png")}
                            />
                            <div className="portfolio-preview-overlay">
                                <Link to="/portfolio" className="btn-cta">Explore Full Portfolio</Link>
                            </div>
                        </div>
                        <div className="portfolio-preview-content">
                            <h3>A Glimpse of Our Creative Work</h3>
                            <p>From custom Name Boards to vibrant LED Signage and digital designs, we help businesses and homes stand out with premium quality.</p>
                            <Link to="/portfolio" className="view-link">
                                <span>See Full Portfolio</span>
                                <span className="view-link-icon">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Zoom Lightbox Gallery */}
            {zoomIndex !== null && (
                <div
                    className="image-zoom-overlay"
                    onClick={handleOverlayClick}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <button className="zoom-nav-btn prev" onClick={prevZoom}>‹</button>
                    <div className="image-zoom-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-zoom" onClick={closeZoom}>✕</button>
                        <img
                            src={portfolioGallery[zoomIndex].url}
                            alt={`${portfolioGallery[zoomIndex].title} zoom`}
                            className="zoomed-image"
                        />
                        <div className="zoom-caption">{portfolioGallery[zoomIndex].title}</div>
                    </div>
                    <button className="zoom-nav-btn next" onClick={nextZoom}>›</button>
                </div>
            )}

            {/* Hidden SEO keywords for search engines */}
            <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                <p>Portfolio services Nagapattinam, creative portfolio Thittacheri, design services Tamil Nadu, LED signage Nagapattinam, restaurant branding Nagapattinam, corporate identity Nagapattinam, event banners Nagapattinam, flex printing Thittacheri, business cards Nagapattinam, invitation cards Thittacheri, fashion advertising Nagapattinam, retail branding Thittacheri, professional design Nagapattinam, quality printing services, affordable creative solutions, premium branding agency, best portfolio Nagapattinam, top design studio Thittacheri</p>
            </div>
        </section>
    );
};

export default Portfolio;
