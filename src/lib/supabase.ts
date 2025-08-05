import { createClient } from '@supabase/supabase-js'

// These are the same credentials from the original project
// You should set these as environment variables in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://ioftqsvjqwjeprsckeym.supabase.co"
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZnRxc3ZqcXdqZXByc2NrZXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTYwNzQsImV4cCI6MjA2MjczMjA3NH0.TXDfhioMFVNxLhjKgpXAxnKCPOl5n8QWpOkX2eafbYw"

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

export default supabase