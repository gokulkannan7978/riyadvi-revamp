export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">{description}</p>}
    </div>
  )
}
