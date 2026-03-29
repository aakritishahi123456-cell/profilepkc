'use client'

import { Globe, Bot, Zap, Code2 } from 'lucide-react'

const deliverables = [
  { icon: Globe, title: 'Scalable Web Applications', description: 'Building robust architectures that grow with your business.' },
  { icon: Bot, title: 'AI-Powered Automation', description: 'Intelligent tools that streamline workflows and boost productivity.' },
  { icon: Zap, title: 'Fast, Optimized Performance', description: 'Lightning-fast load times and optimized user experiences.' },
  { icon: Code2, title: 'Clean, Maintainable Code', description: 'Well-structured code that\'s easy to maintain and extend.' },
]

export default function Deliver() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">What I Deliver</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {deliverables.map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <item.icon className="w-6 h-6 text-gray-400 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
