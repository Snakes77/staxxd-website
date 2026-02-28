import { COMPANY_INFO } from '@/lib/constants'
import FeaturedImage from '@/components/sections/FeaturedImage'
import Link from 'next/link'

export const metadata = {
  title: 'About Staxxd - 20+ Years Business Solutions Experience | UK Consultancy',
  description: 'Staxxd combines 20+ years of hands-on business experience with data-driven problem solving. From entry-level to C-suite expertise, we deliver fast, custom tech solutions for UK businesses.',
  keywords: 'business consultancy UK, experienced problem solver, tech solutions specialist, business improvement consultant, data-driven solutions, fast business solutions, UK business advisor',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner — dark, matches site design system */}
      <FeaturedImage />

      {/* About Body — uses style.css classes, not Tailwind */}
      <section className="problem-solution">
        <div className="container">
          <div className="problem-solution-grid">

            {/* Left — Story */}
            <div className="problem-solution-content">
              <span className="badge">OUR STORY</span>
              <h1 className="section-title" style={{ color: 'var(--text-primary)', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                About <span className="text-accent">Staxxd</span>
              </h1>
              <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                {COMPANY_INFO.tagline}
              </p>
              <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                {COMPANY_INFO.mission}
              </p>
              <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Our journey from entry-level roles to C-suite positions gives us unique insight into business
                challenges at every level. We use this knowledge, combined with analytical thinking and modern
                tools, to create solutions that make a real difference to your bottom line.
              </p>
            </div>

            {/* Right — Approach Card */}
            <div>
              <div className="accordion-item" style={{ padding: 0 }}>
                <div style={{ padding: 'var(--spacing-lg)' }}>
                  <h2 style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--spacing-lg)'
                  }}>
                    Our Approach
                  </h2>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    {[
                      'We get underneath the skin of your business',
                      'Fast turnaround on bespoke solutions',
                      'Systems and processes that work',
                      'AI-powered solutions that drive results',
                      'Problem solvers, not just consultants',
                    ].map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
                        <span style={{ color: 'var(--accent-color)', fontSize: '1.25rem', flexShrink: 0, marginTop: '2px' }}>✓</span>
                        <span style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA — every page must have a conversion path */}
              <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
                <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                  Ready to see what Staxxd can do for your business?
                </p>
                <Link href="/contact" className="btn btn-primary btn-large">
                  Let&apos;s Have a Conversation
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
