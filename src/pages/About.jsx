import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const values = [
  { num: '01', title: 'Innovation First', desc: 'Every product starts with a question: how can we do this better? Xagtec technology is the answer we built from the ground up.' },
  { num: '02', title: 'Eco-Conscious', desc: 'Our goal is to become the world\'s number one eco-friendly engine oil manufacturer. Better performance shouldn\'t cost the planet.' },
  { num: '03', title: 'Proven Results', desc: 'We don\'t make claims we can\'t back up. Every formula is tested rigorously — and backed by a money-back guarantee.' },
]

const credentials = [
  { field: 'Motorsport Engineering', institution: 'Taiwan' },
  { field: 'Oil & Gas Studies', institution: 'Malaysia' },
  { field: 'Business Management', institution: 'International' },
  { field: 'Marketing & Advertising', institution: 'Strategic Communications' },
]

export default function About() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const r3 = useScrollReveal()
  const r4 = useScrollReveal()

  return (
    <main className="page about-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <img src="/images/home-banner.jpg" alt="X3Booster" className="about-hero-img" />
        <div className="about-hero-overlay" />
        <div className="container page-hero-content" style={{ position:'relative', zIndex:1 }}>
          <div className="section-label reveal">Our Story</div>
          <h1 className="section-title reveal reveal-d1">About<br /><span className="accent">X3Booster</span></h1>
          <p className="page-hero-sub reveal reveal-d2">Driven by a vision to redefine automotive performance through proprietary chemistry.</p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="about-mission" ref={r1}>
        <div className="container about-mission-grid">
          <div>
            <div className="section-label reveal">Mission</div>
            <h2 className="section-title reveal reveal-d1">The World's<br /><span className="accent">Premier</span><br />Eco Oil Brand</h2>
            <img src="/images/about-2.jpg" alt="X3 Booster team" className="about-img reveal reveal-d2" loading="lazy" />
          </div>
          <div>
            <img src="/images/about-1.jpg" alt="X3 Booster" className="about-img about-img-top reveal reveal-right" loading="lazy" />
            <p className="mission-text reveal reveal-d1">X3Booster was founded with a singular aim: to become the number one eco-friendly engine oil manufacturer in the world. We believe peak performance and environmental responsibility are not opposites — they are inseparable goals.</p>
            <p className="mission-text reveal reveal-d2">Our proprietary <strong className="accent">Xagtec technology</strong> was developed through years of research across motorsport engineering, oil & gas science, and materials chemistry. The result is a product that delivers results no competitor can match, at dosages no one else has achieved.</p>
            <p className="mission-text reveal reveal-d3">We are doing our best — every single day — to push the limits of what engine protection can be.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Values ── */}
      <section className="about-values" ref={r2}>
        <div className="container">
          <div className="section-label reveal">Our Values</div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className={`value-card reveal reveal-d${i+1}`}>
                <div className="value-num">{v.num}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Science & Team ── */}
      <section className="about-promo" ref={r3}>
        <div className="container about-promo-grid">
          <div className="reveal reveal-left">
            <img src="/images/lap.png" alt="X3 research scientists developing Xagtec formula in laboratory" className="about-img about-img-top" loading="lazy" />
            <img src="/images/we1.jpg" alt="X3 team testing products at the lab" className="about-img reveal reveal-d2" loading="lazy" />
          </div>
          <div className="reveal reveal-right">
            <h2 className="section-title" style={{ fontSize:'clamp(2rem, 3.5vw, 3rem)', marginBottom:20 }}>
              Science First.<br /><span className="accent">Results Guaranteed.</span>
            </h2>
            <p className="mission-text">X3 Booster is the product of real lab work — developed by engineers across motorsport, oil science, and materials chemistry. Every formula decision is measured, tested, and validated before a single bottle ships.</p>
            <p className="mission-text">We don't sell chemistry experiments. We sell proven outcomes: measurable fuel savings, real friction reduction, and a money-back guarantee that means it.</p>
            <div style={{ display:'flex', gap:16, flexWrap:'wrap', marginTop:32 }}>
              <Link to="/shop" className="btn-primary">Explore Products</Link>
              <Link to="/contact" className="btn-outline">Distributor Enquiries</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Credentials ── */}
      <section className="about-credentials" ref={r4}>
        <div className="container about-cred-grid">
          <div>
            <div className="section-label reveal">Expertise</div>
            <h2 className="section-title reveal reveal-d1">Built on Real<br /><span className="accent">Knowledge</span></h2>
            <p className="reveal reveal-d2" style={{ color:'var(--text-muted)', marginTop:20, lineHeight:1.7, maxWidth:320 }}>Our team brings multidisciplinary expertise spanning engineering, energy science, and business — so every product decision is grounded in real-world knowledge.</p>
          </div>
          <div className="cred-list">
            {credentials.map((c, i) => (
              <div key={i} className={`cred-item reveal reveal-d${i+1}`}>
                <div className="cred-index">{String(i+1).padStart(2,'0')}</div>
                <div>
                  <div className="cred-field">{c.field}</div>
                  <div className="cred-inst">{c.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2 className="section-title reveal" style={{ fontSize:'clamp(2rem, 4vw, 3rem)' }}>Curious About Our Products?</h2>
          <div className="reveal reveal-d1" style={{ display:'flex', gap:16, flexWrap:'wrap', marginTop:32 }}>
            <Link to="/shop" className="btn-primary">Explore the Shop</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
