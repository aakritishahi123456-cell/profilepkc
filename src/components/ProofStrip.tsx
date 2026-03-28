'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FolderGit2, Rocket, Code2 } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Projects', icon: FolderGit2 },
  { value: '50+', label: 'Deployments', icon: Rocket },
  { value: '12+', label: 'Tech Stack', icon: Code2 },
]

export default function ProofStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 min-w-[180px]"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <stat.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
