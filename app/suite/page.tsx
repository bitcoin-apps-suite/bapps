'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AppTile from '@/components/AppTile'
import Footer from '@/components/Footer'

const suiteApps = [
  {
    id: 'bitcoin-writer',
    name: 'Writer',
    fullName: 'Bitcoin Writer',
    ticker: '$bWriter',
    icon: 'Wr',
    image: '/bitcoin-writer-logo.jpg',
    color: '#FF6B00',
    description: 'Write, encrypt, and store documents on Bitcoin',
    category: 'Bitcoin Office',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
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
    id: 'bitcoin-sheets',
    name: 'Spreadsheets',
    fullName: 'Bitcoin Spreadsheets',
    ticker: '$bSheets',
    icon: 'Sh',
    image: '/bitcoin-sheets-icon.png',
    color: '#3b82f6',
    description: 'Blockchain-based spreadsheet on Bitcoin',
    category: 'Bitcoin Office',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
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
    id: 'bitcoin-drive',
    name: 'Drive',
    fullName: 'Bitcoin Drive',
    ticker: '$bDrive',
    icon: 'Dr',
    image: '/app-images/bitcoin-drive.jpg',
    color: '#22c55e',
    description: 'Decentralized cloud storage on Bitcoin blockchain',
    category: 'Bitcoin Storage',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
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
    id: 'bitcoin-email',
    name: 'Email',
    fullName: 'Bitcoin Email',
    ticker: '$bMail',
    icon: 'Em',
    image: '/bitcoin-email.jpg',
    color: '#9333EA',
    description: 'Encrypted email service with Bitcoin-powered features',
    category: 'Bitcoin Communication',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.0.0',
    size: '124 MB',
    lastUpdated: '2024-12-15',
    url: 'https://bitcoin-email.vercel.app',
    price: 0.24,
    change24h: 5.7,
    marketCap: '$1.1M',
    volume24h: '$54K'
  },
  {
    id: 'bitcoin-calendar',
    name: 'Calendar',
    fullName: 'Bitcoin Calendar',
    ticker: '$bCalendar',
    icon: 'Ca',
    image: '/bitcoin-calendar.jpg',
    color: '#8B5CF6',
    description: 'Decentralized scheduling and events on Bitcoin',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: null,
    size: null,
    lastUpdated: null,
    url: 'https://calendar.bitcoinapps.store',
    price: 0.33,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-music',
    name: 'Music',
    fullName: 'Bitcoin Music',
    ticker: '$bMusic',
    icon: 'Mu',
    image: '/bitcoin-music-icon.jpg',
    color: '#EC4899',
    description: 'Decentralized music streaming on Bitcoin',
    category: 'Bitcoin Media',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.0.0',
    size: '87 MB',
    lastUpdated: '2024-12-20',
    url: 'https://bitcoin-music.vercel.app',
    price: 0.37,
    change24h: 12.8,
    marketCap: '$1.4M',
    volume24h: '$68K'
  },
  {
    id: 'bitcoin-jobs',
    name: 'Jobs',
    fullName: 'Bitcoin Jobs',
    ticker: '$bJobs',
    icon: 'Jo',
    color: '#10B981',
    description: 'Decentralized work marketplace with smart contract payments',
    category: 'Bitcoin Business',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.0.0',
    size: '112 MB',
    lastUpdated: '2024-12-20',
    url: 'https://jobs.bitcoinapps.store',
    price: 0.45,
    change24h: 22.3,
    marketCap: '$2.8M',
    volume24h: '$156K'
  }
]

export default function SuitePage() {
  const router = useRouter()

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
              <div className="relative w-10 h-10">
                <Image
                  src="/bitcoin-apps-logo.jpg"
                  alt="Bitcoin Apps"
                  fill
                  className="object-cover rounded-lg"
                  sizes="40px"
                />
              </div>
              <div>
                <h2 className="text-xl font-light">Bitcoin Apps Suite</h2>
                <p className="text-xs text-gray-500">Core Productivity Suite</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-[#0094FF] to-[#0084e6] px-4 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-white font-mono font-bold">$BAPPS</span>
                <div className="text-right">
                  <div className="text-white font-mono text-sm">$1.28</div>
                  <div className="text-green-300 font-mono text-xs">+18.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-7xl font-thin mb-4">
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF00FF] via-[#00FF88] to-[#0094FF] bg-clip-text text-transparent animate-gradient bg-300">
              Bitcoin
            </span>
            <span className="text-white"> Apps Suite</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            The Complete Productivity Suite on the Blockchain
          </p>
          <p className="text-gray-500">
            Seven essential applications working together seamlessly
          </p>
        </div>

        {/* Suite Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="text-lg font-semibold mb-2">Fully Decentralized</h3>
            <p className="text-gray-400 text-sm">All data stored on the Bitcoin blockchain</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-400 text-sm">Apps work together with shared data and auth</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
            <div className="text-3xl mb-3">💎</div>
            <h3 className="text-lg font-semibold mb-2">Token Economy</h3>
            <p className="text-gray-400 text-sm">Each app has its own tradeable token</p>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Core Applications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {suiteApps.map((app) => (
              <AppTile key={app.id} app={app} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20 rounded-xl border border-purple-500/30">
          <h2 className="text-3xl font-semibold mb-4">Get Started with the Suite</h2>
          <p className="text-gray-300 mb-6">Subscribe to all seven apps for one low monthly price</p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] text-white rounded-lg font-semibold transition-all">
              Subscribe for $29.99/month
            </button>
            <button className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-lg font-semibold transition-all">
              Try Free for 30 Days
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}