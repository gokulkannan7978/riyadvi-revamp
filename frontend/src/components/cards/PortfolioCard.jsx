import { Link } from 'react-router-dom'

export default function PortfolioCard({ project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] text-left transition hover:-translate-y-1 hover:border-[#D4AF37]/50">
      <div className="relative h-72 overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">
          {project.industry}
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Client</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.client}</h3>
          </div>
          <span className="text-xl text-[#D4AF37] transition group-hover:translate-x-1">→</span>
        </div>
        <p className="text-sm leading-7 text-white/70">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-white/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
