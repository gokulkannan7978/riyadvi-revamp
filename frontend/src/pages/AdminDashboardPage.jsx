import { useEffect, useState } from 'react'
import Container from '../components/common/Container'

const API_BASE_URL = 'http://localhost:5000/api'

const initialStats = {
  contacts: 0,
  consultations: 0,
  healthCheckups: 0,
  leadMagnets: 0,
  applications: 0,
}

const statCards = [
  {
    key: 'contacts',
    title: 'Contact Enquiries',
  },
  {
    key: 'consultations',
    title: 'Consultations',
  },
  {
    key: 'healthCheckups',
    title: 'Health Checkups',
  },
  {
    key: 'leadMagnets',
    title: 'Lead Magnet Leads',
  },
  {
    key: 'applications',
    title: 'Career Applications',
  },
]

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(initialStats)
  const [contacts, setContacts] = useState([])
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true)
        setError('')

        const [
          contactsResponse,
          consultationsResponse,
          healthResponse,
          leadMagnetResponse,
          applicationsResponse,
        ] = await Promise.all([
          fetch(`${API_BASE_URL}/contact`),
          fetch(`${API_BASE_URL}/consultation`),
          fetch(`${API_BASE_URL}/health-checkup`),
          fetch(`${API_BASE_URL}/lead-magnet`),
          fetch(`${API_BASE_URL}/applications`),
        ])

        const responses = [
          contactsResponse,
          consultationsResponse,
          healthResponse,
          leadMagnetResponse,
          applicationsResponse,
        ]

        const failedResponse = responses.find(
          (response) => !response.ok
        )

        if (failedResponse) {
          throw new Error(
            'Unable to load dashboard data.'
          )
        }

        const [
          contactsData,
          consultationsData,
          healthData,
          leadMagnetData,
          applicationsData,
        ] = await Promise.all(
          responses.map((response) => response.json())
        )

        const contactList =
          contactsData.data || []

        const consultationList =
          consultationsData.data || []

        const healthList =
          healthData.data || []

        const leadMagnetList =
          leadMagnetData.data || []

        const applicationList =
          applicationsData.data || []

        setStats({
          contacts: contactList.length,
          consultations: consultationList.length,
          healthCheckups: healthList.length,
          leadMagnets: leadMagnetList.length,
          applications: applicationList.length,
        })

        setContacts(contactList.slice(0, 5))
        setApplications(applicationList.slice(0, 5))
      } catch (dashboardError) {
        console.error(
          'Dashboard error:',
          dashboardError
        )

        setError(
          dashboardError.message ||
          'Failed to load dashboard data.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])

  return (
    <section className="min-h-screen bg-[#050505] py-20">
      <Container>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Riyadvi Admin
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            Manage enquiries, consultation requests,
            health checkups, leads and career applications.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-red-300">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {statCards.map((card) => (
            <div
              key={card.key}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm text-white/50">
                {card.title}
              </p>

              <p className="mt-4 text-3xl font-semibold text-white">
                {loading
                  ? '—'
                  : stats[card.key]}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Contacts */}
        <div className="mt-12">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-white">
              Recent Contact Enquiries
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Latest enquiries received from the website.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full min-w-[800px] text-left">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Name
                  </th>

                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Email
                  </th>

                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Company
                  </th>

                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Requirement
                  </th>

                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {!loading && contacts.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-5 py-8 text-center text-white/40"
                    >
                      No contact enquiries yet.
                    </td>
                  </tr>
                )}

                {contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="px-5 py-4 text-white">
                      {contact.name}
                    </td>

                    <td className="px-5 py-4 text-white/60">
                      {contact.email}
                    </td>

                    <td className="px-5 py-4 text-white/60">
                      {contact.company || '—'}
                    </td>

                    <td className="px-5 py-4 text-white/60">
                      {contact.requirement || '—'}
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]">
                        {contact.status || 'new'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Career Applications */}
        <div className="mt-12">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-white">
              Recent Career Applications
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Latest candidates who applied for open roles.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full min-w-[800px] text-left">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Name
                  </th>

                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Email
                  </th>

                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Position
                  </th>

                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Phone
                  </th>

                  <th className="px-5 py-4 text-sm font-medium text-white/50">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {!loading && applications.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-5 py-8 text-center text-white/40"
                    >
                      No career applications yet.
                    </td>
                  </tr>
                )}

                {applications.map((application) => (
                  <tr
                    key={application.id}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="px-5 py-4 text-white">
                      {application.name}
                    </td>

                    <td className="px-5 py-4 text-white/60">
                      {application.email}
                    </td>

                    <td className="px-5 py-4 text-white/60">
                      {application.position || '—'}
                    </td>

                    <td className="px-5 py-4 text-white/60">
                      {application.phone || '—'}
                    </td>

                    <td className="px-5 py-4 text-white/60">
                      {application.created_at
                        ? new Date(
                            application.created_at
                          ).toLocaleDateString()
                        : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </Container>
    </section>
  )
}