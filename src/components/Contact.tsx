'use client'

const socials = [
  { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/9779822403262' },
  { name: 'Instagram', icon: '📸', link: 'https://instagram.com/pramod.kc.750331' },
  { name: 'TikTok', icon: '🎵', link: 'https://tiktok.com/@pramodkc16' },
  { name: 'Facebook', icon: '📘', link: 'https://www.facebook.com/pramod.kc.750331' },
  { name: 'Email', icon: '✉️', link: 'mailto:pramodkc16@gmail.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's Work Together</h2>
        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">Have a project in mind? Let's create something amazing.</p>
        
        <a
          href="https://wa.me/9779822403262"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium bg-white text-black hover:bg-gray-100 transition-colors text-sm md:text-base"
        >
          Get In Touch
        </a>
        
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 md:w-10 h-9 md:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              <span>{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
