import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import '../style.css' // Import live HTML stylesheet
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/layout/CookieConsent'
import { COMPANY_INFO } from '@/lib/constants'

const poppins = Poppins({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline} | Business Consultancy & Tech Solutions`,
  description: 'Staxxd: Expert UK business consultancy with 20+ years experience. We deliver data-driven tech solutions, custom web applications, and process automation. Fast turnaround, proven results.',
  keywords: 'business consultancy UK, tech solutions, web development, Google Apps Scripts automation, custom web applications, AI-powered business solutions, process automation, business improvement consultancy, data-driven solutions, fast-paced business solutions, bespoke tech solutions, UK business problem solver, systems optimisation, workflow automation, business transformation',
  authors: [{ name: 'Staxxd' }],
  creator: 'Staxxd',
  publisher: 'Staxxd',
  openGraph: {
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.mission,
    type: 'website',
    url: `https://${COMPANY_INFO.website}`,
    siteName: COMPANY_INFO.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.mission,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://formspree.io" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: COMPANY_INFO.name,
              description: COMPANY_INFO.mission,
              url: `https://${COMPANY_INFO.website}`,
              logo: `https://${COMPANY_INFO.website}/images/Staxxd.png`,
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United Kingdom',
              },
              serviceType: [
                'Business Consultancy',
                'Web Development',
                'Web Applications',
                'Google Apps Scripts',
                'AI Solutions',
                'Process Automation',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY_INFO.name,
              url: `https://${COMPANY_INFO.website}`,
              logo: `https://${COMPANY_INFO.website}/images/Staxxd.png`,
              email: COMPANY_INFO.email,
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB',
              },
              sameAs: [
                `https://instagram.com/${COMPANY_INFO.social.instagram.replace('@', '')}`,
                `https://facebook.com${COMPANY_INFO.social.facebook}`,
              ],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <a
          href="#main-content"
          className="skip-link"
          style={{ position: 'absolute', left: '-9999px' }}
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
