import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCart } from '../context/CartContext'
import './Home.css'

const testimonials = [
  { name: 'Ahmad K.', role: 'Daily Driver — Kuala Lumpur', stars: 5, text: 'After one tank with the Fuel Booster I could feel the difference. Smoother acceleration, and I saved nearly 30% on fuel. Incredible product.' },
  { name: 'Sarah M.', role: 'SUV Owner — Johor Bahru', stars: 5, text: 'I was skeptical at first but the results don\'t lie. My engine is quieter, my fuel bills are lower. I\'ve recommended X3 to everyone I know.' },
  { name: 'James T.', role: 'Fleet Manager — 12 Vehicles', stars: 5, text: 'We switched the whole fleet to X3 Engine Oil Booster. Maintenance costs dropped significantly within the first quarter. The numbers speak for themselves.' },
]

const faqs = [
  { q: 'How quickly will I notice results?', a: 'Most drivers notice improved throttle response and smoother engine operation within the first 50–100 km. Fuel savings become measurable within one full tank.' },
  { q: 'Is X3 Booster safe for my engine?', a: 'Yes — 100%. Our formula is non-corrosive and compatible with all engine types, seals, gaskets, and fuel system components. It carries a $1,000,000 international insurance policy.' },
  { q: 'How much do I use?', a: 'The Fuel Booster requires just 10ml per 60 litres of fuel. The Engine Oil Booster uses a similarly ultra-low dosage. A single bottle goes a very long way.' },
  { q: 'Can I use both products together?', a: 'Absolutely — in fact, we recommend it. Using the Fuel Booster and Engine Oil Booster together gives you complete fuel-to-engine protection for maximum performance and savings.' },
  { q: 'What is Xagtec technology?', a: 'Xagtec is our proprietary tribological formula. It creates a molecular bond on metal surfaces, dramatically reducing friction, preventing wear, and maintaining protection even after the oil drains away.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes. Every bottle comes with a full money-back guarantee. We are that confident in our results.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [testiIdx, setTestiIdx] = useState(0)
  const { addItem } = useCart()

  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const r3 = useScrollReveal()
  const r4 = useScrollReveal()
  const r5 = useScrollReveal()

  return (
    <main className="page">

      {/* ── Hero ── */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/images/product-promo-1.jpg">
          <source src="/images/63 - Comp 1_2.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="container">
            <p className="hero-pretitle animate-fade-up delay-1">X3 S-Performance — Xagtec Technology</p>
            <h1 className="hero-title animate-fade-up delay-2">
              Feel The<br /><em>Power</em>
            </h1>
            <p className="hero-desc animate-fade-up delay-3">
              Immediate fuel savings. Maximum engine protection.<br />
              Real results from the very first use.
            </p>
            <div className="hero-actions animate-fade-up delay-4">
              <Link to="/shop" className="btn-primary">
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link to="/fuel-booster" className="btn-outline">Explore Products</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="stats-strip">
        <div className="stats-strip-inner">
          {[
            ['35%', 'Fuel Savings'],
            ['40%', 'Friction Reduced'],
            ['3×', 'Engine Lifespan'],
            ['$1M', 'Insurance Cover'],
          ].map(([num, label], i) => (
            <div key={i} className="strip-stat">
              <div className="strip-num">{num}</div>
              <div className="strip-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Proof: Before / After ── */}
      <section className="proof-section" ref={r1}>
        <div className="proof-grid">
          <div className="proof-text reveal reveal-left">
            <h2 className="section-title">The Difference<br />Is <span className="accent">Visible</span></h2>
            <p className="proof-desc">
              After 50,000 km without X3, carbon deposits choke your intake valves, rob power, and spike fuel consumption. One treatment reverses years of buildup — clean metal, free flow, full power.
            </p>
            <div className="proof-stats">
              <div className="proof-stat">
                <span className="proof-stat-num accent">40%</span>
                <span className="proof-stat-label">Less friction</span>
              </div>
              <div className="proof-stat">
                <span className="proof-stat-num accent">35%</span>
                <span className="proof-stat-label">Fuel saved</span>
              </div>
              <div className="proof-stat">
                <span className="proof-stat-num accent">50km</span>
                <span className="proof-stat-label">To feel it</span>
              </div>
            </div>
            <Link to="/fuel-booster" className="btn-primary" style={{ marginTop: 40 }}>See How It Works</Link>
          </div>

          <div className="proof-images reveal reveal-right">
            <div className="valve-compare">
              <div className="valve-side">
                <div className="valve-img-frame valve-frame-before">
                  <img src="/images/dirty.png" alt="Carbon-caked intake valve without X3" loading="lazy" />
                </div>
                <span className="valve-tag valve-tag-before">Without X3</span>
              </div>
              <div className="valve-divider-line">
                <div className="valve-vs">VS</div>
              </div>
              <div className="valve-side">
                <div className="valve-img-frame valve-frame-after">
                  <img src="/images/clean.png" alt="Clean intake valve after X3 treatment" loading="lazy" />
                </div>
                <span className="valve-tag valve-tag-after">With X3</span>
              </div>
            </div>
            <p className="valve-caption">Intake valve — 50,000 km untreated vs. X3 treated</p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-section" ref={r2}>
        <div className="container">
          <h2 className="section-title reveal" style={{ marginBottom: 64 }}>
            Three Steps.<br /><span className="accent">Immediate Results.</span>
          </h2>
          <div className="how-grid">
            {[
              { step: '01', title: 'Add to Tank', desc: 'Pour just 10ml of Fuel Booster directly into your tank before filling up. No tools, no mechanic, no downtime.' },
              { step: '02', title: 'Drive as Normal', desc: 'Xagtec formula activates immediately on first ignition — bonding to injectors, valves, and combustion chamber surfaces.' },
              { step: '03', title: 'Feel the Difference', desc: 'Within 50–100 km you\'ll notice smoother power delivery, reduced engine noise, and measurably better fuel economy.' },
            ].map((s, i) => (
              <div key={i} className={`how-step reveal reveal-d${i + 1}`}>
                <div className="how-step-num">{s.step}</div>
                <h3 className="how-step-title">{s.title}</h3>
                <p className="how-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Science / Lab ── */}
      <section className="science-section">
        <div className="science-img-col">
          <img src="/images/lap.png" alt="X3 researchers developing the Xagtec formula" className="science-img" loading="lazy" />
          <div className="science-img-overlay" />
        </div>
        <div className="science-text-col">
          <img src="/images/combustion.jpg" alt="Engine combustion diagram" className="science-diagram" loading="lazy" />
          <div className="science-copy reveal">
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
              Built in a Lab.<br /><span className="accent">Proven on the Road.</span>
            </h2>
            <p className="science-body">
              Xagtec is our proprietary tribological formula developed by engineers across motorsport, oil science, and materials chemistry. It creates a molecular bond on every metal surface inside your engine — cutting friction at the source and protecting against dry-start wear from the moment you turn the key.
            </p>
            <Link to="/about" className="btn-outline" style={{ marginTop: 32 }}>Our Story</Link>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="products-section">
        <div className="container">
          <div className="products-header reveal">
            <h2 className="section-title">Two Products.<br /><span className="accent">One Mission.</span></h2>
            <p className="products-sub">Complete protection — from your fuel tank to your engine oil.</p>
          </div>
          <div className="product-teasers">
            {[
              {
                to: '/fuel-booster',
                img: '/images/fule-banar2.jpg',
                tag: 'Product 01',
                name: 'Fuel Booster',
                stat: 'Save up to 35% on fuel',
                desc: 'Immediate results. Cleaner combustion, more power, measurable savings from the first tank.',
              },
              {
                to: '/engine-oil',
                img: '/images/banar.jpg',
                tag: 'Product 02',
                name: 'Engine Oil Booster',
                stat: '40% friction reduction',
                desc: 'Coat every moving part in a protective molecular film. Outlast, outperform, outlive the engine next to you.',
              },
            ].map((p, i) => (
              <Link to={p.to} key={i} className={`product-teaser reveal reveal-d${i + 1}`}>
                <img src={p.img} alt={p.name} className="teaser-bg" loading="lazy" />
                <div className="teaser-overlay" />
                <div className="teaser-content">
                  <div className="teaser-tag">{p.tag}</div>
                  <div className="teaser-stat">{p.stat}</div>
                  <h3 className="teaser-name">{p.name}</h3>
                  <p className="teaser-desc">{p.desc}</p>
                  <span className="teaser-link">
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features-section" ref={r3}>
        <div className="container">
          <div className="features-layout">
            <div className="features-heading reveal reveal-left">
              <h2 className="section-title">Why<br /><span className="accent">X3 Works</span></h2>
              <p className="features-intro">Every formula decision is built around one goal: maximum performance from the minimum dose.</p>
              <img src="/images/we1.jpg" alt="X3 S-Performance team" className="features-team-img" loading="lazy" />
            </div>
            <div className="features-spec reveal reveal-right">
              {[
                { title: 'Immediate Effect', desc: 'Results from the very first use — no waiting, no break-in period required.' },
                { title: 'Ultra-Low Dosage', desc: '10ml per 60L of fuel. One small bottle covers thousands of kilometres.' },
                { title: 'Dry-Start Protection', desc: 'Molecular film remains active when the engine is off, protecting from the first ignition.' },
                { title: 'Saves up to 35% Fuel', desc: 'Measurable reduction at every fill. X3 pays for itself within the first tank.' },
                { title: '40% Less Friction', desc: 'Molecular bonding reduces resistance between every moving metal part in your engine.' },
                { title: 'Money-Back Guarantee', desc: 'If you don\'t feel the difference, we refund you in full. No questions asked.' },
              ].map((f, i) => (
                <div key={i} className={`spec-row reveal reveal-d${(i % 3) + 1}`}>
                  <span className="spec-title">{f.title}</span>
                  <span className="spec-sep" />
                  <span className="spec-desc">{f.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Money Back Banner ── */}
      <section className="guarantee-section">
        <img src="/images/oil-garage.jpg" alt="" className="guarantee-bg" loading="lazy" />
        <div className="guarantee-overlay" />
        <div className="container guarantee-content">
          <div className="guarantee-badge reveal">100%</div>
          <h2 className="section-title reveal reveal-d1">Money-Back<br /><span className="accent">Guarantee</span></h2>
          <p className="guarantee-desc reveal reveal-d2">
            We're so confident in our products that every bottle comes with a full refund policy. Zero risk. Real results. Try X3 today.
          </p>
          <Link to="/shop" className="btn-primary reveal reveal-d3" style={{ marginTop: 36 }}>Shop Now</Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testi-section" ref={r4}>
        <div className="container">
          <div className="testi-layout">
            <div className="testi-label">
              <span>What Drivers Say</span>
            </div>
            <div className="testi-quote-wrap">
              <div className="testi-quotemark">"</div>
              <p className="testi-quote-text">{testimonials[testiIdx].text}</p>
              <div className="testi-meta">
                <img src={`/images/customer-${testiIdx + 1}.jpg`} alt={testimonials[testiIdx].name} className="testi-avatar" loading="lazy" />
                <div>
                  <div className="testi-name">{testimonials[testiIdx].name}</div>
                  <div className="testi-role">{testimonials[testiIdx].role}</div>
                </div>
                <div className="testi-stars">{'★'.repeat(testimonials[testiIdx].stars)}</div>
              </div>
              <div className="testi-nav">
                {testimonials.map((_, i) => (
                  <button key={i} className={`testi-dot ${i === testiIdx ? 'active' : ''}`} onClick={() => setTestiIdx(i)} aria-label={`Review ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section" ref={r5}>
        <div className="container faq-layout">
          <div className="faq-heading">
            <h2 className="section-title reveal">Common<br /><span className="accent">Questions</span></h2>
            <p className="faq-sub reveal reveal-d1">Everything you need to know before your first bottle.</p>
            <Link to="/contact" className="btn-outline reveal reveal-d2" style={{ marginTop: 32 }}>Ask Us Directly</Link>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item reveal reveal-d${(i % 2) + 1} ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="faq-chevron">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cta-section">
        <img src="/images/product-promo-1.jpg" alt="" className="cta-bg" loading="lazy" />
        <div className="cta-overlay" />
        <div className="container cta-inner">
          <h2 className="section-title reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Ready to Feel<br />the Difference?
          </h2>
          <p className="cta-sub reveal reveal-d1">Join thousands of drivers across Malaysia and the Middle East who've switched to smarter engine care.</p>
          <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 36 }}>
            <Link to="/shop" className="btn-primary">Browse the Shop</Link>
            <a href="https://wa.me/60123456789?text=Hi! I want to know more about X3 Booster." target="_blank" rel="noopener" className="btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
