import { Link } from 'react-router-dom'

export default function JobCard({ job }) {
  return (
    <Link to={`/careers/${job.slug}`} className="group block rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/[0.04]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">
          {job.department}
        </span>
        <span className="text-sm text-white/60">{job.type}</span>
      </div>
      <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/60">
        <span>{job.location}</span>
        <span>•</span>
        <span>{job.experience}</span>
      </div>
      <p className="mt-5 text-sm leading-7 text-white/70">{job.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-medium text-[#D4AF37]">View role</span>
        <span className="text-xl text-[#D4AF37] transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  )
}
