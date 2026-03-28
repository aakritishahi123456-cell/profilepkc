'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const techStack = [
  { name: 'Next.js', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'AI/ML', icon: '🤖' },
  { name: 'PostgreSQL', icon: '🗄️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Figma', icon: '🎯' },
  { name: 'Git', icon: '📚' },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="stack" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-gray-400">Tools I use to bring ideas to life</p>
        </motion.div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.03, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 text-center cursor-default hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-2xl mb-1">{tech.icon}</div>
              <div className="text-xs text-gray-400">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
