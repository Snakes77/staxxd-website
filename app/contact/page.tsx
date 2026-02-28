import { ContactWithVortex } from '@/components/blocks/contact-with-vortex'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata = {
  title: 'Contact Us | Staxxd',
  description: 'Get in touch with Staxxd. We are ready to help transform your business.',
}

export default function ContactPage() {
  return (
    <ContactWithVortex
      title="Get In Touch"
      description={`Join over 50 UK businesses who have transformed their operations with Staxxd. ${COMPANY_INFO.description}`}
      phone={COMPANY_INFO.phone || "Not provided"}
      email={COMPANY_INFO.email}
      web={{ label: COMPANY_INFO.website, url: `https://${COMPANY_INFO.website}` }}
    />
  )
}
