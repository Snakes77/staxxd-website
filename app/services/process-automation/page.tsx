import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import ServiceIcon from '@/components/ui/ServiceIcon'

const service = SERVICES.find(s => s.id === 'process-automation')

export const metadata = {
  title: 'Process Automation - Staxxd | Automate Business Processes',
  description: 'Automate the little things so you can focus on what matters. Fast turnaround on bespoke automation projects that save time and money.',
}

export default function ProcessAutomationPage() {
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Automate</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Repetitive manual tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Data entry and processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Workflow and approval processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Reporting and data aggregation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>System integrations and connections</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Benefits</h2>
              <p className="text-gray-600 mb-4">
                Busy business people don't have time for the little things. Process automation 
                eliminates those time-consuming tasks, freeing you to focus on growing your business 
                and serving your customers.
              </p>
              <p className="text-gray-600">
                We create bespoke automation solutions that work with your existing systems. 
                Fast turnaround means you see results quickly. Less manual work means more 
                time for what matters.
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
