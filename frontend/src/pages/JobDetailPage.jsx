import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import FormField from '../components/forms/FormField'
import { careersMap } from '../data/careers'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  portfolio: '',
  message: '',
}

export default function JobDetailPage() {
  const { jobSlug } = useParams()
  const job = careersMap[jobSlug]

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!job) {
    return (
      <section className="bg-[#050505] py-24">
        <Container className="text-center">
          <h1 className="text-4xl font-semibold text-white">
            Opportunity not found
          </h1>

          <Link
            to="/careers"
            className="mt-6 inline-block text-[#D4AF37]"
          >
            Back to careers
          </Link>
        </Container>
      </section>
    )
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (
      !form.email.trim() ||
      !/\S+@\S+\.\S+/.test(form.email)
    ) {
      nextErrors.email = 'Enter a valid email.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone is required.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Tell us a bit about yourself.'
    }

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: '',
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        'http://localhost:5000/api/applications',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...form,
            position: job.title,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
          'Failed to submit application.'
        )
      }

      setSubmitted(true)
      setForm(initialForm)
      setErrors({})
    } catch (error) {
      console.error(
        'Career application error:',
        error
      )

      alert(
        error.message ||
        'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="bg-[#050505] py-20">

        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">

          {/* Job Information */}
          <div>

            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              {job.department}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              {job.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.experience}</span>
              <span>•</span>
              <span>{job.type}</span>
            </div>

            <p className="mt-8 max-w-xl text-lg text-white/70">
              {job.description}
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">

              {/* Responsibilities */}
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Responsibilities
                </h2>

                <ul className="mt-4 space-y-3 text-white/70">
                  {job.responsibilities.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Requirements
                </h2>

                <ul className="mt-4 space-y-3 text-white/70">
                  {job.requirements.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Application Form */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">

            <h2 className="text-2xl font-semibold text-white">
              Apply for this role
            </h2>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >

                <FormField
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your name"
                />

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                />

                <FormField
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="Phone number"
                />

                <FormField
                  label="Portfolio / LinkedIn"
                  name="portfolio"
                  value={form.portfolio}
                  onChange={handleChange}
                  placeholder="Optional"
                />

                <FormField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Tell us why you are a fit."
                  textarea
                />

                <Button
                  type="submit"
                  className="w-full justify-center"
                >
                  {loading
                    ? 'Submitting...'
                    : 'Submit application'}
                </Button>

              </form>
            ) : (
              <div className="mt-6 rounded-[1.5rem] border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-5 text-[#D4AF37]">

                <h3 className="text-xl font-semibold">
                  Application submitted successfully!
                </h3>

                <p className="mt-2 text-white/70">
                  Your application has been recorded.
                  Our team will reach out soon.
                </p>

              </div>
            )}

          </div>

        </Container>

      </section>
    </>
  )
}