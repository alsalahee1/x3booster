import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './ProductDetail.css'

const PRODUCT = { id: 1, name: 'X3 Fuel Booster', img: '/images/fuel-bottle.jpg' }

const specs = [
  { label: 'Technology', value: 'Xagtec Formula — S-Performance' },
  { label: 'Fuel Saving', value: 'Up to 35% per tank' },
  { label: 'Dosage', value: '10ml per 60 litres of fuel' },
  { label: 'Effect', value: 'Immediate from first use' },
  { label: 'Compatibility', value: 'All petrol & diesel engines' },
  { label: 'Application', value: 'Add directly to fuel tank' },
  { label: 'Insurance', value: '$1,000,000 international insurance' },
  { label: 'Corrosion', value: 'Non-corrosive formula' },
]

const beforeAfter = [
  {
    before: '/images/injector-before.jpg',
    after: '/images/injector-after.jpg',
    label: 'Fuel Injector Spray',
    desc: 'Without X3 vs. with X3 — dramatically improved atomisation and fuel spread.',
  },
  {
    before: '/images/valve-before.jpg',
    after: '/images/valve-after.jpg',
    label: 'Engine Valve',
    desc: 'Carbon buildup eliminated. X3 keeps intake valves clean and flowing freely.',
  },
]

const benefits = [
  { title: 'Fuel Saving up to 35%', desc: 'Measurable reduction in fuel consumption from the very first fill.' },
  { title: 'Increases Power', desc: 'Better combustion means more energy to the drivetrain — you feel it immediately.' },
  { title: 'Cleans Carbon Deposits', desc: 'Dissolves and removes carbon buildup from injectors, valves and combustion chambers.' },
  { title: 'Reduces Toxic Gas Emissions', desc: 'Cleaner combustion = fewer harmful exhaust gases. Better for the environment.' },
  { title: 'Prolongs Engine Lifespan', desc: 'Less wear on critical components translates to thousands of extra miles.' },
  { title: 'Non-Corrosive', desc: 'Completely safe on all engine materials, seals, and fuel system components.' },
]

export default function FuelBooster() {
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
        <img src="/images/fule-banar2.jpg" alt="X3 Fuel Booster — S-Performance" className="pd-hero-img" />
        <div className="pd-hero-overlay" />
        <div className="container pd-hero-grid">
          <div className="pd-hero-left animate-fade-up">
            <div className="section-label">Product 01 — X3 S-Performance</div>
            <h1 className="section-title">
              Fuel<br /><span className="accent">Booster</span>
            </h1>
            <p className="pd-hero-desc">
              Save up to 35% on fuel. Increase power. Clean your engine from the inside.
              X3 Fuel Booster delivers everything your engine has been missing — immediately.
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
            <img src="/images/product-11.jpg" alt="X3 Fuel Booster being poured directly into the fuel tank" className="pd-shot-img" style={{ objectPosition: 'center top' }} />
          </div>
          <div className="pd-shot-content">
            <div className="section-label">The Product</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: 24 }}>
              X3 Fuel Booster<br /><span className="accent">S-Performance</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
              Formulated with our proprietary Xagtec technology, X3 Fuel Booster is engineered
              to maximize combustion efficiency, delivering <strong style={{ color: 'var(--text)' }}>more power from less fuel</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              One 10ml dose per 60 litres is all it takes. That's it. Add it to your tank
              and feel the difference by the time you reach the next junction.
            </p>
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

      {/* ── Before / After ── */}
      <section className="pd-before-after">
        <div className="container">
          <div className="section-label">Proof</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>
            Before &amp; After<br /><span className="accent">X3 Booster</span>
          </h2>
          <div className="ba-grid">
            {beforeAfter.map((item, i) => (
              <div key={i} className="ba-card animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="ba-images">
                  <div className="ba-img-wrap">
                    <img src={item.before} alt={`${item.label} before`} />
                    <div className="ba-label ba-before">Before</div>
                  </div>
                  <div className="ba-vs">VS</div>
                  <div className="ba-img-wrap">
                    <img src={item.after} alt={`${item.label} after`} />
                    <div className="ba-label ba-after">After X3</div>
                  </div>
                </div>
                <div className="ba-caption">
                  <div className="ba-caption-title">{item.label}</div>
                  <div className="ba-caption-desc">{item.desc}</div>
                </div>
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
            Six Reasons to<br /><span className="accent">Switch Today</span>
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
        <img src="/images/oil-garage.jpg" alt="" className="crosssell-bg-img" />
        <div className="crosssell-overlay" />
        <div className="container pd-crosssell-inner">
          <div>
            <div className="section-label">Also Available</div>
            <h3 className="section-title" style={{ fontSize: '2.2rem' }}>
              Pair with Engine<br /><span className="accent">Oil Booster</span>
            </h3>
            <p style={{ color: 'rgba(235,235,235,0.7)', marginTop: 12, maxWidth: 340, lineHeight: 1.7 }}>
              For total engine protection, combine the Fuel Booster with our Engine Oil
              Booster. Together, they cover every angle of wear and efficiency.
            </p>
          </div>
          <Link to="/engine-oil" className="btn-primary" style={{ alignSelf: 'center', flexShrink: 0 }}>
            View Engine Oil Booster
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
              <div className="sticky-bar-sub">Saves up to 35% fuel — Immediate results</div>
            </div>
          </div>
          <div className="sticky-bar-actions">
            <button className="btn-primary" onClick={() => addItem(PRODUCT)}>+ Add to Cart</button>
            <a href="https://wa.me/60123456789?text=Hi! I want to order the X3 Fuel Booster." target="_blank" rel="noopener" className="btn-outline">WhatsApp Order</a>
          </div>
        </div>
      </div>

    </main>
  )
}
