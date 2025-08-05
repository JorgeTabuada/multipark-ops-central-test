import { useState, useEffect, createContext, useContext } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  profile: any | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>
  signUp: (email: string, password: string, userData?: any) => Promise<{ data: any; error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        console.log('Auth state changed:', event, currentSession?.user?.email)
        setSession(currentSession)
        setUser(currentSession?.user ?? null)
        
        // Fetch profile data when user logs in
        if (currentSession?.user) {
          try {
            const { data: profileData, error } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', currentSession.user.id)
              .single()
              
            if (!error && profileData) {
              setProfile(profileData)
              // Store in localStorage for compatibility
              localStorage.setItem('user_id', currentSession.user.id)
              localStorage.setItem('nome', profileData.full_name || '')
              localStorage.setItem('role', profileData.role || '')
            }
          } catch (err) {
            console.error('Error fetching profile:', err)
          }
        } else {
          setProfile(null)
          // Clear localStorage when user logs out
          localStorage.removeItem('user_id')
          localStorage.removeItem('nome')
          localStorage.removeItem('role')
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      const result = await supabase.auth.signInWithPassword({ email, password })
      return result
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, userData?: any) => {
    setLoading(true)
    try {
      const result = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      })
      return result
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    try {
      await supabase.auth.signOut()
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    session,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}