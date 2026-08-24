import type { Promo } from '../types/promo'
import { STATE_SORT_ORDER } from '../utils/constants'
import { getExpirationState } from '../utils/date'
import { PromoCard } from './PromoCard'

interface Props {
  promos: Promo[]
}

export function PromoGrid({ promos }: Props) {
  const sorted = [...promos].sort((a, b) => {
    const stateA = getExpirationState(a.expires_at)
    const stateB = getExpirationState(b.expires_at)
    return STATE_SORT_ORDER[stateA] - STATE_SORT_ORDER[stateB]
  })

  if (promos.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <p className="text-slate-400 text-lg">No se encontraron ofertas.</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {sorted.map(promo => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  )
}
