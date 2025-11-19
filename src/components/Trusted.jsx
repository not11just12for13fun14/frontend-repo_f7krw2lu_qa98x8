import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  {name:'Microsoft Azure', src:'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg'},
  {name:'Microsoft 365', src:'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'},
  {name:'VMware', src:'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBBenVyZXxlbnwwfDB8fHwxNzYzNTc0NjQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'},
  {name:'Proxmox', src:'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBBenVyZXxlbnwwfDB8fHwxNzYzNTc0NjQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'},
  {name:'React', src:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
  {name:'Next.js', src:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'}
]

export default function Trusted() {
  return (
    <section className="relative w-full">
      <div className="relative mx-auto max-w-7xl px-6 -mt-10">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl py-6 shadow-[0_0_50px_rgba(82,39,255,0.15)]">
          <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-8">
            {logos.map((logo, i) => (
              <motion.div key={logo.name} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="flex items-center justify-center">
                <img src={logo.src} alt={logo.name + ' logo'} className="h-8 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
