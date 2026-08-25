import type { ExpirationState } from '../types/promo'

export const URGENT_THRESHOLD_DAYS = 7
export const WARNING_THRESHOLD_DAYS = 30

export const STATE_COLORS: Record<
  ExpirationState,
  { bg: string; text: string; border: string; bar: string; glow: string; dot: string }
> = {
  permanent: {
    bg: 'bg-emerald-400/10',
    text: 'text-emerald-300',
    border: 'border-emerald-400/25',
    bar: 'bg-gradient-to-r from-emerald-400 to-teal-300',
    glow: 'hover:shadow-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  comfortable: {
    bg: 'bg-sky-400/10',
    text: 'text-sky-300',
    border: 'border-sky-400/25',
    bar: 'bg-gradient-to-r from-sky-400 to-cyan-300',
    glow: 'hover:shadow-sky-500/20',
    dot: 'bg-sky-400',
  },
  warning: {
    bg: 'bg-amber-400/10',
    text: 'text-amber-300',
    border: 'border-amber-400/25',
    bar: 'bg-gradient-to-r from-amber-400 to-orange-300',
    glow: 'hover:shadow-amber-500/20',
    dot: 'bg-amber-400',
  },
  urgent: {
    bg: 'bg-rose-400/12',
    text: 'text-rose-300',
    border: 'border-rose-400/30',
    bar: 'bg-gradient-to-r from-rose-500 to-red-400',
    glow: 'hover:shadow-rose-500/25',
    dot: 'bg-rose-400',
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
