'use client'

import { useState, useEffect, useRef } from 'react'

export default function FeaturedImage() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block mb-4">
              <span className="px-3 py-1.5 text-xs font-bold text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20 backdrop-blur-sm">
                ABOUT STAXXD
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                The Company
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,46,99,0.5)]">
                Behind the Scenes
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-100 mb-6 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              We're solutions specialists, not marketers. When time is limited and problems are complex,
              we step in to handle the technical challenges. Through intelligent systems and streamlined
              processes, we transform how your business operates.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Rapid delivery of custom-built solutions</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Intelligent automation using advanced AI tools</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Results-driven approach, not just advice</p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-delay' : 'opacity-0'}`}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/30 to-brand-accent-light/30 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-brand-accent/50 shadow-2xl shadow-brand-accent/30 group hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/Staxxd.png"
                  alt="Staxxd - Business Solutions"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
