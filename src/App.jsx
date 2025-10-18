import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import siteinfoData from './siteinfo.json'

// Default sample content (replaced by Netlify CMS files when deployed)
const DEFAULT_PRODUCTS = [
  {
    id: 'sf-001',
    title: 'Heirloom Heart Frame',
    subtitle: 'Custom photo + hand-lettered message',
    price: 'From ₹2,999',
    image: '/images/product-1.jpg',
    description: 'A luxuriously framed memory with a hand-lettered sentiment — perfect for milestone gifting.'
  },
  {
    id: 'sf-002',
    title: 'Keepsake Minimal Frame',
    subtitle: 'Fine art finish, archival materials',
    price: 'From ₹1,999',
    image: '/images/product-2.jpg',
    description: 'A boutique frame that elevates photographs into heirlooms — personal, tactile, timeless.'
  }
]

const DEFAULT_GALLERY = [
  { id: 'g1', src: '/images/gallery-1.jpg', alt: 'Mother and child framed moment' },
  { id: 'g2', src: '/images/gallery-2.jpg', alt: 'Wedding frame with calligraphy' },
  { id: 'g3', src: '/images/gallery-3.jpg', alt: 'Birthday surprise framed' }
]

function openInstagramDM(handle) {
  if (!handle) return
  const appLink = `instagram://user?username=${handle}`
  const webLink = `https://instagram.com/${handle}`
  // Try app then fallback to web
  try {
    window.open(appLink, '_blank')
  } catch (e) {
    // noop
  }
  setTimeout(() => {
    window.open(webLink, '_blank', 'noopener,noreferrer')
  }, 400)
}

export default function App() {
  const [products] = useState(DEFAULT_PRODUCTS) // CMS will update files in repo; we read static defaults here
  const [gallery] = useState(DEFAULT_GALLERY)
  const [siteinfo] = useState(siteinfoData)

  useEffect(() => {
    // Placeholder for dynamic loading if you prefer to fetch JSON files from /src at runtime.
  }, [])

  return (
    <div className="min-h-screen bg-var-warm text-var-deep antialiased">
      {/* CSS variables are in styles.css */}
      <header className="sticky top-0 z-50 bg-warm/70 backdrop-blur border-b">
        <nav className="container nav">
          <div className="logo-group">
            <div className="logo-mark">SF</div>
            <div>
              <div className="brand-name">Soul Frames</div>
              <div className="tagline">Made with Heart, Framed with Soul</div>
            </div>
          </div>

          <div className="desktop-nav">
            <a href="#shop" className="nav-link">Shop</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#about" className="nav-link">About</a>
            <button onClick={() => openInstagramDM(siteinfo.instagram)} className="btn-primary small">Order via Instagram</button>
          </div>

          <div className="mobile-cta">
            <button onClick={() => openInstagramDM(siteinfo.instagram)} className="btn-dark small">DM to Order</button>
          </div>
        </nav>
      </header>

      <main className="container main">
        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-text">
            <h1 className="hero-title">Made with Heart, Framed with Soul</h1>
            <p className="hero-sub">Soul Frames creates handcrafted, personalized frames that transform photographs and keepsakes into intimate, luxurious gifts. Every piece is curated with archival materials, warm tones and hand-finished details — designed to make moments last a lifetime.</p>

            <div className="hero-cta">
              <button onClick={() => openInstagramDM(siteinfo.instagram)} className="btn-primary large">Buy Your Customized Frame</button>
              <a href="#gallery" className="link">View the Gallery</a>
            </div>

            <div className="note">Prefer a custom consultation? DM us on Instagram and we'll guide you through styles, materials and gift-wrapping.</div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="hero-image">
            <div className="hero-image-frame">
              <img src="/images/hero-frame.jpg" alt="Soul Frames hero" />
            </div>
          </motion.div>
        </section>

        <section className="features">
          <FeatureCard title="Boutique Craftsmanship" body="Each frame is handcrafted with archival matting, museum-grade glass and bespoke finishes." />
          <FeatureCard title="Personalized Sentiments" body="Add hand-lettered notes, dates, or custom artworks to make the gift singular and intimate." />
          <FeatureCard title="Thoughtful Packaging" body="Luxurious, sustainable packaging and optional handwritten notes for gifting." />
        </section>

        <section id="shop" className="shop">
          <div className="shop-header">
            <h2>Featured Frames</h2>
            <div className="small muted">Click a product to see details — all orders via Instagram DM.</div>
          </div>

          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onBuy={() => openInstagramDM(siteinfo.instagram)} />
            ))}
          </div>
        </section>

        <section id="gallery" className="gallery">
          <h3>Gallery — Personal Gifting Moments</h3>
          <p className="muted">Warm, candid moments framed with delicate materials and an eye for affection.</p>

          <div className="gallery-grid">
            {gallery.map((g) => (
              <motion.figure key={g.id} className="gallery-item" whileHover={{ scale: 1.02 }}>
                <img src={g.src} alt={g.alt} />
              </motion.figure>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <div>
            <h3>About Soul Frames</h3>
            <p className="muted">Soul Frames began as a way to make memory-giving feel personal again. We believe gifts should feel like gestures from the heart — not just objects. Each frame is curated to hold a story, finished by hand and presented as a keepsake.</p>

            <ul className="bullets">
              <li>Archival-quality materials</li>
              <li>Limited, small-batch production — boutique, not mass-market</li>
              <li>Custom calligraphy and bespoke finishes on request</li>
            </ul>

            <div className="mt">
              <button onClick={() => openInstagramDM(siteinfo.instagram)} className="btn-outline">Message us on Instagram</button>
            </div>
          </div>

          <div className="about-image">
            <img src="/images/about-studio.jpg" alt="Studio shot" />
          </div>
        </section>

        <section className="contact">
          <h4>Contact</h4>
          <p className="muted">For orders, custom requests and consultations, we prioritise Instagram DMs.</p>

          <div className="contact-row">
            <button onClick={() => openInstagramDM(siteinfo.instagram)} className="btn-primary large">DM to Order — @{siteinfo.instagram}</button>

            <div className="contact-info">
              <div>Email: <a href={`mailto:${siteinfo.email}`}>{siteinfo.email}</a></div>
              <div>Phone (optional): {siteinfo.phone}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="muted">© {new Date().getFullYear()} Soul Frames • Made with heart</div>
          <div className="footer-links">
            <a href={`https://instagram.com/${siteinfo.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#about">About</a>
            <a href="#shop">Shop</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, body }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="feature-card">
      <h4>{title}</h4>
      <p className="muted">{body}</p>
    </motion.div>
  )
}

function ProductCard({ product, onBuy }) {
  return (
    <motion.article whileHover={{ scale: 1.01 }} className="product-card">
      <img src={product.image ?? '/images/product-placeholder.jpg'} alt={product.title} />
      <div className="product-body">
        <div className="product-head">
          <h5>{product.title}</h5>
          <div className="muted">{product.price}</div>
        </div>
        <p className="muted">{product.subtitle}</p>
        <div className="product-actions">
          <button onClick={onBuy} className="btn-outline">Buy Your Customized Frame</button>
          <a href={`#${product.id}`} className="link">View details</a>
        </div>
      </div>
    </motion.article>
  )
}
