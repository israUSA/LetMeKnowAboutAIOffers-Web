import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Promo } from '../types/promo'

interface EdgeFunctionResponse {
  success: boolean
  data: Promo[]
  count: number
}

export function usePromos() {
  const [promos, setPromos] = useState<Promo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPromos() {
      try {
        const { data, error: err } = await supabase.functions.invoke<EdgeFunctionResponse>(
          'promos-batch',
          { method: 'GET' }
        )

        if (err) {
          setError(err.message)
        } else if (data && data.success && Array.isArray(data.data)) {
          setPromos(data.data)
        } else {
          setError('Respuesta inválida de la Edge Function')
        }
      } catch (err: any) {
        setError(err.message || 'Error al conectar con la Edge Function')
      } finally {
        setLoading(false)
      }
    }

    fetchPromos()
  }, [])

  return { promos, loading, error }
}

