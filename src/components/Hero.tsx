import { Search } from 'lucide-react'

interface Props {
  searchQuery: string
  onSearchChange: (query: string) => void
  totalOffers: number
}

export function Hero({ searchQuery, onSearchChange, totalOffers }: Props) {
  return (
    <section className="pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
          {totalOffers} ofertas verificadas
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Ofertas de IA y Tech para{' '}
          <span className="text-indigo-600">Estudiantes Universitarios</span>
        </h1>
        <p className="mt-4 text-lg text-slate-500 max-w-lg mx-auto">
          Herramientas, créditos y recursos gratuitos. Todo en un solo lugar.
        </p>

        <div className="mt-8 max-w-md mx-auto relative">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por empresa o herramienta..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all"
          />
        </div>
      </div>
    </section>
  )
}
