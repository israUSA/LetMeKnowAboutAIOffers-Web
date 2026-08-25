import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const missingKeys = [
  supabaseUrl ? null : 'VITE_SUPABASE_URL',
  supabaseAnonKey ? null : 'VITE_SUPABASE_ANON_KEY',
].filter((key): key is string => key !== null)

/**
 * Mensaje de error si falta configuración, o `null` si todo está en su sitio.
 *
 * `createClient` lanza cuando la URL o la clave vienen vacías. Al ejecutarse en
 * el cuerpo del módulo, esa excepción impedía que React montara y dejaba la
 * página completamente en blanco. Preferimos detectarlo aquí y dejar que la UI
 * muestre su estado de error.
 */
export const supabaseConfigError =
  missingKeys.length > 0
    ? `Falta configurar ${missingKeys.join(' y ')}. Copia .env.example a .env y completa los valores.`
    : null

export const supabase = supabaseConfigError
  ? null
  : createClient(supabaseUrl, supabaseAnonKey)
