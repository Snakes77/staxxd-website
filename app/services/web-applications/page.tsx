import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import ServiceIcon from '@/components/ui/ServiceIcon'

const service = SERVICES.find(s => s.id === 'web-applications')

export const metadata = {
  title: 'Web Applications - Staxxd | Custom Web App Development',
  description: 'Custom web applications tailored to your business needs. Streamline operations, automate processes, and solve complex problems with bespoke solutions from Staxxd.',
}

export default function WebApplicationsPage() {
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Build</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Custom web applications for specific business needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Process automation and workflow solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Data management and reporting systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Integration solutions connecting your tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Bespoke solutions tailored to your business</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-gray-600 mb-4">
                We understand that busy business people need solutions, not complications. 
                We get underneath the skin of your business to understand what you really need, 
                then we build it. Fast turnaround, bespoke development, results-driven.
              </p>
              <p className="text-gray-600">
                Using AI-powered tools and smart development practices, we create web applications 
                that solve real problems. We're experts at leveraging technology to deliver 
                fast, effective solutions that drive measurable business results.
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
