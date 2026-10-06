import Container from './Container'
import Button from './Button'

export default function CTASection({ eyebrow, title, description, primaryLabel = 'Book a Free Consultation', primaryTo = '/contact' }) {
  return (
    <section className="border-t border-white/10 bg-[#0a0a0a] py-20 md:py-24">
      <Container>
        <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(255,255,255,0.02),rgba(0,0,0,0.85))] p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">{eyebrow}</p>}
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">{title}</h2>
              {description && <p className="mt-4 max-w-xl text-base text-white/70">{description}</p>}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button to={primaryTo}>{primaryLabel}</Button>
              <Button variant="secondary" to="/services">
                Explore solutions
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
