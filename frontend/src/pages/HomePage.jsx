import { useState } from 'react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import ScrollReveal from '../components/animation/ScrollReveal'
import HeroScene from '../components/3d/HeroScene'
import TransformationScene from '../components/3d/TransformationScene'
import EcosystemScene from '../components/3d/EcosystemScene'
import ServiceCard from '../components/cards/ServiceCard'
import PortfolioCard from '../components/cards/PortfolioCard'
import { services } from '../data/services'
import { portfolio } from '../data/portfolio'

const transformationStages = [
  'Business Challenge',
  'Strategy',
  'Design',
  'Technology',
  'Launch',
  'Growth'
]

const metrics = [
  { label: 'Since 2021', value: '2021' },
  { label: 'Projects supported', value: '50+' },
  { label: 'Growth systems', value: '360°' },
  { label: 'Business focus', value: 'B2B' }
]

const ecosystemStack = ['React', 'Next.js', 'Node.js', 'MongoDB', 'MySQL', 'JavaScript', 'Three.js', 'React Three Fiber', 'WordPress']

export default function HomePage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  return (
    <>
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),transparent_35%)]" />
        <Container className="relative grid gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">Riyadvi Software Technologies</p>
            <h1 className="text-4xl font-semibold tracking-[-0.07em] text-white md:text-6xl">
              Custom Software & Digital Solutions to Grow Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              We help ambitious brands transform ideas into premium digital experiences, efficient systems, and measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Book a Free Consultation</Button>
              <Button variant="secondary" to="/services">Explore Our Solutions</Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-2xl font-semibold text-[#D4AF37]">{metric.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect()
            setMouse({
              x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
              y: ((event.clientY - rect.top) / rect.height - 0.5) * 2
            })
          }}>
            <div className="absolute inset-6 rounded-full bg-[#D4AF37]/10 blur-[90px]" />
            <HeroScene pointer={mouse} />
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20 md:py-24">
        <Container>
          <ScrollReveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Digital transformation"
              title="From challenge to measurable momentum."
              description="We guide businesses through clearer strategy, stronger design, smarter systems, and sustainable growth."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ScrollReveal className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
              <div className="mb-8 max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Our approach</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">A roadmap built for business clarity.</h3>
              </div>
              <div className="space-y-6">
                {transformationStages.map((stage, index) => (
                  <div key={stage} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-xs font-semibold text-[#D4AF37]">
                      {index + 1}
                    </div>
                    <div className="flex-1 border-b border-white/10 pb-3">
                      <div className="text-sm uppercase tracking-[0.18em] text-white/55">{stage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="rounded-[2rem] border border-white/10 bg-[#090909] p-4 md:p-6">
              <TransformationScene />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#050505] py-20 md:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Services"
              title="Digital systems designed for real business growth."
              description="From strategy to execution, we help brands build the technology, experiences, and marketing systems that turn ambition into traction."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ScrollReveal key={service.slug}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Technology ecosystem"
              title="Systems that connect strategy, product, and growth."
              description="We help businesses choose and connect the tools, platforms, and digital experiences that support sustainable operational momentum."
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-[2rem] border border-white/10 bg-[#090909] p-4 md:p-6">
              <EcosystemScene />
            </div>
          </ScrollReveal>
        </Container>

        <Container className="mt-10">
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5">
            {ecosystemStack.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-center text-sm uppercase tracking-[0.16em] text-white/75">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#050505] py-20 md:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Riyadvi"
              title="Strategy, design, and technology built for sustainable business momentum."
              description="We work as a growth partner — helping businesses reduce friction, improve digital confidence, and scale with more clarity."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Since 2021', text: 'Helping businesses build stronger digital foundations from the start.' },
              { title: 'Business Health Checkup', text: 'We diagnose digital gaps, conversion issues, and growth bottlenecks before recommending a route.' },
              { title: 'End-to-end journey', text: 'From strategy and design to technology and optimization, we manage the full path forward.' }
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#D4AF37]">{item.title.charAt(0)}</div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20 md:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Portfolio preview"
              title="Selected work for ambitious brands."
              description="We create premium digital experiences that help businesses explain value clearly and grow with more confidence."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolio.slice(0, 3).map((project) => (
              <ScrollReveal key={project.slug}>
                <PortfolioCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/portfolio">View all projects</Button>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Let’s build your growth engine"
        title="Ready to transform how your business grows online?"
        description="From strategy to design and digital execution, Riyadvi helps businesses turn complexity into momentum."
      />
    </>
  )
}
