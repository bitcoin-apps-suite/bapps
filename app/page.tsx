'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AppTile from '@/components/AppTile'
import Sidebar from '@/components/Sidebar'
import { useAuth } from '@/components/AuthContext'

const apps = [
  // PoC Apps (Live)
  {
    id: 'bitcoin-writer',
    name: 'Writer',
    fullName: 'Bitcoin Writer',
    ticker: '$BWriter',
    icon: 'Wr',
    image: '/bitcoin-writer_03 copy.png',
    color: '#FF6B00',
    description: 'Write, encrypt, and store documents on Bitcoin',
    category: 'Productivity',
    status: 'installed' as const,
    isPoc: true,
    version: '2.4.1',
    size: '142 MB',
    lastUpdated: '2024-12-10',
    url: 'https://bitcoin-writer.vercel.app',
    price: 0.42,
    change24h: 12.5,
    marketCap: '$2.4M',
    volume24h: '$142K'
  },
  {
    id: 'bitcoin-drive',
    name: 'Drive',
    fullName: 'Bitcoin Drive',
    ticker: '$BDrive', 
    icon: 'Dr',
    image: '/app-images/bitcoin-drive.jpg',
    color: '#22c55e',
    description: 'Decentralized cloud storage on Bitcoin blockchain',
    category: 'Storage',
    status: 'installed' as const,
    isPoc: true,
    version: '1.2.0',
    size: '98 MB',
    lastUpdated: '2024-12-08',
    url: 'https://bitcoin-drive.vercel.app',
    price: 0.31,
    change24h: -3.2,
    marketCap: '$1.8M',
    volume24h: '$89K'
  },
  {
    id: 'bitcoin-sheets',
    name: 'Spreadsheets',
    fullName: 'Bitcoin Spreadsheets',
    ticker: '$BSheets',
    icon: 'Sh',
    image: '/app-images/bitcoin-sheets-icon.svg',
    color: '#3b82f6',
    description: 'Blockchain-based spreadsheet on Bitcoin',
    category: 'Productivity',
    status: 'installed' as const,
    isPoc: true,
    version: '1.8.3',
    size: '156 MB',
    lastUpdated: '2024-11-28',
    url: 'https://bitcoin-sheets.vercel.app',
    price: 0.28,
    change24h: 8.9,
    marketCap: '$1.2M',
    volume24h: '$67K'
  },
  {
    id: 'bitcoin-email',
    name: 'Email',
    fullName: 'Bitcoin Email',
    ticker: '$BEmail',
    icon: 'Em',
    image: '/bitcoin-email.jpg',
    color: '#9333EA',
    description: 'Encrypted email service with Bitcoin-powered features',
    category: 'Communication',
    status: 'installed' as const,
    isPoc: true,
    version: '1.0.0',
    size: '124 MB',
    lastUpdated: '2024-12-15',
    url: 'https://bitcoin-email.vercel.app',
    price: 0.24,
    change24h: 5.7,
    marketCap: '$1.1M',
    volume24h: '$54K'
  },
  // Coming Soon Apps
  {
    id: 'bitcoin-auth',
    name: 'Auth',
    fullName: 'Bitcoin Auth',
    ticker: '$BAuth',
    icon: 'Au',
    color: '#DC2626',
    description: 'Decentralized authentication system on Bitcoin',
    category: 'Security',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.15,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-chat',
    name: 'Chat',
    fullName: 'Bitcoin Chat',
    ticker: '$BChat',
    icon: 'Ch',
    color: '#059669',
    description: 'Decentralized messaging platform on Bitcoin',
    category: 'Communication',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.21,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-domains',
    name: 'Domains',
    fullName: 'Bitcoin Domains',
    ticker: '$BDomains',
    icon: 'Do',
    color: '#6366F1',
    description: 'Bitcoin blockchain domain name system',
    category: 'Infrastructure',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.32,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-draw',
    name: 'Draw',
    fullName: 'Bitcoin Draw',
    ticker: '$BDraw',
    icon: 'Dw',
    color: '#8B5CF6',
    description: 'Vector graphics and design tools on Bitcoin',
    category: 'Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.18,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-exchange',
    name: 'Exchange',
    fullName: 'Bitcoin Exchange',
    ticker: '$BExchange',
    icon: 'Ex',
    color: '#10B981',
    description: 'Central exchange for all Bitcoin app tokens',
    category: 'Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.89,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0',
    isMainExchange: true
  },
  {
    id: 'bitcoin-music',
    name: 'Music',
    fullName: 'Bitcoin Music',
    ticker: '$BMusic',
    icon: 'Mu',
    color: '#EC4899',
    description: 'Decentralized music streaming on Bitcoin',
    category: 'Media',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.37,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-paint',
    name: 'Paint',
    fullName: 'Bitcoin Paint',
    ticker: '$BPaint',
    icon: 'Pa',
    color: '#F59E0B',
    description: 'Digital art creation platform on Bitcoin',
    category: 'Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.14,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-pics',
    name: 'Pics',
    fullName: 'Bitcoin Pics',
    ticker: '$BPics',
    icon: 'Pi',
    color: '#06B6D4',
    description: 'Image storage and sharing on Bitcoin',
    category: 'Media',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.29,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-registry',
    name: 'Registry',
    fullName: 'Bitcoin Registry',
    ticker: '$BRegistry',
    icon: 'Re',
    color: '#84CC16',
    description: 'Decentralized asset registry on Bitcoin',
    category: 'Infrastructure',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.41,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-shares',
    name: 'Shares',
    fullName: 'Bitcoin Shares',
    ticker: '$BShares',
    icon: 'Sr',
    color: '#A855F7',
    description: 'Digital equity platform on Bitcoin',
    category: 'Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.48,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-video',
    name: 'Video',
    fullName: 'Bitcoin Video',
    ticker: '$BVideo',
    icon: 'Vi',
    color: '#7C3AED',
    description: 'Video streaming and storage on Bitcoin',
    category: 'Media',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.35,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-wallet',
    name: 'Wallet',
    fullName: 'Bitcoin Wallet',
    ticker: '$BWallet',
    icon: 'Wa',
    color: '#F97316',
    description: 'Secure Bitcoin wallet',
    category: 'Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.50,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
]

const categories = ['All Apps', 'Productivity', 'Storage', 'Communication', 'Security', 'Media', 'Creative', 'Finance', 'Infrastructure']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Apps')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  const filteredApps = apps.filter(app => {
    const matchesCategory = selectedCategory === 'All Apps' || app.category === selectedCategory
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="flex h-screen bg-[#1e1e1e] items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0094FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!user) {
    return null
  }

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-white overflow-hidden">
      <Sidebar 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#252525] border-b border-[#3a3a3a] px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/bitcoin-apps-logo.jpg"
                    alt="Bitcoin Apps Suite"
                    fill
                    className="object-cover rounded-lg"
                    sizes="40px"
                  />
                </div>
                <h1 className="text-2xl font-light">Bitcoin Apps</h1>
              </div>
              <span className="text-sm text-gray-400">Suite v1.0.0</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* User Info */}
              {user && (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#0094FF] to-[#0084e6] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-300">{user.name}</span>
                    <span className="text-xs text-gray-500">({user.provider})</span>
                  </div>
                  <button
                    onClick={logout}
                    className="px-3 py-1.5 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm text-gray-300 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg px-4 py-2 pl-10 w-80 text-sm focus:outline-none focus:border-[#0094FF] transition-colors"
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="flex items-center bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-[#0094FF] text-white' : 'text-gray-400'} transition-colors rounded-l-lg`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-[#0094FF] text-white' : 'text-gray-400'} transition-colors rounded-r-lg`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Status Bar */}
        <div className="bg-[#2a2a2a] px-8 py-3 border-b border-[#3a3a3a]">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">{filteredApps.length} apps</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-400">{apps.filter(a => a.status === 'installed').length} live</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-400">{apps.filter(a => a.ticker).length} tokenized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                <span className="text-gray-400">$BExchange Central Hub</span>
              </div>
            </div>
            <button className="px-4 py-1.5 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white rounded-lg transition-all font-medium">
              Open Exchange
            </button>
          </div>
        </div>

        {/* Apps Grid/List */}
        <div className="flex-1 overflow-auto p-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredApps.map((app) => (
                <AppTile key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredApps.map((app) => (
                <div key={app.id} className="bg-[#252525] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-4 flex items-center justify-between transition-colors">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold relative overflow-hidden"
                      style={{ backgroundColor: app.image ? undefined : app.color }}
                    >
                      {app.image ? (
                        <Image
                          src={app.image}
                          alt={app.fullName}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      ) : (
                        app.icon
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{app.fullName}</h3>
                        {app.ticker && (
                          <span className="text-xs font-mono bg-black/50 px-2 py-0.5 rounded text-[#0094FF]">
                            {app.ticker}
                          </span>
                        )}
                        {app.isPoc && (
                          <span className="text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-0.5 rounded">
                            PoC
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{app.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {app.price !== undefined && (
                      <div className="text-right">
                        <div className="text-sm font-mono text-white">${app.price.toFixed(2)}</div>
                        {app.change24h !== undefined && (
                          <div className={`text-xs font-mono ${
                            app.change24h > 0 ? 'text-green-500' : 
                            app.change24h < 0 ? 'text-red-500' : 
                            'text-gray-500'
                          }`}>
                            {app.change24h > 0 ? '+' : ''}{app.change24h}%
                          </div>
                        )}
                      </div>
                    )}
                    {app.version && (
                      <span className="text-sm text-gray-400">v{app.version}</span>
                    )}
                    <div className="flex items-center space-x-2">
                      {app.status === 'installed' && (
                        <>
                          <button 
                            onClick={() => app.url && window.open(app.url, '_blank')}
                            className="px-3 py-1.5 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm transition-colors">
                            Open
                          </button>
                          <button 
                            className="px-3 py-1.5 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm transition-colors">
                            Download
                          </button>
                          <button 
                            className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg text-sm transition-all">
                            Subscribe
                          </button>
                          <button 
                            className="px-3 py-1.5 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] text-white rounded-lg text-sm transition-all">
                            Trade
                          </button>
                        </>
                      )}
                      {app.status === 'update' && (
                        <button className="px-4 py-2 bg-[#0094FF] hover:bg-[#0084e6] rounded-lg text-sm transition-colors">
                          Update
                        </button>
                      )}
                      {app.status === 'available' && (
                        <button className="px-4 py-2 bg-[#00C896] hover:bg-[#00b586] rounded-lg text-sm transition-colors">
                          Install
                        </button>
                      )}
                      {app.status === 'coming' && (
                        <>
                          <button disabled className="px-3 py-1.5 bg-[#333] rounded-lg text-sm text-gray-600 cursor-not-allowed">
                            Open
                          </button>
                          <button disabled className="px-3 py-1.5 bg-[#333] rounded-lg text-sm text-gray-600 cursor-not-allowed">
                            Download
                          </button>
                          <button disabled className="px-3 py-1.5 bg-[#333] rounded-lg text-sm text-gray-600 cursor-not-allowed">
                            Subscribe
                          </button>
                          <button disabled className="px-3 py-1.5 bg-[#333] rounded-lg text-sm text-gray-600 cursor-not-allowed">
                            Trade
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}