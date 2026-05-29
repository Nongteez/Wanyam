import { ArrowUpRight } from 'lucide-react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/ui/Reveal'
import { TEAM } from '../data/site'

export default function Team() {
  return (
    <Section
      id="team"
      className="border-t border-white/[0.04] bg-[#0a0a0a]/40"
    >
      <Container>
        <SectionHeader
          eyebrow="ININ Studio"
          title="Our Team"
          description="The creators behind WANYAM — building cinematic Thai horror for a global audience."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-9 xl:grid-cols-5 xl:gap-7">
          {TEAM.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.06}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-white/[0.06] bg-[#111]/60 px-8 py-10 text-center transition-all duration-500 hover:border-[#6b0f0f]/22 hover:bg-[#141414] hover:shadow-[0_0_32px_rgba(139,0,0,0.08)] sm:px-6 sm:py-8 md:px-7 md:py-9">
                <div className="mb-7 h-40 w-40 overflow-hidden rounded-full border border-white/10 shadow-[0_0_24px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#6b0f0f]/30 sm:mb-6 sm:h-28 sm:w-28 md:h-32 md:w-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-[center_22%]"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-['Outfit'] text-base font-semibold uppercase leading-snug tracking-wide text-white sm:text-[13px]">
                  {member.name}
                </h3>
                <p className="mt-3 font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#6b0f0f] sm:text-[10px]">
                  {member.role}
                </p>
                <p className="mt-5 flex-1 text-base leading-relaxed text-[#777] sm:text-sm">
                  {member.quote}
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 font-['Inter'] text-[10px] uppercase tracking-[0.16em] text-[#888] no-underline transition-all duration-500 hover:border-[#6b0f0f]/30 hover:bg-[#6b0f0f]/10 hover:text-white"
                >
                  Connect <ArrowUpRight size={12} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
