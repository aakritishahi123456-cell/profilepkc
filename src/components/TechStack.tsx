'use client'

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Python', 'AI/ML', 'PostgreSQL', 'Docker', 'AWS', 'Figma', 'Git']

export default function TechStack() {
  return (
    <section id="stack" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Tech Stack</h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
