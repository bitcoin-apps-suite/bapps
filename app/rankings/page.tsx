'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

// Token data with revenue share information
const tokens = [
  {
    rank: 1,
    name: 'Bitcoin Writer',
    symbol: '$bWriter',
    icon: '/bitcoin-writer-logo.jpg',
    price: 0.42,
    change24h: 12.5,
    change7d: 28.3,
    marketCap: 2400000,
    volume24h: 142000,
    circulatingSupply: 5714285,
    totalSupply: 10000000,
    revenueShare: '30%',
    monthlyRevenue: 42000,
    holders: 1234,
    category: 'Productivity'
  },
  {
    rank: 2,
    name: 'NinjaPunkGirls',
    symbol: '$NPG',
    icon: '/ninjapunkgirls.png',
    price: 0.52,
    change24h: 18.7,
    change7d: 45.2,
    marketCap: 2100000,
    volume24h: 126000,
    circulatingSupply: 4038461,
    totalSupply: 10000000,
    revenueShare: '25%',
    monthlyRevenue: 38000,
    holders: 2341,
    category: 'Gaming'
  },
  {
    rank: 3,
    name: 'Bitcoin Drive',
    symbol: '$bDrive',
    icon: '/app-images/bitcoin-drive.jpg',
    price: 0.31,
    change24h: -3.2,
    change7d: 5.1,
    marketCap: 1800000,
    volume24h: 89000,
    circulatingSupply: 5806451,
    totalSupply: 10000000,
    revenueShare: '35%',
    monthlyRevenue: 31000,
    holders: 892,
    category: 'Storage'
  },
  {
    rank: 4,
    name: 'Cashboard',
    symbol: '$CASH',
    icon: '/cashboard-app-store.png',
    price: 0.38,
    change24h: 7.2,
    change7d: 15.8,
    marketCap: 1500000,
    volume24h: 78000,
    circulatingSupply: 3947368,
    totalSupply: 10000000,
    revenueShare: '20%',
    monthlyRevenue: 28000,
    holders: 567,
    category: 'Infrastructure'
  },
  {
    rank: 5,
    name: 'Bitcoin Music',
    symbol: '$bMusic',
    icon: '/bitcoin-music-icon.jpg',
    price: 0.37,
    change24h: 12.8,
    change7d: 31.2,
    marketCap: 1400000,
    volume24h: 68000,
    circulatingSupply: 3783783,
    totalSupply: 10000000,
    revenueShare: '40%',
    monthlyRevenue: 35000,
    holders: 1567,
    category: 'Media'
  },
  {
    rank: 6,
    name: 'Bitcoin Sheets',
    symbol: '$bSheets',
    icon: '/bitcoin-sheets-icon.png',
    price: 0.28,
    change24h: 8.9,
    change7d: 22.1,
    marketCap: 1200000,
    volume24h: 67000,
    circulatingSupply: 4285714,
    totalSupply: 10000000,
    revenueShare: '30%',
    monthlyRevenue: 24000,
    holders: 734,
    category: 'Productivity'
  },
  {
    rank: 7,
    name: 'Bitcoin Email',
    symbol: '$bMail',
    icon: '/bitcoin-email.jpg',
    price: 0.24,
    change24h: 5.7,
    change7d: 11.3,
    marketCap: 1100000,
    volume24h: 54000,
    circulatingSupply: 4583333,
    totalSupply: 10000000,
    revenueShare: '25%',
    monthlyRevenue: 18000,
    holders: 423,
    category: 'Communication'
  },
  {
    rank: 8,
    name: 'Senseii',
    symbol: '$SENSEII',
    icon: '/senseii.png',
    price: 0.19,
    change24h: 15.3,
    change7d: 42.1,
    marketCap: 900000,
    volume24h: 42000,
    circulatingSupply: 4736842,
    totalSupply: 10000000,
    revenueShare: '15%',
    monthlyRevenue: 12000,
    holders: 312,
    category: 'Education'
  },
  {
    rank: 9,
    name: 'Future of Blockchain',
    symbol: '$FOB',
    icon: '',
    price: 0.15,
    change24h: 8.2,
    change7d: 18.5,
    marketCap: 750000,
    volume24h: 32000,
    circulatingSupply: 5000000,
    totalSupply: 10000000,
    revenueShare: '20%',
    monthlyRevenue: 8000,
    holders: 234,
    category: 'Education'
  },
  {
    rank: 10,
    name: 'Bitcoin Jobs',
    symbol: '$bJobs',
    icon: '',
    price: 0.45,
    change24h: 22.3,
    change7d: 55.2,
    marketCap: 2800000,
    volume24h: 156000,
    circulatingSupply: 6222222,
    totalSupply: 10000000,
    revenueShare: '35%',
    monthlyRevenue: 52000,
    holders: 1823,
    category: 'Business'
  }
]

