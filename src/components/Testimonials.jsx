import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {quote: 'They transformed our outdated stack into a secure, modern environment in under 6 weeks.', author:'COO, Logistics SME'},
  {quote: 'Our support tickets dropped by 70% and onboarding is now fully automated.', author:'Head of HR, Retail'},
  {quote: 'The AI automations cut our reporting time from days to minutes.', author:'Finance Director, Manufacturing'},
  {quote: 'Clear, calm, and enterprise-grade delivery. Highly recommended.', author:'Founder, Tech Startup'}
]

export default function Testimonials(){
  return (
    <section className="relative py-24 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Client Feedback</h2>
          <p className="mt-4 text-slate-300">Outcomes that compound. Trust that stays.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t,i) => (
            <motion.div key={i} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="relative rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(82,39,255,0.12)] hover:shadow-[0_20px_60px_rgba(82,39,255,0.25)] transition-shadow">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5227FF]/15 via-[#2D8CFF]/10 to-transparent" />
              <div className="relative z-10">
                <p className="text-slate-200 text-lg">“{t.quote}”</p>
                <p className="mt-4 text-slate-400">{t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
