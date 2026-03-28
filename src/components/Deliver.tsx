'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Bot, Zap, Code2 } from 'lucide-react'
import ShimmerText from './ShimmerText'

const deliverables = [
  {
    icon: Globe,
    title: 'Scalable Web Applications',
    description: 'Building robust, scalable architectures that grow with your business.',
    keywords: ['robust', 'scalable'],
  },
  {
    icon: Bot,
    title: 'AI-Powered Automation',
    description: 'Intelligent automation tools that streamline workflows and boost productivity.',
    keywords: ['Intelligent', 'streamline'],
  },
  {
    icon: Zap,
    title: 'Fast, Optimized Performance',
    description: 'Lightning-fast load times and optimized user experiences.',
    keywords: ['Lightning-fast', 'optimized'],
  },
  {
    icon: Code2,
    title: 'Clean, Maintainable Code',
    description: 'Well-structured, documented code that\'s easy to maintain and extend.',
    keywords: ['Well-structured', 'maintain'],
  },
]

export default function Deliver() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What I <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-gray-400">Value beyond code</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description.split(' ').map((word, idx) => {
                      const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
                      const isKeyword = item.keywords.some(k => k.toLowerCase() === cleanWord)
                      return isKeyword ? (
                        <ShimmerText key={idx} delay={0.5 + idx * 0.05} className="text-cyan-300 font-medium">
                          {word}{' '}
                        </ShimmerText>
                      ) : (
                        <span key={idx}>{word} </span>
                      )
                    })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
