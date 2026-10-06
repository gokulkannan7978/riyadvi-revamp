import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import ServiceCard from '../components/cards/ServiceCard'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Premium digital services built for business growth."
        description="We combine strategy, design, product thinking, and technology to create digital systems that help ambitious businesses move faster."
        primaryAction={{ label: 'Book a consultation', to: '/contact' }}
        secondaryAction={{ label: 'See our work', to: '/portfolio' }}
      />

      <section className="bg-[#050505] py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Core capabilities"
            title="Strategy-led services that connect product, content, and growth."
            description="Each service is designed to solve a specific business challenge while creating a stronger digital foundation."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
