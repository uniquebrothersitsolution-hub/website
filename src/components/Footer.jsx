import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo-section flex items-center gap-4">
                        <img src="/logo.png" alt="Unique Brothers Logo" className="logo" />
                        <span className="brand-name">UNIQUE <span className="red">BROTHERS</span></span>
                    </div>
                    <p className="footer-desc">
                        The #1 destination for <strong>best e sevai center in Nagapattinam</strong>, <strong>best personalized gifts</strong>, and <strong>computer center</strong> services. Your trusted <strong>digital service center near me</strong> for <strong>Aadhaar</strong>, <strong>PAN card</strong>, and <strong>custom handmade gifts</strong> in <strong>Thittacheri</strong>.
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
