import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GiftsPreview.css';

const GiftsPreview = () => {
    const [zoomIndex, setZoomIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);

    // Common preview images to swipe through
    const previewGallery = [
        { url: "/honiry-gift-logo.png", title: "Honiry Gift Collection" },
        { url: "/resin_art/resin_3.jpg", title: "Premium Resin Art" },
        { url: "/birthday_hamper/hamper_3.jpg", title: "Birthday Hampers" },
        { url: "/couple_gift_box/couple_3.jpg", title: "Couple Gifts" }
    ];

    const openZoom = (url) => {
        const index = previewGallery.findIndex(img => img.url === url);
        setZoomIndex(index !== -1 ? index : 0);
        document.body.classList.add('no-scroll');
    };

    const closeZoom = () => {
        setZoomIndex(null);
        document.body.classList.remove('no-scroll');
    };

    const nextZoom = (e) => {
        if (e) e.stopPropagation();
        setZoomIndex((prev) => (prev + 1) % previewGallery.length);
    };

    const prevZoom = (e) => {
        if (e) e.stopPropagation();
        setZoomIndex((prev) => (prev - 1 + previewGallery.length) % previewGallery.length);
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
        <section id="gifts" className="gifts-preview section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Unique <span className="red">Gifts</span></h2>
                    <p className="section-subtitle">Discover our exclusive collection of personalized gifts and creative art.</p>
                </div>

                <div className="preview-container">
                    <div className="preview-card">
                        <div className="preview-img-wrapper">
                            <img
                                src="/honiry-gift-logo.png"
                                alt="Honiry Gift Collection"
                                className="preview-img-logo"
                                onClick={() => openZoom("/honiry-gift-logo.png")}
                            />
                            <div className="preview-overlay">
                                <Link to="/gifts" className="btn-cta">Explore All Gifts</Link>
                            </div>
                        </div>
                        <div className="preview-content">
                            <h3>Gift Your Loved Ones the Best</h3>
                            <p>From Resin Art to Birthday Hampers, we create memories that last forever.</p>
                            <Link to="/gifts" className="view-link">
                                <span>See Full Collection</span>
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
                            src={previewGallery[zoomIndex].url}
                            alt={`${previewGallery[zoomIndex].title} zoom`}
                            className="zoomed-image"
                        />
                        <div className="zoom-caption">{previewGallery[zoomIndex].title}</div>
                    </div>
                    <button className="zoom-nav-btn next" onClick={nextZoom}>›</button>
                </div>
            )}
        </section>
    );
};

export default GiftsPreview;
