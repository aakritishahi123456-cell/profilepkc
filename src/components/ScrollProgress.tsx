'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{ scaleX }}
    >
      <div 
        className="h-full w-full"
        style={{
          background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
          boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
        }}
      />
    </motion.div>
  )
}
