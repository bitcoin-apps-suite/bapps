'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AppTile from '@/components/AppTile'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import { useAuth } from '@/components/AuthContext'
import { 
  PenTool, FileSpreadsheet, HardDrive, Mail, Calendar, Music, 
  Search, Palette, GraduationCap, Video, Paintbrush,
  Gamepad2, Sword, MessageCircle, Wallet, Image as ImageIcon, TrendingUp,
  Shuffle, ShoppingCart, Zap, DollarSign, Send, Palette as PaletteIcon
} from 'lucide-react'

const apps = [
  // Featured Canonical Apps - Ordered by release
  {
    id: 'bitcoin-writer',
    name: 'Writer',
    fullName: 'Bitcoin Writer',
    ticker: '$bWriter',
    icon: 'Wr',
    image: '/bitcoin-writer-logo.jpg',
    color: '#FF6B00',
    description: 'Write, encrypt, and store documents on Bitcoin',
    category: 'Featured Apps',
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
    id: 'bitcoin-music',
    name: 'Music',
    fullName: 'Bitcoin Music',
    ticker: '$bMusic',
    icon: 'Mu',
    image: '/bitcoin-music-icon.jpg',
    color: '#EC4899',
    description: 'Decentralized music streaming on Bitcoin',
    category: 'Featured Apps',
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
    id: 'bitcoin-calendar',
    name: 'Calendar',
    fullName: 'Bitcoin Calendar',
    ticker: '$bCalendar',
    icon: 'Ca',
    image: '/bitcoin-calendar.jpg',
    color: '#F59E0B',
    description: 'Blockchain-based calendar and scheduling with smart reminders',
    category: 'Bitcoin Office',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.1.0',
    size: '76 MB',
    lastUpdated: '2024-12-18',
    url: 'https://bitcoin-calendar.vercel.app',
    price: 0.22,
    change24h: 6.4,
    marketCap: '$980K',
    volume24h: '$45K'
  },
  {
    id: 'bitcoin-search',
    name: 'Search',
    fullName: 'Bitcoin Search',
    ticker: '$bSearch',
    icon: <Search size={32} />,
    color: '#8B5CF6',
    description: 'Decentralized search engine powered by Bitcoin blockchain',
    category: 'Featured Apps',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.0.0',
    size: '89 MB',
    lastUpdated: '2024-12-20',
    url: 'https://bitcoin-search.vercel.app',
    price: 0.26,
    change24h: 9.8,
    marketCap: '$1.1M',
    volume24h: '$52K'
  },
  {
    id: 'bitcoin-education',
    name: 'Education',
    fullName: 'Bitcoin Education',
    ticker: '$bEducation',
    icon: <GraduationCap size={32} />,
    image: '/bitcoin-education.jpg',
    color: '#0EA5E9',
    description: 'Comprehensive Bitcoin learning platform with interactive courses',
    category: 'Featured Apps',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.0.0',
    size: '156 MB',
    lastUpdated: '2024-12-20',
    url: 'https://bitcoin-education-theta.vercel.app',
    price: 0.19,
    change24h: 11.7,
    marketCap: '$890K',
    volume24h: '$41K'
  },
  {
    id: 'bitcoin-video',
    name: 'Video',
    fullName: 'Bitcoin Video',
    ticker: '$bVideo',
    icon: <Video size={32} />,
    image: '/bitcoin-video.jpg',
    color: '#7C3AED',
    description: 'Video streaming and storage on Bitcoin blockchain',
    category: 'Featured Apps',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.0.0',
    size: '145 MB',
    lastUpdated: '2024-12-20',
    url: 'https://bitcoin-video-nine.vercel.app/',
    price: 0.35,
    change24h: 8.4,
    marketCap: '$1.7M',
    volume24h: '$84K'
  },
  {
    id: 'bitcoin-paint',
    name: 'Paint',
    fullName: 'Bitcoin Paint',
    ticker: '$bPaint',
    icon: <Paintbrush size={32} />,
    image: '/bitcoin-paint.jpg',
    color: '#F59E0B',
    description: 'Digital art creation platform on Bitcoin blockchain',
    category: 'Featured Apps',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.0.0',
    size: '98 MB',
    lastUpdated: '2024-12-20',
    url: 'https://bitcoin-paint.vercel.app',
    price: 0.14,
    change24h: 7.9,
    marketCap: '$750K',
    volume24h: '$32K'
  },
  {
    id: 'bitcoin-wallet',
    name: 'Wallet',
    fullName: 'Bitcoin Wallet',
    ticker: '$bWallet',
    icon: <Wallet size={32} />,
    image: '/bitcoin-wallet.jpg',
    color: '#F97316',
    description: 'Secure Bitcoin wallet with advanced features',
    category: 'Featured Apps',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '2.1.0',
    size: '125 MB',
    lastUpdated: '2024-12-22',
    url: 'https://bitcoin-wallet-sable.vercel.app',
    price: 0.50,
    change24h: 18.5,
    marketCap: '$3.2M',
    volume24h: '$189K'
  },
  {
    id: 'bitcoin-exchange',
    name: 'Exchange',
    fullName: 'Bitcoin Exchange',
    ticker: '$bExchange',
    icon: <TrendingUp size={32} />,
    color: '#10B981',
    description: 'Central exchange for all Bitcoin app tokens',
    category: 'Featured Apps',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    isMainExchange: true,
    version: '3.0.1',
    size: '178 MB',
    lastUpdated: '2024-12-22',
    url: 'https://bitcoin-exchange-ai-tribes.vercel.app',
    price: 0.89,
    change24h: 24.7,
    marketCap: '$5.4M',
    volume24h: '$412K'
  },
  {
    id: 'senseii',
    name: 'Senseii',
    fullName: 'Senseii Bitcoin Education',
    ticker: '$SENSEII',
    icon: '先',
    image: '/senseii.png',
    color: '#000000',
    description: 'Learn Bitcoin fundamentals and advanced concepts',
    category: 'Bitcoin Education',
    status: 'installed' as const,
    isPoc: true,
    version: '1.0.0',
    size: '82 MB',
    lastUpdated: '2024-12-20',
    url: 'https://senseii-zeta.vercel.app',
    price: 0.19,
    change24h: 15.3,
    marketCap: '$900K',
    volume24h: '$42K'
  },
  {
    id: 'future-of-blockchain',
    name: 'Future of Blockchain',
    fullName: 'Future of Blockchain',
    ticker: '$FOB',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 26L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 7H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.9"/>
        <path d="M12 9L15 12L12 15L9 12L12 9Z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    color: '#6366F1',
    description: 'Explore the future potential and innovations of blockchain technology',
    category: 'Bitcoin Education',
    status: 'installed' as const,
    isPoc: true,
    version: '1.0.0',
    size: '65 MB',
    lastUpdated: '2024-12-20',
    url: 'https://future-of-blockchain.vercel.app',
    price: 0.15,
    change24h: 8.2,
    marketCap: '$750K',
    volume24h: '$32K'
  },
  {
    id: 'cashboard',
    name: 'Cashboard',
    fullName: 'Cashboard',
    ticker: '$CASH',
    icon: 'Cb',
    image: '/cashboard-app-store.png',
    color: '#059669',
    description: 'Bitcoin infrastructure dashboard and analytics',
    category: 'Bitcoin Infrastructure',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    version: '2.1.0',
    size: '95 MB',
    lastUpdated: '2024-12-20',
    url: 'https://cashboard.website',
    price: 0.38,
    change24h: 7.2,
    marketCap: '$1.5M',
    volume24h: '$78K'
  },
  {
    id: 'ninjapunkgirls',
    name: 'NinjaPunkGirls',
    fullName: 'NinjaPunkGirls',
    ticker: '$NPG',
    icon: '忍',
    image: '/ninja-punk-girls-logo.png',
    color: '#E11D48',
    description: 'Collectible NFT game with ninja punk girl characters',
    category: 'Bitcoin Games',
    status: 'installed' as const,
    isPoc: true,
    version: '1.5.0',
    size: '178 MB',
    lastUpdated: '2024-12-20',
    url: 'https://www.ninjapunkgirls.website',
    price: 0.52,
    change24h: 18.7,
    marketCap: '$2.1M',
    volume24h: '$126K'
  },
  // Coming Soon Apps
  {
    id: 'bitcoin-jobs',
    name: 'Jobs',
    fullName: 'Bitcoin Jobs',
    ticker: '$bJobs',
    icon: 'Jo',
    image: '/bitcoin-jobs-icon.jpg',
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
  },
  {
    id: 'bitcoin-contracts',
    name: 'Contracts',
    fullName: 'Bitcoin Contracts',
    ticker: '$bContracts',
    icon: 'Co',
    color: '#6366F1',
    description: 'Smart contract creation and management platform',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.38,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-legal',
    name: 'Legal',
    fullName: 'Bitcoin Legal',
    ticker: '$bLegal',
    icon: 'Le',
    color: '#7C3AED',
    description: 'Blockchain-verified legal documents and dispute resolution',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.42,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-auth',
    name: 'Auth',
    fullName: 'Bitcoin Auth',
    ticker: '$bAuth',
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
    ticker: '$bChat',
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
    ticker: '$bDomains',
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
    ticker: '$bDraw',
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
    id: 'bitcoin-pics',
    name: 'Pics',
    fullName: 'Bitcoin Pics',
    ticker: '$bPics',
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
    ticker: '$bRegistry',
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
    ticker: '$bShares',
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
  // Third Party Apps (Submitted by developers)
  {
    id: 'bitcoin-calculator',
    name: 'Calculator',
    fullName: 'Bitcoin Calculator Pro',
    ticker: '$CALC',
    icon: 'Calc',
    color: '#6B7280',
    description: 'Advanced Bitcoin calculation and conversion tool',
    category: 'Third Party Apps',
    status: 'installed' as const,
    isThirdParty: true,
    version: '2.1.0',
    size: '12 MB',
    lastUpdated: '2024-12-18',
    url: 'https://bitcoin-calc-example.com',
    price: 0.08,
    change24h: 2.1,
    marketCap: '$45K',
    volume24h: '$1.2K'
  },
  {
    id: 'btc-weather',
    name: 'Weather',
    fullName: 'BTC Weather Widget',
    ticker: '$WTHR',
    icon: '☀',
    color: '#F59E0B',
    description: 'Weather app with Bitcoin price integration',
    category: 'Third Party Apps',
    status: 'installed' as const,
    isThirdParty: true,
    version: '1.3.2',
    size: '8 MB',
    lastUpdated: '2024-12-15',
    url: 'https://btc-weather-example.com',
    price: 0.03,
    change24h: -1.2,
    marketCap: '$18K',
    volume24h: '$450'
  },
  // BSV/Metanet Ecosystem Apps
  {
    id: 'metanet-catalog',
    name: 'Metanet Catalog',
    fullName: 'Metanet App Catalog',
    ticker: '$METANET',
    icon: <ShoppingCart size={24} />,
    color: '#0EA5E9',
    description: 'Decentralized app store for BSV/Metanet applications',
    category: 'Third Party Apps',
    status: 'installed' as const,
    isThirdParty: true,
    version: '1.0.0',
    size: '25 MB',
    lastUpdated: '2024-12-20',
    url: 'https://metanetapps.com',
    price: 0.15,
    change24h: 8.2,
    marketCap: '$485K',
    volume24h: '$22K'
  },
  {
    id: 'bsv-browser',
    name: 'BSV Browser',
    fullName: 'BSV Blockchain Browser',
    ticker: '$BSVB',
    icon: <Search size={24} />,
    color: '#10B981',
    description: 'Secure BSV blockchain wallet and Web3 browser',
    category: 'Third Party Apps',
    status: 'installed' as const,
    isThirdParty: true,
    version: '2.1.5',
    size: '45 MB',
    lastUpdated: '2024-12-19',
    url: 'https://mobile.bsvb.tech',
    price: 0.08,
    change24h: 5.7,
    marketCap: '$225K',
    volume24h: '$18K'
  },
  {
    id: 'handcash',
    name: 'HandCash',
    fullName: 'HandCash Wallet',
    ticker: '$HCH',
    icon: <Zap size={24} />,
    color: '#00D4AA',
    description: 'Mobile BSV wallet with nanopayments for apps and games',
    category: 'Third Party Apps',
    status: 'installed' as const,
    isThirdParty: true,
    version: '5.2.1',
    size: '41 MB',
    lastUpdated: '2024-12-19',
    url: 'https://handcash.io',
    price: 0.22,
    change24h: 9.8,
    marketCap: '$980K',
    volume24h: '$67K'
  },
  {
    id: 'centbee',
    name: 'CentBee',
    fullName: 'CentBee Wallet',
    ticker: '$CENT',
    icon: <DollarSign size={24} />,
    color: '#F97316',
    description: 'Mobile BSV wallet for shopping at global retailers',
    category: 'Third Party Apps',
    status: 'installed' as const,
    isThirdParty: true,
    version: '3.8.4',
    size: '35 MB',
    lastUpdated: '2024-12-20',
    url: 'https://centbee.com',
    price: 0.14,
    change24h: 5.7,
    marketCap: '$425K',
    volume24h: '$28K'
  },
]

const categories = [
  'All Apps',
  'Featured Apps',
  'Bitcoin Office',
  'Bitcoin Art',
  'Bitcoin Library',
  'Bitcoin Social',
  'Bitcoin Money',
  'Bitcoin Business',
  'Bitcoin Finance', 
  'Bitcoin Media', 
  'Bitcoin Communication', 
  'Bitcoin Storage', 
  'Bitcoin Creative', 
  'Bitcoin Utilities', 
  'Bitcoin Infrastructure',
  'Bitcoin Education',
  'Bitcoin Entertainment',
  'Bitcoin Games',
  'Bitcoin Fashion',
  'Third Party Apps'
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Apps')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const { user, logout, login, isLoading } = useAuth()
  const router = useRouter()

  // Remove automatic redirect to login - let users browse without authentication

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
      <div className="flex h-screen bg-black items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0094FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Main container with sidebar and content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar - completely hidden on mobile */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <Sidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed top-12 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        {/* Mobile Sidebar */}
        <div className={`lg:hidden fixed top-12 bottom-0 left-0 z-50 w-64 transform transition-transform duration-200 ${
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
        
        <main className="flex-1 flex flex-col w-full">
          {/* Header - Organized into 3 sections */}
        <header className="bg-black border-b border-[#2a2a2a] px-4 lg:px-8 py-4 lg:py-6">
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 hover:bg-[#2a2a2a] rounded-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/bitcoin-apps-logo.jpg"
                  alt="Bitcoin Apps"
                  fill
                  className="object-cover rounded-lg"
                  sizes="32px"
                />
              </div>
              <div>
                <h1 className="text-base font-light">Bitcoin Apps</h1>
              </div>
            </div>
            
            {/* Mobile User/Login */}
            {user ? (
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => router.push('/exchange/options')}
                  className="px-2 py-1.5 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-lg text-sm font-medium">
                  Ex
                </button>
                <button
                  onClick={logout}
                  className="w-8 h-8 bg-gradient-to-br from-[#0094FF] to-[#0084e6] rounded-full flex items-center justify-center text-white text-xs font-bold"
                >
                  {user.name.charAt(0).toUpperCase()}
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  login('handcash')
                }}
                className="flex items-center space-x-1 px-2 py-1.5 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white rounded-lg text-xs font-medium"
              >
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#22C55E] font-bold text-[10px]">₿</span>
                </div>
                <span>HandCash</span>
              </button>
            )}
          </div>
          
          {/* Desktop Header */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center">
            {/* Left Section: Logo & Branding */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="relative w-10 h-10">
                  <Image
                    src="/bitcoin-apps-logo.jpg"
                    alt="Bitcoin Apps"
                    title="Bitcoin Software Co."
                    fill
                    className="object-cover rounded-lg"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-light">Bitcoin Apps Store</h1>
                  <p className="text-xs text-gray-500">Think ₿ifferent™</p>
                </div>
              </div>
            </div>
            
            {/* Center Section: Navigation & Search */}
            <div className="flex items-center justify-center space-x-6">
              {/* Quick Links */}
              <div className="flex items-center space-x-6">
                <a 
                  href="/bitcoin-apps-store"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
                <a 
                  href="/rankings"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Rankings
                </a>
                <a 
                  href="/exchange/options"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Exchange
                </a>
                <a 
                  href="/developer/download-button"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Developer
                </a>
              </div>
              
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg px-3 py-1.5 pl-9 w-48 text-sm focus:outline-none focus:border-[#0094FF] transition-colors"
                />
                <svg className="absolute left-2.5 top-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Right Section: User & Actions */}
            <div className="flex items-center justify-end space-x-3">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-[#0094FF] text-white' : 'text-gray-400'} transition-colors rounded-l-lg`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-[#0094FF] text-white' : 'text-gray-400'} transition-colors rounded-r-lg`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              {/* User Info & Exchange Button */}
              {user ? (
                <>
                  <button 
                    onClick={() => router.push('/exchange/options')}
                    className="px-3 py-1.5 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white rounded-lg transition-all text-sm font-medium">
                    Open Exchange
                  </button>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg transition-colors"
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-[#0094FF] to-[#0084e6] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-300">{user.name}</span>
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => {
                    login('handcash')
                  }}
                  className="flex items-center space-x-2 px-4 py-1.5 bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white rounded-lg transition-all font-medium text-sm"
                >
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#22C55E] font-bold text-xs">₿</span>
                  </div>
                  <span>Login with HandCash</span>
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Mobile Search Bar */}
        <div className="lg:hidden bg-black px-3 py-2 border-b border-[#2a2a2a]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg px-3 py-2 pl-9 w-full text-sm focus:outline-none focus:border-[#0094FF] transition-colors"
            />
            <svg className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Status Bar - Simplified */}
        <div className="bg-[#0a0a0a] px-4 lg:px-8 py-2 border-b border-[#2a2a2a]">
          <div className="flex items-center justify-center space-x-6 text-xs">
            <span className="text-gray-400">
              <span className="text-white font-medium">{filteredApps.length}</span> apps
            </span>
            <span className="text-gray-400">
              <span className="text-green-400 font-medium">{apps.filter(a => a.status === 'installed').length}</span> live
            </span>
            <span className="text-gray-400">
              <span className="text-yellow-400 font-medium">{apps.filter(a => a.ticker).length}</span> tokens
            </span>
            <span className="text-gray-400">
              <span className="text-[#10B981] font-medium animate-pulse">Exchange</span> ready
            </span>
          </div>
        </div>

        {/* Apps Grid/List */}
        <div className="flex-1 overflow-auto p-3 lg:p-8">
          {/* Hero Section */}
          <div className="mb-6 lg:mb-8 text-center py-8 lg:py-12">
            <h1 className="text-7xl lg:text-9xl font-thin mb-4 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 via-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                Discover b
              </span>
              <span className="text-white">Apps</span>
            </h1>
            <p className="text-3xl lg:text-4xl font-thin text-white max-w-3xl mx-auto mb-4">
              Think ₿ifferent
            </p>
            <div className="flex justify-center gap-6 text-sm font-light text-gray-500">
              <span>{filteredApps.filter(app => app.status === 'installed').length} apps available</span>
              <span>•</span>
              <span>{filteredApps.filter(app => app.isSuite).length} featured</span>
            </div>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="space-y-8">
              {/* Core Bitcoin Apps Suite - Highlighted Section */}
              {filteredApps.filter(app => app.isSuite).length > 0 && (
                <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20 p-6 rounded-xl border border-purple-500/30">
                  <div className="mb-4">
                    {/* Mobile Layout - Stack vertically */}
                    <div className="lg:hidden">
                      <h2 className="text-xl font-bold text-white mb-1">
                        Bitcoin Apps Suite
                      </h2>
                      <p className="text-sm text-gray-300 mb-3">Essential productivity suite featuring 12 core apps</p>
                      {/* Mobile Badge */}
                      <div className="relative px-4 py-2 bg-gradient-to-r from-[#FF6B00]/10 via-[#FF00FF]/10 via-[#00FF88]/10 to-[#0094FF]/10 backdrop-blur-xl rounded-xl border border-white/20 w-fit">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-medium text-sm">$BAPPS</span>
                          <span className="text-white font-mono text-sm">$1.28</span>
                          <span className="text-green-400 font-mono text-xs px-2 py-0.5 bg-green-500/10 rounded-full">+18.5%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop Layout - Side by side */}
                    <div className="hidden lg:flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">
                          Bitcoin Apps Suite
                        </h2>
                        <p className="text-sm text-gray-300">Essential productivity suite - Writer, Spreadsheets, Drive, Email, Calendar, Music, Jobs, Search, Art, Education, Video & Paint</p>
                      </div>
                      {/* Desktop Rainbow glassmorphism badge */}
                      <div className="relative px-6 py-2 bg-gradient-to-r from-[#FF6B00]/10 via-[#FF00FF]/10 via-[#00FF88]/10 to-[#0094FF]/10 backdrop-blur-xl rounded-xl border border-white/20">
                        <div className="flex items-center gap-4">
                          <span className="text-white font-medium text-sm">$BAPPS</span>
                          <div className="flex items-center gap-3">
                            <span className="text-white font-mono text-sm">$1.28</span>
                            <span className="text-green-400 font-mono text-xs px-2 py-0.5 bg-green-500/10 rounded-full">+18.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-4">
                    {/* Bitcoin Apps Suite Grid */}
                    {filteredApps.filter(app => app.isSuite).map((app) => (
                      <AppTile key={app.id} app={app} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Other Official Apps */}
              {filteredApps.filter(app => !app.isThirdParty && !app.isSuite).length > 0 && (
                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-white mb-1">Other Bitcoin Apps</h2>
                    <p className="text-sm text-gray-400">Additional apps and services from Bitcoin Corp. LTD.</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                    {filteredApps.filter(app => !app.isThirdParty && !app.isSuite).map((app) => (
                      <AppTile key={app.id} app={app} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Third Party Apps */}
              {filteredApps.filter(app => app.isThirdParty).length > 0 && (
                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-white mb-1">Third Party Apps</h2>
                    <p className="text-sm text-gray-400">Community-submitted applications</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                    {filteredApps.filter(app => app.isThirdParty).map((app) => (
                      <AppTile key={app.id} app={app} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              {/* Official Bitcoin Apps Suite - List View */}
              {filteredApps.filter(app => !app.isThirdParty).length > 0 && (
                <div>
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-1">
                        <a href="/suite" className="hover:text-[#0094FF] transition-colors">
                          Bitcoin Apps Suite →
                        </a>
                      </h2>
                      <p className="text-sm text-gray-400">Official canonical apps from Bitcoin Corp. LTD.</p>
                    </div>
                    {/* Rainbow glassmorphism badge */}
                    <div className="relative px-6 py-2 bg-gradient-to-r from-[#FF6B00]/10 via-[#FF00FF]/10 via-[#00FF88]/10 to-[#0094FF]/10 backdrop-blur-xl rounded-xl border border-white/20">
                      <div className="flex items-center gap-4">
                        <span className="text-white font-medium text-sm">$BAPPS</span>
                        <div className="flex items-center gap-3">
                          <span className="text-white font-mono text-sm">$1.28</span>
                          <span className="text-green-400 font-mono text-xs px-2 py-0.5 bg-green-500/10 rounded-full">+18.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {filteredApps.filter(app => !app.isThirdParty).map((app) => (
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
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{app.fullName}</h3>
                        {app.ticker && (
                          <span className="text-[#0094FF] text-sm font-mono" title={app.ticker}>{app.ticker.replace('$b', '$₿')}</span>
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
                            className="px-3 py-1.5 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] text-white rounded-lg text-sm font-medium transition-all">
                            {app.ticker ? app.ticker.replace('$b', '$₿') : 'Trade'}
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
                            {app.ticker ? app.ticker.replace('$b', '$₿') : 'Trade'}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Third Party Apps - List View */}
              {filteredApps.filter(app => app.isThirdParty).length > 0 && (
                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-white mb-1">Third Party Apps</h2>
                    <p className="text-sm text-gray-400">Community-submitted applications</p>
                  </div>
                  <div className="space-y-2">
                    {filteredApps.filter(app => app.isThirdParty).map((app) => (
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
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{app.fullName}</h3>
                              {app.ticker && (
                                <span className="text-[#0094FF] text-sm font-mono" title={app.ticker}>{app.ticker.replace('$b', '$₿')}</span>
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
                                  className="px-3 py-1.5 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] text-white rounded-lg text-sm font-medium transition-all">
                                  {app.ticker ? app.ticker.replace('$b', '$₿') : 'Trade'}
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
                                  {app.ticker ? app.ticker.replace('$b', '$₿') : 'Trade'}
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Connect Your Account</h2>
              <button
                onClick={() => setLoginModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  login('handcash')
                  setLoginModalOpen(false)
                }}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white rounded-lg transition-colors"
              >
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#22C55E] font-bold text-xs">₿</span>
                </div>
                <span>Continue with HandCash</span>
              </button>

              <button
                onClick={() => {
                  login('google')
                  setLoginModalOpen(false)
                }}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-white hover:bg-gray-100 text-black rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <button
                onClick={() => {
                  login('facebook')
                  setLoginModalOpen(false)
                }}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Continue with Facebook</span>
              </button>

              <button
                onClick={() => {
                  login('twitter')
                  setLoginModalOpen(false)
                }}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-[#1DA1F2] hover:bg-[#1A91DA] text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Continue with Twitter</span>
              </button>

              <button
                onClick={() => {
                  login('github')
                  setLoginModalOpen(false)
                }}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-[#333333] hover:bg-[#2D2D2D] text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Continue with GitHub</span>
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                By connecting, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}