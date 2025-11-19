import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  useEffect(() => {
    // Lenis smooth scroll
    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        smoothWheel: true,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
      function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
  }, [])

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://qbyte.example'
  const ogImage = siteUrl + '/og-qbyte.jpg'

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-950 text-white selection:bg-[#2D8CFF]/30 selection:text-white">
        <Helmet>
          <title>QByte IT — Smarter IT. Faster AI. Secure Digital Infrastructure.</title>
          <meta name="description" content="Romanian IT & AI agency delivering managed IT, Microsoft 365 & Azure, web & SEO, AI automations, and security-first cloud roadmaps." />
          <meta property="og:title" content="QByte IT" />
          <meta property="og:description" content="Smarter IT. Faster AI. Secure Digital Infrastructure." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={ogImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <script type="application/ld+json">{JSON.stringify({
            '@context':'https://schema.org',
            '@type':'Organization',
            name:'QByte IT',
            url: siteUrl,
            slogan: 'Smarter IT. Faster AI. Secure Digital Infrastructure.',
            sameAs: ['https://www.linkedin.com'],
            address: { '@type':'PostalAddress', addressCountry:'RO' },
            areaServed: 'RO',
            brand: 'QByte IT',
            makesOffer: ['Managed IT Support', 'Microsoft 365', 'Azure', 'Cloud Migrations', 'Web Development', 'SEO', 'AI Automation', 'Custom Integrations', 'IT Audits', 'Digitalization Roadmaps']
          })}</script>
        </Helmet>
        <Hero />
        <Trusted />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  )
}
