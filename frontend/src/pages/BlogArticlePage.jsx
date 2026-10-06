import { Link, useParams } from 'react-router-dom'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import BlogCard from '../components/cards/BlogCard'
import { blogMap, blogs } from '../data/blogs'

export default function BlogArticlePage() {
  const { slug } = useParams()
  const blog = blogMap[slug]

  if (!blog) {
    return (
      <section className="bg-[#050505] py-24">
        <Container className="text-center">
          <h1 className="text-4xl font-semibold text-white">Article not found</h1>
          <Link to="/blog" className="mt-6 inline-block text-[#D4AF37]">Return to blog</Link>
        </Container>
      </section>
    )
  }

  const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 3)

  return (
    <>
      <article className="bg-[#050505] py-20">
        <Container className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
            <span>{blog.category}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{blog.title}</h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/70">{tag}</span>
            ))}
          </div>
          <img src={blog.image} alt={blog.title} className="mt-10 h-[420px] w-full rounded-[2rem] object-cover" />

          <div className="mt-12 space-y-6 text-lg leading-8 text-white/70">
            <p>Businesses often focus on systems, delivery, and marketing separately. The real opportunity comes when all of these work together with a clear strategy and a strong digital story.</p>
            <p>Strong digital transformation is rarely about adding more tools. It is about creating the right operating rhythm — where strategy guides design, design informs product choices, and technology supports growth.</p>
            <p>When businesses are intentional with their digital roadmap, the outcomes become more sustainable: better customer experience, better internal operations, and stronger competitive positioning.</p>
            <p>At Riyadvi, this is the foundation behind our work. We help companies connect their message, product, and growth systems into a more coherent digital experience.</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button to="/contact">Discuss your business</Button>
            <Button variant="secondary" to="/blog">Back to blog</Button>
          </div>
        </Container>
      </article>

      <section className="bg-[#0a0a0a] py-20">
        <Container>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Related articles</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} blog={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
