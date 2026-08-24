import { Calendar, Flame, Leaf, Timer } from 'lucide-react'
import type { ExpirationState } from '../types/promo'
import { STATE_COLORS } from '../utils/constants'
import { formatRelativeDate } from '../utils/date'
import { CountdownTimer } from './CountdownTimer'

interface Props {
  expiresAt: string | null
  state: ExpirationState
}

const ICONS: Record<ExpirationState, typeof Leaf> = {
  permanent: Leaf,
  comfortable: Calendar,
  warning: Timer,
  urgent: Flame,
}

export function ExpirationBadge({ expiresAt, state }: Props) {
  const colors = STATE_COLORS[state]
  const Icon = ICONS[state]

  if (state === 'urgent' && expiresAt) {
    return (
      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${colors.bg} ${colors.border}`}>
        <Icon size={16} className={`${colors.text} shrink-0`} />
        <CountdownTimer targetDate={expiresAt} />
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${colors.bg} ${colors.text} ${colors.border}`}>
      <Icon size={14} />
      <span>{state === 'permanent' ? 'Siempre disponible' : formatRelativeDate(expiresAt!)}</span>
    </div>
  )
}
