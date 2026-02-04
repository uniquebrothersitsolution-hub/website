import React from 'react';
import './Services.css';

const services = [
    {
        title: "LED Sign Boards",
        description: "Premium 3D LED, Acrylic, and Glow sign boards designed for maximum visibility.",
        icon: "💡",
        image: "/ai-led-sign-straight.png",
        tag: "Best Design"
    },
    {
        title: "Smart Card Service",
        description: "Correction, Adding/Removing members, and new applications for Family Smart Cards.",
        icon: "🪪",
        image: "/smart-card.png",
        tag: "Pro Service"
    },
    {
        title: "Passport Service",
        description: "Apply for new passport, renewal, name change, and address correction easily.",
        icon: "🛂",
        image: "/passport.png",
        tag: "Premium"
    },
    {
        title: "Pan Card Service",
        description: "New PAN applications, name/photo correction, and date of birth updates.",
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
        description: "Personalized gift packing and custom items for birthdays, anniversaries, and more.",
        icon: "🎁",
        tag: "Best Packing"
    },
    {
        title: "Computer Centre",
        description: "Professional browsing, typing, and all online application services with expert assistance.",
        icon: "💻",
        tag: "Best Service"
    }
];

const Services = () => {
    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our <span className="red">Expert</span> Services</h2>
                    <p className="section-subtitle">We offer a wide range of creative and utility services catering to your personal and business needs in Thittacherry.</p>
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
