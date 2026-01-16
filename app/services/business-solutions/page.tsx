import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import ServiceIcon from '@/components/ui/ServiceIcon'

const service = SERVICES.find(s => s.id === 'business-solutions')

export const metadata = {
  title: 'Business Solutions - Staxxd | Problem Solver & Solutions Company',
  description: 'We get underneath the skin of your business. Through systems and processes, we identify problems and deliver fast, effective bespoke solutions.',
}

export default function BusinessSolutionsPage() {
  if (!service) return null

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-accent mb-6">
            <ServiceIcon icon={service.icon} className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.description}
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Work</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Get underneath the skin of your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Analyze systems and processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Identify problems and inefficiencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Design bespoke solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Fast implementation and turnaround</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
              <p className="text-gray-600 mb-4">
                We're not a marketing company. We're a solutions company and problem solver. 
                We don't just give advice - we get things done. Through systems and processes 
                that Staxxd uses, we're able to understand your business deeply.
              </p>
              <p className="text-gray-600">
                Busy business people don't have time to do all the little things. We solve 
                those problems. Fast turnaround, bespoke projects, anything tech-related. 
                We deliver solutions that work.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              href="/contact"
              className="rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
