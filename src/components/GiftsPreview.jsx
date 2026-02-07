import React from 'react';
import { Link } from 'react-router-dom';
import './GiftsPreview.css';

const GiftsPreview = () => {
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
                            {/* Using the Honiry Gift logo image as requested by the user */}
                            <img src="/honiry-gift-logo.png" alt="Honiry Gift Collection" className="preview-img-logo" />
                            <div className="preview-overlay">
                                <Link to="/gifts" className="btn-cta">Explore All Gifts</Link>
                            </div>
                        </div>
                        <div className="preview-content">
                            <h3>Gift Your Loved Ones the Best</h3>
                            <p>From Resin Art to Birthday Hampers, we create memories that last forever.</p>
                            <Link to="/gifts" className="view-link">See Full Collection →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GiftsPreview;
