'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthContext'

export default function LoginPage() {
  const { login, user, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (!authLoading && user) {
      router.replace('/')
    }
  }, [user, authLoading, router])

  const handleLogin = async (provider: string) => {
    setIsLoading(provider)
    await login(provider, provider === 'email' ? email : undefined)
    setIsLoading(null)
  }

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0094FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect to home if already authenticated
  if (user) {
    return null
  }

  const providers = [
    {
      id: 'google',
      name: 'Google',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
      color: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'bg-black hover:bg-gray-900 text-white border border-gray-700'
    },
    {
      id: 'handcash',
      name: 'HandCash',
      icon: (
        <div className="relative w-5 h-5">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-sm"></div>
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">$</span>
        </div>
      ),
      color: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
    }
  ]

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/bitcoin-apps-logo.jpg"
              alt="Bitcoin Apps Suite"
              fill
              className="object-cover rounded-2xl"
              sizes="96px"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Bitcoin Apps Suite</h1>
          <p className="text-gray-400">Sign in to access your decentralized apps</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#252525] rounded-2xl p-8 border border-[#3a3a3a]">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">Choose your login method</h2>
          
          <div className="space-y-3">
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => handleLogin(provider.id)}
                disabled={isLoading !== null}
                className={`
                  w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-lg
                  transition-all duration-200 font-medium
                  ${provider.color}
                  ${isLoading === provider.id ? 'opacity-70 cursor-not-allowed' : ''}
                  ${isLoading !== null && isLoading !== provider.id ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {isLoading === provider.id ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  provider.icon
                )}
                <span>Continue with {provider.name}</span>
              </button>
            ))}
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#3a3a3a]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#252525] text-gray-500">or</span>
            </div>
          </div>

          {/* Email Login */}
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin('email'); }}>
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0094FF] transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0094FF] transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading !== null}
              className="w-full py-3 bg-[#0094FF] hover:bg-[#0084e6] text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading === 'email' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
              ) : (
                'Sign in with Email'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-[#0094FF] hover:text-[#0084e6] transition-colors">
              Forgot your password?
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Don't have an account? <a href="#" className="text-[#0094FF] hover:text-[#0084e6] transition-colors">Sign up</a></p>
          <p className="mt-4">By continuing, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  )
}