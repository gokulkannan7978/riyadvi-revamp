import { Link } from 'react-router-dom'

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.slug}`} className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] transition hover:border-[#D4AF37]/50 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-[#D4AF37]/40 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#D4AF37]">
          {blog.category}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/50">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>
        <h3 className="text-2xl font-semibold leading-tight text-white">{blog.title}</h3>
        <p className="text-sm leading-7 text-white/70">{blog.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
