'use client'

import { useState, useEffect, useRef } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-brand-secondary via-brand-primary to-brand-secondary py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl lg:text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 animate-fade-in">
            <span className="px-3 py-1.5 text-xs font-bold text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20 backdrop-blur-sm">
              CLIENT FEEDBACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 animate-fade-in-delay drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,46,99,0.5)]">
              Say About Us
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-7 text-gray-100 animate-fade-in-delay-2 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Real feedback from businesses we've helped behind the scenes.
          </p>
        </div>
        
        <div className="mx-auto mt-8 sm:mt-12 max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0]; index: number }) {
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
    <div
      ref={ref}
      className={`group relative bg-white/10 backdrop-blur-md rounded-xl p-5 sm:p-6 border-2 border-white/20 hover:border-brand-accent/50 hover:bg-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-accent/30 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="absolute top-3 left-3 text-4xl text-brand-accent/20 font-serif">"</div>
      <blockquote className="relative text-base leading-7 text-white mb-4 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
        <p>"{testimonial.quote}"</p>
      </blockquote>
      <figcaption className="relative flex items-center gap-4 pt-6 border-t border-white/20">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent-light flex items-center justify-center text-white font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{testimonial.author}</div>
          <div className="text-gray-100 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">{testimonial.company}</div>
        </div>
      </figcaption>
    </div>
  )
}
