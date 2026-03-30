'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import AmbientBackground from '@/components/AmbientBackground'
import Hero from '@/components/Hero'
import ProofStrip from '@/components/ProofStrip'
import Deliver from '@/components/Deliver'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#03060a]">
      <div className="glass-panel rounded-3xl px-8 py-6">
        <span className="display-font text-2xl font-semibold text-gradient">PK</span>
      </div>
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
        <AmbientBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <ProofStrip />
          <Deliver />
          <WhyWorkWithMe />
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
