'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold">
          <span className="text-gradient">PK</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-medium bg-white text-black hover:bg-gray-100 transition-colors">
          Hire Me
        </a>
      </div>
    </nav>
  )
}
