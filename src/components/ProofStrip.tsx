'use client'

import { BadgeCheck, FolderGit2, Rocket, Clock3 } from 'lucide-react'

const stats = [
  { value: '15+', label: 'client and product builds shipped', icon: FolderGit2 },
  { value: '50+', label: 'deployments across production environments', icon: Rocket },
  { value: '1 day', label: 'response time for most serious inquiries', icon: Clock3 },
  { value: 'End-to-end', label: 'strategy, design thinking, build, and launch', icon: BadgeCheck },
]

export default function ProofStrip() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="glass-panel rounded-[2rem] px-5 py-6 md:px-8 md:py-8">
          <div className="mb-4 text-center">
            <span className="section-label">Trust Signals</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 md:p-5">
                <stat.icon className="mb-4 h-5 w-5 text-[#c8f169]" />
                <div className="text-xl md:text-2xl font-semibold text-white">{stat.value}</div>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
