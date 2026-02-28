'use client';

import Link from 'next/link';

export default function HeroFuturistic() {
    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#060611',
            }}
        >
            {/* Video background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            >
                <source src="/videos/staxxd-hero-dino.mov" type="video/mp4" />
                <source src="/videos/staxxd-hero-dino.mov" type="video/quicktime" />
            </video>

            {/* Dark overlay — 65% so text is clearly readable */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(135deg, rgba(6,6,17,0.75) 0%, rgba(26,0,10,0.65) 50%, rgba(6,6,17,0.80) 100%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Subtle bottom fade so it blends into the next section */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background:
                        'linear-gradient(to bottom, transparent, rgba(26,26,46,0.95))',
                    pointerEvents: 'none',
                }}
            />

            {/* Hero text content */}
            <div
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    padding: '2rem',
                    maxWidth: '900px',
                }}
            >
                <div className="hero-badge">
                    20+ Years Experience • Entry-Level to C-Suite • Data-Driven Solutions
                </div>
                <h1 className="hero-title">
                    <span className="hero-title-line">Transform Your</span>
                    <span className="hero-title-accent">Business Today</span>
                </h1>
                <p className="hero-description">
                    Over <strong>20 years of hands-on experience</strong> from entry-level to C-suite. We listen, understand your problems, and deliver{' '}
                    <strong>data-driven solutions</strong> that work. Fast-paced. Results-focused.
                </p>
                <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/contact" className="btn btn-primary btn-large">
                        Get Started Now
                    </Link>
                    <Link href="/services" className="btn btn-secondary btn-large">
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
