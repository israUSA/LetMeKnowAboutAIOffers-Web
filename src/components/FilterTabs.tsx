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
    <div className="flex items-center justify-center gap-2 px-4 sm:px-6 pb-8">
      {TABS.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          type="button"
          onClick={() => onTabChange(key)}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${activeTab === key
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
            }`}
        >
          <Icon size={15} />
          <span>{label}</span>
          <span className={`ml-0.5 text-xs ${activeTab === key ? 'text-indigo-200' : 'text-slate-400'}`}>
            {counts[key]}
          </span>
        </button>
      ))}
    </div>
  )
}
