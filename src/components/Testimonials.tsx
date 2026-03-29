'use client'

const testimonials = [
  { name: 'Alex Sharma', role: 'CEO, Advisior', feedback: 'Pramod delivered an exceptional platform that transformed our business. His expertise resulted in a 40% increase in user engagement.' },
  { name: 'Sarah Khadka', role: 'Founder, Cloud Kitchen', feedback: 'Working with Pramod was a game-changer. He built a seamless platform that streamlined our operations and boosted efficiency by 60%.' },
  { name: 'Raj Patel', role: 'CTO, TechStartup', feedback: 'Outstanding developer who understands both technical excellence and business goals. His clean code made our product launch successful.' },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12">What People Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-4 md:p-6 rounded-xl border border-white/10">
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">"{t.feedback}"</p>
              <div>
                <div className="font-medium text-sm md:text-base">{t.name}</div>
                <div className="text-xs md:text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
