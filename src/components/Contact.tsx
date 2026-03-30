'use client'

import { ArrowRight, Camera, Globe, Mail, MessageCircleMore } from 'lucide-react'

const socials = [
  { name: 'WhatsApp', icon: MessageCircleMore, link: 'https://wa.me/9779822403262' },
  { name: 'Instagram', icon: Camera, link: 'https://instagram.com/pramod.kc.750331' },
  { name: 'Facebook', icon: Globe, link: 'https://www.facebook.com/pramod.kc.750331' },
  { name: 'Email', icon: Mail, link: 'mailto:pramodkc16@gmail.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="glass-panel rounded-[2rem] p-6 md:p-10 text-center">
          <div className="section-label mx-auto mb-4">Start a Project</div>
          <h2 className="display-font text-3xl md:text-5xl font-semibold mb-4 tracking-[-0.03em]">
            If your brand needs a website that feels premium, let&apos;s build it.
          </h2>
          <p className="text-slate-300 mb-8 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Send me your idea, current site, or rough goal. I can help shape it into something
            cleaner, sharper, and much more impressive to clients.
          </p>

          <a
            href="https://wa.me/9779822403262"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 md:px-8 py-3.5 rounded-full font-semibold bg-[#dfffe2] text-[#071018] hover:bg-white transition-colors text-sm md:text-base"
          >
            Message Me on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 hover:bg-white/10 transition-colors text-sm text-slate-200"
              >
                <social.icon className="h-4 w-4" />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
