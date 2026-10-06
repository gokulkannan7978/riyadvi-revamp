import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import PortfolioCard from '../components/cards/PortfolioCard'
import { portfolio } from '../data/portfolio'

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that helps ambitious brands become clearer and stronger."
        description="Our project portfolio is built around communication, trust, growth strategy, and better digital execution."
        primaryAction={{ label: 'Start a project', to: '/contact' }}
      />

      <section className="bg-[#050505] py-20 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
