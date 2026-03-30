export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">© 2026 Pramod KC. Built to make a strong first impression.</p>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Built with</span>
          <span>Next.js</span>
          <span>&</span>
          <span>Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
