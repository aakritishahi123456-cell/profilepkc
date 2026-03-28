'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ShimmerTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ShimmerText({ children, className = '', delay = 0 }: ShimmerTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        className="relative z-10"
      >
        {children}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: [0, 0.5, 0],
          x: [0, 100],
        }}
        transition={{ 
          duration: 2, 
          delay: delay + 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
      >
        <span 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          }}
        />
      </motion.span>
    </span>
  )
}

export function ShimmerGradient({ className = '' }: { className?: string }) {
  return (
    <motion.span
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      className={`bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent ${className}`}
    >
      <ShimmerText>{' '}</ShimmerText>
    </motion.span>
  )
}
