'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ParticleField from './ParticleField'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }
    const section = sectionRef.current
    section?.addEventListener('mousemove', handleMouseMove)
    return () => section?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Particle field */}
      <ParticleField />
      
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `
              linear-gradient(115deg, transparent 30%, rgba(0, 240, 255, 0.1) 35%, rgba(0, 240, 255, 0.05) 40%, transparent 45%),
              linear-gradient(65deg, transparent 60%, rgba(168, 85, 247, 0.08) 65%, rgba(168, 85, 247, 0.03) 70%, transparent 75%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
      </div>
      
      {/* Glow behind text */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-40 blur-[100px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Ambient glows */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-25 blur-[100px]" 
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.3) 0%, transparent 70%)' }} 
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-20 blur-[80px]" 
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} 
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 text-sm mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-gray-300">Available for new projects</span>
              </motion.span>
            </motion.div>
            
            {/* Headline with line-by-line animation */}
            <motion.div
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                  className="block"
                >
                  I Build
                </motion.span>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.65, duration: 0.6, ease: 'easeOut' }}
                  className="block text-gradient animate-gradient"
                >
                  Scalable Web Apps
                </motion.span>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                  className="block"
                >
                  & AI Systems
                </motion.span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.div
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="text-base text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
                Helping startups and businesses turn ideas into high-performance digital products.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <MagneticButton>
                <motion.a
                  href="#work"
                  className="group relative px-7 py-3 rounded-full font-semibold flex items-center justify-center gap-2 overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #00f0ff 0%, #00c4cc 100%)', color: '#000000' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 240, 255, 0.3)',
                        '0 0 40px rgba(0, 240, 255, 0.5)',
                        '0 0 20px rgba(0, 240, 255, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  href="#contact"
                  className="px-7 py-3 rounded-full font-semibold bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hire Me
                </motion.a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with tilt */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <TiltCard>
              <div className="relative">
                {/* Background radial gradient */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl"
                />
                
                {/* Floating with physics */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 1, 0, -1, 0],
                  }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="relative"
                >
                  {/* Animated gradient border */}
                  <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-gradient-bg">
                    <div className="relative bg-black/80 rounded-full p-1">
                      <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden">
                        <Image
                          src="/profile.jpg"
                          alt="Pramod KC - AI & Web Systems Engineer"
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow aura */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 40px rgba(0,255,255,0.2)',
                        '0 0 60px rgba(168,85,247,0.3)',
                        '0 0 40px rgba(0,255,255,0.2)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-4 rounded-full"
                  />
                  
                  {/* Hover glow */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 500 }}
                    className="absolute -inset-3 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      boxShadow: '0 0 60px rgba(0,255,255,0.5), 0 0 100px rgba(168,85,247,0.3)',
                      background: 'radial-gradient(circle, rgba(0,255,255,0.2) 0%, transparent 70%)',
                    }}
                  />
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-6 h-6 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.8) 0%, transparent 70%)' }}
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.8) 0%, transparent 70%)' }}
                />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
    >
      {children}
    </motion.div>
  )
}
