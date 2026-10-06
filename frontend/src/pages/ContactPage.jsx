import { useState } from 'react'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import FormField from '../components/forms/FormField'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  requirement: '',
  message: ''
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone is required.'
    }

    if (!form.company.trim()) {
      nextErrors.company = 'Company name is required.'
    }

    if (!form.requirement.trim()) {
      nextErrors.requirement = 'Please tell us your requirement.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to submit inquiry.'
        )
      }

      setSubmitted(true)
      setForm(initialForm)
      setErrors({})
    } catch (error) {
      console.error('Contact form error:', error)

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
        eyebrow="Contact"
        title="Let's plan what your next digital chapter should look like."
        description="Tell us about your business, goals, and the challenge you want to solve."
      />

      <section className="bg-[#050505] py-20 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
            <h2 className="text-3xl font-semibold text-white">
              Start a conversation
            </h2>

            <p className="mt-5 text-white/70">
              Whether you need better design, software, growth systems,
              or a complete digital transformation roadmap, we are ready
              to help.
            </p>

            <div className="mt-8 space-y-5 text-sm text-white/70">
              <div>
                📍 Based in a digital-first environment, working globally.
              </div>

              <div>
                ✉️ hello@riyadvi.com
              </div>

              <div>
                📞 +91 98765 43210
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6 md:p-8">

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div className="grid gap-5 md:grid-cols-2">

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

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <FormField
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="Phone number"
                  />

                  <FormField
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    error={errors.company}
                    placeholder="Your company"
                  />

                </div>

                <FormField
                  label="Requirement"
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  error={errors.requirement}
                  placeholder="Website, app, growth, strategy..."
                />

                <FormField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Tell us more."
                  textarea
                />

                <div className="flex items-center gap-4">

                  <Button
                    type="submit"
                    className="min-w-[180px] justify-center"
                  >
                    {loading ? 'Sending...' : 'Send inquiry'}
                  </Button>

                </div>

              </form>

            ) : (

              <div className="rounded-[1.5rem] border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-6 text-[#D4AF37]">
                Your inquiry has been submitted successfully.
                Our team will get back to you soon.
              </div>

            )}

          </div>

        </Container>
      </section>
    </>
  )
}