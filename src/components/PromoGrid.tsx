import { useState } from 'react'
import type { Promo } from '../types/promo'
import { STATE_SORT_ORDER } from '../utils/constants'
import { getExpirationState } from '../utils/date'
import { PromoCard } from './PromoCard'

interface Props {
  promos: Promo[]
}

export function PromoGrid({ promos }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const sorted = [...promos].sort((a, b) => {
    const stateA = getExpirationState(a.expires_at)
    const stateB = getExpirationState(b.expires_at)
    return STATE_SORT_ORDER[stateA] - STATE_SORT_ORDER[stateB]
  })

  if (promos.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 pb-24 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-12 backdrop-blur-xl">
          <p className="text-lg font-medium text-slate-300">No se encontraron ofertas.</p>
          <p className="mt-1.5 text-sm text-slate-500">
            Prueba con otro término de búsqueda o filtro.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sorted.map((promo, i) => (
          <PromoCard
            key={promo.id}
            promo={promo}
            index={i}
            expanded={expandedId === promo.id}
            onToggle={() =>
              setExpandedId(current => (current === promo.id ? null : promo.id))
            }
          />
        ))}
      </div>
    </div>
  )
}
