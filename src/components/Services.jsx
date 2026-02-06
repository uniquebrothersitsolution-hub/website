import React from 'react';
import './Services.css';

const services = [
    {
        title: "LED Sign Boards",
        description: "Best LED design in Nagapattinam. Premium 3D LED, Acrylic, and Glow sign boards designed for maximum visibility.",
        icon: "💡",
        image: "/ai-led-sign-straight.png",
        tag: "Best Design"
    },
    {
        title: "E-Sevai Center",
        description: "The best e sevai in Thittacheri and Nagapattinam. Correction, Adding/Removing members, and new applications for Family Smart Cards.",
        icon: "🪪",
        image: "/smart-card.png",
        tag: "Pro Service"
    },
    {
        title: "Passport Service",
        description: "Apply for new passport, renewal, name change, and address correction via our E-Sevai point.",
        icon: "🛂",
        image: "/passport.png",
        tag: "Premium"
    },
    {
        title: "PAN Card Service",
        description: "Best PAN card service in Thittacheri and Nagapattinam. New applications, name/photo correction, and DOB updates.",
        icon: "💳",
        image: "/pan-card.png",
        tag: "Instant"
    },
    {
        title: "Aadhar Money (AEPS)",
        description: "Withdraw money using Aadhar, check balance, and get pensions directly at our shop.",
        icon: "💰",
        image: "/aadhar-money.png",
        tag: "Secure"
    },
    {
        title: "Money Transfer",
        description: "Fast and secure domestic money transfers, loan repayments, and fine payments.",
        icon: "💸",
        image: "/money-transfer.png",
        tag: "Fast"
    },
    {
        title: "Unique Gifts",
        description: "AI-powered personalized gift packing and custom designs. Experience the magic of AI-generated art on your special gifts for birthdays and anniversaries.",
        icon: "🎁",
        tag: "AI Generated"
    },
    {
        title: "Computer Center",
        description: "Advanced AI-integrated computer services. Professional browsing, AI-driven typing assistance, and smart online registration for all competitive exams.",
        icon: "💻",
        tag: "AI Powered"
    }
];

const Services = () => {
    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our <span className="red">Local</span> Services</h2>
                    <p className="section-subtitle">We are the <strong>best e sevai center in Nagapattinam</strong> and provide the <strong>best graphics design in Thittacheri</strong>. Trusted digital service center near you for all online government services.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            {service.tag && <span className="service-tag">{service.tag}</span>}
                            <div className="service-card-header">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-card-title">{service.title}</h3>
                            </div>
                            {service.image && <img src={service.image} alt={service.title} className="service-img-preview" />}
                            <p className="service-card-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
