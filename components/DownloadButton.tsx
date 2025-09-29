'use client'

import React from 'react'

interface DownloadButtonProps {
  variant?: 'dark' | 'light' | 'rainbow'
  size?: 'small' | 'medium' | 'large'
  href?: string
  appName?: string
}

export default function DownloadButton({ 
  variant = 'dark', 
  size = 'medium',
  href = 'https://www.bitcoinapps.store',
  appName
}: DownloadButtonProps) {
  const sizeClasses = {
    small: 'h-10 px-4 text-xs',
    medium: 'h-12 px-6 text-sm',
    large: 'h-14 px-8 text-base'
  }

  const getSvgSize = () => {
    switch(size) {
      case 'small': return 'w-5 h-5'
      case 'large': return 'w-8 h-8'
      default: return 'w-6 h-6'
    }
  }

  if (variant === 'rainbow') {
    return (
      <a 
        href={href}
        className={`inline-flex items-center gap-3 bg-black rounded-xl border-2 border-transparent bg-clip-padding ${sizeClasses[size]} font-medium hover:scale-105 transition-transform relative overflow-hidden group`}
        style={{
          background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #FF6B00, #FF00FF, #00FF88, #0094FF) border-box'
        }}
      >
        {/* Rainbow Bitcoin logo */}
        <div className="relative">
          <svg className={getSvgSize()} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" className="fill-white/10" />
            <path 
              d="M12.5 6.5v-2m0 15v-2m-4-11v12m6-12v12m-1-12.5c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5m-2 0h2m-2 0c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5" 
              className="stroke-2"
              stroke="url(#rainbow-gradient)"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B00" />
                <stop offset="33%" stopColor="#FF00FF" />
                <stop offset="66%" stopColor="#00FF88" />
                <stop offset="100%" stopColor="#0094FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-white/70 text-[10px] leading-tight">Download on the</span>
          <span className="text-white font-semibold leading-tight">Bitcoin Apps Store</span>
          {appName && <span className="text-white/50 text-[10px]">for {appName}</span>}
        </div>
      </a>
    )
  }

  if (variant === 'light') {
    return (
      <a 
        href={href}
        className={`inline-flex items-center gap-3 bg-white text-black rounded-xl border border-gray-200 ${sizeClasses[size]} font-medium hover:bg-gray-50 transition-colors`}
      >
        {/* Bitcoin logo */}
        <svg className={getSvgSize()} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6B00" />
          <path 
            d="M12.5 6.5v-2m0 15v-2m-4-11v12m6-12v12m-1-12.5c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5m-2 0h2m-2 0c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5" 
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-gray-600 text-[10px] leading-tight">Download on the</span>
          <span className="text-black font-semibold leading-tight">Bitcoin Apps Store</span>
          {appName && <span className="text-gray-500 text-[10px]">for {appName}</span>}
        </div>
      </a>
    )
  }

  // Default dark variant
  return (
    <a 
      href={href}
      className={`inline-flex items-center gap-3 bg-black text-white rounded-xl border border-gray-800 ${sizeClasses[size]} font-medium hover:bg-gray-900 transition-colors`}
    >
      {/* Bitcoin logo with gradient */}
      <svg className={getSvgSize()} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="url(#bitcoin-gradient)" />
        <path 
          d="M12.5 6.5v-2m0 15v-2m-4-11v12m6-12v12m-1-12.5c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5m-2 0h2m-2 0c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5" 
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="bitcoin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="50%" stopColor="#FF8C00" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-gray-400 text-[10px] leading-tight">Download on the</span>
        <span className="text-white font-semibold leading-tight">Bitcoin Apps Store</span>
        {appName && <span className="text-gray-500 text-[10px]">for {appName}</span>}
      </div>
    </a>
  )
}

// Export additional button variants for different use cases
export function GetItOnBitcoinApps({ href = 'https://www.bitcoinapps.store', size = 'medium' }: { href?: string, size?: 'small' | 'medium' | 'large' }) {
  const sizeClasses = {
    small: 'h-10 px-4 text-xs',
    medium: 'h-12 px-6 text-sm',
    large: 'h-14 px-8 text-base'
  }

  const getSvgSize = () => {
    switch(size) {
      case 'small': return 'w-5 h-5'
      case 'large': return 'w-8 h-8'
      default: return 'w-6 h-6'
    }
  }

  return (
    <a 
      href={href}
      className={`inline-flex items-center gap-3 bg-black text-white rounded-xl ${sizeClasses[size]} font-medium hover:bg-gray-900 transition-all hover:scale-105 border border-gray-800`}
    >
      <svg className={getSvgSize()} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" className="fill-white/10" />
        <path 
          d="M12.5 6.5v-2m0 15v-2m-4-11v12m6-12v12m-1-12.5c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5m-2 0h2m-2 0c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5" 
          className="stroke-2"
          stroke="url(#get-gradient)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="get-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="33%" stopColor="#FF00FF" />
            <stop offset="66%" stopColor="#00FF88" />
            <stop offset="100%" stopColor="#0094FF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-gray-400 text-[10px] leading-tight">GET IT ON</span>
        <span className="text-white font-bold leading-tight uppercase">₿itcoin Apps</span>
      </div>
    </a>
  )
}

// Minimal badge version
export function BitcoinAppsBadge({ href = 'https://www.bitcoinapps.store' }: { href?: string }) {
  return (
    <a 
      href={href}
      className="inline-flex items-center gap-2 bg-black text-white rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-gray-900 transition-colors border border-gray-800"
    >
      <span className="text-2xl">₿</span>
      <span>Available on Bitcoin Apps</span>
    </a>
  )
}