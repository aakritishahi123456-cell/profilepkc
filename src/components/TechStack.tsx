'use client'

const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'Python',
  'AI/ML',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Figma',
  'Git',
]

export default function TechStack() {
  return (
    <section id="stack" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <div className="section-label mx-auto mb-4">Tech Stack</div>
          <h2 className="display-font text-3xl md:text-5xl font-semibold tracking-[-0.03em]">
            Modern tools, chosen to keep products fast and future-friendly.
          </h2>
        </div>

        <div className="glass-panel flex flex-wrap justify-center gap-3 rounded-[2rem] p-6 md:p-8">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
