import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', onClick, type = 'button' }) {
  const classes = [
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.04em] transition duration-300 ease-out',
    variant === 'primary' ? 'bg-[#D4AF37] text-black hover:bg-[#e7c95b]' : '',
    variant === 'secondary' ? 'border border-white/15 bg-white/5 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]' : '',
    variant === 'ghost' ? 'bg-black text-white hover:bg-[#111111]' : '',
    variant === 'light' ? 'bg-white text-black hover:bg-[#f3f3f3]' : '',
    className
  ].join(' ')

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
