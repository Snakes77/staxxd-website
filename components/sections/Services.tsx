'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import ServiceIcon from '@/components/ui/ServiceIcon'

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-white via-brand-light/20 to-brand-primary/5 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Dramatic animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-accent/5" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Service tiles */}
          <div className="order-2 lg:order-1">
            <p className="text-sm text-gray-500 mb-6 italic font-medium">Here are some examples of what we can do:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="inline-block mb-4 animate-fade-in">
              <span className="px-3 py-1.5 text-xs font-bold text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20">
                YOUR FLEXIBLE FRIEND
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 animate-fade-in-delay">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                We Adapt to
              </span>{' '}
              <span className="bg-gradient-to-r from-brand-accent via-[#e01e4f] to-brand-accent bg-clip-text text-transparent">
                Your Needs
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-7 text-gray-600 animate-fade-in-delay-2 font-light">
              We're not here to pigeonhole you into a list of services. We're your flexible friend - consultants who can turn our hand to pretty much anything. Tech solutions, process improvements, or even sitting on your senior leadership team adding value. We're not advisors or coaches. We're problem solvers who get things done.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-7 text-gray-600 animate-fade-in-delay-2 font-light">
              That's why our clients like us. We adapt. We listen. We understand your unique situation, then we deliver solutions that work. Fast-paced. Results-focused. Flexible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
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
      className={`group relative bg-white rounded-lg p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-brand-accent/40 overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Glowing effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-lg opacity-0 group-hover:opacity-15 blur-md transition-opacity duration-300" />

      <div className="relative flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent to-brand-accent-light group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-brand-accent/40 flex-shrink-0">
            <ServiceIcon icon={service.icon} className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-accent transition-colors">
            {service.title}
          </h3>
        </div>
        <p className="text-sm leading-6 text-gray-600 mb-3 line-clamp-3">
          {service.description}
        </p>
        <Link
          href={service.slug}
          className="group/link inline-flex items-center text-sm font-semibold text-brand-accent hover:text-brand-accent-light transition-all duration-300 mt-auto"
        >
          Learn more
          <span aria-hidden="true" className="ml-1.5 inline-block transition-transform group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  )
}
