import { Outlet } from 'react-router-dom'
import useLenisScroll from '../../hooks/useLenisScroll'
import Footer from './Footer'
import Navbar from './Navbar'

export default function AppLayout() {
  useLenisScroll()

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
