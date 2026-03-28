'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import MagneticButton from './MagneticButton'

const socials = [
  { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/9779822403262' },
  { name: 'Instagram', icon: '📸', link: 'https://instagram.com/pramod.kc.750331' },
  { name: 'TikTok', icon: '🎵', link: 'https://tiktok.com/@pramodkc16' },
  { name: 'Facebook', icon: '📘', link: 'https://www.facebook.com/pramod.kc.750331' },
  { name: 'Email', icon: '✉️', link: 'mailto:pramodkc16@gmail.com' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" 
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)' }} 
      />
      
      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's build something <span className="text-gradient">powerful</span>
          </h2>
          
          <p className="text-gray-400 mb-8">
            Have a project in mind? Let's create something amazing.
          </p>
          
          <MagneticButton>
            <motion.a
              href="https://wa.me/9779822403262"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold"
              style={{ background: 'linear-gradient(135deg, #00f0ff 0%, #00c4cc 100%)', color: '#000000' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 240, 255, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span>💬</span>
              Get In Touch
            </motion.a>
          </MagneticButton>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10"
          >
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Or connect via</p>
            
            <div className="flex justify-center gap-3">
              {socials.map((social, i) => (
                <MagneticButton key={social.name}>
                  <motion.a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
