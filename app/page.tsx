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
    category: 'Bitcoin Office',
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
    category: 'Bitcoin Storage',
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
    image: '/app-images/bitcoin-spreadsheets.png',
    color: '#3b82f6',
    description: 'Blockchain-based spreadsheet on Bitcoin',
    category: 'Bitcoin Office',
    status: 'installed' as const,
    isPoc: true,
    version: '1.8.3',
    size: '156 MB',
    lastUpdated: '2024-11-28',
    url: 'https://bitcoin-spreadsheet.vercel.app',
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
    category: 'Bitcoin Communication',
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
    category: 'Bitcoin Utilities',
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
    category: 'Bitcoin Communication',
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
    category: 'Bitcoin Infrastructure',
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
    category: 'Bitcoin Creative',
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
    category: 'Bitcoin Finance',
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
    category: 'Bitcoin Media',
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
    category: 'Bitcoin Creative',
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
    category: 'Bitcoin Media',
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
    category: 'Bitcoin Infrastructure',
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
    category: 'Bitcoin Finance',
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
    category: 'Bitcoin Media',
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
    category: 'Bitcoin Finance',
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

const categories = [
  'All Apps', 
  'Bitcoin Office', 
  'Bitcoin Finance', 
  'Bitcoin Media', 
  'Bitcoin Communication', 
  'Bitcoin Storage', 
  'Bitcoin Creative', 
  'Bitcoin Utilities', 
  'Bitcoin Infrastructure'
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Apps')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login')
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
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-white overflow-hidden">
      {/* Developer Taskbar - Full width, above everything */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a] px-4 lg:px-8 py-2">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <a 
              href="https://github.com/bitcoin-apps-suite/bapps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white flex items-center space-x-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/docs"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Developer Docs
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/token"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-[#0094FF] font-bold">$BAPPS</span> Token
            </a>
          </div>
      </div>
      
      {/* Main container with sidebar and content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        {/* Mobile Sidebar */}
        <div className={`lg:hidden fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <Sidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={(category) => {
              setSelectedCategory(category)
              setMobileMenuOpen(false)
            }}
          />
        </div>
        
        <main className="flex-1 flex flex-col">
          {/* Header */}
        <header className="bg-[#252525] border-b border-[#3a3a3a] px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 lg:space-x-6">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
              
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
                <div>
                  <h1 className="text-2xl font-light">Bitcoin Apps</h1>
                  <p className="text-xs text-gray-500">Blockchain Cloud</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Search - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:block relative">
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
              
              {/* User Info - Simplified on mobile */}
              {user && (
                <div className="hidden lg:flex items-center space-x-3">
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
              
              {/* Mobile User Avatar */}
              {user && (
                <button
                  onClick={logout}
                  className="lg:hidden w-8 h-8 bg-gradient-to-br from-[#0094FF] to-[#0084e6] rounded-full flex items-center justify-center text-white text-sm font-bold"
                >
                  {user.name.charAt(0).toUpperCase()}
                </button>
              )}
              
              {/* View Mode Toggle - Hidden on mobile */}
              <div className="hidden lg:flex items-center bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg">
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
          </div>
        </header>

        {/* Mobile Search Bar */}
        <div className="lg:hidden bg-[#252525] px-4 py-3 border-b border-[#3a3a3a]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg px-4 py-2 pl-10 w-full text-sm focus:outline-none focus:border-[#0094FF] transition-colors"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#2a2a2a] px-4 lg:px-8 py-3 border-b border-[#3a3a3a]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-sm space-y-2 lg:space-y-0">
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
        <div className="flex-1 overflow-auto p-4 lg:p-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
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
                      <h3 className="font-medium">{app.fullName}</h3>
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
                            className="px-3 py-1.5 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] text-white rounded-lg text-sm font-medium transition-all">
                            {app.ticker || 'Trade'}
                          </button>
                        </>
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
                            {app.ticker || 'Trade'}
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
    </div>
  )
}