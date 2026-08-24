import type { ExpirationState } from '../types/promo'

export const URGENT_THRESHOLD_DAYS = 7
export const WARNING_THRESHOLD_DAYS = 30

export const STATE_COLORS: Record<ExpirationState, { bg: string; text: string; border: string; bar: string }> = {
  permanent: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    bar: 'bg-emerald-500',
  },
  comfortable: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    bar: 'bg-blue-500',
  },
  warning: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    bar: 'bg-amber-500',
  },
  urgent: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
    bar: 'bg-red-500',
  },
}

export const COMPANY_COLORS: Record<string, string> = {
  'GitHub Education': '#24292e',
  'GitHub': '#24292e',
  'Google': '#4285f4',
  'JetBrains': '#087cfa',
  'Microsoft Azure': '#0078d4',
  'Figma': '#a259ff',
  'Notion': '#000000',
  'AWS': '#ff9900',
}

export const STATE_SORT_ORDER: Record<ExpirationState, number> = {
  urgent: 0,
  warning: 1,
  comfortable: 2,
  permanent: 3,
}
