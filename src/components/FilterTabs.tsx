import { Clock, Leaf, LayoutGrid } from 'lucide-react'
import type { FilterTab } from '../types/promo'

interface Props {
  activeTab: FilterTab
  onTabChange: (tab: FilterTab) => void
  counts: Record<FilterTab, number>
}

const TABS: { key: FilterTab; label: string; icon: typeof LayoutGrid }[] = [
  { key: 'all', label: 'Todas', icon: LayoutGrid },
  { key: 'permanent', label: 'Permanentes', icon: Leaf },
  { key: 'limited', label: 'Por tiempo limitado', icon: Clock },
]

export function FilterTabs({ activeTab, onTabChange, counts }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 px-4 sm:px-6 pb-10">
      {TABS.map(({ key, label, icon: Icon }) => {
        const active = activeTab === key
        return (
          <button
            key={key}
            type="button"
            onClick={() => onTabChange(key)}
            aria-pressed={active}
            className={`group inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-300
              ${
                active
                  ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25 border border-white/10'
                  : 'border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.09] hover:text-white'
              }`}
          >
            <Icon size={15} className={active ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'} />
            <span>{label}</span>
            <span
              className={`ml-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-semibold tabular-nums
                ${active ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'}`}
            >
              {counts[key]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
