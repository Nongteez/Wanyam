import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/ui/Reveal'
import { SOCIALS } from '../data/site'

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeader
          eyebrow="Community"
          title="Contact & Social"
          description="Follow ININ Studio for development updates, media, and announcements."
        />

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {SOCIALS.map((social, index) => (
            <Reveal key={social.name} delay={index * 0.05}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 no-underline"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-500 group-hover:border-[#6b0f0f]/30 group-hover:bg-[#6b0f0f]/10 group-hover:shadow-[0_0_20px_rgba(107,15,15,0.12)]">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-6 w-6 object-contain opacity-80 transition group-hover:opacity-100"
                  />
                </span>
                <span className="font-['Inter'] text-[10px] uppercase tracking-[0.18em] text-[#666] transition group-hover:text-[#6b0f0f]">
                  {social.name}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
