import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/ui/Reveal'
import { AWARDS } from '../data/site'

export default function Awards() {
  return (
    <Section id="awards" className="border-y border-white/[0.04] bg-[#0a0a0a]/50">
      <Container>
        <SectionHeader
          eyebrow="Recognition"
          title="Awards & Funding"
          description="Support and selection programs helping bring WANYAM to players worldwide."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {AWARDS.map((award, index) => (
            <Reveal key={award.title} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-[#111]/60 p-7 transition-all duration-500 hover:border-[#6b0f0f]/20 hover:shadow-[0_0_24px_rgba(139,0,0,0.06)]">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-[#666]">
                    {award.year}
                  </p>
                  <span className="rounded-full border border-[#6b0f0f]/20 bg-[#6b0f0f]/10 px-2.5 py-1 font-['Inter'] text-[9px] uppercase tracking-[0.14em] text-[#6b0f0f]">
                    {award.status}
                  </span>
                </div>
                <h3 className="mt-5 font-['Outfit'] text-lg font-semibold leading-snug text-white">
                  {award.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#777]">{award.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
