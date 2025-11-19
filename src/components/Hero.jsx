import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const colors = {
  purple: '#5227FF',
  blue: '#2D8CFF',
  violet: '#B19EEF'
}

export default function Hero() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Gradient background + particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(82,39,255,0.15),transparent),radial-gradient(1200px_600px_at_90%_20%,rgba(45,140,255,0.15),transparent),radial-gradient(1000px_500px_at_50%_90%,rgba(177,158,239,0.15),transparent)]" />
        <div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />
      </div>

      {/* Spline 3D center aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[90vw] max-w-5xl aspect-square">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              QByte IT • Smarter IT. Faster AI. Secure Digital Infrastructure.
            </span>
          </motion.div>

          <motion.h1 initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.9}} className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="bg-clip-text text-transparent bg-[conic-gradient(from_180deg_at_50%_50%,#ffffff,rgba(178,158,239,0.95),#2D8CFF,#5227FF,#ffffff)] [text-shadow:_0_0_24px_rgba(82,39,255,0.35)]">
              Future-proof IT, Accelerated by AI
            </span>
          </motion.h1>
          
          <motion.p initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.9}} className="mt-6 text-lg md:text-xl text-slate-300">
            Managed IT, Microsoft 365 & Azure, Web & SEO, Automations and secure cloud roadmaps — all delivered with a premium, enterprise-grade touch.
          </motion.p>

          {/* CTA buttons with magnetic effect via CSS hover translate */}
          <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:0.35, duration:0.9}} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5227FF] via-[#2D8CFF] to-[#B19EEF] blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-8 py-3 transition-transform group-hover:-translate-y-0.5">
                Start Your IT Transformation
              </span>
            </a>
            <a href="#services" className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B19EEF] via-[#2D8CFF] to-[#5227FF] blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <span className="relative z-10 rounded-full bg-white/5 backdrop-blur-md border border-white/15 px-8 py-3 transition-transform group-hover:-translate-y-0.5">
                Explore Services
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Glass card center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[54vh] w-[86vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-[0_0_80px_rgba(82,39,255,0.25)]" />
    </section>
  )
}
