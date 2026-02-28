'use client'

import { useState, useEffect, useRef } from 'react'
import { TESTIMONIALS } from '@/lib/constants'
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials'

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
            </span>{' '}
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,46,99,0.5)]">
              Say About Us
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-7 text-gray-100 animate-fade-in-delay-2 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Real feedback from businesses we've helped behind the scenes.
          </p>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 w-full max-w-[100vw]">
          <StaggerTestimonials />
        </div>
      </div>
    </div>
  )
}
