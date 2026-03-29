'use client'

import { FolderGit2, Rocket, Code2 } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Projects', icon: FolderGit2 },
  { value: '50+', label: 'Deployments', icon: Rocket },
  { value: '12+', label: 'Tech Stack', icon: Code2 },
]

export default function ProofStrip() {
  return (
    <section className="py-12 md:py-16 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 md:gap-3">
              <stat.icon className="w-4 md:w-5 h-4 md:h-5 text-gray-500" />
              <span className="text-lg md:text-2xl font-semibold">{stat.value}</span>
              <span className="text-gray-500 text-xs md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
