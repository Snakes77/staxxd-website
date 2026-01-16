import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProblemSolution />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}
