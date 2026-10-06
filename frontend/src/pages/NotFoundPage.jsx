import { Link } from 'react-router-dom'
import Container from '../components/common/Container'

export default function NotFoundPage() {
  return (
    <section className="bg-[#050505] py-24">
      <Container className="text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-white/70">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#e7c95b]">Return home</Link>
      </Container>
    </section>
  )
}