export default function RankingsPage() {
  const router = useRouter()
  const [sortBy, setSortBy] = useState('marketCap')
  const [filterCategory, setFilterCategory] = useState('All')

  const categories = ['All', 'Productivity', 'Gaming', 'Storage', 'Infrastructure', 'Media', 'Communication', 'Education', 'Business']

  const sortedTokens = [...tokens].sort((a, b) => {
    switch(sortBy) {
      case 'marketCap': return b.marketCap - a.marketCap
      case 'price': return b.price - a.price
      case 'change24h': return b.change24h - a.change24h
      case 'volume': return b.volume24h - a.volume24h
      case 'revenue': return b.monthlyRevenue - a.monthlyRevenue
      default: return a.rank - b.rank
    }
  })

  const filteredTokens = filterCategory === 'All' 
    ? sortedTokens 
    : sortedTokens.filter(t => t.category === filterCategory)

  const totalMarketCap = tokens.reduce((sum, t) => sum + t.marketCap, 0)
  const totalVolume = tokens.reduce((sum, t) => sum + t.volume24h, 0)
  const totalRevenue = tokens.reduce((sum, t) => sum + t.monthlyRevenue, 0)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-[#2a2a2a] px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => router.push('/')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Store
            </button>
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-light">Token Rankings</h2>
              <p className="text-xs text-gray-500">Real-time token metrics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/bitcoin-apps-store"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              List Your App
            </a>
          </div>
        </div>
      </nav>

      {/* Header with Stats */}
      <div className="bg-gradient-to-b from-[#0a0a0a] to-black px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-thin mb-6">
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF00FF] via-[#00FF88] to-[#0094FF] bg-clip-text text-transparent animate-gradient bg-300">
              Bitcoin Apps
            </span>
            <span className="text-white"> Token Rankings</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a]">
              <p className="text-gray-400 text-sm mb-1">Total Market Cap</p>
              <p className="text-2xl font-bold text-white">${(totalMarketCap / 1000000).toFixed(2)}M</p>
              <p className="text-xs text-green-500">+15.7% (24h)</p>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a]">
              <p className="text-gray-400 text-sm mb-1">24h Volume</p>
              <p className="text-2xl font-bold text-white">${(totalVolume / 1000).toFixed(0)}K</p>
              <p className="text-xs text-green-500">+22.3% (24h)</p>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a]">
              <p className="text-gray-400 text-sm mb-1">Monthly Revenue</p>
              <p className="text-2xl font-bold text-[#FF6B00]">${(totalRevenue / 1000).toFixed(0)}K</p>
              <p className="text-xs text-gray-500">Distributed to holders</p>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a]">
              <p className="text-gray-400 text-sm mb-1">Listed Tokens</p>
              <p className="text-2xl font-bold text-white">{tokens.length}</p>
              <p className="text-xs text-gray-500">Revenue-sharing tokens</p>
            </div>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#0094FF]"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#0094FF]"
              >
                <option value="marketCap">Market Cap</option>
                <option value="price">Price</option>
                <option value="change24h">24h Change</option>
                <option value="volume">Volume</option>
                <option value="revenue">Monthly Revenue</option>
              </select>
            </div>
            
            <div className="text-sm text-gray-400">
              <span className="text-[#0094FF]">🔵</span> = Revenue Share Active
            </div>
          </div>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#3a3a3a] text-left">
                  <th className="pb-4 text-sm font-normal text-gray-400">#</th>
                  <th className="pb-4 text-sm font-normal text-gray-400">Name</th>
                  <th className="pb-4 text-sm font-normal text-gray-400 text-right">Price</th>
                  <th className="pb-4 text-sm font-normal text-gray-400 text-right">24h %</th>
                  <th className="pb-4 text-sm font-normal text-gray-400 text-right hidden md:table-cell">7d %</th>
                  <th className="pb-4 text-sm font-normal text-gray-400 text-right">Market Cap</th>
                  <th className="pb-4 text-sm font-normal text-gray-400 text-right hidden lg:table-cell">Volume (24h)</th>
                  <th className="pb-4 text-sm font-normal text-gray-400 text-right hidden lg:table-cell">Revenue Share</th>
                  <th className="pb-4 text-sm font-normal text-gray-400 text-right hidden xl:table-cell">Monthly Rev</th>
                  <th className="pb-4 text-sm font-normal text-gray-400 text-right hidden xl:table-cell">Holders</th>
                </tr>
              </thead>
              <tbody>
                {filteredTokens.map((token) => (
                  <tr key={token.rank} className="border-b border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors">
                    <td className="py-4 text-gray-400">{token.rank}</td>
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        {token.icon ? (
                          <div className="relative w-8 h-8">
                            <Image
                              src={token.icon}
                              alt={token.name}
                              fill
                              className="object-cover rounded-lg"
                              sizes="32px"
                            />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-[#2a2a2a] rounded-lg flex items-center justify-center">
                            <span className="text-xs">{token.symbol.slice(1, 3)}</span>
                          </div>
                        )}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{token.name}</span>
                            <span className="text-[#0094FF]">🔵</span>
                          </div>
                          <span className="text-xs text-gray-400">{token.symbol}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-right font-mono">${token.price.toFixed(3)}</td>
                    <td className={`py-4 text-right font-mono ${token.change24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {token.change24h > 0 ? '+' : ''}{token.change24h.toFixed(1)}%
                    </td>
                    <td className={`py-4 text-right font-mono hidden md:table-cell ${token.change7d > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {token.change7d > 0 ? '+' : ''}{token.change7d.toFixed(1)}%
                    </td>
                    <td className="py-4 text-right font-mono">
                      ${token.marketCap >= 1000000 
                        ? `${(token.marketCap / 1000000).toFixed(2)}M`
                        : `${(token.marketCap / 1000).toFixed(0)}K`
                      }
                    </td>
                    <td className="py-4 text-right font-mono hidden lg:table-cell">
                      ${(token.volume24h / 1000).toFixed(0)}K
                    </td>
                    <td className="py-4 text-right hidden lg:table-cell">
                      <span className="px-2 py-1 bg-[#FF6B00]/20 text-[#FF6B00] rounded text-xs font-semibold">
                        {token.revenueShare}
                      </span>
                    </td>
                    <td className="py-4 text-right font-mono hidden xl:table-cell">
                      ${(token.monthlyRevenue / 1000).toFixed(0)}K
                    </td>
                    <td className="py-4 text-right hidden xl:table-cell">
                      {token.holders.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Info Box */}
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20 rounded-xl border border-purple-500/30">
            <h3 className="text-lg font-semibold mb-3">💰 Revenue Sharing Model</h3>
            <p className="text-sm text-gray-300 mb-4">
              All app tokens represent actual revenue shares. Token holders receive automatic monthly distributions proportional to their holdings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Average Revenue Share:</span>
                <span className="text-white ml-2 font-semibold">27%</span>
              </div>
              <div>
                <span className="text-gray-400">Total Monthly Revenue:</span>
                <span className="text-[#FF6B00] ml-2 font-semibold">${(totalRevenue / 1000).toFixed(0)}K</span>
              </div>
              <div>
                <span className="text-gray-400">Store Revenue (1% of all):</span>
                <span className="text-[#0094FF] ml-2 font-semibold">${(totalRevenue * 0.01 / 1000).toFixed(1)}K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}