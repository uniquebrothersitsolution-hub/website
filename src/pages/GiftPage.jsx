import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GiftPage.css';

const giftList = [
    {
        id: 1,
        title: "Resin Art",
        images: ["/resin_art/resin_3.jpg", "/resin_art/resin_1.jpg", "/resin_art/resin_2.jpg"],
        tag: "Handmade"
    },
    {
        id: 2,
        title: "Birthday Gift Hamper",
        images: ["/birthday_hamper/hamper_3.jpg", "/birthday_hamper/hamper_1.jpg", "/birthday_hamper/hamper_2.jpg"],
        tag: "Popular"
    },
    {
        id: 3,
        title: "Couple Gift Box",
        images: ["/couple_gift_box/couple_3.jpg", "/couple_gift_box/couple_1.jpg", "/couple_gift_box/couple_2.jpg"],
        tag: "Best for Couples"
    },
    {
        id: 4,
        title: "Chocolate Surprise Box",
        images: ["/chocolate_box/box_3.jpg", "/chocolate_box/box_1.jpg", "/chocolate_box/box_2.jpg"],
        tag: "Trending"
    },
    {
        id: 5,
        title: "Quran Binding",
        images: ["/quran_binding/quran_3.jpg", "/quran_binding/quran_1.jpg", "/quran_binding/quran_2.jpg"],
        tag: "Faithful"
    },
    {
        id: 6,
        title: "Hoop Embroidery",
        images: ["/hoop_embroidery/hoop_3.jpg", "/hoop_embroidery/hoop_1.jpg", "/hoop_embroidery/hoop_2.jpg"],
        tag: "New Arrival"
    }
];

const GiftCard = ({ gift }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const hasMultipleImages = gift.images && gift.images.length > 1;

    // Minimum distance for a swipe to be registered
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextImage();
        } else if (isRightSwipe) {
            prevImage();
        }
    };

    const nextImage = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setCurrentImageIndex((prev) => (prev + 1) % gift.images.length);
    };

    const prevImage = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setCurrentImageIndex((prev) => (prev - 1 + gift.images.length) % gift.images.length);
    };

    const currentImage = hasMultipleImages ? gift.images[currentImageIndex] : gift.image;

    return (
        <div className="gift-card">
            <div className="gift-banner">{gift.tag}</div>
            <div
                className="gift-img-container"
                onTouchStart={hasMultipleImages ? onTouchStart : undefined}
                onTouchMove={hasMultipleImages ? onTouchMove : undefined}
                onTouchEnd={hasMultipleImages ? onTouchEnd : undefined}
            >
                <img
                    key={currentImageIndex}
                    src={currentImage}
                    alt={gift.title}
                    className="gift-img fade-in"
                    onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2074&auto=format&fit=crop&text=${gift.title}`;
                    }}
                />
                {hasMultipleImages && (
                    <>
                        <button className="slider-btn prev" onClick={prevImage} aria-label="Previous image">‹</button>
                        <button className="slider-btn next" onClick={nextImage} aria-label="Next image">›</button>
                        <div className="slider-dots">
                            {gift.images.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setCurrentImageIndex(idx);
                                    }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="gift-details">
                <h3 className="gift-title">{gift.title}</h3>
                <div className="gift-footer">
                    <a href="https://www.instagram.com/honirygiftz._?igsh=MTVjODlpdjhraXplMQ==" target="_blank" rel="noopener noreferrer" className="btn-order">Order Now</a>
                </div>
            </div>
        </div>
    );
};

const GiftPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="gift-page section-padding">
            <div className="container">
                <div className="page-nav">
                    <Link to="/" className="back-link">← Back to Home</Link>
                </div>

                <div className="page-header">
                    <h1 className="gradient-text">Our Gift Collection</h1>
                    <p className="page-subtitle">Unique Brothers brings you the most creative and heartfelt gifts in Thittacheri.</p>
                </div>

                <div className="gift-grid">
                    {giftList.map((gift) => (
                        <GiftCard key={gift.id} gift={gift} />
                    ))}
                </div>

                <div className="custom-request">
                    <h3>Have a special request?</h3>
                    <p>We specialize in fully custom, one-of-a-kind gifts. Chat with us to bring your idea to life.</p>
                    <a href="https://wa.me/918270150033" className="btn-cta">WhatsApp Us</a>
                </div>

                <section className="gift-seo-content">
                    <div className="seo-text-grid">
                        <div className="seo-column">
                            <h3>Best Personalized Gifts in Nagapattinam</h3>
                            <p>Unique Brothers is your ultimate destination for the <strong>best gift</strong> items and <strong>personalized gifts</strong>. We specialize in <strong>custom gifts</strong> and <strong>handmade gifts</strong> that leave a lasting impression. Our <strong>resin art gifts</strong> and <strong>birthday hampers</strong> are crafted with love and attention to detail. Searching for a <strong>gift shop in thittacheri</strong> or <strong>nagapattinam</strong>? We provide <strong>online gift delivery</strong> for all special occasions.</p>
                        </div>
                        <div className="seo-column">
                            <h3>Unique Surprise Boxes & Custom Art</h3>
                            <p>Explore our <strong>surprise gift box</strong> collection, perfect for <strong>anniversary gifts</strong>, <strong>wedding gifts</strong>, and more. Our <strong>couple gift box</strong> and <strong>chocolate surprise box</strong> are top choices for <strong>gifts for him</strong> and <strong>gifts for her</strong>. We also offer premium <strong>velvet quran binding</strong> and <strong>handmade hoop embroidery</strong>. Whether it's <strong>valentines day gifts</strong> or <strong>eid gifts</strong>, we have the most <strong>unique gifts</strong> for you.</p>
                        </div>
                    </div>
                    <div className="seo-tags">
                        <span>#bestgift</span> <span>#personalizedgifts</span> <span>#uniquegifts</span> <span>#customizedpresents</span> <span>#resinart</span> <span>#birthdayhampers</span> <span>#thittacheri</span> <span>#nagapattinam</span> <span>#uniquebrothers</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default GiftPage;
