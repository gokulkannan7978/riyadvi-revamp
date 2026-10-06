import { Link, useParams } from 'react-router-dom'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'
import CaseStudyScene from '../components/3d/CaseStudyScene'
import { portfolioMap } from '../data/portfolio'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = portfolioMap[slug]

  if (!project) {
    return (
      <section className="bg-[#050505] py-24">
        <Container className="text-center">
          <h1 className="text-4xl font-semibold text-white">Project not found</h1>
          <Link to="/portfolio" className="mt-6 inline-block text-[#D4AF37]">Back to portfolio</Link>
        </Container>
      </section>
    )
  }

  return (
    <>
      <section className="bg-[#050505] py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">{project.industry}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{project.client}</h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Book a consultation</Button>
              <Button variant="secondary" to="/portfolio">Back to portfolio</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-4">
            <img src={project.image} alt={project.client} className="h-[440px] w-full rounded-[1.25rem] object-cover" />
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-8">
            <SectionHeading eyebrow="Challenge" title="What needed to change" description={project.challenge} />
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-8">
            <SectionHeading eyebrow="Solution" title="What we delivered" description={project.solution} />
          </div>
        </Container>
      </section>

      <section className="bg-[#050505] py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Impact" title="Business-ready outcomes" />
            <ul className="mt-6 space-y-3">
              {project.results.map((result) => (
                <li key={result} className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-white/75">{result}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-4">
            <CaseStudyScene />
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] py-20">
        <Container>
          <SectionHeading eyebrow="Technologies" title="Core systems used" />
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#D4AF37]">{tech}</span>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
