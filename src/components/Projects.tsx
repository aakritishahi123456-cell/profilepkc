'use client'

import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Advisior Web',
    description:
      'An AI-powered advisory experience designed to turn complex decision-making into a polished, guided customer journey.',
    impact: 'Built for clarity, trust, and product-led conversion.',
    tech: ['Next.js', 'TypeScript', 'AI integrations', 'PostgreSQL'],
    link: 'https://advisior-web.vercel.app/',
  },
  {
    title: 'Cloud Kitchen',
    description:
      'A modern restaurant ordering experience with better operational flow, cleaner UI, and smoother customer interaction.',
    impact: 'Focused on speed, usability, and scalable day-to-day operations.',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    link: 'https://vercel.com/aakritishahi123456-cells-projects/pramod-cloud-kitchen',
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-label mx-auto mb-4">Selected Work</div>
          <h2 className="display-font text-3xl md:text-5xl font-semibold mb-4 tracking-[-0.03em]">
            Projects built to feel serious from the first scroll.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400 text-base md:text-lg">
            A strong client website should communicate quality before anyone reads every line. These
            projects were built with that standard in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-panel p-5 md:p-7 rounded-[1.75rem] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#c8f169]">Case Study</p>
                  <h3 className="text-xl md:text-2xl font-semibold">{project.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-sm text-slate-400 mb-5">{project.impact}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/8 text-slate-200"
                  >
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
