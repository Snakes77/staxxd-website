import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import ServiceIcon from '@/components/ui/ServiceIcon'

const service = SERVICES.find(s => s.id === 'ai-powered-solutions')

export const metadata = {
  title: 'AI-Powered Solutions - Staxxd | AI Business Solutions',
  description: 'Leverage AI to solve business challenges. We use cutting-edge AI tools to solve problems, automate processes, and create innovative solutions that drive real results.',
}

export default function AIPoweredSolutionsPage() {
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use AI</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>AI-powered automation and workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Intelligent data processing and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Content generation and optimisation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Smart integrations and API connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">✓</span>
                  <span>Intelligent problem-solving and rapid deployment</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Advantage</h2>
              <p className="text-gray-600 mb-4">
                We're experts at leveraging AI to deliver fast, effective solutions. 
                Our approach combines intelligent automation with practical business understanding, 
                delivering results quickly without unnecessary complexity.
              </p>
              <p className="text-gray-600">
                AI allows us to solve problems quickly, automate processes intelligently, 
                and create innovative solutions that drive real business value. Fast turnaround, 
                smart solutions, measurable results.
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
