import { Bell } from 'lucide-react'

export function NotificationTeaser() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-16">
      <div className="border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/50 p-8 text-center">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Bell size={24} className="text-indigo-600" />
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-2">
          No te pierdas ninguna oferta
        </h2>
        <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
          Recibe notificaciones cuando aparezcan nuevas ofertas o antes de que expiren.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="tu@universidad.edu"
            disabled
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white/70 text-sm text-slate-400 placeholder:text-slate-300 cursor-not-allowed"
          />
          <button
            type="button"
            disabled
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-200 text-slate-400 text-sm font-medium cursor-not-allowed whitespace-nowrap"
          >
            Próximamente
          </button>
        </div>
      </div>
    </section>
  )
}
