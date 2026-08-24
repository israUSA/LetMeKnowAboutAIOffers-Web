import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Promo } from '../types/promo'

export function usePromos() {
  const [promos, setPromos] = useState<Promo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPromos() {
      const { data, error: err } = await supabase
        .from('promos')
        .select('*')
        .order('created_at', { ascending: false })

      if (err) {
        setError(err.message)
      } else {
        setPromos(data ?? [])
      }
      setLoading(false)
    }

    fetchPromos()
  }, [])

  return { promos, loading, error }
}
