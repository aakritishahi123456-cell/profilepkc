'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-label mx-auto mb-4">About Me</div>
          <h2 className="display-font text-3xl md:text-5xl font-semibold tracking-[-0.03em]">
            I build with taste, not just tools.
          </h2>
        </div>

        <div className="glass-panel grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center rounded-[2rem] p-6 md:p-8">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-52 h-64 md:w-64 md:h-80 overflow-hidden rounded-[1.75rem] border border-white/10">
              <Image src="/profile.jpg" alt="Pramod KC" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-semibold">Pramod KC</span>, a web and AI
              systems engineer focused on building digital experiences that feel sharp, modern, and
              confidently premium.
            </p>
            <p>
              I care about the details clients notice: pacing, clarity, layout, motion, and the
              overall feeling of quality. Under the surface, I pair that with solid engineering so
              the site is fast, maintainable, and ready to grow.
            </p>
            <p>
              That mix matters because a great website is not only functional. It should strengthen
              your reputation the moment someone lands on it.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white hover:text-[#dfffe2] transition-colors mt-4 font-semibold"
            >
              Let&apos;s build something impressive &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
