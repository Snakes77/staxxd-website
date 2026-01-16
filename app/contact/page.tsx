import ContactForm from '@/components/forms/ContactForm'
import { COMPANY_INFO } from '@/lib/constants'

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-white via-brand-light/20 to-white min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left side - Chameleon Image */}
          <div className="relative w-full h-[350px] lg:h-[400px] order-2 lg:order-1 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-accent-light/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-brand-accent/30 shadow-2xl shadow-brand-accent/20 bg-white group hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/CHM.Staxxd (1).png"
                  alt="Staxxd Chameleon - Ready to Adapt to Your Needs"
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center 40%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
              Get In <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-sm sm:text-base leading-6 text-gray-600 mb-4">
              Ready to work with Staxxd? Let's talk about how we can help you make money.
            </p>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Contact Information</h2>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900">Email:</strong>{' '}
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-accent hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  {COMPANY_INFO.phone && (
                    <p>
                      <strong className="text-gray-900">Phone:</strong>{' '}
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-brand-accent hover:underline">
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                  )}
                  <p>
                    <strong className="text-gray-900">Location:</strong> {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
