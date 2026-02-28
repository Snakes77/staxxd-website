'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header className="header">
      <nav className="nav container" aria-label="Global navigation">

        {/* Logo */}
        <div className="nav-brand">
          <Link href="/" className="logo-link">
            <span className="logo">
              Sta<span className="logo-accent">xx</span>d
            </span>
          </Link>
        </div>

        {/* Hamburger — CSS controls visibility via @media (max-width: 600px) */}
        <button
          className="mobile-menu-toggle"
          aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger" />
          <span className="hamburger" />
          <span className="hamburger" />
        </button>

        {/* Nav links */}
        <div
          className="nav-menu"
          style={
            isMenuOpen
              ? {
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'rgba(255,255,255,0.98)',
                padding: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 999,
              }
              : {}
          }
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href ? ' nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>

      </nav>
    </header>
  )
}
