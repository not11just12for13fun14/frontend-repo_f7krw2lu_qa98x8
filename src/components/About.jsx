import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="relative py-24 md:py-28">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(82,39,255,0.12),transparent),radial-gradient(800px_400px_at_90%_40%,rgba(45,140,255,0.12),transparent)]" />
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, x:-24}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <h2 className="text-3xl md:text-5xl font-bold text-white">About QByte IT</h2>
            <p className="mt-4 text-slate-300 text-lg">We build secure IT foundations for modern companies and automate what slows them down.</p>
            <p className="mt-4 text-slate-300">Born in Romania, we serve SMEs and growth teams with enterprise discipline: security-first configurations, measurable KPIs and fast iteration cycles.</p>
          </motion.div>
          <motion.div initial={{opacity:0, x:24}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <ul className="grid grid-cols-2 gap-4 text-slate-200">
                <li className="rounded-xl bg-white/5 p-4 border border-white/10">Microsoft 365 & Azure experts</li>
                <li className="rounded-xl bg-white/5 p-4 border border-white/10">SME-friendly pricing & SLAs</li>
                <li className="rounded-xl bg-white/5 p-4 border border-white/10">Security baselines & audits</li>
                <li className="rounded-xl bg-white/5 p-4 border border-white/10">AI-driven automation playbooks</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
