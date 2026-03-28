'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AmbientBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)
  
  const spotlightX = useTransform(springX, [0, 1], ['0%', '100%'])
  const spotlightY = useTransform(springY, [0, 1], ['0%', '100%'])

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Layer 1: Background gradient */}
      <div 
        className="absolute inset-0 layer-background"
        style={{
          background: 'radial-gradient(ellipse at center, #0a0a0f 0%, #000000 100%)',
        }}
      />
      
      {/* Layer 2: Grid overlay */}
      <div 
        className="absolute inset-0 layer-grid-noise"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Layer 2: Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] layer-grid-noise"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-60 layer-background"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(0, 240, 255, 0.12) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
            radial-gradient(at 60% 80%, rgba(0, 240, 255, 0.08) 0px, transparent 50%),
            radial-gradient(at 40% 60%, rgba(168, 85, 247, 0.06) 0px, transparent 50%)
          `,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Mouse spotlight */}
      <motion.div
        className="absolute inset-0 opacity-40 layer-glow"
        style={{
          background: `radial-gradient(circle at ${spotlightX} ${spotlightY}, rgba(0, 240, 255, 0.15) 0%, transparent 50%)`,
        }}
      />
      
      {/* Ambient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] layer-glow"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          top: '10%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, transparent 70%)',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] layer-glow"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          bottom: '15%',
          right: '10%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] layer-glow"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
