'use client'

import { useState, useEffect, useRef } from 'react'

export default function ProblemSolution() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const problems = [
    {
      title: 'Never enough hours in the day',
      description: 'You\'re drowning in admin, repetitive tasks, and fire-fighting. The important work gets pushed aside while you handle the urgent. Every day feels like a race against time.',
      solution: 'We automate the repetitive tasks and handle the admin that\'s eating your time. Custom workflows, process automation, and intelligent systems free you up to focus on what actually grows your business. Fast turnaround means you see results quickly.',
    },
    {
      title: 'Tech that doesn\'t work for you',
      description: 'Your systems don\'t talk to each other. You\'re manually moving data between platforms, duplicating work, and wasting hours on tasks that should be automated. Off-the-shelf software doesn\'t fit your unique needs.',
      solution: 'We build bespoke solutions that integrate your systems and eliminate manual work. Custom web applications, Google Apps Scripts, and AI-powered tools that work the way your business works. No more juggling multiple platforms or duplicating effort.',
    },
    {
      title: 'The little things pile up',
      description: 'Small tasks that "only take a minute" add up to hours. Data entry, report generation, email workflows, file management - all eating into time you should spend on growing your business.',
      solution: 'We handle the little things so you don\'t have to. Automated workflows, smart integrations, and custom scripts that eliminate those "quick tasks" that add up. We get underneath the skin of your business and solve the problems you don\'t have time for.',
    },
    {
      title: 'No time to think strategically',
      description: 'You\'re so busy doing that you can\'t step back and see the bigger picture. Opportunities get missed, inefficiencies go unnoticed, and growth stalls because you\'re stuck in the weeds.',
      solution: 'We give you that time back. By automating processes and solving operational challenges, you can finally step back and think strategically. We handle the systems and processes, you focus on growth and opportunity. That\'s how we help you make money.',
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-gradient-to-b from-brand-secondary/10 via-white to-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Dramatic animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/10" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Content */}
          <div>
            <div className="inline-block mb-4 animate-fade-in">
              <span className="px-3 py-1.5 text-xs font-bold text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20">
                THE CHALLENGE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 animate-fade-in-delay">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                You Don't Have to
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-accent via-[#e01e4f] to-brand-accent bg-clip-text text-transparent">
                Do It Alone
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-7 text-gray-600 animate-fade-in-delay-2 font-light">
              Running a business in today's world means juggling endless tasks, tight deadlines, and constant pressure. You're pulled in every direction - managing operations, dealing with tech issues, handling admin, and trying to grow. There's never enough time, and the little things keep piling up. Sound familiar?
            </p>
            <p className="mt-4 text-base sm:text-lg leading-7 text-gray-600 animate-fade-in-delay-2 font-light">
              At Staxxd, we see the world of business differently, through different lenses. Where you see problems, we find solutions. We understand what busy business owners face because we've been there - from entry-level to C-suite. We listen, analyse deeply, and deliver actionable solutions that actually work.
            </p>
          </div>

          {/* Right side - Accordion */}
          <div className="w-full">
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <AccordionItem
                  key={problem.title}
                  problem={problem}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AccordionItem({ 
  problem, 
  index, 
  isOpen, 
  onToggle 
}: { 
  problem: { title: string; description: string; solution: string }; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-xl border-2 transition-all duration-500 overflow-hidden ${
        isOpen 
          ? 'border-brand-accent/50 shadow-lg shadow-brand-accent/30' 
          : 'border-gray-100 hover:border-brand-accent/30'
      } ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-accent/5 rounded-xl transition-opacity duration-500 pointer-events-none ${
        isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`} />
      <div className={`absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-xl blur-xl transition-opacity duration-500 -z-10 pointer-events-none ${
        isOpen ? 'opacity-20' : 'opacity-0 group-hover:opacity-20'
      }`} />
      
      <button
        onClick={onToggle}
        type="button"
        className="w-full p-4 sm:p-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-accent/20 rounded-xl relative z-10"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent to-brand-accent-light transition-all duration-300 flex-shrink-0 ${
              isOpen ? 'scale-110 rotate-6 shadow-lg shadow-brand-accent/50' : 'group-hover:scale-110 group-hover:rotate-3'
            }`}>
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold leading-6 transition-colors ${
              isOpen ? 'text-brand-accent' : 'text-gray-900 group-hover:text-brand-accent'
            }`}>
              {problem.title}
            </h3>
          </div>
          <div className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}>
            <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 space-y-4">
          <div>
            <p className="text-base leading-7 text-gray-600 mb-3">
              {problem.description}
            </p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm font-semibold text-brand-accent mb-2">How We Solve This:</p>
            <p className="text-base leading-7 text-gray-700">
              {problem.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
