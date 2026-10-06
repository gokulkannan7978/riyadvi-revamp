import { useMemo, useState } from 'react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'

const steps = [
  'Business Info',
  'Website / Digital Presence',
  'Marketing',
  'Technology',
  'Business Challenges',
  'Submission',
]

const initialForm = {
  businessName: '',
  industry: '',
  website: '',
  seo: '',
  marketing: '',
  tech: '',
  challenges: '',
  name: '',
  email: '',
}

export default function HealthCheckupPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const progress = ((step + 1) / steps.length) * 100

  const currentStepFields = useMemo(() => {
    const fieldMap = {
      0: ['businessName', 'industry'],
      1: ['website', 'seo'],
      2: ['marketing'],
      3: ['tech'],
      4: ['challenges'],
      5: ['name', 'email'],
    }

    return fieldMap[step] || []
  }, [step])

  const validate = () => {
    const nextErrors = {}

    currentStepFields.forEach((field) => {
      if (!form[field]?.trim()) {
        nextErrors[field] = 'This field is required.'
      }
    })

    if (step === 5 && form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Enter a valid email.'
    }

    return nextErrors
  }

  const updateField = (event) => {
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

  const next = () => {
    const nextErrors = validate()

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setStep((current) =>
        Math.min(current + 1, steps.length - 1)
      )
    }
  }

  const previous = () => {
    setErrors({})

    setStep((current) =>
      Math.max(current - 1, 0)
    )
  }

  const handleSubmit = async () => {
    const nextErrors = validate()

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        'http://localhost:5000/api/health-checkup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...form,
            business_name: form.businessName,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
          'Failed to submit health checkup.'
        )
      }

      setSubmitted(true)
      setForm(initialForm)
      setErrors({})
    } catch (error) {
      console.error(
        'Health checkup error:',
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

  if (submitted) {
    return (
      <section className="bg-[#050505] py-24">
        <Container className="mx-auto max-w-3xl rounded-[2rem] border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-8 text-center">

          <h1 className="text-4xl font-semibold text-white">
            Your health checkup has been received.
          </h1>

          <p className="mt-4 text-lg text-white/80">
            We will review your business profile and share
            a growth roadmap soon.
          </p>

          <div className="mt-8 flex justify-center">
            <Button to="/contact">
              Talk to the team
            </Button>
          </div>

        </Container>
      </section>
    )
  }

  return (
    <section className="bg-[#050505] py-20 md:py-24">

      <Container className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">

        {/* Progress */}
        <div className="mb-8">

          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#D4AF37]">

            <span>
              Business Health Checkup
            </span>

            <span>
              {step + 1}/{steps.length}
            </span>

          </div>

          <div className="h-2 w-full rounded-full bg-white/5">

            <div
              className="h-2 rounded-full bg-[#D4AF37] transition-all"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Step title */}
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          {steps[step]}
        </h1>

        {/* Form */}
        <div className="mt-8 space-y-5">

          {/* Step 1 */}
          {step === 0 && (
            <>
              <label className="block text-white/80">
                Business name

                <input
                  name="businessName"
                  value={form.businessName}
                  onChange={updateField}
                  placeholder="Enter your business name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                />

                {errors.businessName && (
                  <span className="mt-2 block text-xs text-red-400">
                    {errors.businessName}
                  </span>
                )}
              </label>

              <label className="block text-white/80">
                Industry

                <input
                  name="industry"
                  value={form.industry}
                  onChange={updateField}
                  placeholder="Example: IT, Healthcare, Education"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                />

                {errors.industry && (
                  <span className="mt-2 block text-xs text-red-400">
                    {errors.industry}
                  </span>
                )}
              </label>
            </>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <>
              <label className="block text-white/80">
                Website / digital presence

                <input
                  name="website"
                  value={form.website}
                  onChange={updateField}
                  placeholder="https://yourwebsite.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                />

                {errors.website && (
                  <span className="mt-2 block text-xs text-red-400">
                    {errors.website}
                  </span>
                )}
              </label>

              <label className="block text-white/80">
                SEO / visibility status

                <input
                  name="seo"
                  value={form.seo}
                  onChange={updateField}
                  placeholder="Tell us about your current SEO"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                />

                {errors.seo && (
                  <span className="mt-2 block text-xs text-red-400">
                    {errors.seo}
                  </span>
                )}
              </label>
            </>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <label className="block text-white/80">
              Current marketing strategy

              <textarea
                name="marketing"
                value={form.marketing}
                onChange={updateField}
                placeholder="Describe your current marketing strategy"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
              />

              {errors.marketing && (
                <span className="mt-2 block text-xs text-red-400">
                  {errors.marketing}
                </span>
              )}
            </label>
          )}

          {/* Step 4 */}
          {step === 3 && (
            <label className="block text-white/80">
              Technology stack or current systems

              <textarea
                name="tech"
                value={form.tech}
                onChange={updateField}
                placeholder="Example: React, Node.js, WordPress, existing software"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
              />

              {errors.tech && (
                <span className="mt-2 block text-xs text-red-400">
                  {errors.tech}
                </span>
              )}
            </label>
          )}

          {/* Step 5 */}
          {step === 4 && (
            <label className="block text-white/80">
              Main challenges

              <textarea
                name="challenges"
                value={form.challenges}
                onChange={updateField}
                placeholder="What are the main challenges your business is facing?"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
              />

              {errors.challenges && (
                <span className="mt-2 block text-xs text-red-400">
                  {errors.challenges}
                </span>
              )}
            </label>
          )}

          {/* Step 6 */}
          {step === 5 && (
            <>
              <label className="block text-white/80">
                Contact name

                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                />

                {errors.name && (
                  <span className="mt-2 block text-xs text-red-400">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="block text-white/80">
                Contact email

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                />

                {errors.email && (
                  <span className="mt-2 block text-xs text-red-400">
                    {errors.email}
                  </span>
                )}
              </label>
            </>
          )}

        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap justify-between gap-4">

          <Button
            variant="secondary"
            onClick={previous}
            type="button"
          >
            Previous
          </Button>

          {step < steps.length - 1 ? (
            <Button
              onClick={next}
              type="button"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              type="button"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          )}

        </div>

      </Container>

    </section>
  )
}