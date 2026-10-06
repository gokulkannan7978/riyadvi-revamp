import { useState } from 'react'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import FormField from '../components/forms/FormField'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
}

export default function ProjectPlanningPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!form.company.trim()) {
      nextErrors.company = 'Company is required.'
    }

    if (
      !form.email.trim() ||
      !/\S+@\S+\.\S+/.test(form.email)
    ) {
      nextErrors.email = 'Valid email is required.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone is required.'
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
        'http://localhost:5000/api/lead-magnet',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
          'Failed to submit lead magnet request.'
        )
      }

      setSubmitted(true)
      setForm(initialForm)
      setErrors({})
    } catch (error) {
      console.error(
        'Lead magnet error:',
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
      <PageHero
        eyebrow="Project planning guide"
        title="Download the framework for smarter digital planning."
        description="Use this guide to structure the right questions, milestones, and priorities before building your next digital project."
      />

      <section className="bg-[#050505] py-20 md:py-24">

        <Container className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
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
                label="Company"
                name="company"
                value={form.company}
                onChange={handleChange}
                error={errors.company}
                placeholder="Your company"
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

              <Button
                type="submit"
                className="w-full justify-center"
              >
                {loading
                  ? 'Submitting...'
                  : 'Get the guide'}
              </Button>

            </form>
          ) : (
            <div className="rounded-[1.5rem] border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-6 text-center text-[#D4AF37]">

              <h2 className="text-2xl font-semibold">
                Thank you!
              </h2>

              <p className="mt-3 text-white/80">
                Your project planning guide request
                has been recorded successfully.
              </p>

            </div>
          )}

        </Container>

      </section>
    </>
  )
}