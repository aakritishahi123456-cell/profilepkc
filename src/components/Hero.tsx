'use client'

import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-28 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="section-label mx-auto mb-6 lg:mx-0">
              <Sparkles className="h-3.5 w-3.5 text-[#c8f169]" />
              Available for premium client work
            </div>

            <h1 className="display-font text-4xl md:text-6xl lg:text-7xl font-semibold mb-5 leading-[1.02] tracking-[-0.04em]">
              Websites that look
              <span className="text-gradient"> expensive</span>,
              <br />
              feel effortless,
              <br />
              and help clients say yes.
            </h1>

            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I design and build high-converting portfolio sites, business websites, and AI-enhanced
              product experiences that make your brand feel sharp, trustworthy, and ready for serious
              work.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                Fast-loading
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                Mobile-first
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                Built to impress clients
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold bg-[#dfffe2] text-[#071018] hover:bg-white text-center transition-colors"
              >
                View Case Studies
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] text-center transition-colors"
              >
                Book a Project Call
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="section-shell relative w-full max-w-[440px] rounded-[2rem] p-4 sm:p-5">
              <div className="glass-panel relative overflow-hidden rounded-[1.6rem] p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between text-sm text-slate-300">
                  <span className="rounded-full border border-[#c8f169]/20 bg-[#c8f169]/10 px-3 py-1 text-[#e3f5b4]">
                    Client-ready aesthetic
                  </span>
                  <span>Pramod KC</span>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a121a]">
                  <Image src="/profile.jpg" alt="Pramod KC" fill className="object-cover" priority />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#061018] to-transparent" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-2xl font-semibold text-white">3s</div>
                    <p className="mt-1 text-sm text-slate-400">to communicate trust and value</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-2xl font-semibold text-white">100%</div>
                    <p className="mt-1 text-sm text-slate-400">custom-crafted, no template feel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
