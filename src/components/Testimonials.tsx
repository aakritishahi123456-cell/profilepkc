'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import ShimmerText from './ShimmerText'

const testimonials = [
  {
    name: 'Alex Sharma',
    role: 'CEO, Advisior',
    feedback: 'Pramod delivered an exceptional AI-powered platform that transformed our business. His expertise in scalable architectures and attention to detail resulted in a 40% increase in user engagement.',
    keywords: ['exceptional', 'transformed', 'expertise', 'scalable'],
  },
  {
    name: 'Sarah Khadka',
    role: 'Founder, Cloud Kitchen',
    feedback: 'Working with Pramod was a game-changer for our restaurant chain. He built a seamless delivery platform that streamlined our operations and boosted efficiency by 60%. Highly recommend!',
    keywords: ['game-changer', 'seamless', 'streamlined', 'boosted'],
  },
  {
    name: 'Raj Patel',
    role: 'CTO, TechStartup',
    feedback: 'Outstanding developer who understands both technical excellence and business goals. His clean code and innovative solutions made our product launch successful.',
    keywords: ['Outstanding', 'technical excellence', 'clean code', 'innovative'],
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-400">What people say</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{testimonial.feedback.split(' ').map((word, idx) => {
                  const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
                  const isKeyword = testimonial.keywords.some(k => k.toLowerCase().replace(' ', '') === cleanWord)
                  return isKeyword ? (
                    <ShimmerText key={idx} delay={0.3 + idx * 0.02} className="text-cyan-300 font-medium">
                      {word}{' '}
                    </ShimmerText>
                  ) : (
                    <span key={idx}>{word} </span>
                  )
                })}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
                  <span className="text-sm font-semibold text-cyan-400">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
