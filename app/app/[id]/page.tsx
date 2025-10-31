'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Footer from '@/components/Footer'
import DownloadButton from '@/components/DownloadButton'

// This would normally come from a database/API
const getAppData = (id: string) => {
  const apps: Record<string, any> = {
    'bitcoin-writer': {
      id: 'bitcoin-writer',
      name: 'Bitcoin Writer',
      ticker: '$bWriter',
      displayTicker: '$₿Writer',
      icon: '/bitcoin-writer-logo.jpg',
      color: '#FF6B00',
      shortDescription: 'Write, encrypt, and store documents on Bitcoin',
      fullDescription: `Bitcoin Writer is a revolutionary word processing application that leverages the Bitcoin blockchain for document storage and encryption. Create, edit, and collaborate on documents with the peace of mind that your work is permanently stored on the world's most secure distributed ledger.

Key Features:
• Blockchain-based document storage - Your documents are immutable and censorship-resistant
• End-to-end encryption using Bitcoin cryptography
• Real-time collaboration with other Bitcoin Writer users
• Version control powered by blockchain timestamps
• Export to PDF, DOCX, and encrypted formats
• Smart contract integration for document signing and verification
• Decentralized backup across the Bitcoin network`,
      category: 'Bitcoin Office',
      developer: 'Bitcoin Office',
      version: '2.4.1',
      size: '142 MB',
      rating: 4.8,
      reviews: 1234,
      lastUpdated: '2024-12-10',
      releaseDate: '2024-01-15',
      url: 'https://bitcoin-writer.vercel.app',
      price: 0.42,
      change24h: 12.5,
      marketCap: '$2.4M',
      volume24h: '$142K',
      screenshots: [
        '/app-publicity-images/bwriter-publicity/bitcoin writer.png',
        '/app-publicity-images/bwriter-publicity/Bitcoin Writer Exchange.png',
        '/app-publicity-images/bwriter-publicity/bwriter token.png',
        '/app-publicity-images/bwriter-publicity/Create your writing offer.png',
        '/app-publicity-images/bwriter-publicity/find pro writers.png'
      ],
      features: [
        'Blockchain Storage',
        'End-to-End Encryption',
        'Real-time Collaboration',
        'Smart Contracts',
        'Version Control',
        'Multi-format Export'
      ],
      requirements: [
        'Bitcoin wallet required',
        'Minimum 100MB free space',
        'Internet connection for sync',
        'Compatible with all modern browsers'
      ],
      languages: ['English', 'Spanish', 'Chinese', 'Japanese', 'French', 'German'],
      inAppPurchases: true,
      tokenomics: {
        totalSupply: '10,000,000',
        circulating: '5,714,286',
        revenueShare: '30%',
        stakingAPY: '12%'
      }
    },
    'bitcoin-sheets': {
      id: 'bitcoin-sheets',
      name: 'Bitcoin Spreadsheets',
      ticker: '$bSheets',
      displayTicker: '$₿Sheets',
      icon: '/bitcoin-sheets-icon.png',
      color: '#3b82f6',
      shortDescription: 'Blockchain-based spreadsheet on Bitcoin',
      fullDescription: `Bitcoin Spreadsheets revolutionizes data management by bringing the power of blockchain to spreadsheet applications. Create financial models, track portfolios, and collaborate on data analysis with immutable audit trails and decentralized computation.

Key Features:
• Decentralized formula computation
• Immutable audit trails for compliance
• Real-time Bitcoin price feeds
• Smart contract integration for automated workflows
• Collaborative editing with blockchain-based permissions
• Export to CSV, XLSX, and on-chain formats
• DeFi integration for yield calculations`,
      category: 'Bitcoin Office',
      developer: 'Bitcoin Office',
      version: '1.8.3',
      size: '156 MB',
      rating: 4.7,
      reviews: 892,
      lastUpdated: '2024-11-28',
      releaseDate: '2024-02-01',
      url: 'https://bitcoin-spreadsheet.vercel.app',
      price: 0.28,
      change24h: 8.9,
      marketCap: '$1.2M',
      volume24h: '$67K',
      screenshots: [
        '/app-images/sheets-main.png',
        '/app-images/sheets-formula.png',
        '/app-images/sheets-chart.png'
      ],
      features: [
        'Blockchain Computation',
        'Audit Trails',
        'Live Price Feeds',
        'Smart Contracts',
        'DeFi Integration',
        'Collaborative Editing'
      ],
      requirements: [
        'Bitcoin wallet required',
        'Minimum 150MB free space',
        'Modern browser with WebGL support'
      ],
      languages: ['English', 'Spanish', 'Chinese', 'Korean'],
      inAppPurchases: true,
      tokenomics: {
        totalSupply: '10,000,000',
        circulating: '4,285,714',
        revenueShare: '25%',
        stakingAPY: '10%'
      }
    },
    'bitcoin-drive': {
      id: 'bitcoin-drive',
      name: 'Bitcoin Drive',
      ticker: '$bDrive',
      displayTicker: '$₿Drive',
      icon: '/bitcoin-drive-logo.jpg',
      color: '#10B981',
      shortDescription: 'Decentralized cloud storage on Bitcoin',
      fullDescription: `Bitcoin Drive offers truly decentralized file storage powered by the Bitcoin blockchain. Store, share, and access your files from anywhere with unparalleled security and permanence. Your data lives forever on the world's most secure network.

Key Features:
• Permanent file storage on Bitcoin blockchain
• End-to-end encryption using Bitcoin cryptography
• Distributed redundancy across global nodes
• Share files with cryptographic access controls
• Version control and file history tracking
• IPFS integration for large file handling
• Zero-knowledge encryption - only you can decrypt your files
• Collaborative folders with permission management`,
      category: 'Bitcoin Office',
      developer: 'Bitcoin Office',
      version: '3.2.0',
      size: '178 MB',
      rating: 4.9,
      reviews: 2156,
      lastUpdated: '2024-12-08',
      releaseDate: '2024-01-20',
      url: 'https://bitcoin-drive.vercel.app',
      price: 0.58,
      change24h: 15.3,
      marketCap: '$3.1M',
      volume24h: '$234K',
      screenshots: [
        '/app-images/drive-main.png',
        '/app-images/drive-upload.png',
        '/app-images/drive-share.png'
      ],
      features: [
        'Blockchain Storage',
        'End-to-End Encryption',
        'File Sharing',
        'Version Control',
        'IPFS Integration',
        'Zero-Knowledge'
      ],
      requirements: [
        'Bitcoin wallet required',
        'Minimum 200MB free space',
        'Internet connection for sync'
      ],
      languages: ['English', 'Spanish', 'Chinese', 'Japanese', 'French'],
      inAppPurchases: true,
      tokenomics: {
        totalSupply: '10,000,000',
        circulating: '5,357,143',
        revenueShare: '35%',
        stakingAPY: '14%'
      }
    },
    'bitcoin-email': {
      id: 'bitcoin-email',
      name: 'Bitcoin Email',
      ticker: '$bMail',
      displayTicker: '$₿Mail',
      icon: '/bitcoin-email-logo.jpg',
      color: '#8B5CF6',
      shortDescription: 'Encrypted email on the Bitcoin blockchain',
      fullDescription: `Bitcoin Email revolutionizes communication with blockchain-powered encrypted messaging. Send emails that can never be deleted, censored, or intercepted. Every message is cryptographically signed and permanently stored on Bitcoin.

Key Features:
• Permanent email storage on blockchain
• PGP-style encryption using Bitcoin keys
• Spam-proof with proof-of-work requirements
• Decentralized email routing
• Attachments stored on IPFS
• Email threading and conversation view
• Smart contract integration for automated responses
• Wallet-to-wallet direct messaging`,
      category: 'Bitcoin Office',
      developer: 'Bitcoin Office',
      version: '2.1.4',
      size: '134 MB',
      rating: 4.6,
      reviews: 1823,
      lastUpdated: '2024-12-05',
      releaseDate: '2024-02-10',
      url: 'https://bitcoin-email.vercel.app',
      price: 0.35,
      change24h: 6.7,
      marketCap: '$1.8M',
      volume24h: '$112K',
      screenshots: [
        '/app-images/email-inbox.png',
        '/app-images/email-compose.png',
        '/app-images/email-encrypted.png'
      ],
      features: [
        'Blockchain Email',
        'PGP Encryption',
        'Spam Protection',
        'IPFS Attachments',
        'Smart Contracts',
        'Direct Messaging'
      ],
      requirements: [
        'Bitcoin wallet required',
        'Minimum 120MB free space',
        'Email verification required'
      ],
      languages: ['English', 'Spanish', 'German', 'French', 'Italian'],
      inAppPurchases: false,
      tokenomics: {
        totalSupply: '10,000,000',
        circulating: '5,142,857',
        revenueShare: '28%',
        stakingAPY: '11%'
      }
    },
    'bitcoin-calendar': {
      id: 'bitcoin-calendar',
      name: 'Bitcoin Calendar',
      ticker: '$bCal',
      displayTicker: '$₿Calendar',
      icon: '/bitcoin-calendar.jpg',
      color: '#EC4899',
      shortDescription: 'Decentralized scheduling on Bitcoin',
      fullDescription: `Bitcoin Calendar brings trustless time management to the blockchain. Schedule meetings, set reminders, and coordinate events with cryptographic proof of attendance. Perfect for DAOs, teams, and individuals who value privacy and permanence.

Key Features:
• Immutable event records on blockchain
• Smart contract automation for recurring events
• Cryptographic proof of attendance
• Decentralized meeting coordination
• Token-gated event access
• Integration with Bitcoin Email and Drive
• Time-locked reminders
• Multi-signature event approval`,
      category: 'Bitcoin Office',
      developer: 'Bitcoin Office',
      version: '1.5.2',
      size: '98 MB',
      rating: 4.5,
      reviews: 967,
      lastUpdated: '2024-11-30',
      releaseDate: '2024-03-15',
      url: 'https://bitcoin-calendar.vercel.app',
      price: 0.22,
      change24h: 4.2,
      marketCap: '$980K',
      volume24h: '$45K',
      screenshots: [
        '/app-images/calendar-month.png',
        '/app-images/calendar-event.png',
        '/app-images/calendar-schedule.png'
      ],
      features: [
        'Blockchain Events',
        'Smart Scheduling',
        'Proof of Attendance',
        'Token Gating',
        'Time-locked Reminders',
        'Multi-sig Approval'
      ],
      requirements: [
        'Bitcoin wallet required',
        'Minimum 80MB free space',
        'Calendar sync permissions'
      ],
      languages: ['English', 'Spanish', 'Portuguese', 'Dutch'],
      inAppPurchases: true,
      tokenomics: {
        totalSupply: '10,000,000',
        circulating: '4,464,286',
        revenueShare: '22%',
        stakingAPY: '9%'
      }
    },
    'bitcoin-music': {
      id: 'bitcoin-music',
      name: 'Bitcoin Music',
      ticker: '$bMusic',
      displayTicker: '$₿Music',
      icon: '/bitcoin-music.png',
      color: '#EF4444',
      shortDescription: 'Decentralized music streaming on Bitcoin',
      fullDescription: `Bitcoin Music revolutionizes the music industry with direct artist-to-fan streaming powered by Bitcoin. Artists earn instantly per play, fans own their playlists forever, and no intermediary takes a cut. True musical freedom on the blockchain.

Key Features:
• Direct artist payments per stream
• Immutable playlists on blockchain
• NFT album releases and collectibles
• Decentralized music discovery
• Artist tokens for fan engagement
• Lossless audio streaming via IPFS
• Smart contract royalty splits
• Proof of listening rewards`,
      category: 'Entertainment',
      developer: 'Bitcoin Office',
      version: '2.0.1',
      size: '186 MB',
      rating: 4.7,
      reviews: 3421,
      lastUpdated: '2024-12-01',
      releaseDate: '2024-04-01',
      url: 'https://bitcoin-music.vercel.app',
      price: 0.18,
      change24h: 22.4,
      marketCap: '$2.1M',
      volume24h: '$378K',
      screenshots: [
        '/app-images/music-player.png',
        '/app-images/music-artist.png',
        '/app-images/music-nft.png'
      ],
      features: [
        'Direct Payments',
        'NFT Releases',
        'Immutable Playlists',
        'Artist Tokens',
        'Lossless Audio',
        'Listening Rewards'
      ],
      requirements: [
        'Bitcoin wallet required',
        'Minimum 180MB free space',
        'Audio output device'
      ],
      languages: ['English', 'Spanish', 'Korean', 'Japanese', 'Portuguese'],
      inAppPurchases: true,
      tokenomics: {
        totalSupply: '100,000,000',
        circulating: '42,857,143',
        revenueShare: '40%',
        stakingAPY: '18%'
      }
    },
    'bitcoin-jobs': {
      id: 'bitcoin-jobs',
      name: 'Bitcoin Jobs',
      ticker: '$bJobs',
      displayTicker: '$₿Jobs',
      icon: '/bitcoin-jobs.png',
      color: '#F59E0B',
      shortDescription: 'Decentralized job marketplace on Bitcoin',
      fullDescription: `Bitcoin Jobs connects talent with opportunities in the decentralized economy. Post jobs, find work, and get paid instantly in Bitcoin. Smart contracts ensure fair payment, reputation is blockchain-verified, and no platform takes excessive fees.

Key Features:
• Smart contract escrow for guaranteed payment
• Blockchain-verified reputation system
• Instant Bitcoin payments on completion
• Decentralized dispute resolution
• Skills NFT certification
• Anonymous job applications
• DAO job postings
• Milestone-based project management`,
      category: 'Professional',
      developer: 'Bitcoin Office',
      version: '1.3.0',
      size: '112 MB',
      rating: 4.4,
      reviews: 2187,
      lastUpdated: '2024-11-25',
      releaseDate: '2024-05-01',
      url: 'https://bitcoin-jobs.vercel.app',
      price: 0.14,
      change24h: 18.9,
      marketCap: '$1.5M',
      volume24h: '$198K',
      screenshots: [
        '/app-images/jobs-board.png',
        '/app-images/jobs-profile.png',
        '/app-images/jobs-contract.png'
      ],
      features: [
        'Smart Escrow',
        'Reputation System',
        'Instant Payments',
        'Skills NFTs',
        'Anonymous Applications',
        'Milestone Tracking'
      ],
      requirements: [
        'Bitcoin wallet required',
        'Profile verification',
        'Minimum 100MB free space'
      ],
      languages: ['English', 'Spanish', 'Hindi', 'Chinese', 'Arabic'],
      inAppPurchases: false,
      tokenomics: {
        totalSupply: '50,000,000',
        circulating: '21,428,571',
        revenueShare: '20%',
        stakingAPY: '15%'
      }
    }
  }

  return apps[id] || null
}

