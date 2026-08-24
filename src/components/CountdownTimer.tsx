import { useCountdown } from '../hooks/useCountdown'

function Segment({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-bold tabular-nums leading-none text-red-600">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] font-medium text-red-400 mt-0.5">{label}</span>
    </div>
  )
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const countdown = useCountdown(targetDate)
  if (!countdown) return null

  return (
    <div className="flex items-center gap-1.5 animate-pulse-slow">
      <Segment value={countdown.days} label="d" />
      <span className="text-red-300 font-bold text-sm leading-none mb-3">:</span>
      <Segment value={countdown.hours} label="h" />
      <span className="text-red-300 font-bold text-sm leading-none mb-3">:</span>
      <Segment value={countdown.minutes} label="m" />
      <span className="text-red-300 font-bold text-sm leading-none mb-3">:</span>
      <Segment value={countdown.seconds} label="s" />
    </div>
  )
}
