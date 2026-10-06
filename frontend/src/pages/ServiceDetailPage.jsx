import { Link, useParams } from 'react-router-dom'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'
import CaseStudyScene from '../components/3d/CaseStudyScene'
import { serviceMap } from '../data/services'
import { portfolio } from '../data/portfolio'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = serviceMap[slug]

  if (!service) {
    return (
      <section className="bg-[#050505] py-24">
        <Container className="text-center">
          <h1 className="text-4xl font-semibold text-white">Service not found</h1>
          <Link to="/services" className="mt-6 inline-block text-[#D4AF37]">Return to services</Link>
        </Container>
      </section>
    )
  }

  const related = portfolio.slice(0, 2)

  return (
    <>
      <section className="bg-[#050505]">
        <Container className="grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">{service.title}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">{service.tagline}</h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Get a quote</Button>
              <Button variant="secondary" to="/portfolio">See case studies</Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-4">
            <CaseStudyScene />
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-8">
            <SectionHeading eyebrow="Problem" title="The challenge we solve" description={service.problem} />
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-8">
            <SectionHeading eyebrow="Solution" title="The Riyadvi response" description={service.solution} />
          </div>
        </Container>
      </section>

      <section className="bg-[#050505] py-20">
        <Container>
          <SectionHeading eyebrow="Key features" title="Built around tangible business outcomes." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {service.features.map((feature) => (
              <div key={feature} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 text-base text-white/75">
                {feature}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Industry use cases" title="Built for the moments that matter most." />
            <ul className="mt-6 space-y-3 text-white/75">
              {service.industries.map((industry) => (
                <li key={industry} className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-3">{industry}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Technology stack" title="Tools and systems that support efficient execution." />
            <ul className="mt-6 space-y-3 text-white/75">
              {service.stack.map((item) => (
                <li key={item} className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-3 text-[#D4AF37]">{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-[#050505] py-20">
        <Container>
          <SectionHeading eyebrow="Process" title="A practical path from idea to execution." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {service.process.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5">
                <div className="mb-4 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">0{index + 1}</div>
                <div className="text-xl font-semibold text-white">{step}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20">
        <Container>
          <SectionHeading eyebrow="Related work" title="Examples of business impact." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((project) => (
              <Link key={project.slug} to={`/portfolio/${project.slug}`} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{project.industry}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.client}</h3>
                  </div>
                  <span className="text-2xl text-[#D4AF37]">→</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#050505] py-20">
        <Container>
          <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(255,255,255,0.02),rgba(0,0,0,0.9))] p-8 md:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">Ready to move</p>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Let’s shape a smarter digital experience for your business.</h2>
              </div>
              <Button to="/contact">Get a quote</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
