import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'
import { useCart } from '../context/CartContext'
import './Home.css'

const PRODUCTS = [
  { id: 1, name: 'Fuel Booster', img: '/images/fuel-bottle.jpg', link: '/fuel-booster' },
  { id: 2, name: 'Engine Oil Booster', img: '/images/oil-bottle.jpg', link: '/engine-oil' },
]

function StatBox({ num, label }) {
  const { ref, count } = useCounter(num)
  return (
    <div className="stat-box" ref={ref}>
      <div className="stat-num">{count || num}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const faqs = [
  { q: 'How quickly will I notice results?', a: 'Most drivers notice improved throttle response and smoother engine operation within the first 50–100 km. Fuel savings become measurable within one full tank.' },
  { q: 'Is X3 Booster safe for my engine?', a: 'Yes — 100%. Our formula is non-corrosive and compatible with all engine types, seals, gaskets, and fuel system components. It carries a $1,000,000 international insurance policy.' },
  { q: 'How much do I use?', a: 'The Fuel Booster requires just 10ml per 60 litres of fuel. The Engine Oil Booster uses a similarly ultra-low dosage. A single bottle goes a very long way.' },
  { q: 'Can I use both products together?', a: 'Absolutely — in fact, we recommend it. Using the Fuel Booster and Engine Oil Booster together gives you complete fuel-to-engine protection for maximum performance and savings.' },
  { q: 'What is Xagtec technology?', a: 'Xagtec is our proprietary tribological formula. It creates a molecular bond on metal surfaces, dramatically reducing friction, preventing wear, and maintaining protection even after the oil drains away.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes. Every bottle of X3 Engine Oil Booster comes with a full money-back guarantee. We are that confident in our results.' },
]

const testimonials = [
  { name: 'Ahmad K.', role: 'Daily Driver', img: '/images/customer-1.jpg', stars: 5, text: 'After just one tank with the Fuel Booster I could feel the difference — smoother acceleration and I saved nearly 30% on fuel. Incredible product.' },
  { name: 'Sarah M.', role: 'SUV Owner', img: '/images/customer-2.jpg', stars: 5, text: 'I was skeptical at first but the results don\'t lie. My engine is quieter, my fuel bills are lower. I\'ve recommended X3 to everyone I know.' },
  { name: 'James T.', role: 'Fleet Manager', img: '/images/customer-3.jpg', stars: 5, text: 'We run 12 vehicles and switched the whole fleet to X3 Engine Oil Booster. Maintenance costs dropped significantly within the first quarter.' },
]

const gallery = [
  { img: '/images/fuel-bottle.jpg', label: 'Fuel Booster' },
  { img: '/images/oil-bottle.jpg', label: 'Engine Oil Booster' },
  { img: '/images/oil-garage.jpg', label: 'Workshop Ready' },
  { img: '/images/fuel-station.jpg', label: 'At the Pump' },
  { img: '/images/fuel-promo.jpg', label: 'Promo Pack' },
  { img: '/images/gas-station-worker.jpg', label: 'X3 In Action' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const heroRef   = useScrollReveal()
  const statsRef  = useScrollReveal()
  const prodRef   = useScrollReveal()
  const featRef   = useScrollReveal()
  const gallRef   = useScrollReveal()
  const testiRef  = useScrollReveal()
  const faqRef    = useScrollReveal()
  const { addItem } = useCart()

  return (
    <main className="page">

      {/* ── Hero ── */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay muted loop playsInline
          poster="/images/product-promo-1.jpg"
        >
          <source src="/images/63 - Comp 1_2.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="container hero-content" ref={heroRef}>
          <div className="hero-left">
            <div className="hero-badge reveal revealed">
              <span className="badge-dot" /> Xagtec Technology — Active
            </div>
            <h1 className="hero-title reveal revealed reveal-d1">
              Feel The<br /><span className="accent">Power</span>
            </h1>
            <p className="hero-desc reveal revealed reveal-d2">
              X3 S-Performance boosters deliver immediate fuel savings,
              maximum engine protection, and real performance gains —
              from the very first use.
            </p>
            <div className="hero-actions reveal revealed reveal-d3">
              <Link to="/shop" className="btn-primary">
                Shop Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link to="/fuel-booster" className="btn-outline">Explore Products</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-line" /><span>Scroll</span>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {[['35%','Fuel Savings'],['40%','Friction Reduction'],['3×','Engine Life'],['0°','Cold Start Damage']].map(([n,l], i) => (
              <StatBox key={i} num={n} label={l} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Valve Proof ── */}
      <section className="valve-proof-section">
        <div className="container">
          <div className="valve-proof-grid">
            <div className="valve-proof-text reveal reveal-left">
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: 20 }}>
                The Difference<br />Is <span className="accent">Visible</span>
              </h2>
              <p className="valve-proof-desc">
                After 50,000 km without X3, carbon deposits choke your intake valves, rob power, and spike fuel consumption. One treatment reverses years of buildup — clean metal, free flow, full power.
              </p>
              <div className="valve-stat-row">
                <div className="valve-stat">
                  <span className="valve-stat-num accent">40%</span>
                  <span className="valve-stat-label">Less friction</span>
                </div>
                <div className="valve-stat">
                  <span className="valve-stat-num accent">35%</span>
                  <span className="valve-stat-label">Fuel saved</span>
                </div>
                <div className="valve-stat">
                  <span className="valve-stat-num accent">1×</span>
                  <span className="valve-stat-label">Bottle does it all</span>
                </div>
              </div>
              <Link to="/fuel-booster" className="btn-primary" style={{ marginTop: 32 }}>See How It Works</Link>
            </div>
            <div className="valve-proof-images reveal reveal-right">
              <div className="valve-pair">
                <div className="valve-img-wrap valve-before">
                  <img src="/images/dirty.png" alt="Carbon-caked intake valve without X3 treatment" />
                  <div className="valve-label">Without X3</div>
                </div>
                <div className="valve-divider">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
                <div className="valve-img-wrap valve-after">
                  <img src="/images/clean.png" alt="Clean intake valve after X3 treatment" />
                  <div className="valve-label valve-label-clean">With X3</div>
                </div>
              </div>
              <p className="valve-caption">Intake valve after 50,000 km — untreated vs. X3 treated</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Science Strip ── */}
      <section className="science-section">
        <div className="science-img-side">
          <img src="/images/combustion.jpg" alt="Engine combustion diagram showing Xagtec formula at work" className="science-diagram" loading="lazy" />
        </div>
        <div className="science-text-side">
          <img src="/images/lap.png" alt="X3 Booster researchers in laboratory developing Xagtec formula" className="science-lab-img" loading="lazy" />
          <div className="science-copy reveal">
            <h3 className="science-heading">Built in a Lab.<br /><span className="accent">Proven on the Road.</span></h3>
            <p className="science-body">Xagtec is our proprietary tribological formula — developed by engineers across motorsport, oil science, and materials chemistry. It creates a molecular bond on every metal surface inside your engine, cutting friction at the source and protecting against dry-start wear from the moment you turn the key.</p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-section">
        <div className="container">
          <div className="section-label reveal">Simple &amp; Effective</div>
          <h2 className="section-title reveal reveal-d1" style={{ marginBottom: 60 }}>
            How It<br /><span className="accent">Works</span>
          </h2>
          <div className="how-grid">
            {[
              { step: '01', icon: '🧪', title: 'Add to Tank', desc: 'Pour just 10ml of Fuel Booster into your tank before filling up. That\'s it — no tools, no mechanic needed.' },
              { step: '02', icon: '🚗', title: 'Drive as Normal', desc: 'Xagtec formula activates immediately on first ignition, bonding to injectors, valves, and combustion surfaces.' },
              { step: '03', icon: '⚡', title: 'Feel the Difference', desc: 'Within 50–100 km you\'ll notice smoother power delivery, reduced engine noise, and measurably less fuel used.' },
            ].map((s, i) => (
              <div key={i} className={`how-card reveal reveal-d${i+1}`}>
                <div className="how-step">{s.step}</div>
                <div className="how-icon">{s.icon}</div>
                <h3 className="how-title">{s.title}</h3>
                <p className="how-desc">{s.desc}</p>
                {i < 2 && <div className="how-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Teaser ── */}
      <section className="products-section">
        <div className="container">
          <div className="section-label reveal" ref={prodRef}>Our Products</div>
          <div className="products-header">
            <h2 className="section-title reveal">Two Products.<br />One Mission.</h2>
            <p className="products-sub reveal reveal-d2">Whether you want to supercharge your fuel efficiency or maximize engine longevity — X3Booster has you covered.</p>
          </div>
          <div className="product-teaser-grid">
            {[
              { to:'/fuel-booster', tag:'Product 01', name:'Fuel\nBooster', desc:'Save up to 35% on fuel. Immediate results, cleaner combustion, more power.', img:'/images/fuel-bottle.jpg' },
              { to:'/engine-oil',   tag:'Product 02', name:'Engine Oil\nBooster', desc:'Coat every moving part in a protective molecular film. Outlast, outperform.', img:'/images/oil-bottle.jpg' },
            ].map((p, i) => (
              <Link to={p.to} key={i} className={`product-teaser reveal reveal-d${i+1}`}>
                <img src={p.img} alt={p.name} className="teaser-img" />
                <div className="teaser-gradient" />
                <div className="teaser-content">
                  <div className="teaser-tag">{p.tag}</div>
                  <h3 className="teaser-name">{p.name.split('\n').map((l,j) => <span key={j}>{l}<br/></span>)}</h3>
                  <p className="teaser-desc">{p.desc}</p>
                  <span className="teaser-cta">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features-section" ref={featRef}>
        <div className="container">
          <div className="features-header">
            <div>
              <div className="section-label reveal">Why X3Booster</div>
              <h2 className="section-title reveal reveal-d1">Engineering<br /><span className="accent">Precision</span></h2>
            </div>
            <p className="features-intro reveal reveal-d2">Every formula decision is made with one goal: delivering maximum protection and performance from the smallest possible dose.</p>
          </div>
          <div className="features-grid">
            {[
              ['⚡','Immediate Effect','Experience results from the very first use — no waiting, no break-in period.'],
              ['💧','Ultra-Low Dosage','10ml per 60L of fuel. One bottle covers thousands of kilometres.'],
              ['🛡️','Dry-Start Protection','Protective film stays active even when the engine is off.'],
              ['💰','Save up to 35% Fuel','Measurable savings at every fill — X3 pays for itself quickly.'],
              ['🔩','40% Less Friction','Molecular bonding lowers resistance between every moving metal part.'],
              ['🏆','Money-Back Guarantee','Zero risk. If you don\'t feel the difference, we refund you — no questions.'],
            ].map(([icon, title, desc], i) => (
              <div key={i} className={`feature-item reveal reveal-d${(i%3)+1}`}>
                <div className="feature-icon">{icon}</div>
                <div>
                  <div className="feature-title">{title}</div>
                  <div className="feature-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Money-Back Banner ── */}
      <section className="banner-section">
        <div className="banner-img-wrap">
          <img src="/images/banar.jpg" alt="X3 Engine Oil Booster — Feel The Power" className="banner-img" loading="lazy" />
          <div className="banner-img-overlay" />
        </div>
        <div className="container banner-content">
          <div className="section-label reveal">Guaranteed</div>
          <h2 className="section-title reveal reveal-d1">Money Back<br /><span className="accent">Guarantee</span></h2>
          <p className="reveal reveal-d2" style={{ color:'var(--text-muted)', marginTop:16, maxWidth:360, lineHeight:1.7 }}>
            We're so confident in our products, every bottle comes with a full money-back guarantee. Zero risk. Real results.
          </p>
          <Link to="/shop" className="btn-primary reveal reveal-d3" style={{ marginTop:32 }}>Shop Now</Link>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="gallery-section" ref={gallRef}>
        <div className="container">
          <div className="section-label reveal">Gallery</div>
          <h2 className="section-title reveal reveal-d1" style={{ marginBottom:40 }}>The Product<br /><span className="accent">In Action</span></h2>
          <div className="gallery-grid">
            {gallery.map((g, i) => (
              <div key={i} className={`gallery-item reveal reveal-scale reveal-d${(i%3)+1}`}>
                <img src={g.img} alt={g.label} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testi-section" ref={testiRef}>
        <div className="container">
          <div className="section-label reveal">What Drivers Say</div>
          <h2 className="section-title reveal reveal-d1" style={{ marginBottom:48 }}>
            Real People.<br /><span className="accent">Real Results.</span>
          </h2>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`testi-card reveal reveal-d${i+1}`}>
                <div className="testi-stars">{'★'.repeat(t.stars)}</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <img src={t.img} alt={t.name} className="testi-avatar" loading="lazy" />
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section" ref={faqRef}>
        <div className="container faq-grid">
          <div>
            <div className="section-label reveal">FAQ</div>
            <h2 className="section-title reveal reveal-d1">Common<br /><span className="accent">Questions</span></h2>
            <p className="reveal reveal-d2" style={{ color:'var(--text-muted)', marginTop:16, lineHeight:1.7, maxWidth:300 }}>
              Everything you need to know before your first bottle.
            </p>
            <Link to="/contact" className="btn-outline reveal reveal-d3" style={{ marginTop:32 }}>Ask Us Directly</Link>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item reveal reveal-d${(i%2)+1} ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="faq-chevron">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <img src="/images/product-promo-1.jpg" alt="" className="cta-bg-img" loading="lazy" />
        <div className="cta-bg-overlay" />
        <div className="container cta-inner">
          <div>
            <h2 className="section-title reveal" style={{ fontSize:'clamp(2rem, 4vw, 3rem)' }}>
              Ready to Feel<br />the Difference?
            </h2>
            <p className="reveal reveal-d1" style={{ color:'rgba(255,255,255,0.6)', marginTop:12, maxWidth:400 }}>
              Join thousands of drivers who've already switched to smarter engine care.
            </p>
          </div>
          <div className="reveal reveal-d2" style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
            <Link to="/shop" className="btn-primary">Browse the Shop</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
