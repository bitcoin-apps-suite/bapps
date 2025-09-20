'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  provider: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (provider: string, email?: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing session - only run on client side
    try {
      if (typeof window !== 'undefined') {
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error)
    }
    setIsLoading(false)
  }, [])

  const login = async (provider: string, email?: string) => {
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const mockUser: User = {
      id: '1',
      name: provider === 'google' ? 'John Doe' : 
            provider === 'twitter' ? '@johndoe' : 
            provider === 'handcash' ? '$johndoe' : 
            email || 'user@example.com',
      email: email || `user@${provider}.com`,
      provider,
      avatar: undefined
    }
    
    setUser(mockUser)
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(mockUser))
    }
    // Stay on current page after login instead of redirecting
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
    }
    // Stay on current page instead of redirecting to login
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}