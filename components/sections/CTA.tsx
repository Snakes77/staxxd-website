'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <div className="relative bg-gradient-to-b from-brand-secondary via-brand-primary to-brand-dark overflow-hidden py-12 sm:py-16 lg:py-20 flex items-center">
      {/* Dramatic animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[250px] animate-pulse" style={{ animationDelay: '2s' }} />
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-accent/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
      </div>
      
      <div className="relative px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 animate-fade-in drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Ready to Work With{' '}
            <span className="bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-[0_2px_8px_rgba(255,46,99,0.5)]">
              Staxxd
            </span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-100 animate-fade-in-delay font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Ready to transform your business operations? Let's discuss how our experience and analytical approach can solve your specific challenges.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Link
              href="/contact"
              className="group relative px-6 py-3 text-base font-bold text-white rounded-lg overflow-hidden bg-gradient-to-r from-brand-accent to-brand-accent-light shadow-lg shadow-brand-accent/50 hover:shadow-brand-accent/70 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-light to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
              <Link
                href="/services"
                className="group px-6 py-3 text-base font-semibold text-white border-2 border-white/30 rounded-lg backdrop-blur-sm hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 flex items-center gap-2"
              >
              Explore Services
              <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-2 text-brand-accent">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
