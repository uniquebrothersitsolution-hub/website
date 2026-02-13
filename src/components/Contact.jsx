import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In <span className="red">Touch</span></h2>
                    <p className="section-subtitle">Your trusted <strong>digital service center in Thittacheri</strong> for the best LED designs, e-sevai, and printing services in Nagapattinam. Visit <strong>Unique Brothers Thittacheri</strong> today!</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info reveal-left">
                        <a href="https://maps.app.goo.gl/6rGLtw517UEiZvex5?g_st=ic" target="_blank" rel="noopener noreferrer" className="info-item-link">
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <h4>Our Location</h4>
                                    <p>90, Main Road, Thittacheri, TN 609703</p>
                                </div>
                            </div>
                        </a>
                        <a href="tel:+918270150033" className="info-item-link">
                            <div className="info-item">
                                <span className="info-icon">📞</span>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 82701 50033</p>
                                </div>
                            </div>
                        </a>
                        <a href="mailto:shashaher07@gmail.com" className="info-item-link">
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <div>
                                    <h4>Email</h4>
                                    <p>shashaher07@gmail.com</p>
                                </div>
                            </div>
                        </a>

                        <a href="https://wa.me/918270150033" className="whatsapp-cta">
                            <span>Send Message on WhatsApp</span>
                        </a>
                    </div>

                    <form className="contact-form reveal-right" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <select required>
                                <option value="">Select Service</option>
                                <option value="led">LED Sign Board</option>
                                <option value="sticker">Custom Stickers</option>
                                <option value="gift">Personalized Gifts</option>
                                <option value="computer">Computer Services</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Tell us about your requirement..." rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>

                <div className="map-section reveal">
                    <div className="map-card">
                        <iframe
                            src="https://www.google.com/maps?q=Unique+Brothers+LED+Design+Thittacheri+90+Main+Road&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Unique Brothers Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
