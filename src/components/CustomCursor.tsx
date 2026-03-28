'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)
  
  const trailSpringX = useSpring(trailX, { damping: 15, stiffness: 300 })
  const trailSpringY = useSpring(trailY, { damping: 15, stiffness: 300 })
  
  const scale = useTransform(useMotionValue(0), [0, 1], [1, 2])
  const trailScale = useTransform(useMotionValue(0), [0, 1], [1, 1.5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
      trailX.set(e.clientX - 20)
      trailY.set(e.clientY - 20)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [cursorX, cursorY, trailX, trailY])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          scale: isHovering ? 1.5 : 1,
        }}
      >
        <div 
          className="w-4 h-4 rounded-full"
          style={{
            background: 'radial-gradient(circle, #00f0ff 0%, #00f0ff 40%, transparent 70%)',
            boxShadow: '0 0 10px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.5)',
          }}
        />
      </motion.div>

      {/* Trail effect */}
      <motion.div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          scale: trailScale,
        }}
      >
        <div 
          className="w-10 h-10 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>

      {/* Secondary trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: trailSpringX,
          y: trailSpringY,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.5],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>
    </>
  )
}
