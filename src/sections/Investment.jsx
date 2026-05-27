import { Handshake, Mail } from 'lucide-react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import bgImage from '../assets/m7.jpg'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Investment() {
  return (
    <Section id="investment" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="h-full w-full object-cover opacity-[0.06]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/95 to-[#070707]" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-['Inter'] text-[11px] uppercase tracking-[0.28em] text-[#666]">
              Partner With Us
            </p>
            <h2 className="mt-4 font-['Outfit'] text-3xl font-bold leading-tight text-white md:text-5xl">
              Join us in building the future of{' '}
              <span className="text-[#6b0f0f]">Thai horror games</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#888] md:text-[15px]">
              We welcome publishers, investors, and creative partners to collaborate with ININ Studio
              and support WANYAM&apos;s journey to a global audience.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button type="button" onClick={() => scrollTo('contact')}>
                <Mail size={16} />
                Contact Us
              </Button>
              <Button type="button" variant="ghost" onClick={() => scrollTo('contact')}>
                <Handshake size={16} />
                Partnership Inquiry
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
