'use client'

import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Advisior Web',
    description: 'AI-powered advisory platform with real-time recommendations.',
    tech: ['Next.js', 'TypeScript', 'AI/ML', 'PostgreSQL'],
    link: 'https://advisior-web.vercel.app/',
  },
  {
    title: 'Cloud Kitchen',
    description: 'Modern food delivery platform with order management.',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    link: 'https://vercel.com/aakritishahi123456-cells-projects/pramod-cloud-kitchen',
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Selected Work</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-md bg-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
