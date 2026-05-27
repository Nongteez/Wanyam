import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import { STUDIO_STATS } from '../data/site'
import ininLogo from '../assets/Logo/YOLO-TEAM.png'

export default function Studio() {
  return (
    <Section id="studio">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex flex-col items-center lg:items-start">
              <img src={ininLogo} alt="ININ Studio" className="h-28 w-28 object-contain md:h-32 md:w-32" />
              <div className="mt-10 grid w-full max-w-md grid-cols-3 gap-6">
                {STUDIO_STATS.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="font-['Outfit'] text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#666]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-xl">
              <p className="font-['Inter'] text-[11px] uppercase tracking-[0.28em] text-[#666]">
                The Studio
              </p>
              <h2 className="mt-3 font-['Outfit'] text-3xl font-bold text-white md:text-4xl">
                ININ <span className="text-[#6b0f0f]">Studio</span>
              </h2>
              <div className="mt-5 h-px w-16 bg-gradient-to-r from-[#6b0f0f] to-transparent" />
              <p className="mt-6 text-sm leading-relaxed text-[#999] md:text-[15px]">
                ININ Studio is an independent game development studio focused on immersive storytelling,
                psychological horror, and Thai-inspired interactive experiences.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#777]">
                From atmosphere and sound to narrative design, every project is built to feel handcrafted,
                cinematic, and culturally grounded.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
