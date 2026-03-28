'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode, useEffect, useState } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fadeScale'
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  scaleFrom?: number
  glow?: boolean
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  className = '',
  scaleFrom = 0.85,
  glow = false,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })
  const [glowVisible, setGlowVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setGlowVisible(true)
    }
  }, [isInView])

  const directions = {
    up: { y: 40, x: 0, scale: 1 },
    down: { y: -40, x: 0, scale: 1 },
    left: { x: 40, y: 0, scale: 1 },
    right: { x: -40, y: 0, scale: 1 },
    fadeScale: { y: 0, x: 0, scale: scaleFrom },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ ...directions[direction], opacity: 0 }}
      animate={isInView ? { x: 0, y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${glow ? `section-glow layer-glow ${glowVisible ? 'is-visible' : ''}` : ''} layer-content ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealGroup({ children, staggerDelay = 0.1 }: { children: ReactNode[], staggerDelay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="flex flex-wrap">
      {(children as ReactNode[]).map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * staggerDelay, ease: 'easeOut' }}
          className="w-full"
        >
          {child as ReactNode}
        </motion.div>
      ))}
    </div>
  )
}
