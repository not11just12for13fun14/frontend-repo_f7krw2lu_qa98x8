import React, { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const json = await res.json()
      if(res.ok){
        setStatus({ ok:true, msg:'Thanks! We will get back to you shortly.' })
        e.currentTarget.reset()
      } else {
        setStatus({ ok:false, msg: json?.detail || 'Something went wrong.' })
      }
    } catch(err){
      setStatus({ ok:false, msg: err.message })
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-28">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(82,39,255,0.12),transparent),radial-gradient(800px_400px_at_80%_40%,rgba(45,140,255,0.12),transparent)]" />
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Start Your IT Transformation</h2>
          <p className="mt-4 text-slate-300">Tell us about your goals. We’ll reply within 24 hours.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D8CFF]/60" />
          <input name="email" required type="email" placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D8CFF]/60" />
          <input name="company" placeholder="Company" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D8CFF]/60" />
          <input name="phone" placeholder="Phone" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D8CFF]/60" />
          <textarea name="message" required placeholder="What can we help you with?" rows="5" className="md:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D8CFF]/60" />
          <div className="md:col-span-2 flex items-center justify-between">
            <button type="submit" className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5227FF] via-[#2D8CFF] to-[#B19EEF] blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-8 py-3 transition-transform group-hover:-translate-y-0.5">Send</span>
            </button>
            {status && (
              <span className={"text-sm " + (status.ok ? 'text-emerald-400' : 'text-rose-400')}>{status.msg}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
