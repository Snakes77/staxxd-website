'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NAVIGATION, COMPANY_INFO } from '@/lib/constants'
import MobileMenu from './MobileMenu'
import Logo from '@/components/ui/Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Pages that start with white/light backgrounds need dark text initially
  // Individual service pages (/services/*) and about/contact pages start with white backgrounds
  const startsWithLightBg = pathname?.startsWith('/services/') || pathname === '/about' || pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    // Check initial scroll position
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Determine text color: dark if scrolled OR if page starts with light background
  const useDarkText = scrolled || startsWithLightBg

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/50' 
        : startsWithLightBg
        ? 'bg-white/90 backdrop-blur-sm'
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      {/* Dynamic gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r transition-all duration-500 pointer-events-none ${
        scrolled 
          ? 'from-brand-accent/10 via-transparent to-brand-accent/10' 
          : startsWithLightBg
          ? 'from-brand-accent/5 via-transparent to-brand-accent/5'
          : 'from-white/10 via-transparent to-white/10'
      }`} />
      
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <Logo className={`text-2xl lg:text-3xl font-extrabold transition-all duration-300 group-hover:text-brand-accent group-hover:scale-105 ${
              useDarkText ? 'text-brand-primary' : 'text-white'
            }`} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 transition-all duration-300 hover:text-brand-accent hover:bg-brand-accent/10 ${
              useDarkText ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {NAVIGATION.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-sm font-semibold leading-6 transition-all duration-300 relative group py-2 hover:text-brand-accent ${
                useDarkText ? 'text-gray-900' : 'text-white'
              }`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-light group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/contact" 
            className="group relative px-6 py-2.5 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-brand-accent to-brand-accent-light shadow-lg shadow-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <span>Get Started</span>
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-accent-light to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </nav>
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  )
}
