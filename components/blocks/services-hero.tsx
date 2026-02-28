'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { ChevronRight, Globe, Monitor, Zap, Brain, Lock, Settings } from 'lucide-react';

// Staxxd service icons for the slider
const serviceLogos = [
    { icon: Globe, label: 'Website Development' },
    { icon: Monitor, label: 'Web Applications' },
    { icon: Zap, label: 'Google Apps Scripts' },
    { icon: Brain, label: 'AI-Powered Solutions' },
    { icon: Lock, label: 'Business Solutions' },
    { icon: Settings, label: 'Process Automation' },
];

export function ServicesHero() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero */}
            <section
                style={{
                    background: 'linear-gradient(135deg, #0f0f1e 0%, #1a0a1a 50%, #0f0f1e 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Subtle animated accent glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(255,46,99,0.12) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '-5%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(255,107,157,0.08) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />

                <div className="py-24 md:pb-32 lg:pb-36 lg:pt-36">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">

                            {/* Badge */}
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'rgba(255,46,99,0.15)',
                                    border: '1px solid rgba(255,46,99,0.3)',
                                    borderRadius: '2rem',
                                    padding: '0.4rem 1rem',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                <span style={{ color: '#ff2e63', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    Our Services
                                </span>
                            </div>

                            <h1
                                className="mt-4 max-w-3xl text-balance"
                                style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    color: '#ffffff',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                Solutions That{' '}
                                <span style={{ color: '#ff2e63' }}>Drive Real Results</span>
                            </h1>

                            <p
                                className="mt-6 max-w-2xl text-balance"
                                style={{
                                    fontSize: '1.125rem',
                                    lineHeight: 1.7,
                                    color: 'rgba(255,255,255,0.75)',
                                }}
                            >
                                We deliver custom solutions tailored to your unique business needs. From web development to AI-powered automation — we get underneath the skin of your business and solve the problems that matter. Fast-paced. Results-focused.
                            </p>

                            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    style={{
                                        background: 'linear-gradient(135deg, #ff2e63, #ff6b9d)',
                                        border: 'none',
                                        borderRadius: '3rem',
                                        height: '3rem',
                                        paddingLeft: '1.5rem',
                                        paddingRight: '1rem',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        color: '#fff',
                                        boxShadow: '0 0 30px rgba(255,46,99,0.35)',
                                    }}
                                >
                                    <Link href="/contact">
                                        <span className="text-nowrap">Get Started Today</span>
                                        <ChevronRight className="ml-1" size={18} />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    style={{
                                        height: '3rem',
                                        borderRadius: '3rem',
                                        padding: '0 1.5rem',
                                        fontSize: '1rem',
                                        color: 'rgba(255,255,255,0.85)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    <Link href="#services-grid">
                                        <span className="text-nowrap">Explore Services ↓</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Stats bar */}
                    <div
                        className="mx-auto max-w-7xl px-6 lg:px-12 mt-16"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}
                    >
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                            {[
                                { number: '20+', label: 'Years Experience' },
                                { number: '50+', label: 'Clients Helped' },
                                { number: '50+', label: 'Projects Completed' },
                                { number: '100%', label: 'Satisfaction Rate' },
                            ].map((stat) => (
                                <div key={stat.label} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ff2e63', lineHeight: 1 }}>
                                        {stat.number}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.375rem' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Infinite services slider */}
            <section style={{ background: '#13131f', paddingBottom: '0.5rem' }}>
                <div className="group relative mx-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        <div style={{ minWidth: '9rem', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '1.5rem' }}>
                            <p style={{ textAlign: 'right', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>
                                What we do
                            </p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-9rem)]">
                            <InfiniteSlider speedOnHover={20} speed={30} gap={80}>
                                {serviceLogos.map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            whiteSpace: 'nowrap',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                        }}
                                    >
                                        <Icon size={20} style={{ color: '#ff2e63', flexShrink: 0 }} />
                                        {label}
                                    </div>
                                ))}
                            </InfiniteSlider>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
