import { Bell, Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-indigo-600">LetMeKnow</span>
            <span className="text-slate-900">AboutAIOffers</span>
          </span>
        </a>

        <button
          type="button"
          className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors group"
          aria-label="Notificaciones (próximamente)"
          title="Próximamente: recibe alertas de nuevas ofertas"
        >
          <Bell size={20} className="text-slate-500 group-hover:text-slate-700 transition-colors" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full" />
        </button>
      </div>
    </header>
  )
}
