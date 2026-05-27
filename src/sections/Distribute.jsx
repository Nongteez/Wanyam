import { ExternalLink } from 'lucide-react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/ui/Reveal'
import { PLATFORMS } from '../data/site'

export default function Distribute() {
  return (
    <Section id="distribute" className="bg-[#0a0a0a]/50">
      <Container>
        <SectionHeader
          eyebrow="Get The Game"
          title="Available On"
          description="Follow WANYAM on your preferred PC platform."
        />

        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-10">
          {PLATFORMS.map((platform, index) => (
            <Reveal key={platform.name} delay={index * 0.08}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-2xl border border-white/[0.06] bg-[#111]/70 px-8 py-10 text-center no-underline transition-all duration-500 hover:border-[#6b0f0f]/25 hover:shadow-[0_0_36px_rgba(139,0,0,0.14)] hover:-translate-y-0.5"
              >
                <div className="mb-6 flex h-16 w-full items-center justify-center">
                  <img
                    src={platform.icon}
                    alt={`${platform.name} logo`}
                    className="max-h-14 w-auto max-w-[140px] object-contain opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:drop-shadow-[0_0_18px_rgba(220,20,60,0.25)]"
                  />
                </div>
                <h3 className="font-['Outfit'] text-lg font-semibold text-white">{platform.name}</h3>
                <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-[#777]">
                  {platform.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-[#666] transition-colors duration-500 group-hover:text-[#6b0f0f]">
                  Visit store <ExternalLink size={12} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
