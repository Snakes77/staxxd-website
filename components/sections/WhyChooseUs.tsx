'use client'

import { useState, useEffect, useRef } from 'react'

export default function WhyChooseUs() {
  const features = [
    {
      name: 'Rapid Delivery',
      description: 'Time-sensitive challenges require immediate action. We prioritise speed without compromising quality, delivering solutions when you need them most.',
    },
    {
      name: 'Tailored Approach',
      description: 'No two businesses are identical. We design custom solutions that address your unique operational requirements and strategic objectives.',
    },
    {
      name: 'Deep Analysis',
      description: 'We examine your business operations comprehensively, identifying inefficiencies and opportunities others might miss.',
    },
    {
      name: 'Technology Integration',
      description: 'Leveraging advanced AI and automation tools, we create intelligent solutions that enhance productivity and reduce manual effort.',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-brand-primary/5 via-brand-primary to-brand-secondary py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Dramatic animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Chameleon */}
          <div className="relative w-full flex items-center justify-center lg:sticky lg:top-24 order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/30 to-brand-accent-light/30 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-brand-accent/50 shadow-2xl shadow-brand-accent/30 group hover:scale-105 transition-transform duration-500 bg-white">
                  <img
                    src="/images/staxxd-chameleon.web.png"
                    alt="Staxxd adapts to your business needs across multiple sectors"
                    loading="lazy"
                    className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - All Content Stacked */}
          <div className="order-1 lg:order-2">
            {/* Badge and Heading */}
            <div className="mb-6">
              <div className="inline-block mb-4 animate-fade-in">
                <span className="px-3 py-1.5 text-xs font-bold text-white bg-brand-accent rounded-full border border-brand-accent/20">
                  WHY STAXXD
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 animate-fade-in-delay drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  Trusted by UK
                </span>{' '}
                <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,46,99,0.5)]">
                  Businesses
                </span>
              </h2>
              <p className="text-base sm:text-lg leading-7 text-gray-100 animate-fade-in-delay-2 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                Trusted by UK businesses because we combine extensive practical knowledge with analytical thinking. From startups to enterprise, we adapt our approach to your unique situation.
              </p>
            </div>

            {/* Cards Section */}
            <div className="space-y-4">
              {/* We Adapt Card - Full Width */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 sm:p-6 border-2 border-white/20">
                <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  We Adapt to <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(255,46,99,0.5)]">Your Needs</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Just like a chameleon adapts to its environment, we adapt our solutions to suit your business needs across multiple sectors. Whether you're in retail, manufacturing, professional services, or technology - we change our approach to fit your unique challenges.
                </p>
              </div>

              {/* Feature Cards Grid - 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <FeatureCard key={feature.name} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ feature, index }: { feature: { name: string; description: string }; index: number }) {
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
      className={`group relative flex flex-col bg-white/10 backdrop-blur-md rounded-xl p-5 border-2 border-white/20 hover:border-brand-accent/50 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 via-transparent to-brand-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Glowing effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />

      <dt className="relative text-lg font-extrabold leading-6 text-white mb-2 group-hover:text-brand-accent transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
        {feature.name}
      </dt>
      <dd className="relative flex flex-auto flex-col text-sm leading-6 text-gray-100">
        <p className="flex-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">{feature.description}</p>
      </dd>
    </div>
  )
}
