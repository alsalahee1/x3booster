import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import WhatsAppButton from './components/WhatsAppButton'
import Toast from './components/Toast'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import FuelBooster from './pages/FuelBooster'
import EngineOil from './pages/EngineOil'

function PageTransition({ children }) {
  const location = useLocation()
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    const t = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
    return () => cancelAnimationFrame(t)
  }, [location.pathname])
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  return <div ref={ref}>{children}</div>
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollProgress />
        <div className="noise" />
        <Navbar />
        <CartDrawer />
        <Toast />
        <WhatsAppButton />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fuel-booster" element={<FuelBooster />} />
            <Route path="/engine-oil" element={<EngineOil />} />
          </Routes>
        </PageTransition>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}
