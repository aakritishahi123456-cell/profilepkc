'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2025 Pramod KC. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Built with</span>
          <span className="text-cyan-400">Next.js</span>
          <span>&</span>
          <span className="text-purple-400">Framer Motion</span>
        </div>
      </div>
    </motion.footer>
  )
}
