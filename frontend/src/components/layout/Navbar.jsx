import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../common/Button'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-sm font-bold text-[#D4AF37]">R</div>
          <div>
            <div className="text-lg font-semibold tracking-[0.18em]">RIYADVI</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'text-[#D4AF37]' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact">Book a Free Consultation</Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050505] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-white/70">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'text-[#D4AF37]' : '')}>
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-3 justify-center">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
