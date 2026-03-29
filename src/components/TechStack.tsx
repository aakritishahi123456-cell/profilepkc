'use client'

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Python', 'AI/ML', 'PostgreSQL', 'Docker', 'AWS', 'Figma', 'Git']

export default function TechStack() {
  return (
    <section id="stack" className="py-16 md:py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12">Tech Stack</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
