'use client'

import { useState } from 'react'
import Image from 'next/image'

interface App {
  id: string
  name: string
  fullName: string
  ticker?: string
  icon: string
  image?: string
  color: string
  description: string
  category: string
  status: 'installed' | 'coming'
  isPoc?: boolean
  version: string | null
  size: string | null
  lastUpdated: string | null
  url?: string
  price?: number
  change24h?: number
  marketCap?: string
  volume24h?: string
  isMainExchange?: boolean
}

interface AppTileProps {
  app: App
}

export default function AppTile({ app }: AppTileProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const handleCardClick = () => {
    if (app.status === 'installed' && app.url) {
      window.open(app.url, '_blank')
    }
  }

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className={`
        bg-[#2a2a2a] rounded-xl p-4 transition-all duration-200
        ${isHovered ? 'transform scale-105 shadow-2xl' : ''}
      `}>
        {/* App Icon */}
        <div 
          className="w-full aspect-square rounded-xl flex items-center justify-center text-white text-3xl font-bold mb-3 relative overflow-hidden"
          style={{ backgroundColor: !app.image || imageError ? app.color : undefined }}
        >
          {app.image && !imageError ? (
            <Image
              src={app.image}
              alt={app.fullName}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          ) : app.id === 'senseii' ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <span className="absolute text-white text-5xl font-bold transform rotate-12 translate-x-10 translate-y-8 opacity-90">₿</span>
                <span className="text-white text-6xl font-bold">先</span>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <span className="relative z-10">{app.icon}</span>
            </>
          )}
          
          {/* Status Indicator */}
          {app.status === 'installed' && !app.isPoc && (
            <div className="absolute top-2 right-2 z-20">
              <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        {/* App Info */}
        <div>
          <h3 className="text-white font-medium text-sm truncate">{app.name}</h3>
          <p className="text-gray-400 text-xs mt-0.5 truncate">{app.description}</p>
          
          {/* Price Info */}
          {app.price !== undefined && (
            <div className="mt-2 pt-2 border-t border-[#3a3a3a]">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Price</span>
                <span className="text-xs font-mono text-white">${app.price.toFixed(2)}</span>
              </div>
              {app.change24h !== undefined && (
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-500">24h</span>
                  <span className={`text-xs font-mono ${
                    app.change24h > 0 ? 'text-green-500' : 
                    app.change24h < 0 ? 'text-red-500' : 
                    'text-gray-400'
                  }`}>
                    {app.change24h > 0 ? '+' : ''}{app.change24h}%
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="mt-3">
          {app.status === 'installed' && (
            <div className="grid grid-cols-2 gap-1.5">
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  app.url && window.open(app.url, '_blank')
                }}
                className="py-1.5 bg-[#1e1e1e] hover:bg-[#333] border border-[#3a3a3a] rounded-lg text-xs text-gray-300 transition-colors"
                title="Open app"
              >
                Open
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="py-1.5 bg-[#1e1e1e] hover:bg-[#333] border border-[#3a3a3a] rounded-lg text-xs text-gray-300 transition-colors"
                title="Download Chrome app"
              >
                Download
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-lg text-xs text-white transition-all"
                title="Subscribe to updates"
              >
                Subscribe
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="py-1.5 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] rounded-lg text-xs text-white font-medium transition-all"
                title={`Trade ${app.ticker || app.name}`}
              >
                {app.ticker || 'Trade'}
              </button>
            </div>
          )}
          {app.status === 'coming' && (
            <div className="grid grid-cols-2 gap-1.5">
              <button 
                disabled
                className="py-1.5 bg-[#333] rounded-lg text-xs text-gray-600 cursor-not-allowed"
                title="Coming soon"
              >
                Open
              </button>
              <button 
                disabled
                className="py-1.5 bg-[#333] rounded-lg text-xs text-gray-600 cursor-not-allowed"
                title="Coming soon"
              >
                Download
              </button>
              <button 
                disabled
                className="py-1.5 bg-[#333] rounded-lg text-xs text-gray-600 cursor-not-allowed"
                title="Coming soon"
              >
                Subscribe
              </button>
              <button 
                disabled
                className="py-1.5 bg-[#333] rounded-lg text-xs text-gray-600 cursor-not-allowed"
                title="Coming soon"
              >
                {app.ticker || 'Trade'}
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Hover Card */}
      {isHovered && app.status !== 'coming' && (
        <div className="absolute z-20 left-0 right-0 top-full mt-2 bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg p-4 shadow-2xl pointer-events-none">
          <h4 className="text-white font-medium text-sm mb-2">{app.fullName}</h4>
          <p className="text-gray-400 text-xs mb-3">{app.description}</p>
          
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Category:</span>
              <span className="text-gray-300">{app.category}</span>
            </div>
            {app.version && (
              <div className="flex justify-between">
                <span className="text-gray-500">Version:</span>
                <span className="text-gray-300">v{app.version}</span>
              </div>
            )}
            {app.size && (
              <div className="flex justify-between">
                <span className="text-gray-500">Size:</span>
                <span className="text-gray-300">{app.size}</span>
              </div>
            )}
            {app.lastUpdated && (
              <div className="flex justify-between">
                <span className="text-gray-500">Updated:</span>
                <span className="text-gray-300">{app.lastUpdated}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}