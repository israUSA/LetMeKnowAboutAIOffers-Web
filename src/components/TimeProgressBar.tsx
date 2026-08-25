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
    <div className="h-1 w-full overflow-hidden bg-white/10">
      <div
        className={`h-full transition-all duration-1000 ${colors.bar}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
