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
  isCanonical?: boolean
  isThirdParty?: boolean
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
        rounded-xl p-4 transition-all duration-200 relative
        ${app.isCanonical ? 'bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e] ring-1 ring-[#0094FF]/20' : 
          app.isThirdParty ? 'bg-[#252525] border border-dashed border-[#4a4a4a]' : 
          'bg-[#2a2a2a]'}
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
          
          {/* Canonical indicator - subtle corner accent */}
          {app.isCanonical && (
            <div className="absolute top-0 right-0 w-8 h-8">
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#0094FF] border-l-[32px] border-l-transparent rounded-tr-xl opacity-50"></div>
            </div>
          )}
          
          {/* Third party indicator - small corner tag */}
          {app.isThirdParty && (
            <div className="absolute bottom-2 right-2 z-20">
              <div className="w-2 h-2 bg-[#6B7280] rounded-full"></div>
            </div>
          )}
          
          {/* Hover Overlay Info */}
          {isHovered && app.status !== 'coming' && (
            <div className="absolute inset-0 bottom-0 h-full bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-sm p-3 flex flex-col justify-end transition-all duration-200 z-30 rounded-xl">
              <div className="space-y-1 pb-2">
                <p className="text-white text-xs font-medium truncate">{app.fullName}</p>
                <p className="text-gray-300 text-[10px] line-clamp-2">{app.description}</p>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[10px] text-gray-400">{app.category}</span>
                  {app.version && <span className="text-[10px] text-gray-400">v{app.version}</span>}
                </div>
                {app.marketCap && (
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-400">Market Cap</span>
                    <span className="text-[10px] text-white font-mono">{app.marketCap}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* App Info */}
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-white font-medium text-sm truncate">{app.name}</h3>
            {app.isCanonical && (
              <div className="w-1 h-1 bg-[#0094FF] rounded-full"></div>
            )}
          </div>
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
    </div>
  )
}