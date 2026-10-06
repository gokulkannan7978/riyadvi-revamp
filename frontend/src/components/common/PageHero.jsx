import Container from './Container'
import Button from './Button'

export default function PageHero({ eyebrow, title, description, primaryAction, secondaryAction }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),transparent_48%)]" />
      <Container className="relative py-24 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">{eyebrow}</p>}
          <h1 className="text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg text-white/70">{description}</p>}
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryAction && <Button to={primaryAction.to}>{primaryAction.label}</Button>}
              {secondaryAction && (
                <Button variant="secondary" to={secondaryAction.to}>
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
