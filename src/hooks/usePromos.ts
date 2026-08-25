import { useEffect, useState } from 'react'
import { supabase, supabaseConfigError } from '../lib/supabase'
import type { Promo } from '../types/promo'

interface EdgeFunctionResponse {
  success: boolean
  data: Promo[]
  count: number
}

export function usePromos() {
  const [promos, setPromos] = useState<Promo[]>([])
  // Sin configuración no hay nada que pedir: arrancamos ya en estado de error.
  const [loading, setLoading] = useState(supabaseConfigError === null)
  const [error, setError] = useState<string | null>(supabaseConfigError)

  useEffect(() => {
    if (!supabase) return

    const client = supabase

    async function fetchPromos() {
      try {
        const { data, error: err } = await client.functions.invoke<EdgeFunctionResponse>(
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

