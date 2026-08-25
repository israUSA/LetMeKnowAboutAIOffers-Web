import { ChevronDown, ExternalLink } from 'lucide-react'
import type { Promo } from '../types/promo'
import { COMPANY_COLORS, STATE_COLORS } from '../utils/constants'
import { getExpirationState } from '../utils/date'
import { ExpirationBadge } from './ExpirationBadge'
import { TimeProgressBar } from './TimeProgressBar'

interface Props {
  promo: Promo
  index: number
  expanded: boolean
  onToggle: () => void
}

export function PromoCard({ promo, index, expanded, onToggle }: Props) {
  const state = getExpirationState(promo.expires_at)
  const colors = STATE_COLORS[state]
  const bgColor = COMPANY_COLORS[promo.company] ?? '#6366f1'
  const initial = promo.company.charAt(0).toUpperCase()
  const panelId = `promo-desc-${promo.id}`

  return (
    <article
      style={{ animationDelay: `${Math.min(index * 55, 500)}ms` }}
      className={`group animate-fade-up flex flex-col self-start overflow-hidden rounded-3xl border bg-white/[0.05] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-2xl
        ${expanded ? 'border-white/25 bg-white/[0.08] shadow-2xl' : 'border-white/10'} ${colors.glow}`}
    >
      {promo.expires_at && (
        <TimeProgressBar
          createdAt={promo.created_at}
          expiresAt={promo.expires_at}
          state={state}
        />
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="flex w-full items-start gap-3.5 p-5 pb-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 focus-visible:ring-inset"
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white shadow-lg ring-1 ring-inset ring-white/20"
          style={{ backgroundColor: bgColor }}
        >
          {initial}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            {promo.company}
          </p>
          <h3 className="mt-0.5 font-display text-[15px] font-semibold leading-snug text-white">
            {promo.title}
          </h3>
        </div>

        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-slate-400 transition-transform duration-300 group-hover:text-slate-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expandable description — animated with grid-rows for a smooth reveal */}
      <div
        id={panelId}
        role="region"
        aria-hidden={!expanded}
        className={`grid px-5 transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`text-sm leading-relaxed text-slate-300 transition-opacity duration-300 ${
              expanded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {promo.description}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-end justify-between gap-3 p-5 pt-4">
        <ExpirationBadge expiresAt={promo.expires_at} state={state} />

        <a
          href={promo.reclaim_link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all duration-300 hover:shadow-fuchsia-500/40 hover:brightness-110 active:scale-95"
        >
          Reclamar
          <ExternalLink size={12} />
        </a>
      </div>
    </article>
  )
}
