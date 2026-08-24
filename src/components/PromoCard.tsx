import { ExternalLink } from 'lucide-react'
import type { Promo } from '../types/promo'
import { COMPANY_COLORS } from '../utils/constants'
import { getExpirationState } from '../utils/date'
import { ExpirationBadge } from './ExpirationBadge'
import { TimeProgressBar } from './TimeProgressBar'

interface Props {
  promo: Promo
}

export function PromoCard({ promo }: Props) {
  const state = getExpirationState(promo.expires_at)
  const bgColor = COMPANY_COLORS[promo.company] ?? '#6366f1'
  const initial = promo.company.charAt(0).toUpperCase()

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-200">
      {promo.expires_at && (
        <TimeProgressBar
          createdAt={promo.created_at}
          expiresAt={promo.expires_at}
          state={state}
        />
      )}

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: bgColor }}
          >
            {initial}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
              {promo.company}
            </p>
            <h3 className="text-sm font-semibold text-slate-900 leading-snug mt-0.5">
              {promo.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4 flex-1">
          {promo.description}
        </p>

        <div className="flex items-end justify-between gap-3 mt-auto">
          <ExpirationBadge expiresAt={promo.expires_at} state={state} />

          <a
            href={promo.reclaim_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors shrink-0"
          >
            Reclamar
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  )
}
