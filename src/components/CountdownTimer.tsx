import { useCountdown } from '../hooks/useCountdown'

function Segment({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-base font-bold tabular-nums leading-none text-rose-200">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-0.5 text-[9px] font-semibold uppercase text-rose-300/70">{label}</span>
    </div>
  )
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const countdown = useCountdown(targetDate)
  if (!countdown) return null

  return (
    <div className="flex items-center gap-1.5 animate-pulse-slow">
      <Segment value={countdown.days} label="d" />
      <span className="mb-3 text-sm font-bold leading-none text-rose-400/50">:</span>
      <Segment value={countdown.hours} label="h" />
      <span className="mb-3 text-sm font-bold leading-none text-rose-400/50">:</span>
      <Segment value={countdown.minutes} label="m" />
      <span className="mb-3 text-sm font-bold leading-none text-rose-400/50">:</span>
      <Segment value={countdown.seconds} label="s" />
    </div>
  )
}
