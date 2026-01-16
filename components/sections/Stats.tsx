'use client'

import { useState, useEffect, useRef } from 'react'
import { COMPANY_INFO } from '@/lib/constants'

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <dt ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight bg-gradient-to-r from-brand-accent via-white to-brand-accent-light bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
      {count}{suffix}
    </dt>
  )
}

export default function Stats() {
  return (
    <div className="bg-gradient-to-b from-brand-dark via-brand-primary to-brand-secondary py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Dramatic animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-accent/15 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-accent/15 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Proven Results
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-100 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">Over 20 years of hands-on experience. Data-driven. Solution-focused.</p>
        </div>
        <div className="mx-auto max-w-5xl">
          <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-4">
            <div className="flex flex-col items-center text-center group p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-brand-accent/50 hover:bg-white/20 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-500 hover:-translate-y-1">
              <AnimatedCounter end={COMPANY_INFO.stats.yearsExperience} suffix="+" />
              <dd className="mt-4 text-sm sm:text-base font-bold leading-6 text-white group-hover:text-brand-accent transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Years Experience</dd>
            </div>
            <div className="flex flex-col items-center text-center group p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-brand-accent/50 hover:bg-white/20 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-500 hover:-translate-y-1">
              <AnimatedCounter end={COMPANY_INFO.stats.clientsHelped} suffix="+" />
              <dd className="mt-4 text-sm sm:text-base font-bold leading-6 text-white group-hover:text-brand-accent transition-colors">Clients Helped</dd>
            </div>
            <div className="flex flex-col items-center text-center group p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-brand-accent/50 hover:bg-white/20 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-500 hover:-translate-y-1">
              <AnimatedCounter end={COMPANY_INFO.stats.projectsCompleted} suffix="+" />
              <dd className="mt-4 text-sm sm:text-base font-bold leading-6 text-white group-hover:text-brand-accent transition-colors">Projects Completed</dd>
            </div>
            <div className="flex flex-col items-center text-center group p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-brand-accent/50 hover:bg-white/20 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-500 hover:-translate-y-1">
              <AnimatedCounter end={COMPANY_INFO.stats.satisfactionRate} suffix="%" />
              <dd className="mt-4 text-sm sm:text-base font-bold leading-6 text-white group-hover:text-brand-accent transition-colors">Satisfaction Rate</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
