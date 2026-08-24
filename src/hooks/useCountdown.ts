import { useEffect, useState } from 'react'

interface CountdownValues {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function useCountdown(targetDate: string | null): CountdownValues | null {
  const [countdown, setCountdown] = useState<CountdownValues | null>(null)

  useEffect(() => {
    if (!targetDate) return

    function calculate() {
      const diff = new Date(targetDate!).getTime() - Date.now()
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}
