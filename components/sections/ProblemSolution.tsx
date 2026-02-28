'use client'

import { useState } from 'react'
import { InteractiveImageAccordion } from '@/components/ui/interactive-image-accordion'

export default function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState(0)

  const problems = [
    {
      id: 1,
      title: 'Never enough hours in the day',
      description: 'You\'re drowning in admin, repetitive tasks, and fire-fighting. The important work gets pushed aside while you handle the urgent. Every day feels like a race against time.',
      solution: 'We automate the repetitive tasks and handle the admin that\'s eating your time. Custom workflows, process automation, and intelligent systems free you up to focus on what actually grows your business. Fast turnaround means you see results quickly.',
      imageUrl: '/images/chameleon-1.jpg',
    },
    {
      id: 2,
      title: 'Tech that doesn\'t work for you',
      description: 'Your systems don\'t talk to each other. You\'re manually moving data between platforms, duplicating work, and wasting hours on tasks that should be automated. Off-the-shelf software doesn\'t fit your unique needs.',
      solution: 'We build bespoke solutions that integrate your systems and eliminate manual work. Custom web applications, Google Apps Scripts, and AI-powered tools that work the way your business works. No more juggling multiple platforms or duplicating effort.',
      imageUrl: '/images/chameleon-2.jpg',
    },
    {
      id: 3,
      title: 'The little things pile up',
      description: 'Small tasks that "only take a minute" add up to hours. Data entry, report generation, email workflows, file management - all eating into time you should spend on growing your business.',
      solution: 'We handle the little things so you don\'t have to. Automated workflows, smart integrations, and custom scripts that eliminate those "quick tasks" that add up. We get underneath the skin of your business and solve the problems you don\'t have time for.',
      imageUrl: '/images/chameleon-3.jpg',
    },
    {
      id: 4,
      title: 'No time to think strategically',
      description: 'You\'re so busy doing that you can\'t step back and see the bigger picture. Opportunities get missed, inefficiencies go unnoticed, and growth stalls because you\'re stuck in the weeds.',
      solution: 'We give you that time back. By automating processes and solving operational challenges, you can finally step back and think strategically. We handle the systems and processes, you focus on growth and opportunity. That\'s how we help you make money.',
      imageUrl: '/images/chameleon-4.jpg',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-brand-secondary/10 via-white to-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Dramatic animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/10" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left side - Content */}
          <div className="flex flex-col h-full">
            <div className="inline-block mb-4 animate-fade-in">
              <span className="px-3 py-1.5 text-xs font-bold text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20">
                THE CHALLENGE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 animate-fade-in-delay">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                You Don't Have to
              </span>{' '}
              <span className="bg-gradient-to-r from-brand-accent via-[#e01e4f] to-brand-accent bg-clip-text text-transparent">
                Do It Alone
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-600 animate-fade-in-delay-2 font-light mb-8">
              Running a business in today's world means juggling endless tasks, tight deadlines, and constant pressure. At Staxxd, we see the world of business differently. Where you see problems, we find solutions.
            </p>

            {/* Active Item Content Card */}
            <div className="mt-auto bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm relative overflow-hidden group flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/5 pointer-events-none" />
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-xl blur-xl opacity-10 pointer-events-none" />

              <div className="relative z-10 transition-all duration-500 animate-fade-in" key={activeIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent to-brand-accent-light flex-shrink-0">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  {problems[activeIndex].title}
                </h3>
                <p className="text-base leading-7 text-gray-700 mb-6 font-medium">
                  {problems[activeIndex].description}
                </p>
                <div className="border-t border-gray-100 pt-5">
                  <p className="text-sm font-bold text-brand-accent mb-2 uppercase tracking-wide">How We Solve This</p>
                  <p className="text-base leading-7 text-gray-600">
                    {problems[activeIndex].solution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image Accordion */}
          <div className="w-full flex items-center justify-center pt-8 lg:pt-0">
            <InteractiveImageAccordion
              items={problems}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
