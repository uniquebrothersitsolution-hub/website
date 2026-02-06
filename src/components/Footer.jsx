import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo-section">
                        <img src="/logo.svg" alt="Unique Brothers Logo" className="logo" />
                    </div>
                    <p className="footer-desc">
                        The #1 destination for <strong>best e sevai center in Nagapattinam</strong>, <strong>best graphics design in Thittacheri</strong>, and <strong>computer center</strong> services. Professionally operated by Founder Shaher.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Our Regions</h4>
                    <ul>
                        <li><a href="#">Thittacheri</a></li>
                        <li><a href="#">Nagapattinam</a></li>
                        <li><a href="#">Nagore</a></li>
                        <li><a href="#">Velankanni</a></li>
                        <li><a href="#">Sikkal</a></li>
                        <li><a href="#">Karaikal</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#services">LED Sign Boards</a></li>
                        <li><a href="#services">Custom Stickers</a></li>
                        <li><a href="#services">Gift Packing</a></li>
                        <li><a href="#services">Computer Centre</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; {new Date().getFullYear()} Unique Brothers. All Rights Reserved.</p>
                    <div className="socials">
                        <a href="https://www.instagram.com/unique_brothers__" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="tel:+918270150033" title="Call Us">Call</a>
                        <a href="mailto:shashaher07@gmail.com" title="Email Us">Email</a>
                        <a href="https://wa.me/918270150033">WhatsApp</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
