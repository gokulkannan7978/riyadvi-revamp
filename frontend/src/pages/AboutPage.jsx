import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import ScrollReveal from '../components/animation/ScrollReveal'
import CaseStudyScene from '../components/3d/CaseStudyScene'

const milestones = [
  { year: '2021', title: 'Riyadvi founded', text: 'The company began with a focus on premium digital strategy and execution for growing businesses.' },
  { year: '2022', title: 'Expanded service offerings', text: 'We strengthened our capabilities across design, development, marketing, and digital systems.' },
  { year: '2023', title: 'Scaled business support', text: 'We helped more brands operationalize digital experiences and improve growth systems.' },
  { year: '2024', title: 'Premium growth partner', text: 'Riyadvi became known for structured digital transformation and brand-led digital expansion.' }
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Riyadvi"
        title="A premium digital partner for ambitious businesses."
        description="Founded in 2021, Riyadvi helps brands define clearer positioning, better experiences, and stronger digital systems that support sustainable growth."
        primaryAction={{ label: 'Start a conversation', to: '/contact' }}
      />

      <section className="bg-[#050505] py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="We build digital experiences that help businesses become easier to trust and easier to grow with."
              description="Our mission is to support founders and business teams with the systems, design thinking, and execution needed to transform technical complexity into business clarity."
            />
            <div className="mt-8 space-y-6 text-white/70">
              <p>Our vision is simple: help businesses communicate more clearly, deliver better experiences, and improve their digital momentum without unnecessary complexity.</p>
              <p>Our values center on clarity, trust, craftsmanship, and measurable business value. We believe premium digital work should be rooted in strategy and not just visual polish.</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-4">
            <CaseStudyScene />
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20 md:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Milestones" title="A growth story rooted in execution." align="center" />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((item) => (
              <ScrollReveal key={item.year}>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#D4AF37]">{item.year}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Need a digital partner with strategy and execution depth?"
        description="We help businesses create digital clarity, stronger positioning, and better customer experiences."
      />
    </>
  )
}
