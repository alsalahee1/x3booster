import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCart } from '../context/CartContext'
import './Shop.css'

const products = [
  { id: 1, cat: 'fuel', name: 'Fuel Booster', tag: 'Best Seller', desc: 'Saves up to 35% fuel. Increases power, cleans carbon deposits, reduces toxic gas emissions.', img: '/images/fuel-bottle.jpg', link: '/fuel-booster' },
  { id: 2, cat: 'oil', name: 'Engine Oil Booster', tag: 'Top Rated', desc: 'X3 more power. Reduces friction 40%, protects metal surfaces, guaranteed money back.', img: '/images/oil-bottle.jpg', link: '/engine-oil' },
  { id: 3, cat: 'fuel', name: 'Fuel Booster — Pro', tag: 'Pro Formula', desc: 'Enhanced concentration for high-performance vehicles and heavy-duty engines.', img: '/images/fuel-station.jpg', link: '/fuel-booster' },
  { id: 4, cat: 'oil', name: 'Engine Oil Booster — Pro', tag: 'Pro Formula', desc: 'For commercial fleets and industrial machinery. Maximum longevity formula.', img: '/images/oil-garage.jpg', link: '/engine-oil' },
]

const FILTERS = [
  { key: 'all', label: 'All Products' },
  { key: 'fuel', label: 'Fuel Booster' },
  { key: 'oil', label: 'Engine Oil' },
]

export default function Shop() {
  const { addItem } = useCart()
  const [filter, setFilter] = useState('all')
  const heroRef = useScrollReveal()
  const gridRef = useScrollReveal()

  const visible = filter === 'all' ? products : products.filter(p => p.cat === filter)

  return (
    <main className="page shop-page">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content" ref={heroRef}>
          <div className="section-label reveal">X3Booster Store</div>
          <h1 className="section-title reveal reveal-d1">Shop All<br /><span className="accent">Products</span></h1>
          <p className="page-hero-sub reveal reveal-d2">Every formula engineered for maximum performance. Minimum dosage. Immediate results.</p>
        </div>
      </section>

      <section className="shop-section" ref={gridRef}>
        <div className="container">
          <div className="shop-filters">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-tab ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >{f.label}</button>
            ))}
          </div>
          <div className="shop-meta">
            <span className="shop-count">{visible.length} Product{visible.length !== 1 ? 's' : ''}</span>
            <a href="https://wa.me/60123456789?text=Hi! I'd like a product quote." target="_blank" rel="noopener" className="shop-whatsapp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Order
            </a>
          </div>
          <div className="shop-grid">
            {visible.map((p, i) => (
              <article key={p.id} className={`product-card reveal reveal-d${(i%2)+1}`}>
                {p.tag && <div className="product-badge">{p.tag}</div>}
                <Link to={p.link} className="product-img">
                  <img src={p.img} alt={p.name} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </Link>
                <div className="product-info">
                  <div className="product-name">{p.name}</div>
                  <div className="product-desc">{p.desc}</div>
                  <div className="product-price">Contact for Price</div>
                  <div className="product-actions">
                    <button className="product-add" onClick={() => addItem(p)}>
                      + Add to Cart
                    </button>
                    <Link to={p.link} className="product-view-btn" title="View details">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trade-banner">
        <div className="container trade-inner">
          <div className="trade-label">Trade &amp; Bulk Orders</div>
          <h3 className="trade-title">Need larger quantities?</h3>
          <p className="trade-desc">We supply distributors, auto workshops, and fleet operators worldwide. Contact us directly for trade pricing and custom volume orders.</p>
          <Link to="/contact" className="btn-outline" style={{ marginTop:24 }}>Request Trade Quote</Link>
        </div>
      </section>
    </main>
  )
}
