import React from 'react'

export default function Footer(){
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/60">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2D8CFF] to-transparent opacity-60" />
      <div className="container mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#5227FF] to-[#2D8CFF]" />
          <span>© {new Date().getFullYear()} QByte IT. All rights reserved.</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
