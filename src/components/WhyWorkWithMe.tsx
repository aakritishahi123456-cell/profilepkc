'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Ship Fast',
    description:
      'I deliver production-ready systems quickly without compromising quality or scalability.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Business Focused',
    description:
      'I align technical decisions with real business outcomes and measurable results.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Clean Code',
    description:
      'Production-ready, maintainable code that your team can build upon with confidence.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Full Stack',
    description: 'Strong understanding of both frontend UX and backend architecture.',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="fadeScale" duration={0.8}>
          <div className="text-center mb-16">
            <div className="section-label mx-auto mb-4">Why Clients Choose Me</div>
            <h2 className="display-font text-4xl md:text-5xl font-bold mb-4 tracking-[-0.03em]">
              <span className="text-gradient">Why Work With Me</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I combine presentation, engineering, and business thinking so your website does more
              than exist. It helps you sell.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              direction="fadeScale"
              duration={0.6}
              delay={index * 0.1}
              glow
            >
              <motion.div
                className="glass-panel relative p-6 rounded-2xl hover:border-[#c8f169]/20 transition-all duration-300 group h-full"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#74f2ce]/10 to-[#c8f169]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-[#74f2ce]/15 to-[#c8f169]/15 text-[#c8f169] group-hover:text-[#f1ffd1] transition-colors">
                  {feature.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#f1ffd1] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
