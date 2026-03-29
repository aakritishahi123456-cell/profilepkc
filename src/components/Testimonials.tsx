'use client'

const testimonials = [
  { name: 'Alex Sharma', role: 'CEO, Advisior', feedback: 'Pramod delivered an exceptional platform that transformed our business. His expertise resulted in a 40% increase in user engagement.' },
  { name: 'Sarah Khadka', role: 'Founder, Cloud Kitchen', feedback: 'Working with Pramod was a game-changer. He built a seamless platform that streamlined our operations and boosted efficiency by 60%.' },
  { name: 'Raj Patel', role: 'CTO, TechStartup', feedback: 'Outstanding developer who understands both technical excellence and business goals. His clean code made our product launch successful.' },
]

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">What People Say</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-white/10">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">"{t.feedback}"</p>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
