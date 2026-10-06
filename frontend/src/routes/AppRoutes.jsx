import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import LoadingState from '../components/common/LoadingState'
import AdminDashboardPage from '../pages/AdminDashboardPage'

const HomePage = lazy(() => import('../pages/HomePage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('../pages/ServiceDetailPage'))
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'))
const CaseStudyPage = lazy(() => import('../pages/CaseStudyPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const BlogPage = lazy(() => import('../pages/BlogPage'))
const BlogArticlePage = lazy(() => import('../pages/BlogArticlePage'))
const CareersPage = lazy(() => import('../pages/CareersPage'))
const JobDetailPage = lazy(() => import('../pages/JobDetailPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const HealthCheckupPage = lazy(() => import('../pages/HealthCheckupPage'))
const ProjectPlanningPage = lazy(() => import('../pages/ProjectPlanningPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-[#050505]"><LoadingState text="Loading experience..." /></div>}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:jobSlug" element={<JobDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/business-health-checkup" element={<HealthCheckupPage />} />
          <Route path="/software-project-planning-guide" element={<ProjectPlanningPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
