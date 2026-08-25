import { Search, Sparkles } from 'lucide-react'

interface Props {
  searchQuery: string
  onSearchChange: (query: string) => void
  totalOffers: number
}

export function Hero({ searchQuery, onSearchChange, totalOffers }: Props) {
  return (
    <section className="relative pt-20 pb-14 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] text-sm font-medium text-slate-200 backdrop-blur-xl animate-fade-up">
          <Sparkles size={14} className="text-fuchsia-300" />
          <span>
            <span className="font-semibold text-white">{totalOffers}</span> ofertas verificadas
          </span>
        </p>

        <h1 className="font-display mt-7 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] animate-fade-up [animation-delay:60ms]">
          Ofertas de IA y Tech para{' '}
          <span className="text-gradient">Estudiantes Universitarios</span>
        </h1>

        <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto animate-fade-up [animation-delay:120ms]">
          Herramientas, créditos y recursos gratuitos. Todo en un solo lugar.
        </p>

        <div className="mt-9 max-w-lg mx-auto relative group animate-fade-up [animation-delay:180ms]">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-cyan-400/40 opacity-0 blur-md transition-opacity duration-300 group-focus-within:opacity-100" />
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-fuchsia-300"
            />
            <input
              type="text"
              placeholder="Buscar por empresa o herramienta..."
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-white/12 bg-white/[0.06] text-white text-sm placeholder:text-slate-500 backdrop-blur-xl focus:outline-none focus:border-white/25 transition-colors"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
