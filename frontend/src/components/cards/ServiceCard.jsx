import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="group block rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-white/[0.04]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-lg font-semibold text-[#D4AF37]">
        {service.title.charAt(0)}
      </div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
        <span className="text-xl text-[#D4AF37] transition group-hover:translate-x-1">→</span>
      </div>
      <p className="text-sm leading-7 text-white/70">{service.tagline}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.stack.slice(0, 3).map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/70">
            {item}
          </span>
        ))}
      </div>
    </Link>
  )
}
