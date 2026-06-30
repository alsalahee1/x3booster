import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <main className="page contact-page">

      {/* ── Hero ── */}
      <section className="page-hero contact-hero">
        <img src="/images/speedometer.jpg" alt="Contact X3Booster" className="contact-hero-img" loading="lazy" />
        <div className="contact-hero-overlay" />
        <div className="container page-hero-content" style={{ position:'relative', zIndex:1 }}>
          <div className="section-label reveal">Get in Touch</div>
          <h1 className="section-title reveal reveal-d1">Contact<br /><span className="accent">Us</span></h1>
          <p className="page-hero-sub reveal reveal-d2">Questions, bulk orders, or trade inquiries — we're here to help.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">

          {/* ── Info ── */}
          <div className="contact-info" ref={r1}>
            <div className="section-label reveal">Details</div>
            <h2 className="section-title reveal reveal-d1" style={{ fontSize:'2.5rem', marginBottom:40 }}>Let's Talk</h2>

            <div className="info-items">
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label:'Email', value:'x3booster@gmail.com', href:'mailto:x3booster@gmail.com' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.04 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, label:'WhatsApp', value:'+60 12-345 6789', href:'https://wa.me/60123456789' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label:'Business Hours', value:'Friday: 12:00 PM – 3:00 PM' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, label:'Facebook', value:'facebook.com/x3booster', href:'https://facebook.com/x3booster' },
              ].map((item, i) => (
                <div key={i} className={`info-item reveal reveal-d${i+1}`}>
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <div className="info-label">{item.label}</div>
                    {item.href
                      ? <a href={item.href} target="_blank" rel="noopener" className="info-value link">{item.value}</a>
                      : <div className="info-value">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/60123456789?text=Hi! I'm interested in X3Booster products."
              target="_blank" rel="noopener"
              className="btn-primary whatsapp-cta reveal reveal-d4"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>

            <div className="contact-notice reveal reveal-d5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p>For bulk orders or trade pricing, mention the quantity and product in your message for a custom quote.</p>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="contact-form-wrap" ref={r2}>
            {sent ? (
              <div className="form-success reveal">
                <div className="success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-desc">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <button className="btn-outline" style={{ marginTop:24 }} onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input id="name" name="name" type="text" required className="form-input" placeholder="John Smith" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone (Optional)</label>
                    <input id="phone" name="phone" type="tel" className="form-input" placeholder="+60 12-345 6789" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required className="form-input" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" className="form-input" value={form.subject} onChange={handleChange}>
                    <option value="">Select a topic…</option>
                    <option>Product Enquiry</option>
                    <option>Bulk / Trade Order</option>
                    <option>Distributor Partnership</option>
                    <option>Technical Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea id="message" name="message" required className="form-input" placeholder="Tell us how we can help…" value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center' }}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  )
}
