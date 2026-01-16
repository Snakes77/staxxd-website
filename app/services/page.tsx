'use client'

import { useState, useEffect, useRef } from 'react'
import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import ServiceIcon from '@/components/ui/ServiceIcon'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string>('all')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filteredServices = selectedService === 'all' 
    ? SERVICES 
    : SERVICES.filter(service => service.id === selectedService)

  return (
    <div className="bg-gradient-to-b from-white via-brand-light/20 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[200px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl lg:text-center">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-4 py-2 text-sm font-bold text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20 backdrop-blur-sm">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-delay">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Business Improvement
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 animate-fade-in-delay-2 font-light">
              Comprehensive business improvement solutions designed to drive real results. We work behind the scenes to deliver measurable improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section with Dropdown */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {/* Dropdown Filter */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="relative">
            <label htmlFor="service-filter" className="block text-sm font-semibold text-gray-700 mb-3">
              Filter by Service
            </label>
            <div className="relative">
              <select
                id="service-filter"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-6 py-4 text-lg font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-xl appearance-none cursor-pointer hover:border-brand-accent focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <option value="all">All Services</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Show message if no services match */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No services found. Please try a different filter.</p>
          </div>
        )}
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
      className={isVisible ? 'animate-fade-in' : 'opacity-0'}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link
        href={service.slug}
        className="group relative flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-gray-100 hover:border-brand-accent/50 overflow-hidden block"
      >
        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glowing effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-brand-accent-light mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-brand-accent/50 group-hover:shadow-xl">
          <ServiceIcon icon={service.icon} className="h-8 w-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="relative text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-brand-accent transition-colors">
          {service.title}
        </h3>
        <p className="relative text-lg leading-7 text-gray-600 mb-6 flex-auto">
          {service.description}
        </p>
        
        {/* CTA */}
        <div className="relative flex items-center text-base font-bold text-brand-accent group-hover:text-brand-accent-light transition-colors">
          Learn more
          <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-2 text-xl">→</span>
        </div>
      </Link>
    </div>
  )
}
