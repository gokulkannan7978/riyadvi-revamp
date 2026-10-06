import { Link } from 'react-router-dom'
import Container from '../common/Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-sm font-bold text-[#D4AF37]">R</div>
              <div>
                <div className="text-lg font-semibold tracking-[0.18em] text-white">RIYADVI</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Premium digital strategy, design, development, and growth systems for ambitious brands.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Solutions</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/app-development">App Development</Link></li>
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services/ar-vr">AR / VR</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Resources</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/business-health-checkup">Business Health Checkup</Link></li>
              <li><Link to="/software-project-planning-guide">Project Planning Guide</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Riyadvi Software Technologies</p>
          <p>Built for premium business growth.</p>
        </div>
      </Container>
    </footer>
  )
}
