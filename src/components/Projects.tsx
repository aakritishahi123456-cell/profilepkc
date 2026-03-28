'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import MagneticButton from './MagneticButton'

const projects = [
  {
    title: 'Advisior Web',
    description: 'AI-powered advisory platform',
    emoji: '🎯',
    problem: 'Businesses struggled to provide personalized real-time recommendations to their customers at scale.',
    solution: 'Built an AI-driven platform using machine learning algorithms to analyze user behavior and deliver context-aware recommendations instantly.',
    impact: 'Increased user engagement by 40% and reduced response time from hours to milliseconds.',
    tech: ['Next.js', 'TypeScript', 'AI/ML', 'PostgreSQL'],
    liveLink: 'https://advisior-web.vercel.app/',
    codeLink: '#',
  },
  {
    title: 'Cloud Kitchen',
    description: 'Modern food delivery platform',
    emoji: '🍔',
    problem: 'Traditional restaurants lacked digital presence and struggled with order management efficiency.',
    solution: 'Developed a comprehensive platform with real-time order tracking, automated kitchen display system, and intuitive dashboard.',
    impact: 'Streamlined operations for 50+ restaurants and increased delivery efficiency by 60%.',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    liveLink: 'https://vercel.com/aakritishahi123456-cells-projects/pramod-cloud-kitchen',
    codeLink: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="work" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-gray-400">Real problems, elegant solutions, measurable impact</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: { project: typeof projects[0], index: number, isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-8, 8])
  
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const gradientX = useTransform(x, [-100, 100], ['0%', '100%'])
  const gradientY = useTransform(y, [-100, 100], ['0%', '100%'])

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.6 }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {/* Background glow on hover */}
        <motion.div
          className="absolute -inset-2 rounded-3xl opacity-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15) 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
          whileHover={{ opacity: 1 }}
        />
        
        {/* Card */}
        <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 group">
          
          {/* Light reflection effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.05) 50%, transparent 55%)`,
              left: gradientX,
              top: gradientY,
            }}
          />
          
          {/* Image Preview */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center transform transition-transform duration-500 group-hover:scale-110">
                <div className="text-6xl mb-2">{project.emoji}</div>
                <div className="text-sm text-gray-400">{project.description}</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3"
              >
                <MagneticButton>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-medium flex items-center gap-2 hover:bg-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    Code
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
            <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            
            {/* Problem / Solution / Impact */}
            <div className="space-y-3 mb-5">
              <div>
                <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Problem</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">Solution</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">Impact</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{project.impact}</p>
              </div>
            </div>
            
            {/* Tech Stack - animates on hover */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          {/* Hover glow border */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ 
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.2), inset 0 0 1px rgba(0, 240, 255, 0.3)' 
            }}
          />
        </div>
      </motion.div>
    </motion.article>
  )
}
