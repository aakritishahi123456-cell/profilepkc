'use client'

import { Globe, Bot, Zap, Code2 } from 'lucide-react'

const deliverables = [
  {
    icon: Globe,
    title: 'Premium business websites',
    description:
      'Elegant websites that immediately feel credible and make your services easier to buy.',
  },
  {
    icon: Bot,
    title: 'AI-enhanced workflows',
    description:
      'Useful automation and AI features that reduce manual work instead of adding gimmicks.',
  },
  {
    icon: Zap,
    title: 'Fast, responsive experience',
    description:
      'Sharp interactions, smooth motion, and mobile-friendly layouts that feel professionally made.',
  },
  {
    icon: Code2,
    title: 'Clean build quality',
    description:
      'A maintainable codebase that is ready for updates, scale, and future collaboration.',
  },
]

export default function Deliver() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-label mx-auto mb-4">What Clients Get</div>
          <h2 className="display-font text-3xl md:text-5xl font-semibold mb-4 tracking-[-0.03em]">
            Design that earns trust. Engineering that backs it up.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400 text-base md:text-lg">
            The goal is not just a nice-looking site. It is a site that feels premium, explains
            your value quickly, and helps you win better conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="glass-panel p-5 md:p-6 rounded-[1.5rem] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3">
                  <item.icon className="w-5 md:w-6 h-5 md:h-6 text-[#c8f169] mt-0.5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
