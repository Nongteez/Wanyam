import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/ui/Reveal'
import { ABOUT_IMAGE } from '../data/site'

export default function About() {
  return (
    <Section id="about">
      <Container className="max-w-[1600px]">
        <SectionHeader
          eyebrow="Overview"
          title="About The Game"
          description="A Thai psychological horror experience set inside an abandoned traditional wooden house."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="aspect-[16/10]">
                <img
                  src={ABOUT_IMAGE}
                  alt="WANYAM cinematic still"
                  className="h-full w-full object-contain bg-[#090909] p-4 md:p-6"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-xl">
              <p className="font-['Inter'] text-[11px] uppercase tracking-[0.28em] text-[#666]">
                Thai Game horror
              </p>
              <h3 className="mt-4 font-['Outfit'] text-2xl font-semibold leading-snug text-white md:text-3xl">
                You are the night guard.
                <span className="text-[#6b0f0f]"> The house is not empty.</span>
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-[#999] md:text-[15px]">
              You were hired to watch a house for five nights. What seemed like a simple job soon turns into a fight for survival as strange events begin to unfold behind every door.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#777]">
              WANYAM is a story-driven survival horror experience that combines surveillance, resource management, and psychological tension. Inspired by Thai folklore and supernatural beliefs, each night reveals new horrors hidden within the house.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
