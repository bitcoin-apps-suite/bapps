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
    name: 'b/Writer',
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
    name: 'b/Spreadsheets',
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
    name: 'b/Drive',
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
    name: 'b/Email',
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
    name: 'b/Music',
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
    name: 'b/Calendar',
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
    name: 'b/Search',
    fullName: 'Bitcoin Search',
    ticker: '$bSearch',
    icon: <Search size={32} />,
    image: '/bitcoin-search.jpg',
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
    name: 'b/Education',
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
    id: 'bitcoin-exchange',
    name: 'b/Exchange',
    fullName: 'Bitcoin Exchange',
    ticker: '$bExchange',
    icon: <TrendingUp size={32} />,
    image: '/bitcoin-exchange.jpg',
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
    url: 'https://bitcoin-exchange-iota.vercel.app',
    price: 0.89,
    change24h: 24.7,
    marketCap: '$5.4M',
    volume24h: '$412K'
  },
  {
    id: 'bitcoin-paint',
    name: 'b/Paint',
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
    name: 'b/Wallet',
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
    id: 'bitcoin-video',
    name: 'b/Video',
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
    id: 'bitcoin-code',
    name: 'b/Code',
    fullName: 'Bitcoin Code',
    ticker: '$bCode',
    icon: 'Co',
    image: '/bitcoin-code.jpg',
    color: '#10D96A',
    description: 'Development environment for Bitcoin blockchain applications',
    category: 'Featured Apps',
    status: 'installed' as const,
    isPoc: true,
    isCanonical: true,
    isSuite: true,
    version: '1.5.0',
    size: '134 MB',
    lastUpdated: '2024-12-22',
    url: 'https://bitcoin-code.vercel.app',
    price: 0.35,
    change24h: 15.8,
    marketCap: '$2.1M',
    volume24h: '$98K'
  },
  {
    id: 'senseii',
    name: 'b/Senseii',
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
    name: 'b/Future of Blockchain',
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
    name: 'b/Cashboard',
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
    name: 'b/NinjaPunkGirls',
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
    name: 'b/Jobs',
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
    url: 'https://bitcoin-jobs.vercel.app',
    price: 0.45,
    change24h: 22.3,
    marketCap: '$2.8M',
    volume24h: '$156K'
  },
  {
    id: 'bitcoin-contracts',
    name: 'b/Contracts',
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
    name: 'b/Legal',
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
    name: 'b/Auth',
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
    name: 'b/Chat',
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
    name: 'b/Domains',
    fullName: 'Bitcoin Domains',
    ticker: '$bDomains',
    icon: 'Do',
    color: '#6366F1',
    description: 'Bitcoin blockchain domain name system',
    category: 'Bitcoin Infrastructure',
    status: 'installed' as const,
    isSuite: true,
    version: '1.0.0',
    size: '48 MB',
    lastUpdated: '2025-01-15',
    url: 'https://bitcoin-dns.vercel.app',
    price: 0.32,
    change24h: 8.2,
    marketCap: '$1.2M',
    volume24h: '$24K'
  },
  {
    id: 'bitcoin-3d',
    name: 'b/3D',
    fullName: 'Bitcoin 3D',
    ticker: '$b3D',
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-8 h-8 transform rotate-12">
          {/* Main cube face */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-sm shadow-lg"></div>
          {/* Top face */}
          <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-pink-300 to-pink-500 rounded-sm transform skew-x-12 skew-y-12 opacity-80"></div>
          {/* Right face */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-sm transform skew-x-12 skew-y-12 opacity-60"></div>
        </div>
      </div>
    ),
    image: '/bitcoin-3d-2.jpg',
    color: '#EC4899',
    description: '3D modeling and visualization platform on Bitcoin blockchain',
    category: 'Bitcoin Art',
    status: 'installed' as const,
    isSuite: true,
    version: '1.0.0',
    size: '85 MB',
    lastUpdated: '2025-01-15',
    url: 'https://bitcoin-3d.vercel.app',
    price: 0.38,
    change24h: 12.5,
    marketCap: '$1.8M',
    volume24h: '$45K'
  },
  {
    id: 'bitcoin-terminal',
    name: 'b/Terminal',
    fullName: 'Bitcoin Terminal',
    ticker: '$bTerminal',
    icon: 'Te',
    color: '#22C55E',
    description: 'Command line interface with Bitcoin blockchain integration',
    category: 'Bitcoin System',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.28,
    change24h: 6.8,
    marketCap: '$980K',
    volume24h: '$18K'
  },
  {
    id: 'bitcoin-files',
    name: 'b/Files',
    fullName: 'Bitcoin Files',
    ticker: '$bFiles',
    icon: 'Fi',
    color: '#3B82F6',
    description: 'File manager with Bitcoin blockchain storage and encryption',
    category: 'Bitcoin System',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.35,
    change24h: 9.4,
    marketCap: '$1.4M',
    volume24h: '$28K'
  },
  {
    id: 'bitcoin-settings',
    name: 'b/Settings',
    fullName: 'Bitcoin Settings',
    ticker: '$bSettings',
    icon: 'Se',
    color: '#6B7280',
    description: 'System configuration and Bitcoin network settings',
    category: 'Bitcoin System',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.22,
    change24h: 4.2,
    marketCap: '$820K',
    volume24h: '$12K'
  },
  {
    id: 'bitcoin-monitor',
    name: 'b/Monitor',
    fullName: 'Bitcoin System Monitor',
    ticker: '$bMonitor',
    icon: 'Mo',
    color: '#F59E0B',
    description: 'System performance and Bitcoin network monitoring',
    category: 'Bitcoin System',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.31,
    change24h: 7.6,
    marketCap: '$1.1M',
    volume24h: '$22K'
  },
  {
    id: 'bitcoin-browser',
    name: 'b/Browser',
    fullName: 'Bitcoin Browser',
    ticker: '$bBrowser',
    icon: 'Br',
    color: '#06B6D4',
    description: 'Web browser with built-in Bitcoin wallet and Web3 support',
    category: 'Bitcoin System',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.42,
    change24h: 11.3,
    marketCap: '$1.6M',
    volume24h: '$35K'
  },
  {
    id: 'bitcoin-text-editor',
    name: 'b/TextEdit',
    fullName: 'Bitcoin Text Editor',
    ticker: '$bTextEdit',
    icon: 'Tx',
    color: '#84CC16',
    description: 'Advanced text editor with Bitcoin document encryption',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.26,
    change24h: 5.8,
    marketCap: '$890K',
    volume24h: '$16K'
  },
  {
    id: 'bitcoin-draw',
    name: 'b/Draw',
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
    name: 'b/Pics',
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
    name: 'b/Registry',
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
    name: 'b/Shares',
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
    name: 'b/Calculator',
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
    name: 'b/Weather',
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
    name: 'b/Metanet Catalog',
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
    name: 'b/BSV Browser',
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
    name: 'b/HandCash',
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
    name: 'b/CentBee',
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
  
  // Social Media bApps
  {
    id: 'bitcoin-twitter',
    name: 'b/Twitter',
    fullName: 'Bitcoin Twitter',
    ticker: '$bTwitter',
    icon: 'Tw',
    color: '#1DA1F2',
    description: 'Decentralized social media platform with Bitcoin micropayments for posts',
    category: 'Bitcoin Social',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.25,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-facebook',
    name: 'b/Facebook',
    fullName: 'Bitcoin Facebook',
    ticker: '$bFacebook',
    icon: 'Fb',
    color: '#1877F2',
    description: 'Social networking with Bitcoin-powered content monetization',
    category: 'Bitcoin Social',
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
    id: 'bitcoin-instagram',
    name: 'b/Instagram',
    fullName: 'Bitcoin Instagram',
    ticker: '$bInstagram',
    icon: 'Ig',
    color: '#E4405F',
    description: 'Photo sharing with Bitcoin rewards for creators',
    category: 'Bitcoin Social',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.28,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-linkedin',
    name: 'b/LinkedIn',
    fullName: 'Bitcoin LinkedIn',
    ticker: '$bLinkedIn',
    icon: 'Li',
    color: '#0077B5',
    description: 'Professional networking with Bitcoin payments for services',
    category: 'Bitcoin Social',
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
    id: 'bitcoin-tiktok',
    name: 'b/TikTok',
    fullName: 'Bitcoin TikTok',
    ticker: '$bTikTok',
    icon: 'Tk',
    color: '#FF0050',
    description: 'Short-form video platform with Bitcoin creator rewards',
    category: 'Bitcoin Social',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.22,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-snapchat',
    name: 'b/Snapchat',
    fullName: 'Bitcoin Snapchat',
    ticker: '$bSnapchat',
    icon: 'Sc',
    color: '#FFFC00',
    description: 'Ephemeral messaging with Bitcoin payments for premium features',
    category: 'Bitcoin Social',
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
    id: 'bitcoin-reddit',
    name: 'b/Reddit',
    fullName: 'Bitcoin Reddit',
    ticker: '$bReddit',
    icon: 'Rd',
    color: '#FF4500',
    description: 'Community platform with Bitcoin tips and premium subscriptions',
    category: 'Bitcoin Social',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.26,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-discord',
    name: 'b/Discord',
    fullName: 'Bitcoin Discord',
    ticker: '$bDiscord',
    icon: 'Dc',
    color: '#5865F2',
    description: 'Gaming and community chat with Bitcoin server subscriptions',
    category: 'Bitcoin Social',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.19,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-whatsapp',
    name: 'b/WhatsApp',
    fullName: 'Bitcoin WhatsApp',
    ticker: '$bWhatsApp',
    icon: 'Wa',
    color: '#25D366',
    description: 'Encrypted messaging with Bitcoin payments and transfers',
    category: 'Bitcoin Communication',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.31,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-telegram',
    name: 'b/Telegram',
    fullName: 'Bitcoin Telegram',
    ticker: '$bTelegram',
    icon: 'Tg',
    color: '#0088CC',
    description: 'Secure messaging with Bitcoin bots and micropayments',
    category: 'Bitcoin Communication',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.24,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Media & Entertainment bApps
  {
    id: 'bitcoin-netflix',
    name: 'b/Netflix',
    fullName: 'Bitcoin Netflix',
    ticker: '$bNetflix',
    icon: 'Nf',
    color: '#E50914',
    description: 'Streaming platform with Bitcoin payments and creator rewards',
    category: 'Bitcoin Media',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.45,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-spotify',
    name: 'b/Spotify',
    fullName: 'Bitcoin Spotify',
    ticker: '$bSpotify',
    icon: 'Sp',
    color: '#1DB954',
    description: 'Music streaming with Bitcoin artist payments and fan tips',
    category: 'Bitcoin Media',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.33,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-youtube',
    name: 'b/YouTube',
    fullName: 'Bitcoin YouTube',
    ticker: '$bYouTube',
    icon: 'Yt',
    color: '#FF0000',
    description: 'Video platform with Bitcoin monetization and super chats',
    category: 'Bitcoin Media',
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
    id: 'bitcoin-twitch',
    name: 'b/Twitch',
    fullName: 'Bitcoin Twitch',
    ticker: '$bTwitch',
    icon: 'Tw',
    color: '#9146FF',
    description: 'Live streaming with Bitcoin donations and subscriptions',
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
    id: 'bitcoin-podcast',
    name: 'b/Podcast',
    fullName: 'Bitcoin Podcast',
    ticker: '$bPodcast',
    icon: 'Pc',
    color: '#7C3AED',
    description: 'Podcast platform with Bitcoin creator monetization',
    category: 'Bitcoin Media',
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
    id: 'bitcoin-audible',
    name: 'b/Audible',
    fullName: 'Bitcoin Audible',
    ticker: '$bAudible',
    icon: 'Au',
    color: '#FF9500',
    description: 'Audiobook platform with Bitcoin payments and rewards',
    category: 'Bitcoin Library',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.27,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-kindle',
    name: 'b/Kindle',
    fullName: 'Bitcoin Kindle',
    ticker: '$bKindle',
    icon: 'Kd',
    color: '#232F3E',
    description: 'E-book platform with Bitcoin author royalties',
    category: 'Bitcoin Library',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.23,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Office & Productivity bApps
  {
    id: 'bitcoin-notepad',
    name: 'b/Notepad',
    fullName: 'Bitcoin Notepad',
    ticker: '$bNotepad',
    icon: 'Np',
    color: '#FFD700',
    description: 'Simple text editor with Bitcoin cloud sync',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.05,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-word',
    name: 'b/Word',
    fullName: 'Bitcoin Word',
    ticker: '$bWord',
    icon: 'Wd',
    color: '#2B579A',
    description: 'Document processor with Bitcoin collaboration features',
    category: 'Bitcoin Office',
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
    id: 'bitcoin-powerpoint',
    name: 'b/PowerPoint',
    fullName: 'Bitcoin PowerPoint',
    ticker: '$bPowerPoint',
    icon: 'Pp',
    color: '#B7472A',
    description: 'Presentation software with Bitcoin sharing rewards',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.28,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-photoshop',
    name: 'b/Photoshop',
    fullName: 'Bitcoin Photoshop',
    ticker: '$bPhotoshop',
    icon: 'Ps',
    color: '#31A8FF',
    description: 'Image editing with Bitcoin marketplace for assets',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.52,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-figma',
    name: 'b/Figma',
    fullName: 'Bitcoin Figma',
    ticker: '$bFigma',
    icon: 'Fg',
    color: '#F24E1E',
    description: 'Design collaboration with Bitcoin payments for templates',
    category: 'Bitcoin Creative',
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
    id: 'bitcoin-zoom',
    name: 'b/Zoom',
    fullName: 'Bitcoin Zoom',
    ticker: '$bZoom',
    icon: 'Zm',
    color: '#2D8CFF',
    description: 'Video conferencing with Bitcoin payments for premium features',
    category: 'Bitcoin Communication',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.36,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-notion',
    name: 'b/Notion',
    fullName: 'Bitcoin Notion',
    ticker: '$bNotion',
    icon: 'Nt',
    color: '#000000',
    description: 'All-in-one workspace with Bitcoin team subscriptions',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.44,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Gaming bApps
  {
    id: 'bitcoin-minecraft',
    name: 'b/Minecraft',
    fullName: 'Bitcoin Minecraft',
    ticker: '$bMinecraft',
    icon: 'Mc',
    color: '#00AA00',
    description: 'Block building game with Bitcoin marketplace for creations',
    category: 'Bitcoin Games',
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
    id: 'bitcoin-fortnite',
    name: 'b/Fortnite',
    fullName: 'Bitcoin Fortnite',
    ticker: '$bFortnite',
    icon: 'Ft',
    color: '#00B2FF',
    description: 'Battle royale with Bitcoin rewards and cosmetic purchases',
    category: 'Bitcoin Games',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.39,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-chess',
    name: 'b/Chess',
    fullName: 'Bitcoin Chess',
    ticker: '$bChess',
    icon: 'Ch',
    color: '#8B4513',
    description: 'Chess platform with Bitcoin tournament prizes and lessons',
    category: 'Bitcoin Games',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.16,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-poker',
    name: 'b/Poker',
    fullName: 'Bitcoin Poker',
    ticker: '$bPoker',
    icon: 'Pk',
    color: '#FF0000',
    description: 'Online poker with Bitcoin buy-ins and winnings',
    category: 'Bitcoin Games',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.31,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-solitaire',
    name: 'b/Solitaire',
    fullName: 'Bitcoin Solitaire',
    ticker: '$bSolitaire',
    icon: 'So',
    color: '#008000',
    description: 'Classic card game with Bitcoin rewards for completing games',
    category: 'Bitcoin Games',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.08,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-candycrush',
    name: 'b/Candy Crush',
    fullName: 'Bitcoin Candy Crush',
    ticker: '$bCandyCrush',
    icon: 'Cc',
    color: '#FF69B4',
    description: 'Match-3 puzzle game with Bitcoin purchases and rewards',
    category: 'Bitcoin Games',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.12,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-wordle',
    name: 'b/Wordle',
    fullName: 'Bitcoin Wordle',
    ticker: '$bWordle',
    icon: 'Wr',
    color: '#538D4E',
    description: 'Daily word puzzle with Bitcoin rewards for streaks',
    category: 'Bitcoin Games',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.09,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Utility & Tool bApps
  {
    id: 'bitcoin-torrent',
    name: 'b/Torrent',
    fullName: 'Bitcoin Torrent',
    ticker: '$bTorrent',
    icon: 'Bt',
    color: '#FF6600',
    description: 'P2P file sharing with Bitcoin rewards for seeders',
    category: 'Bitcoin Utilities',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.19,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-vpn',
    name: 'b/VPN',
    fullName: 'Bitcoin VPN',
    ticker: '$bVPN',
    icon: 'Vp',
    color: '#4CAF50',
    description: 'Virtual private network with Bitcoin payments and node rewards',
    category: 'Bitcoin Utilities',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.25,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-password',
    name: 'b/Password Manager',
    fullName: 'Bitcoin Password Manager',
    ticker: '$bPassword',
    icon: 'Pm',
    color: '#2196F3',
    description: 'Secure password storage with Bitcoin encrypted backups',
    category: 'Bitcoin Utilities',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.22,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-maps',
    name: 'b/Maps',
    fullName: 'Bitcoin Maps',
    ticker: '$bMaps',
    icon: 'Mp',
    color: '#34A853',
    description: 'Navigation app with Bitcoin rewards for traffic data',
    category: 'Bitcoin Utilities',
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
    id: 'bitcoin-weather',
    name: 'b/Weather Pro',
    fullName: 'Bitcoin Weather Pro',
    ticker: '$bWeather',
    icon: 'Wp',
    color: '#87CEEB',
    description: 'Weather forecasting with Bitcoin rewards for data contribution',
    category: 'Bitcoin Utilities',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.11,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-translator',
    name: 'b/Translator',
    fullName: 'Bitcoin Translator',
    ticker: '$bTranslator',
    icon: 'Tr',
    color: '#FF9800',
    description: 'Language translation with Bitcoin payments for human translators',
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
    id: 'bitcoin-timer',
    name: 'b/Timer',
    fullName: 'Bitcoin Timer',
    ticker: '$bTimer',
    icon: 'Tm',
    color: '#9C27B0',
    description: 'Productivity timer with Bitcoin rewards for focused work sessions',
    category: 'Bitcoin Utilities',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.07,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Finance & Business bApps
  {
    id: 'bitcoin-paypal',
    name: 'b/PayPal',
    fullName: 'Bitcoin PayPal',
    ticker: '$bPayPal',
    icon: 'Pp',
    color: '#003087',
    description: 'Digital payments platform with native Bitcoin integration',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.67,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-venmo',
    name: 'b/Venmo',
    fullName: 'Bitcoin Venmo',
    ticker: '$bVenmo',
    icon: 'Vm',
    color: '#3D95CE',
    description: 'Social payments app with Bitcoin transfers and tips',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.34,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-robinhood',
    name: 'b/Robinhood',
    fullName: 'Bitcoin Robinhood',
    ticker: '$bRobinhood',
    icon: 'Rh',
    color: '#00C805',
    description: 'Investment platform with Bitcoin-first trading features',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.43,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-quickbooks',
    name: 'b/QuickBooks',
    fullName: 'Bitcoin QuickBooks',
    ticker: '$bQuickBooks',
    icon: 'Qb',
    color: '#2CA01C',
    description: 'Accounting software with Bitcoin transaction tracking',
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
    id: 'bitcoin-salesforce',
    name: 'b/Salesforce',
    fullName: 'Bitcoin Salesforce',
    ticker: '$bSalesforce',
    icon: 'Sf',
    color: '#00A1E0',
    description: 'CRM platform with Bitcoin payment processing integration',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.59,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-zendesk',
    name: 'b/Zendesk',
    fullName: 'Bitcoin Zendesk',
    ticker: '$bZendesk',
    icon: 'Zd',
    color: '#03363D',
    description: 'Customer service platform with Bitcoin reward programs',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.29,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Creative & Design bApps
  {
    id: 'bitcoin-canva',
    name: 'b/Canva',
    fullName: 'Bitcoin Canva',
    ticker: '$bCanva',
    icon: 'Cv',
    color: '#00C4CC',
    description: 'Graphic design platform with Bitcoin marketplace for templates',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.26,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-sketch',
    name: 'b/Sketch',
    fullName: 'Bitcoin Sketch',
    ticker: '$bSketch',
    icon: 'Sk',
    color: '#FDB300',
    description: 'Digital design toolkit with Bitcoin asset marketplace',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.33,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-blender',
    name: 'b/Blender',
    fullName: 'Bitcoin Blender',
    ticker: '$bBlender',
    icon: 'Bl',
    color: '#F5792A',
    description: '3D creation suite with Bitcoin rendering marketplace',
    category: 'Bitcoin Creative',
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
    id: 'bitcoin-garageband',
    name: 'b/GarageBand',
    fullName: 'Bitcoin GarageBand',
    ticker: '$bGarageBand',
    icon: 'Gb',
    color: '#FF6B00',
    description: 'Music creation app with Bitcoin collaboration features',
    category: 'Bitcoin Creative',
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
    id: 'bitcoin-logicpro',
    name: 'b/Logic Pro',
    fullName: 'Bitcoin Logic Pro',
    ticker: '$bLogicPro',
    icon: 'Lp',
    color: '#000000',
    description: 'Professional music production with Bitcoin sample marketplace',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.55,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Additional Utility Apps
  {
    id: 'bitcoin-dropbox',
    name: 'b/Dropbox',
    fullName: 'Bitcoin Dropbox',
    ticker: '$bDropbox',
    icon: 'Db',
    color: '#0061FF',
    description: 'Cloud storage with Bitcoin payments and file sharing rewards',
    category: 'Bitcoin Storage',
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
    id: 'bitcoin-uber',
    name: 'b/Uber',
    fullName: 'Bitcoin Uber',
    ticker: '$bUber',
    icon: 'Ub',
    color: '#000000',
    description: 'Ride sharing with Bitcoin payments and driver rewards',
    category: 'Bitcoin Business',
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
    id: 'bitcoin-airbnb',
    name: 'b/Airbnb',
    fullName: 'Bitcoin Airbnb',
    ticker: '$bAirbnb',
    icon: 'Ab',
    color: '#FF5A5F',
    description: 'Home sharing platform with Bitcoin payments and host rewards',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.47,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-duolingo',
    name: 'b/Duolingo',
    fullName: 'Bitcoin Duolingo',
    ticker: '$bDuolingo',
    icon: 'Du',
    color: '#58CC02',
    description: 'Language learning with Bitcoin rewards for progress',
    category: 'Bitcoin Education',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.17,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-khan-academy',
    name: 'b/Khan Academy',
    fullName: 'Bitcoin Khan Academy',
    ticker: '$bKhanAcademy',
    icon: 'Ka',
    color: '#14BF96',
    description: 'Free education platform with Bitcoin rewards for learning',
    category: 'Bitcoin Education',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.13,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Additional Creative b/Apps Wave 2
  {
    id: 'bitcoin-slack',
    name: 'b/Slack',
    fullName: 'Bitcoin Slack',
    ticker: '$bSlack',
    icon: 'Sl',
    color: '#4A154B',
    description: 'Team communication with Bitcoin rewards for productivity',
    category: 'Bitcoin Communication',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.39,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-github',
    name: 'b/GitHub',
    fullName: 'Bitcoin GitHub',
    ticker: '$bGitHub',
    icon: 'Gh',
    color: '#24292e',
    description: 'Code collaboration with Bitcoin bounties for contributions',
    category: 'Bitcoin Infrastructure',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.44,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-trello',
    name: 'b/Trello',
    fullName: 'Bitcoin Trello',
    ticker: '$bTrello',
    icon: 'Tr',
    color: '#0079BF',
    description: 'Project management with Bitcoin milestone rewards',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.23,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-shopify',
    name: 'b/Shopify',
    fullName: 'Bitcoin Shopify',
    ticker: '$bShopify',
    icon: 'Sh',
    color: '#95BF47',
    description: 'E-commerce platform with native Bitcoin payments',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.58,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-amazon',
    name: 'b/Amazon',
    fullName: 'Bitcoin Amazon',
    ticker: '$bAmazon',
    icon: 'Am',
    color: '#FF9900',
    description: 'Decentralized marketplace with Bitcoin transactions',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.73,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-etsy',
    name: 'b/Etsy',
    fullName: 'Bitcoin Etsy',
    ticker: '$bEtsy',
    icon: 'Et',
    color: '#F16521',
    description: 'Handmade marketplace with Bitcoin creator payments',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.31,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-twitch-prime',
    name: 'b/Prime Gaming',
    fullName: 'Bitcoin Prime Gaming',
    ticker: '$bPrimeGaming',
    icon: 'Pg',
    color: '#9146FF',
    description: 'Gaming subscription service with Bitcoin rewards',
    category: 'Bitcoin Games',
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
    id: 'bitcoin-steam',
    name: 'b/Steam',
    fullName: 'Bitcoin Steam',
    ticker: '$bSteam',
    icon: 'St',
    color: '#1B2838',
    description: 'Gaming platform with Bitcoin purchases and trading',
    category: 'Bitcoin Games',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.46,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-epic-games',
    name: 'b/Epic Games',
    fullName: 'Bitcoin Epic Games',
    ticker: '$bEpicGames',
    icon: 'Eg',
    color: '#313131',
    description: 'Game store with Bitcoin transactions and NFT trading',
    category: 'Bitcoin Games',
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
    id: 'bitcoin-medium',
    name: 'b/Medium',
    fullName: 'Bitcoin Medium',
    ticker: '$bMedium',
    icon: 'Md',
    color: '#00AB6C',
    description: 'Publishing platform with Bitcoin reader rewards',
    category: 'Bitcoin Media',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.27,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-substack',
    name: 'b/Substack',
    fullName: 'Bitcoin Substack',
    ticker: '$bSubstack',
    icon: 'Sb',
    color: '#FF6719',
    description: 'Newsletter platform with Bitcoin subscription payments',
    category: 'Bitcoin Media',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.24,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-patreon',
    name: 'b/Patreon',
    fullName: 'Bitcoin Patreon',
    ticker: '$bPatreon',
    icon: 'Pt',
    color: '#F96854',
    description: 'Creator support platform with Bitcoin subscriptions',
    category: 'Bitcoin Media',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.33,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-onlyfans',
    name: 'b/CreatorFans',
    fullName: 'Bitcoin CreatorFans',
    ticker: '$bCreatorFans',
    icon: 'Cf',
    color: '#00AFF0',
    description: 'Creator content platform with Bitcoin micropayments',
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
    id: 'bitcoin-coursera',
    name: 'b/Coursera',
    fullName: 'Bitcoin Coursera',
    ticker: '$bCoursera',
    icon: 'Co',
    color: '#0056D3',
    description: 'Online learning with Bitcoin course payments and certificates',
    category: 'Bitcoin Education',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.28,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-udemy',
    name: 'b/Udemy',
    fullName: 'Bitcoin Udemy',
    ticker: '$bUdemy',
    icon: 'Ud',
    color: '#EC5252',
    description: 'Skill learning platform with Bitcoin instructor payouts',
    category: 'Bitcoin Education',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.26,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-skillshare',
    name: 'b/Skillshare',
    fullName: 'Bitcoin Skillshare',
    ticker: '$bSkillshare',
    icon: 'Ss',
    color: '#00FF88',
    description: 'Creative learning with Bitcoin rewards for teaching',
    category: 'Bitcoin Education',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.22,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-fitness',
    name: 'b/MyFitnessPal',
    fullName: 'Bitcoin MyFitnessPal',
    ticker: '$bFitnessPal',
    icon: 'Fp',
    color: '#0072CE',
    description: 'Fitness tracking with Bitcoin rewards for health goals',
    category: 'Bitcoin Entertainment',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.19,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-strava',
    name: 'b/Strava',
    fullName: 'Bitcoin Strava',
    ticker: '$bStrava',
    icon: 'St',
    color: '#FC4C02',
    description: 'Athletic tracking with Bitcoin rewards for achievements',
    category: 'Bitcoin Entertainment',
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
    id: 'bitcoin-peloton',
    name: 'b/Peloton',
    fullName: 'Bitcoin Peloton',
    ticker: '$bPeloton',
    icon: 'Pe',
    color: '#000000',
    description: 'Interactive fitness with Bitcoin subscription and challenges',
    category: 'Bitcoin Entertainment',
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
    id: 'bitcoin-headspace',
    name: 'b/Headspace',
    fullName: 'Bitcoin Headspace',
    ticker: '$bHeadspace',
    icon: 'Hs',
    color: '#FF6B35',
    description: 'Meditation app with Bitcoin rewards for mindfulness streaks',
    category: 'Bitcoin Entertainment',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.16,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-calm',
    name: 'b/Calm',
    fullName: 'Bitcoin Calm',
    ticker: '$bCalm',
    icon: 'Ca',
    color: '#2F80ED',
    description: 'Sleep and relaxation app with Bitcoin wellness rewards',
    category: 'Bitcoin Entertainment',
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
    id: 'bitcoin-doordash',
    name: 'b/DoorDash',
    fullName: 'Bitcoin DoorDash',
    ticker: '$bDoorDash',
    icon: 'Dd',
    color: '#FF3008',
    description: 'Food delivery with Bitcoin payments and driver rewards',
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
    id: 'bitcoin-grubhub',
    name: 'b/Grubhub',
    fullName: 'Bitcoin Grubhub',
    ticker: '$bGrubhub',
    icon: 'Gb',
    color: '#F63440',
    description: 'Restaurant delivery with Bitcoin loyalty rewards',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.34,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-ubereats',
    name: 'b/Uber Eats',
    fullName: 'Bitcoin Uber Eats',
    ticker: '$bUberEats',
    icon: 'Ue',
    color: '#000000',
    description: 'Food delivery with Bitcoin instant payments',
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
    id: 'bitcoin-yelp',
    name: 'b/Yelp',
    fullName: 'Bitcoin Yelp',
    ticker: '$bYelp',
    icon: 'Ye',
    color: '#D32323',
    description: 'Business reviews with Bitcoin rewards for quality reviews',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.25,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-tripadvisor',
    name: 'b/TripAdvisor',
    fullName: 'Bitcoin TripAdvisor',
    ticker: '$bTripAdvisor',
    icon: 'Ta',
    color: '#00AA6C',
    description: 'Travel reviews with Bitcoin rewards for helpful content',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.27,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-booking',
    name: 'b/Booking.com',
    fullName: 'Bitcoin Booking.com',
    ticker: '$bBooking',
    icon: 'Bo',
    color: '#003580',
    description: 'Hotel booking with Bitcoin payments and travel rewards',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.49,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-expedia',
    name: 'b/Expedia',
    fullName: 'Bitcoin Expedia',
    ticker: '$bExpedia',
    icon: 'Ex',
    color: '#FCC72C',
    description: 'Travel booking platform with Bitcoin payment integration',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.45,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-kayak',
    name: 'b/Kayak',
    fullName: 'Bitcoin Kayak',
    ticker: '$bKayak',
    icon: 'Ka',
    color: '#FF690F',
    description: 'Travel search with Bitcoin price comparisons',
    category: 'Bitcoin Business',
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
    id: 'bitcoin-ebay',
    name: 'b/eBay',
    fullName: 'Bitcoin eBay',
    ticker: '$beBay',
    icon: 'Eb',
    color: '#E53238',
    description: 'Auction marketplace with Bitcoin escrow and payments',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.52,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-mercado',
    name: 'b/MercadoLibre',
    fullName: 'Bitcoin MercadoLibre',
    ticker: '$bMercado',
    icon: 'Ml',
    color: '#FFE600',
    description: 'Latin American marketplace with Bitcoin integration',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.36,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-alibaba',
    name: 'b/Alibaba',
    fullName: 'Bitcoin Alibaba',
    ticker: '$bAlibaba',
    icon: 'Al',
    color: '#FF6A00',
    description: 'B2B marketplace with Bitcoin wholesale transactions',
    category: 'Bitcoin Business',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.61,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-wechat',
    name: 'b/WeChat',
    fullName: 'Bitcoin WeChat',
    ticker: '$bWeChat',
    icon: 'Wc',
    color: '#1AAD19',
    description: 'Messaging super-app with Bitcoin mini-program ecosystem',
    category: 'Bitcoin Communication',
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
    id: 'bitcoin-line',
    name: 'b/LINE',
    fullName: 'Bitcoin LINE',
    ticker: '$bLINE',
    icon: 'Li',
    color: '#00C300',
    description: 'Asian messaging app with Bitcoin stickers and payments',
    category: 'Bitcoin Communication',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.26,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-viber',
    name: 'b/Viber',
    fullName: 'Bitcoin Viber',
    ticker: '$bViber',
    icon: 'Vi',
    color: '#665CAC',
    description: 'Messaging app with Bitcoin international transfers',
    category: 'Bitcoin Communication',
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
    id: 'bitcoin-signal',
    name: 'b/Signal',
    fullName: 'Bitcoin Signal',
    ticker: '$bSignal',
    icon: 'Si',
    color: '#3A76F0',
    description: 'Private messaging with Bitcoin anonymous payments',
    category: 'Bitcoin Communication',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.31,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-teams',
    name: 'b/Teams',
    fullName: 'Bitcoin Teams',
    ticker: '$bTeams',
    icon: 'Te',
    color: '#464EB8',
    description: 'Business communication with Bitcoin meeting rewards',
    category: 'Bitcoin Communication',
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
    id: 'bitcoin-webex',
    name: 'b/Webex',
    fullName: 'Bitcoin Webex',
    ticker: '$bWebex',
    icon: 'We',
    color: '#00BCF2',
    description: 'Enterprise video conferencing with Bitcoin usage credits',
    category: 'Bitcoin Communication',
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
    id: 'bitcoin-jira',
    name: 'b/Jira',
    fullName: 'Bitcoin Jira',
    ticker: '$bJira',
    icon: 'Ji',
    color: '#0052CC',
    description: 'Project tracking with Bitcoin bounties for bug fixes',
    category: 'Bitcoin Office',
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
    id: 'bitcoin-confluence',
    name: 'b/Confluence',
    fullName: 'Bitcoin Confluence',
    ticker: '$bConfluence',
    icon: 'Cf',
    color: '#172B4D',
    description: 'Team documentation with Bitcoin knowledge rewards',
    category: 'Bitcoin Office',
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
    id: 'bitcoin-monday',
    name: 'b/Monday.com',
    fullName: 'Bitcoin Monday.com',
    ticker: '$bMonday',
    icon: 'Mo',
    color: '#FF3D57',
    description: 'Work management with Bitcoin team productivity rewards',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.34,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-asana',
    name: 'b/Asana',
    fullName: 'Bitcoin Asana',
    ticker: '$bAsana',
    icon: 'As',
    color: '#F06A6A',
    description: 'Task management with Bitcoin goal completion bonuses',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.28,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-airtable',
    name: 'b/Airtable',
    fullName: 'Bitcoin Airtable',
    ticker: '$bAirtable',
    icon: 'At',
    color: '#18BFFF',
    description: 'Database platform with Bitcoin data contribution rewards',
    category: 'Bitcoin Office',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.31,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-miro',
    name: 'b/Miro',
    fullName: 'Bitcoin Miro',
    ticker: '$bMiro',
    icon: 'Mi',
    color: '#FFD02F',
    description: 'Collaborative whiteboard with Bitcoin template marketplace',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.26,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-unity',
    name: 'b/Unity',
    fullName: 'Bitcoin Unity',
    ticker: '$bUnity',
    icon: 'Un',
    color: '#000000',
    description: 'Game engine with Bitcoin asset store and NFT integration',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.55,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-unreal',
    name: 'b/Unreal Engine',
    fullName: 'Bitcoin Unreal Engine',
    ticker: '$bUnreal',
    icon: 'Ur',
    color: '#313131',
    description: 'Game development with Bitcoin marketplace for assets',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.51,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-aftereffects',
    name: 'b/After Effects',
    fullName: 'Bitcoin After Effects',
    ticker: '$bAfterEffects',
    icon: 'Ae',
    color: '#9999FF',
    description: 'Motion graphics with Bitcoin template and plugin marketplace',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.47,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-premiere',
    name: 'b/Premiere Pro',
    fullName: 'Bitcoin Premiere Pro',
    ticker: '$bPremiere',
    icon: 'Pr',
    color: '#9999FF',
    description: 'Video editing with Bitcoin collaboration and asset sharing',
    category: 'Bitcoin Creative',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.44,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Financial & Payment bApps
  {
    id: 'bitcoin-stripe',
    name: 'b/Stripe',
    fullName: 'Bitcoin Stripe',
    ticker: '$bStripe',
    icon: 'St',
    color: '#635BFF',
    description: 'Payment processing with native Bitcoin integration',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.68,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-square',
    name: 'b/Square',
    fullName: 'Bitcoin Square',
    ticker: '$bSquare',
    icon: 'Sq',
    color: '#3E4348',
    description: 'Point of sale system with Bitcoin payments',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.54,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-coinbase',
    name: 'b/Coinbase',
    fullName: 'Bitcoin Coinbase',
    ticker: '$bCoinbase',
    icon: 'Cb',
    color: '#0052FF',
    description: 'Cryptocurrency exchange and wallet services',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.72,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-cash-app',
    name: 'b/Cash App',
    fullName: 'Bitcoin Cash App',
    ticker: '$bCashApp',
    icon: 'Ca',
    color: '#00D632',
    description: 'Mobile payment app with Bitcoin features',
    category: 'Bitcoin Finance',
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
    id: 'bitcoin-zelle',
    name: 'b/Zelle',
    fullName: 'Bitcoin Zelle',
    ticker: '$bZelle',
    icon: 'Ze',
    color: '#6C1C99',
    description: 'Bank-to-bank transfers with Bitcoin integration',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.28,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-wise',
    name: 'b/Wise',
    fullName: 'Bitcoin Wise',
    ticker: '$bWise',
    icon: 'Wi',
    color: '#37517E',
    description: 'International money transfers with Bitcoin',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.33,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-klarna',
    name: 'b/Klarna',
    fullName: 'Bitcoin Klarna',
    ticker: '$bKlarna',
    icon: 'Kl',
    color: '#FFB3C7',
    description: 'Buy now pay later with Bitcoin options',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.31,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-afterpay',
    name: 'b/Afterpay',
    fullName: 'Bitcoin Afterpay',
    ticker: '$bAfterpay',
    icon: 'Ap',
    color: '#B2FCE4',
    description: 'Installment payments with Bitcoin rewards',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.25,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-plaid',
    name: 'b/Plaid',
    fullName: 'Bitcoin Plaid',
    ticker: '$bPlaid',
    icon: 'Pl',
    color: '#00D4AA',
    description: 'Financial data connectivity with Bitcoin analytics',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.46,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-mint',
    name: 'b/Mint',
    fullName: 'Bitcoin Mint',
    ticker: '$bMint',
    icon: 'Mi',
    color: '#00AB5B',
    description: 'Personal finance tracking with Bitcoin portfolio',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.22,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-ynab',
    name: 'b/YNAB',
    fullName: 'Bitcoin YNAB',
    ticker: '$bYNAB',
    icon: 'Yn',
    color: '#4E6B99',
    description: 'You Need A Budget with Bitcoin expense tracking',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.27,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-credit-karma',
    name: 'b/Credit Karma',
    fullName: 'Bitcoin Credit Karma',
    ticker: '$bCreditKarma',
    icon: 'Ck',
    color: '#7AC142',
    description: 'Credit monitoring with Bitcoin credit building',
    category: 'Bitcoin Finance',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.19,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Bitcoin Library bApps
  {
    id: 'bitcoin-goodreads',
    name: 'b/Goodreads',
    fullName: 'Bitcoin Goodreads',
    ticker: '$bGoodreads',
    icon: 'Gr',
    color: '#663A00',
    description: 'Book discovery and reviews with Bitcoin author tips',
    category: 'Bitcoin Library',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.16,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-scribd',
    name: 'b/Scribd',
    fullName: 'Bitcoin Scribd',
    ticker: '$bScribd',
    icon: 'Sc',
    color: '#1E7BBE',
    description: 'Digital library subscription with Bitcoin payments',
    category: 'Bitcoin Library',
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
    id: 'bitcoin-libby',
    name: 'b/Libby',
    fullName: 'Bitcoin Libby',
    ticker: '$bLibby',
    icon: 'Lb',
    color: '#0066CC',
    description: 'Library app with Bitcoin rewards for reading',
    category: 'Bitcoin Library',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.12,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-overdrive',
    name: 'b/OverDrive',
    fullName: 'Bitcoin OverDrive',
    ticker: '$bOverDrive',
    icon: 'Od',
    color: '#FF6900',
    description: 'Digital library platform with Bitcoin integration',
    category: 'Bitcoin Library',
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
    id: 'bitcoin-kobo',
    name: 'b/Kobo',
    fullName: 'Bitcoin Kobo',
    ticker: '$bKobo',
    icon: 'Ko',
    color: '#68BC71',
    description: 'E-reader platform with Bitcoin book purchases',
    category: 'Bitcoin Library',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.19,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-wattpad',
    name: 'b/Wattpad',
    fullName: 'Bitcoin Wattpad',
    ticker: '$bWattpad',
    icon: 'Wp',
    color: '#FF500A',
    description: 'Story sharing platform with Bitcoin writer rewards',
    category: 'Bitcoin Library',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.14,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Bitcoin Money bApps
  {
    id: 'bitcoin-acorns',
    name: 'b/Acorns',
    fullName: 'Bitcoin Acorns',
    ticker: '$bAcorns',
    icon: 'Ac',
    color: '#7DBB00',
    description: 'Micro-investing with Bitcoin portfolio options',
    category: 'Bitcoin Money',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.23,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-stash',
    name: 'b/Stash',
    fullName: 'Bitcoin Stash',
    ticker: '$bStash',
    icon: 'St',
    color: '#002A5C',
    description: 'Investment app with Bitcoin education and rewards',
    category: 'Bitcoin Money',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.26,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-webull',
    name: 'b/Webull',
    fullName: 'Bitcoin Webull',
    ticker: '$bWebull',
    icon: 'Wb',
    color: '#1B1C1E',
    description: 'Commission-free trading with Bitcoin investments',
    category: 'Bitcoin Money',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.31,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-etrade',
    name: 'b/E*TRADE',
    fullName: 'Bitcoin E*TRADE',
    ticker: '$bETRADE',
    icon: 'Et',
    color: '#5A2D82',
    description: 'Online brokerage with Bitcoin trading features',
    category: 'Bitcoin Money',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.48,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  
  // Bitcoin Art bApps
  {
    id: 'bitcoin-opensea',
    name: 'b/OpenSea',
    fullName: 'Bitcoin OpenSea',
    ticker: '$bOpenSea',
    icon: 'Os',
    color: '#2081E2',
    description: 'NFT marketplace with Bitcoin transactions',
    category: 'Bitcoin Art',
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
    id: 'bitcoin-artstation',
    name: 'b/ArtStation',
    fullName: 'Bitcoin ArtStation',
    ticker: '$bArtStation',
    icon: 'As',
    color: '#13AFF0',
    description: 'Digital art portfolio with Bitcoin commissions',
    category: 'Bitcoin Art',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.28,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  },
  {
    id: 'bitcoin-deviantart',
    name: 'b/DeviantArt',
    fullName: 'Bitcoin DeviantArt',
    ticker: '$bDeviantArt',
    icon: 'Da',
    color: '#05CC47',
    description: 'Art community with Bitcoin artist support',
    category: 'Bitcoin Art',
    status: 'coming' as const,
    version: null,
    size: null,
    lastUpdated: null,
    price: 0.19,
    change24h: 0,
    marketCap: '$TBA',
    volume24h: '$0'
  }
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
  'Bitcoin System',
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

  // Function to get dynamic grid columns based on number of featured apps  
  const getFeaturedGridCols = (featuredAppsCount: number) => {
    // Only shrink the container when there are fewer than 7 apps
    if (featuredAppsCount <= 1) return 'grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'
    if (featuredAppsCount <= 2) return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
    if (featuredAppsCount <= 3) return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'
    if (featuredAppsCount <= 4) return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'
    if (featuredAppsCount <= 5) return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5'
    if (featuredAppsCount <= 6) return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6'
    return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7'
  }
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main container with sidebar and content */}
      <div className="flex flex-1">
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
        
        <main className="flex-1 flex flex-col w-full max-w-full overflow-x-hidden">
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
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-3 lg:p-8 w-full max-w-full">
          {/* Hero Section - VIVID RAINBOW LIKE SCREENSHOT! */}
          <div className="mb-4 lg:mb-6 relative overflow-hidden rounded-xl bg-gradient-to-r from-red-600 from-0% via-orange-500 via-14% via-yellow-500 via-28% via-green-500 via-42% via-cyan-500 via-57% via-blue-600 via-71% via-purple-600 via-85% to-magenta-600 to-100% p-[2px] shadow-lg">
            <div className="relative bg-black rounded-xl p-4 sm:p-6 lg:p-12 text-center border border-white/10 shadow-inner">
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-thin mb-2 leading-tight tracking-tight break-words">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 via-green-400 via-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Think ₿ifferent: b
                </span>
                <span className="text-white">Apps</span>
              </h1>
              <div className="flex justify-center gap-4 text-xs font-light text-gray-400">
                <span>{filteredApps.filter(app => app.status === 'installed').length} apps</span>
                <span>•</span>
                <span>{filteredApps.filter(app => app.isSuite).length} featured</span>
              </div>
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
                  <div className={`grid ${getFeaturedGridCols(filteredApps.filter(app => app.isSuite).length)} gap-2 sm:gap-3 lg:gap-4 w-full max-w-full`}>
                    {/* Bitcoin Apps Suite Grid */}
                    {filteredApps.filter(app => app.isSuite).map((app) => (
                      <AppTile key={app.id} app={app} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Other Official Apps */}
              {filteredApps.filter(app => !app.isThirdParty && !app.isSuite && app.id !== 'ninjapunkgirls').length > 0 && (
                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-white mb-1">Other Bitcoin Apps</h2>
                    <p className="text-sm text-gray-400">Additional apps and services from Bitcoin Corp. LTD.</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-6 w-full max-w-full">
                    {filteredApps.filter(app => !app.isThirdParty && !app.isSuite && app.id !== 'ninjapunkgirls').map((app) => (
                      <AppTile key={app.id} app={app} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Block Dojo & Games Section */}
              <div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white mb-1">Ecosystem Partners</h2>
                  <p className="text-sm text-gray-400">Incubator programs and community games</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                  {/* BSV Association Link */}
                  <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] cursor-pointer group">
                    <a href="https://bsvassociation.org/" target="_blank" rel="noopener noreferrer" className="block">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#3B82F6] rounded-xl flex items-center justify-center mb-3">
                          <span className="text-white font-bold text-xl">⛩</span>
                        </div>
                        <h3 className="text-white font-medium text-sm mb-1 group-hover:text-[#0EA5E9] transition-colors">BSV Association</h3>
                        <p className="text-gray-400 text-xs">Global Standards</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Ninja Punk Girls - Smaller size */}
                  {filteredApps.filter(app => app.id === 'ninjapunkgirls').map((app) => (
                    <div key={app.id} className="transform scale-90">
                      <AppTile app={app} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Third Party Apps */}
              {filteredApps.filter(app => app.isThirdParty).length > 0 && (
                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-white mb-1">Third Party Apps</h2>
                    <p className="text-sm text-gray-400">Community-submitted applications</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-6 w-full max-w-full">
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
                      {/* Desktop layout - inline */}
                      <div className="hidden sm:flex items-center gap-2">
                        <h3 className="font-medium">{app.fullName}</h3>
                        {app.ticker && (
                          <span className="text-[#0094FF] text-sm font-mono" title={app.ticker}>{app.ticker.replace('$b', '$₿')}</span>
                        )}
                      </div>
                      
                      {/* Mobile layout - stacked */}
                      <div className="sm:hidden">
                        <h3 className="font-medium">{app.fullName}</h3>
                        {app.ticker && (
                          <div className="mt-1">
                            <span className="text-[#0094FF] text-sm font-mono" title={app.ticker}>{app.ticker.replace('$b', '$₿')}</span>
                          </div>
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
                            {/* Desktop layout - inline */}
                            <div className="hidden sm:flex items-center gap-2">
                              <h3 className="font-medium">{app.fullName}</h3>
                              {app.ticker && (
                                <span className="text-[#0094FF] text-sm font-mono" title={app.ticker}>{app.ticker.replace('$b', '$₿')}</span>
                              )}
                            </div>
                            
                            {/* Mobile layout - stacked */}
                            <div className="sm:hidden">
                              <h3 className="font-medium">{app.fullName}</h3>
                              {app.ticker && (
                                <div className="mt-1">
                                  <span className="text-[#0094FF] text-sm font-mono" title={app.ticker}>{app.ticker.replace('$b', '$₿')}</span>
                                </div>
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