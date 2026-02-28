'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials'

const HeroFuturistic = dynamic(() => import('@/components/ui/hero-futuristic'), { ssr: false });
import ProblemSolution from '@/components/sections/ProblemSolution';
import AnimatedCard from '@/components/ui/animated-card'

export default function Home() {


  return (
    <>
      {/* Hero Section */}
      <HeroFuturistic />

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Proven Results</h2>
            <p className="section-description">Over 20 years of hands-on experience. Data-driven. Solution-focused.</p>
          </div>
          <div className="stats-grid">
            <AnimatedCard className="stat-card group">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </AnimatedCard>
            <AnimatedCard className="stat-card group">
              <div className="stat-number">50+</div>
              <div className="stat-label">Clients Helped</div>
            </AnimatedCard>
            <AnimatedCard className="stat-card group">
              <div className="stat-number">500+</div>
              <div className="stat-label">Workflows Automated</div>
            </AnimatedCard>
            <AnimatedCard className="stat-card group">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </AnimatedCard>
          </div>

          <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
            <Link href="/services" className="btn btn-primary">See How We Do It</Link>
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <ProblemSolution />

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="services-header">
            <span className="badge">OUR SERVICES</span>
            <h2 className="section-title">
              <span>Solutions That</span>
              <span className="text-accent">Drive Results</span>
            </h2>
            <p className="services-subtitle">We deliver custom solutions tailored to your unique business needs. From web development to AI-powered automation, we solve the problems that matter.</p>
          </div>

          <div className="services-cta-section" style={{ marginTop: 0, marginBottom: 'var(--spacing-2xl)' }}>
            <div className="services-cta-card" style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="badge badge-white">YOUR FLEXIBLE FRIEND</span>
              <h3 className="services-cta-title" style={{ fontSize: 'var(--font-size-3xl)', color: 'white', marginBottom: 'var(--spacing-md)' }}>
                <span>We Adapt to</span> <span className="text-accent">Your Needs</span>
              </h3>
              <p className="services-cta-text" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-lg)' }}>We're not here to pigeonhole you into a list of services. We're your flexible friend - consultants who can turn our hand to pretty much anything. Tech solutions, process improvements, or even sitting on your senior leadership team adding value. We're not advisors or coaches. We're problem solvers who get things done.</p>
              <p className="services-cta-text" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-lg)' }}>That's why our clients like us. We adapt. We listen. We understand your unique situation, then we deliver solutions that work. Fast-paced. Results-focused. Flexible.</p>
              <Link href="/contact" className="btn btn-primary btn-large">Get Started Today</Link>
            </div>
          </div>

          <div className="services-grid-cards">
            <AnimatedCard className="service-card group">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="service-title">Website Development</h3>
              <p className="service-description">Professional, SEO-optimised websites that increase your online footprint. Built fast, built right, built to convert visitors into customers.</p>
              <Link href="/services/web-development" className="service-link">Learn more →</Link>
            </AnimatedCard>
            <AnimatedCard className="service-card group">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="service-title">Web Applications</h3>
              <p className="service-description">Custom web applications tailored to your business needs. Streamline operations, automate processes, and solve complex problems with bespoke solutions.</p>
              <Link href="/services/web-applications" className="service-link">Learn more →</Link>
            </AnimatedCard>
            <AnimatedCard className="service-card group">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="service-title">Google Apps Scripts</h3>
              <p className="service-description">Automate Google Workspace workflows, integrate systems, and eliminate repetitive tasks. Smart solutions for busy business people.</p>
              <Link href="/services/google-apps-scripts" className="service-link">Learn more →</Link>
            </AnimatedCard>
            <AnimatedCard className="service-card group">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="service-title">Business Solutions</h3>
              <p className="service-description">We get underneath the skin of your business. Through systems and processes, we identify problems and deliver fast, effective solutions.</p>
              <Link href="/services/business-solutions" className="service-link">Learn more →</Link>
            </AnimatedCard>
            <AnimatedCard className="service-card group">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <circle cx="12" cy="16" r="1" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="service-title">AI-Powered Solutions</h3>
              <p className="service-description">Leverage AI to solve business challenges. We use cutting-edge AI tools and intelligent automation to provide fast, effective solutions that drive real results.</p>
              <Link href="/services/ai-powered-solutions" className="service-link">Learn more →</Link>
            </AnimatedCard>
            <AnimatedCard className="service-card group">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                </svg>
              </div>
              <h3 className="service-title">Process Automation</h3>
              <p className="service-description">Automate the little things so you can focus on what matters. Fast turnaround on bespoke automation projects that save time and money.</p>
              <Link href="/services/process-automation" className="service-link">Learn more →</Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" style={{ padding: 'var(--spacing-2xl) 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="how-it-works-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-xl)' }}>
            <span className="badge">OUR PROCESS</span>
            <h2 className="section-title">
              <span>How We</span>
              <span className="text-accent">Work</span>
            </h2>
            <p className="section-subtitle" style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)' }}>A simple, transparent process designed to get to the root of your problems and deliver solutions fast.</p>
          </div>

          <div className="how-it-works-grid">
            <AnimatedCard className="process-step group">
              <div className="step-number">1</div>
              <h3 className="step-title">Deep Dive Analysis</h3>
              <p className="step-desc">We don't guess. We analyze. We look under the hood of your business to understand exactly where the bottlenecks and inefficiencies are.</p>
            </AnimatedCard>

            <AnimatedCard className="process-step group">
              <div className="step-number">2</div>
              <h3 className="step-title">Custom Strategy</h3>
              <p className="step-desc">Whether it's a new web application, an automated script, or a process overhaul, we design a tailored solution that fits your specific needs.</p>
            </AnimatedCard>

            <AnimatedCard className="process-step group">
              <div className="step-number">3</div>
              <h3 className="step-title">Rapid Execution</h3>
              <p className="step-desc">We build, test, and deploy fast. We focus on delivering quick wins and measurable ROI so you can see the impact immediately.</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-us-content-centered">
            <span className="badge badge-white">WHY STAXXD</span>
            <h2 className="section-title section-title-white">
              <span>Trusted by UK</span>
              <span className="text-accent">Businesses</span>
            </h2>
            <p className="why-choose-us-intro">Trusted by UK businesses because we combine extensive practical knowledge with analytical thinking. From startups to enterprise, we adapt our approach to your unique situation.</p>

            <AnimatedCard className="adapt-card group">
              <h3 className="adapt-card-title">We Adapt to <span className="text-accent">Your Needs</span></h3>
              <p className="adapt-card-text">Just like a chameleon adapts to its environment, we adapt our solutions to suit your business needs across multiple sectors. Whether you're in retail, manufacturing, professional services, or technology - we change our approach to fit your unique challenges.</p>
            </AnimatedCard>

            <div className="features-grid">
              <AnimatedCard className="feature-card group">
                <h3 className="feature-title">Rapid Delivery</h3>
                <p>Time-sensitive challenges require immediate action. We prioritise speed without compromising quality, delivering solutions when you need them most.</p>
              </AnimatedCard>
              <AnimatedCard className="feature-card group">
                <h3 className="feature-title">Tailored Approach</h3>
                <p>No two businesses are identical. We design custom solutions that address your unique operational requirements and strategic objectives.</p>
              </AnimatedCard>
              <AnimatedCard className="feature-card group">
                <h3 className="feature-title">Deep Analysis</h3>
                <p>We examine your business operations comprehensively, identifying inefficiencies and opportunities others might miss.</p>
              </AnimatedCard>
              <AnimatedCard className="feature-card group">
                <h3 className="feature-title">Technology Integration</h3>
                <p>Leveraging advanced AI and automation tools, we create intelligent solutions that enhance productivity and reduce manual effort.</p>
              </AnimatedCard>
            </div>

            <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
              <Link href="/contact" className="btn btn-primary btn-large">Work With Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - USING SHADCN STAGGER TESTIMONIALS */}
      <section className="testimonials">
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header">
            <span className="badge">CLIENT FEEDBACK</span>
            <h2 className="section-title">
              <span>What Our Clients</span>
              <span className="text-accent">Say About Us</span>
            </h2>
            <p className="section-description">Real feedback from businesses we've helped behind the scenes.</p>
          </div>
          <div className="mt-8" style={{ marginTop: '2rem' }}>
            <StaggerTestimonials />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Ready to Work With <span className="text-accent">Staxxd</span>?</h2>
          <p className="cta-description">Ready to transform your business operations? Let's discuss how our experience and analytical approach can solve your specific challenges.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary btn-large">Get Started Now</Link>
            <Link href="/services" className="btn btn-secondary btn-large">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
