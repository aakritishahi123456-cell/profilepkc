'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
              I Build
              <br />
              <span className="text-gradient">Scalable Web Apps</span>
              <br />
              & AI Systems
            </h1>
            
            <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
              Helping startups and businesses turn ideas into high-performance digital products.
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start">
              <a href="#work" className="px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-gray-100 text-center">
                View Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/5 text-center">
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-xs md:max-w-none">
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
