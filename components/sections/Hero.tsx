'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { COMPANY_INFO } from '@/lib/constants'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video loads without blocking
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-brand-dark min-h-screen flex items-center">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
          preload="metadata"
          poster="/images/Staxxd.png"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => {
            setVideoError(true)
          }}
          onLoadedData={() => {
            setVideoError(false)
          }}
        >
          <source src="/videos/hero-staxxd.mov" type="video/mp4" />
          <source src="/videos/hero-staxxd.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255, 46, 99, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 46, 99, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite',
      }} />

      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-accent/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative isolate px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24">
        <div className="mx-auto max-w-4xl py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="mb-4 animate-fade-in">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20 backdrop-blur-sm">
                20+ Years Experience • Entry-Level to C-Suite • Data-Driven Solutions
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-delay drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <span className="block mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">Transform Your</span>
              <span className="block bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-[0_2px_8px_rgba(255,46,99,0.5)]">
                Business Today
              </span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl leading-relaxed text-gray-100 max-w-3xl mx-auto animate-fade-in-delay-2 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              Over <span className="text-brand-accent font-bold drop-shadow-[0_2px_4px_rgba(255,46,99,0.6)]">20 years of hands-on experience</span> from entry-level to C-suite. We listen, understand your problems, and deliver <span className="text-brand-accent font-bold drop-shadow-[0_2px_4px_rgba(255,46,99,0.6)]">data-driven solutions</span> that work. Fast-paced. Results-focused.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
              <Link
                href="/contact"
                className="group relative px-6 py-3 text-base font-bold text-white rounded-lg overflow-hidden bg-gradient-to-r from-brand-accent to-brand-accent-light shadow-lg shadow-brand-accent/50 hover:shadow-brand-accent/70 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Video Control */}
      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 rounded-full bg-brand-primary/80 p-3 text-white hover:bg-brand-primary transition-colors"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  )
}
