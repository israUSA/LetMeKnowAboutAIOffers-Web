import type { ExpirationState } from '../types/promo'
import { URGENT_THRESHOLD_DAYS, WARNING_THRESHOLD_DAYS } from './constants'

export function getDaysRemaining(expiresAt: string): number {
  const now = new Date()
  const expiry = new Date(expiresAt)
  return Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

export function getExpirationState(expiresAt: string | null): ExpirationState {
  if (!expiresAt) return 'permanent'
  const days = getDaysRemaining(expiresAt)
  if (days <= URGENT_THRESHOLD_DAYS) return 'urgent'
  if (days <= WARNING_THRESHOLD_DAYS) return 'warning'
  return 'comfortable'
}

export function formatRelativeDate(expiresAt: string): string {
  const days = getDaysRemaining(expiresAt)
  if (days < 0) return 'Expirada'
  if (days === 0) return 'Expira hoy'
  if (days === 1) return 'Expira mañana'
  if (days <= WARNING_THRESHOLD_DAYS) return `Expira en ${days} días`
  return `Expira el ${new Date(expiresAt).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })}`
}

export function getTimeRemainingPercent(createdAt: string, expiresAt: string): number {
  const now = new Date().getTime()
  const created = new Date(createdAt).getTime()
  const expiry = new Date(expiresAt).getTime()
  const total = expiry - created
  const remaining = expiry - now
  if (total <= 0) return 0
  return Math.max(0, Math.min(100, (remaining / total) * 100))
}
