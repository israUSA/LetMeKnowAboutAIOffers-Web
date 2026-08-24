import type { ExpirationState } from '../types/promo'
import { STATE_COLORS } from '../utils/constants'
import { getTimeRemainingPercent } from '../utils/date'

interface Props {
  createdAt: string
  expiresAt: string
  state: ExpirationState
}

export function TimeProgressBar({ createdAt, expiresAt, state }: Props) {
  const percent = getTimeRemainingPercent(createdAt, expiresAt)
  const colors = STATE_COLORS[state]

  return (
    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ${colors.bar}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
