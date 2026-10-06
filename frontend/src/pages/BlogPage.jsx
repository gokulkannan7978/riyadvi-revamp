import { useMemo, useState } from 'react'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import BlogCard from '../components/cards/BlogCard'
import { blogs } from '../data/blogs'

export default function BlogPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(blogs.map((blog) => blog.category))]

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory = category === 'All' || blog.category === category
      const matchesQuery = `${blog.title} ${blog.excerpt} ${blog.tags.join(' ')}`
        .toLowerCase()
        .includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas, strategy, and practical digital thinking."
        description="Explore articles on digital transformation, design, marketing, technology, and growth systems."
        primaryAction={{ label: 'Book a consultation', to: '/contact' }}
      />

      <section className="bg-[#050505] py-20 md:py-24">
        <Container>
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              className="w-full rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#D4AF37]"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-white outline-none focus:border-[#D4AF37]"
            >
              {categories.map((option) => (
                <option key={option} value={option} className="bg-[#0b0b0b] text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
