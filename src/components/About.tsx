'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image src="/profile.jpg" alt="Pramod KC" fill className="object-cover rounded-2xl" />
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
            <p>I'm <span className="text-white">Pramod KC</span>, an AI & Web Systems Engineer passionate about building scalable, high-performance digital products.</p>
            <p>With expertise in modern web frameworks and AI, I help startups transform their vision into reality. From concept to deployment, I create elegant solutions that drive results.</p>
            <p>My approach combines technical excellence with business understanding—ensuring every line of code contributes to your success.</p>
            
            <a href="#contact" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mt-4">
              Let's work together &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
