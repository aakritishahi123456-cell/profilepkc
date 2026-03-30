'use client'

const testimonials = [
  {
    name: 'Alex Sharma',
    role: 'CEO, Advisior',
    feedback:
      'Pramod delivered a polished platform that immediately made our product feel more credible. The experience was thoughtful, fast, and clearly built with business goals in mind.',
  },
  {
    name: 'Sarah Khadka',
    role: 'Founder, Cloud Kitchen',
    feedback:
      'He translated a rough idea into a product that felt premium and easy to use. Clients noticed the difference right away, and our team did too.',
  },
  {
    name: 'Raj Patel',
    role: 'CTO, Tech Startup',
    feedback:
      'Strong technical execution, strong taste, and no unnecessary complexity. He understands how to make software feel trustworthy to end users.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-label mx-auto mb-4">Client Impressions</div>
          <h2 className="display-font text-3xl md:text-5xl font-semibold mb-4 tracking-[-0.03em]">
            What people remember after working with me.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-panel p-5 md:p-6 rounded-[1.5rem]">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">&quot;{t.feedback}&quot;</p>
              <div>
                <div className="font-medium text-sm md:text-base">{t.name}</div>
                <div className="text-xs md:text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
