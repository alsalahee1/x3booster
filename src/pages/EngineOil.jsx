import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './ProductDetail.css'

const PRODUCT = { id: 2, name: 'X3 Engine Oil Booster', img: '/images/oil-bottle.jpg' }

const specs = [
  { label: 'Technology', value: 'Xagtec Molecular Bond — S-Performance' },
  { label: 'Friction Reduction', value: 'Up to 40%' },
  { label: 'Dosage', value: 'Ultra-low concentration' },
  { label: 'Effect', value: 'Immediate protective film' },
  { label: 'Compatibility', value: 'All engine oil types' },
  { label: 'Application', value: 'Add directly to engine oil reservoir' },
  { label: 'Protection', value: 'Active even when engine is off' },
  { label: 'Guarantee', value: 'Money-back guaranteed' },
]

const benefits = [
  { title: 'X3 More Power', desc: 'Feel the difference in throttle response and engine pull from the very first drive.' },
  { title: 'Reduces Friction 40%', desc: 'Molecular bonding on all metal surfaces — dramatically less resistance, more efficiency.' },
  { title: 'Dry-Start Shield', desc: 'Engine is protected from the first moment it starts, even before oil pressure builds.' },
  { title: 'Prolongs Engine Life', desc: 'Less wear on moving parts translates directly to a longer-lasting, healthier engine.' },
  { title: 'Quieter Engine', desc: 'Reduced friction means a noticeably smoother, quieter engine in everyday driving.' },
  { title: 'Money-Back Guarantee', desc: 'We stand behind every bottle. If you don\'t feel the difference, we refund you — no questions.' },
]

export default function EngineOil() {
  const { addItem } = useCart()
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const [stickyVisible, setStickyVisible] = useState(false)
  useEffect(() => {
    const fn = () => setStickyVisible(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <main className="page product-detail-page">

      {/* ── Hero ── */}
      <section className="pd-hero">
        <img src="/images/banar.jpg" alt="X3 Engine Oil Booster — Feel The Power" className="pd-hero-img" />
        <div className="pd-hero-overlay" />
        <div className="container pd-hero-grid">
          <div className="pd-hero-left animate-fade-up">
            <div className="section-label">Product 02 — X3 S-Performance</div>
            <h1 className="section-title">
              Engine Oil<br /><span className="accent">Booster</span>
            </h1>
            <p className="pd-hero-desc">
              Xagtec technology creates a molecular protective film on every metal surface
              inside your engine. Reduce friction by 40%, protect against dry starts, and
              feel X3 more power — immediately.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}>
              <button className="btn-primary" onClick={() => addItem(PRODUCT)}>+ Add to Cart</button>
              <Link to="/contact" className="btn-outline">Order via WhatsApp</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Shot ── */}
      <section className="pd-product-shot">
        <div className="container pd-shot-grid">
          <div className="pd-shot-img-wrap">
            <img src="/images/oil-bottle.jpg" alt="X3 Engine Oil Booster bottles" className="pd-shot-img" loading="lazy" />
          </div>
          <div className="pd-shot-content">
            <div className="section-label">The Product</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: 24 }}>
              X3 Engine Oil<br /><span className="accent">Booster</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
              The X3 Engine Oil Booster uses Xagtec molecular bonding technology to coat
              every metal surface inside your engine with a <strong style={{ color: 'var(--text)' }}>persistent protective film</strong> —
              one that stays active even when your engine is switched off.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              That means every cold start is protected. Every dry-start scenario covered.
              Your engine wears less, lasts longer, and runs smoother from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ── Garage Shot ── */}
      <section className="pd-wide-shot">
        <div className="container">
          <img src="/images/oil-garage.jpg" alt="X3 Engine Oil Booster in use" className="wide-shot-img" loading="lazy" />
          <div className="wide-shot-caption">
            Trusted by workshops and drivers worldwide — X3 Engine Oil Booster with the Guaranteed Money-Back seal.
          </div>
        </div>
      </section>

      {/* ── Specs ── */}
      <section className="pd-specs" ref={r1}>
        <div className="container">
          <div className="section-label">Specifications</div>
          <div className="specs-grid">
            {specs.map((s, i) => (
              <div key={i} className="spec-row animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="spec-label">{s.label}</div>
                <div className="spec-value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Benefits ── */}
      <section className="pd-benefits" ref={r2}>
        <div className="container">
          <div className="section-label">What You Get</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>
            Total Engine<br /><span className="accent">Protection</span>
          </h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="benefit-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-sell ── */}
      <section className="pd-crosssell">
        <img src="/images/fuel-station.jpg" alt="" className="crosssell-bg-img" loading="lazy" />
        <div className="crosssell-overlay" />
        <div className="container pd-crosssell-inner">
          <div>
            <div className="section-label">Complete the Set</div>
            <h3 className="section-title" style={{ fontSize: '2.2rem' }}>
              Pair with the<br /><span className="accent">Fuel Booster</span>
            </h3>
            <p style={{ color: 'rgba(235,235,235,0.7)', marginTop: 12, maxWidth: 340, lineHeight: 1.7 }}>
              Save on fuel AND protect your engine at the same time. The Fuel Booster and
              Engine Oil Booster work together for complete, total-system performance.
            </p>
          </div>
          <Link to="/fuel-booster" className="btn-primary" style={{ alignSelf: 'center', flexShrink: 0 }}>
            View Fuel Booster
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Sticky Bar ── */}
      <div className={`sticky-bar ${stickyVisible ? 'visible' : ''}`}>
        <div className="container sticky-bar-inner">
          <div className="sticky-bar-info">
            <img src={PRODUCT.img} alt={PRODUCT.name} className="sticky-bar-img" />
            <div>
              <div className="sticky-bar-name">{PRODUCT.name}</div>
              <div className="sticky-bar-sub">Reduces friction 40% — Money-back guarantee</div>
            </div>
          </div>
          <div className="sticky-bar-actions">
            <button className="btn-primary" onClick={() => addItem(PRODUCT)}>+ Add to Cart</button>
            <a href="https://wa.me/60123456789?text=Hi! I want to order the X3 Engine Oil Booster." target="_blank" rel="noopener" className="btn-outline">WhatsApp Order</a>
          </div>
        </div>
      </div>

    </main>
  )
}
