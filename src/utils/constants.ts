import {
  siAirtable,
  siAlibabacloud,
  siApple,
  siAutodesk,
  siCloudflare,
  siCodecademy,
  siDatacamp,
  siDatadog,
  siElevenlabs,
  siFigma,
  siFramer,
  siGithub,
  siGitkraken,
  siGoogle,
  siGooglecloud,
  siGrammarly,
  siJetbrains,
  siLinear,
  siMiro,
  siMongodb,
  siNamecheap,
  siNotion,
  siPerplexity,
  siSentry,
  siSpotify,
  siStackblitz,
  siTermius,
  siUnity,
  siVercel,
  siWindsurf,
  siWolfram,
} from 'simple-icons'
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

/**
 * Nivel 1 de la cascada de logos: logo vectorial real (a color) de Simple Icons.
 * Cada valor es el objeto SimpleIcon con `.path` (el `d` del SVG) y `.hex` (color de marca).
 */
interface BrandIcon {
  path: string
  hex: string
}

export const COMPANY_ICONS: Record<string, BrandIcon> = {
  'Bolt.new (StackBlitz)': siStackblitz,
  Apple: siApple,
  Termius: siTermius,
  GitKraken: siGitkraken,
  ElevenLabs: siElevenlabs,
  Framer: siFramer,
  Miro: siMiro,
  Wolfram: siWolfram,
  Codecademy: siCodecademy,
  Airtable: siAirtable,
  Cloudflare: siCloudflare,
  Vercel: siVercel,
  Namecheap: siNamecheap,
  Sentry: siSentry,
  Unity: siUnity,
  Autodesk: siAutodesk,
  'Alibaba Cloud': siAlibabacloud,
  DataCamp: siDatacamp,
  Grammarly: siGrammarly,
  Datadog: siDatadog,
  'Google Cloud': siGooglecloud,
  Google: siGoogle,
  'Perplexity AI': siPerplexity,
  JetBrains: siJetbrains,
  Notion: siNotion,
  MongoDB: siMongodb,
  Linear: siLinear,
  Spotify: siSpotify,
  GitHub: siGithub,
  Figma: siFigma,
  'Windsurf (Codeium)': siWindsurf,
}

/**
 * Nivel 2 de la cascada de logos: favicon del dominio real de la empresa,
 * servido por Google Favicon Service. Se usa cuando la empresa no esta en
 * Simple Icons (Microsoft, Amazon/AWS, Adobe, Oracle, IBM, etc.) y tambien
 * como red de seguridad para las de Simple Icons por si dejan de cubrirlas.
 * NO se usa reclaim_link como dominio: se verifico que es poco confiable.
 */
export const COMPANY_DOMAINS: Record<string, string> = {
  // Empresas que NO estan en Simple Icons (nivel 2 es su unica fuente de logo real)
  Microsoft: 'microsoft.com',
  'Microsoft Azure': 'azure.microsoft.com',
  Amazon: 'amazon.com',
  AWS: 'aws.amazon.com',
  'Amazon Web Services': 'aws.amazon.com',
  Adobe: 'adobe.com',
  Oracle: 'oracle.com',
  IBM: 'ibm.com',
  Runway: 'runwayml.com',
  // Red de seguridad para las empresas de Simple Icons (nivel 1 tiene prioridad)
  Apple: 'apple.com',
  GitHub: 'github.com',
  Figma: 'figma.com',
  Google: 'google.com',
  Notion: 'notion.so',
  Linear: 'linear.app',
  Spotify: 'spotify.com',
  JetBrains: 'jetbrains.com',
  MongoDB: 'mongodb.com',
  Vercel: 'vercel.com',
  Cloudflare: 'cloudflare.com',
  Sentry: 'sentry.io',
  Unity: 'unity.com',
  Autodesk: 'autodesk.com',
  DataCamp: 'datacamp.com',
  Grammarly: 'grammarly.com',
  Datadog: 'datadoghq.com',
  Wolfram: 'wolfram.com',
  Codecademy: 'codecademy.com',
  Airtable: 'airtable.com',
  Miro: 'miro.com',
  Termius: 'termius.com',
  GitKraken: 'gitkraken.com',
  ElevenLabs: 'elevenlabs.io',
  Framer: 'framer.com',
  'Bolt.new (StackBlitz)': 'bolt.new',
  Namecheap: 'namecheap.com',
  'Alibaba Cloud': 'alibabacloud.com',
  'Google Cloud': 'cloud.google.com',
  'Windsurf (Codeium)': 'windsurf.com',
  'Perplexity AI': 'perplexity.ai',
}

export function faviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
}

export const STATE_SORT_ORDER: Record<ExpirationState, number> = {
  urgent: 0,
  warning: 1,
  comfortable: 2,
  permanent: 3,
}
