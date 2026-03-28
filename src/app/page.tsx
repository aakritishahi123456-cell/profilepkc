'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import MouseGlow from '@/components/MouseGlow'
import AmbientBackground from '@/components/AmbientBackground'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import ProofStrip from '@/components/ProofStrip'
import Deliver from '@/components/Deliver'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

/*
LAYER SYSTEM:
Layer 1 (z-0):   Background gradient
Layer 2 (z-1):   Grid/noise textures
Layer 3 (z-5):   Glow effects
Layer 10 (z-10): Content/sections
Layer 50 (z-50): Navbar
Layer 100 (z-100): Scroll progress
Layer 9997 (z-9997): Custom cursor trail
Layer 9998 (z-9998): Custom cursor dot
Layer 9999 (z-9999): Loading screen
*/

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: '#000000' }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          <span className="text-gradient">PK</span>
        </motion.div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#00f0ff' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        {mounted && (
          <>
            {/* Layer 1-3: Background & Effects */}
            <div className="fixed inset-0 z-0">
              <AmbientBackground />
            </div>
            
            {/* Layer 100: Scroll Progress */}
            <div className="fixed top-0 left-0 right-0 z-[100]">
              <ScrollProgress />
            </div>
            
            {/* Layer 5: Mouse Glow */}
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <MouseGlow />
            </div>
          </>
        )}
        
        {/* Layer 50: Navbar */}
        <div className="relative z-[50]">
          <Navbar />
        </div>
        
        {/* Layer 10: Content */}
        <main className="relative z-10">
          <Hero />
          <ProofStrip />
          <Deliver />
          <Projects />
          <Testimonials />
          <About />
          <TechStack />
          <Contact />
        </main>
        
        {/* Layer 10: Footer */}
        <div className="relative z-10">
          <Footer />
        </div>
        
        {/* Layer 9997-9998: Custom Cursor (rendered last for highest priority) */}
        {mounted && <CustomCursor />}
      </div>
    </>
  )
}
