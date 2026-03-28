'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import ShimmerText from './ShimmerText'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="py-20 relative">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400">Get to know the person behind the code</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-48">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl" />
                <div className="relative w-full h-full rounded-2xl bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gradient mb-1">PK</div>
                    <div className="text-sm text-gray-400">Pramod KC</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6"
          >
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm <span className="text-white font-medium">Pramod KC</span>, an <ShimmerText delay={0.5} className="text-cyan-300 font-medium">AI & Web Systems Engineer</ShimmerText> passionate about building <ShimmerText delay={0.6} className="text-cyan-300 font-medium">scalable</ShimmerText>, <ShimmerText delay={0.7} className="text-cyan-300 font-medium">high-performance</ShimmerText> digital products.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              With expertise in modern web frameworks and AI, I help startups transform their vision into reality. From concept to deployment, I create <ShimmerText delay={0.8} className="text-purple-300 font-medium">elegant solutions</ShimmerText> that drive results.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My approach combines <ShimmerText delay={0.9} className="text-cyan-300 font-medium">technical excellence</ShimmerText> with business understanding—ensuring every line of code contributes to your success.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-400 font-medium mt-4 hover:text-cyan-300 transition-colors"
            >
              Let's work together <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