export default function AppDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'overview' | 'tokenomics' | 'reviews'>('overview')
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null)
  
  const app = getAppData(params.id as string)

  if (!app) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">App Not Found</h1>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-[#0094FF] hover:bg-[#0084e6] rounded-lg transition-colors"
          >
            Back to Store
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-[#2a2a2a] px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Store
          </button>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white transition-colors text-sm">
              Share
            </button>
            <button className="text-gray-400 hover:text-white transition-colors text-sm">
              Report
            </button>
          </div>
        </div>
      </nav>

      {/* App Header */}
      <section className="px-8 py-8 border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* App Icon and Basic Info */}
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 rounded-3xl overflow-hidden bg-[#1a1a1a] relative">
                {app.icon ? (
                  <Image
                    src={app.icon}
                    alt={app.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold" style={{ backgroundColor: app.color }}>
                    {app.name.substring(0, 2)}
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{app.name}</h1>
                <p className="text-gray-400 mb-3">{app.developer}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{app.rating}</span>
                    <span className="text-gray-500">({app.reviews} reviews)</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{app.category}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => window.open(app.url, '_blank')}
                    className="px-6 py-3 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] text-white rounded-lg font-semibold transition-all"
                  >
                    Open App
                  </button>
                  <DownloadButton variant="rainbow" size="medium" appName={app.name} />
                  <button className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg font-medium transition-colors">
                    Trade {app.displayTicker}
                  </button>
                </div>
              </div>
            </div>

            {/* Token Info */}
            <div className="md:w-80 bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
              <h3 className="text-lg font-semibold mb-4">Token Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Symbol</span>
                  <span className="font-mono">{app.displayTicker}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Price</span>
                  <span className="font-mono">${app.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Change</span>
                  <span className={`font-mono ${app.change24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {app.change24h > 0 ? '+' : ''}{app.change24h}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Cap</span>
                  <span>{app.marketCap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Volume</span>
                  <span>{app.volume24h}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-8 py-8 border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {app.screenshots?.map((screenshot: string, i: number) => (
              <div 
                key={i} 
                className="flex-shrink-0 relative cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedScreenshot(i)}
              >
                <Image
                  src={screenshot}
                  alt={`${app.name} Screenshot ${i + 1}`}
                  width={400}
                  height={250}
                  className="rounded-lg border border-[#3a3a3a]"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )) || (
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-shrink-0 w-64 h-48 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] flex items-center justify-center">
                    <span className="text-gray-500">Screenshot {i}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8 border-b border-[#2a2a2a] mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-1 border-b-2 transition-colors ${
                activeTab === 'overview' 
                  ? 'text-white border-[#0094FF]' 
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('tokenomics')}
              className={`pb-3 px-1 border-b-2 transition-colors ${
                activeTab === 'tokenomics' 
                  ? 'text-white border-[#0094FF]' 
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Tokenomics
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 px-1 border-b-2 transition-colors ${
                activeTab === 'reviews' 
                  ? 'text-white border-[#0094FF]' 
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-4">About this app</h3>
                <div className="text-gray-300 whitespace-pre-line mb-8">{app.fullDescription}</div>
                
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {app.features?.map((feature: string) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Version</span>
                    <span>{app.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size</span>
                    <span>{app.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Updated</span>
                    <span>{app.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Released</span>
                    <span>{app.releaseDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Languages</span>
                    <span>{app.languages?.length} languages</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">In-App Purchases</span>
                    <span>{app.inAppPurchases ? 'Yes' : 'No'}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 mt-8">Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {app.requirements?.map((req: string) => (
                    <li key={req}>• {req}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'tokenomics' && (
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold mb-6">Token Economics</h3>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a] space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 mb-2">Total Supply</p>
                    <p className="text-2xl font-mono">{app.tokenomics?.totalSupply}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Circulating Supply</p>
                    <p className="text-2xl font-mono">{app.tokenomics?.circulating}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Revenue Share</p>
                    <p className="text-2xl font-mono text-green-400">{app.tokenomics?.revenueShare}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Staking APY</p>
                    <p className="text-2xl font-mono text-blue-400">{app.tokenomics?.stakingAPY}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">User Reviews</h3>
              <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a] text-center">
                <p className="text-gray-400">Reviews coming soon</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Screenshot Lightbox */}
      {selectedScreenshot !== null && app.screenshots && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={app.screenshots[selectedScreenshot]}
              alt={`${app.name} Screenshot ${selectedScreenshot + 1}`}
              width={1200}
              height={750}
              className="rounded-lg"
              style={{ objectFit: 'contain', maxHeight: '90vh', width: 'auto' }}
            />
            <button
              onClick={() => setSelectedScreenshot(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}