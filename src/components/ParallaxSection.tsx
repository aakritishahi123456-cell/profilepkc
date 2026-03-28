'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxSection({ 
  children, 
  speed = 0.1,
  className = '' 
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  direction?: 'x' | 'y'
  className?: string
}

export function ParallaxElement({ 
  children, 
  speed = 0.1,
  direction = 'y',
  className = '' 
}: ParallaxElementProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const transformValue = useTransform(scrollYProgress, [0, 1], 
    direction === 'y' 
      ? ['0%', `${speed * 100}%`] 
      : ['0%', `${speed * -100}%`]
  )

  return (
    <motion.div 
      ref={ref}
      style={{ 
        [direction]: isInView ? transformValue : 0 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
