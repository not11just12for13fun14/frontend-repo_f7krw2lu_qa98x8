import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ServerCog, Cloud, Globe, Bot, LineChart } from 'lucide-react'

const services = [
  {
    icon: ServerCog,
    title: 'Managed IT Support (L1–L3)',
    desc: 'Proactive monitoring, endpoint management, patching, helpdesk and on-site support for secure uptime.'
  },
  {
    icon: Cloud,
    title: 'Microsoft 365, Azure, Cloud Migrations',
    desc: 'Email, identity, Azure AD, Intune, SharePoint and secure hybrid cloud with zero-trust principles.'
  },
  {
    icon: Globe,
    title: 'Web Development & SEO',
    desc: 'High-performance websites, SEO foundations, analytics and conversion-first UX.'
  },
  {
    icon: Bot,
    title: 'AI Automation & Custom Integrations',
    desc: 'Agentic workflows, RPA, API-based automations and AI copilots tailored to your processes.'
  },
  {
    icon: Shield,
    title: 'IT Audits & Digitalization Roadmaps',
    desc: 'Security baselines, compliance, asset inventory and stepwise modernization plans.'
  },
  {
    icon: LineChart,
    title: 'Ongoing Optimization',
    desc: 'Measure, iterate, optimize costs and performance with quarterly strategy sessions.'
  }
]

export default function Services(){
  return (
    <section id="services" className="relative py-24 md:py-28 bg-slate-950/40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">What We Do</h2>
          <p className="mt-4 text-slate-300">Enterprise-grade delivery with approachable guidance. Cleaner stacks, safer systems, faster outcomes.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group relative rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 hover:-translate-y-1.5 transition-transform shadow-[0_10px_40px_rgba(82,39,255,0.15)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5227FF]/20 via-[#2D8CFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="inline-flex rounded-xl p-3 bg-white/10 border border-white/10 text-cyan-300 shadow-inner">
                  {React.createElement(s.icon, { size:24, className:'drop-shadow-[0_0_12px_rgba(45,140,255,0.6)]' })}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-slate-300 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
