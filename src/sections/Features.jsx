import { Cctv, Ghost, Home, Moon } from 'lucide-react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/ui/Reveal'
import { FEATURES } from '../data/site'

const icons = [Moon, Ghost, Cctv, Home]

export default function Features() {
  return (
    <Section id="features" className="border-y border-white/[0.04] bg-[#0a0a0a]/55">
      <Container>
        <SectionHeader
          eyebrow="Core Experience"
          title="Survive Five Nights of Horror"
          description="Take on a seemingly simple house-watching job and uncover the terrifying secrets hidden within."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={feature.title} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-xl border border-white/[0.06] bg-[#111]/60 p-6 transition-all duration-500 hover:border-[#6b0f0f]/20 hover:bg-[#141414] hover:shadow-[0_0_24px_rgba(139,0,0,0.06)]">
                  <Icon className="mb-4 h-6 w-6 text-[#6b0f0f]" strokeWidth={1.5} />
                  <h3 className="font-['Outfit'] text-sm font-semibold uppercase tracking-wide text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-[#777]">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
