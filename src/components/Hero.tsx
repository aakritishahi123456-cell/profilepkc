'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center py-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
              I Build
              <br />
              <span className="text-gradient">Scalable Web Apps</span>
              <br />
              & AI Systems
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Helping startups and businesses turn ideas into high-performance digital products.
            </p>
            
            <div className="flex gap-4">
              <a href="#work" className="px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-gray-100">
                View Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/5">
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="/profile.jpg"
                alt="Pramod KC"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
