import { COMPANY_INFO } from '@/lib/constants'
import Logo from '@/components/ui/Logo'
import FeaturedImage from '@/components/sections/FeaturedImage'

export const metadata = {
  title: 'About Staxxd - 20+ Years Business Solutions Experience | UK Consultancy',
  description: 'Staxxd combines 20+ years of hands-on business experience with data-driven problem solving. From entry-level to C-suite expertise, we deliver fast, custom tech solutions for UK businesses.',
  keywords: 'business consultancy UK, experienced problem solver, tech solutions specialist, business improvement consultant, data-driven solutions, fast business solutions, UK business advisor',
}

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white via-brand-light/20 to-white">
      {/* Behind the Scenes Section */}
      <FeaturedImage />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - About Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">Staxxd</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-8 text-gray-600 font-light mb-6">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {COMPANY_INFO.mission}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey from entry-level roles to C-suite positions gives us unique insight into business challenges at every level. 
              We use this knowledge, combined with analytical thinking and modern tools, to create solutions that make a real difference 
              to your bottom line.
            </p>
          </div>
          
          {/* Right side - Content Cards */}
          <div>
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-brand-accent/50">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 group-hover:text-brand-accent transition-colors">
                Our Approach
              </h2>
              <ul className="space-y-5 text-lg text-gray-600">
                <li className="flex items-start group/item">
                  <span className="text-2xl text-brand-accent mr-3 group-hover/item:scale-125 transition-transform">✓</span>
                  <span className="group-hover/item:text-brand-accent transition-colors">We get underneath the skin of your business</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-2xl text-brand-accent mr-3 group-hover/item:scale-125 transition-transform">✓</span>
                  <span className="group-hover/item:text-brand-accent transition-colors">Fast turnaround on bespoke solutions</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-2xl text-brand-accent mr-3 group-hover/item:scale-125 transition-transform">✓</span>
                  <span className="group-hover/item:text-brand-accent transition-colors">Systems and processes that work</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-2xl text-brand-accent mr-3 group-hover/item:scale-125 transition-transform">✓</span>
                  <span className="group-hover/item:text-brand-accent transition-colors">AI-powered solutions that drive results</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-2xl text-brand-accent mr-3 group-hover/item:scale-125 transition-transform">✓</span>
                  <span className="group-hover/item:text-brand-accent transition-colors">Problem solvers, not just consultants</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
