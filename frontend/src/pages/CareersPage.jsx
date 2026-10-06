import { useMemo, useState } from 'react'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import JobCard from '../components/cards/JobCard'
import { careers } from '../data/careers'

export default function CareersPage() {
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('All')
  const [experience, setExperience] = useState('All')

  const departments = ['All', ...new Set(careers.map((job) => job.department))]
  const experiences = ['All', ...new Set(careers.map((job) => job.experience))]

  const filteredJobs = useMemo(() => {
    return careers.filter((job) => {
      const matchesSearch = `${job.title} ${job.description}`.toLowerCase().includes(search.toLowerCase())
      const matchesDepartment = department === 'All' || job.department === department
      const matchesExperience = experience === 'All' || job.experience === experience
      return matchesSearch && matchesDepartment && matchesExperience
    })
  }, [department, experience, search])

  return (
    <>
      <PageHero
        eyebrow="Join Riyadvi"
        title="Build with a team that values clarity, craft, and growth."
        description="We are building a modern digital studio focused on premium experiences, thoughtful strategy, and measurable business outcomes."
        primaryAction={{ label: 'Apply now', to: '/careers/frontend-developer' }}
      />

      <section className="bg-[#050505] py-20 md:py-24">
        <Container>
          <div className="mb-10 grid gap-4 lg:grid-cols-3">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search roles"
              className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#D4AF37]"
            />
            <select value={department} onChange={(event) => setDepartment(event.target.value)} className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-white outline-none focus:border-[#D4AF37]">
              {departments.map((option) => (
                <option key={option} value={option} className="bg-[#0b0b0b] text-white">{option}</option>
              ))}
            </select>
            <select value={experience} onChange={(event) => setExperience(event.target.value)} className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-white outline-none focus:border-[#D4AF37]">
              {experiences.map((option) => (
                <option key={option} value={option} className="bg-[#0b0b0b] text-white">{option}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredJobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
