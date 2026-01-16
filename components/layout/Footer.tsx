'use client'

import Link from 'next/link'
import { COMPANY_INFO, NAVIGATION, SERVICES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white overflow-hidden">
      {/* Subtle video background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-20"
          preload="metadata"
        >
          <source src="/videos/staxxd-footer.mov" type="video/mp4" />
          <source src="/videos/staxxd-footer.mov" type="video/quicktime" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/60" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-400 mb-4">{COMPANY_INFO.tagline}</p>
            <p className="text-gray-400 text-sm">{COMPANY_INFO.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={service.slug} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {COMPANY_INFO.social.linkedin && (
                <a href={`https://linkedin.com${COMPANY_INFO.social.linkedin}`} className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
