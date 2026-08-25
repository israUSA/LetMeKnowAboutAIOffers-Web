import { Bell, Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060610]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/25 transition-transform duration-300 group-hover:scale-105">
            <Sparkles size={18} className="text-white" />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">LetMeKnow</span>
            <span className="text-white">AboutAIOffers</span>
          </span>
        </a>

        <button
          type="button"
          className="relative p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Notificaciones (próximamente)"
          title="Próximamente: recibe alertas de nuevas ofertas"
        >
          <Bell size={19} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_2px_rgba(232,121,249,0.6)]" />
        </button>
      </div>
    </header>
  )
}
