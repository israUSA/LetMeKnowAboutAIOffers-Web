export interface Promo {
  id: number
  company: string
  title: string
  description: string
  reclaim_link: string
  created_at: string
  start_date: string | null
  expires_at: string | null
}

export type ExpirationState = 'permanent' | 'comfortable' | 'warning' | 'urgent'

export type FilterTab = 'all' | 'permanent' | 'limited'
