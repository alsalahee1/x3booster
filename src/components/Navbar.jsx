import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/fuel-booster', label: 'Fuel Booster' },
  { to: '/engine-oil', label: 'Engine Oil' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { total, setOpen: setCartOpen } = useCart()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo" aria-label="X3 S-Performance — Home">
          <img src="/images/logo w.png" alt="X3 S-Performance" className="nav-logo-img" />
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="cart-btn" onClick={() => setCartOpen(true)} aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {total > 0 && <span className="cart-count">{total}</span>}
          </button>
          <Link to="/shop" className="nav-cta btn-primary">Shop Now</Link>
        </div>

        <button className={`nav-burger ${open ? 'open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <Link key={l.to} to={l.to} className={`nav-mobile-link ${location.pathname === l.to ? 'active' : ''}`}>
            {l.label}
          </Link>
        ))}
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <Link to="/shop" className="btn-primary">Shop Now</Link>
          <button className="cart-btn" onClick={() => { setCartOpen(true); setOpen(false) }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {total > 0 && <span className="cart-count">{total}</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}
