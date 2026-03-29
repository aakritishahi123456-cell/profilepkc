'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProofStrip from '@/components/ProofStrip'
import Deliver from '@/components/Deliver'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <span className="text-2xl font-semibold text-gradient">PK</span>
    </div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <main>
          <Hero />
          <ProofStrip />
          <Deliver />
          <Projects />
          <Testimonials />
          <About />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
