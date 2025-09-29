'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function ExchangeOptionsPage() {
  const router = useRouter()

  const exchangeOptions = [
    {
      id: 'current',
      name: 'Custom Lightweight Exchange',
      description: 'Our current implementation - fast, simple, and tailored for Bitcoin Apps tokens',
      features: ['Instant setup', 'No dependencies', 'Custom UI/UX', 'Lightweight'],
      tech: 'Next.js + TypeScript',
      status: 'live',
      path: '/exchange',
      color: 'from-[#0094FF] to-[#0084e6]'
    },
    {
      id: 'hollaex',
      name: 'HollaEx Professional',
      description: 'Enterprise-grade open source exchange with full trading features',
      features: ['Order book matching', 'KYC/AML ready', 'Multi-chain support', 'Admin panel'],
      tech: 'Docker + Node.js + PostgreSQL',
      status: 'ready',
      path: '/exchange/hollaex',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      id: 'bisq',
      name: 'Bisq Decentralized',
      description: 'P2P decentralized exchange with no central authority',
      features: ['No KYC required', 'Tor integration', 'Multi-sig escrow', 'True P2P'],
      tech: 'Java + Tor + P2P Network',
      status: 'ready',
      path: '/exchange/bisq',
      color: 'from-[#EC4899] to-[#DB2777]'
    },
    {
      id: 'opencex',
      name: 'OpenCEX Standard',
      description: 'Industry standard centralized exchange engine',
      features: ['High performance', 'REST & WebSocket APIs', 'Multi-currency', 'Scalable'],
      tech: 'Python + Redis + PostgreSQL',
      status: 'planned',
      path: '/exchange/opencex',
      color: 'from-[#F59E0B] to-[#D97706]'
    },
    {
      id: 'uniswap',
      name: 'Uniswap-style AMM',
      description: 'Automated Market Maker for BSV tokens',
      features: ['Liquidity pools', 'Automated pricing', 'No order books', 'Yield farming'],
      tech: 'Smart Contracts + BSV',
      status: 'concept',
      path: '/exchange/amm',
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    }
  ]

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
              <div className="text-2xl">🔄</div>
              <div>
                <h2 className="text-xl font-light">Exchange Options</h2>
                <p className="text-xs text-gray-500">Explore Different Exchange Implementations</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center">
        <h1 className="text-5xl font-thin mb-6">
          Choose Your
          <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF00FF] to-[#0094FF] bg-clip-text text-transparent"> Exchange </span>
          Architecture
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Exploring multiple exchange implementations for the Bitcoin Apps ecosystem. 
          Each offers unique advantages for different use cases.
        </p>
      </section>

      {/* Exchange Options Grid */}
      <section className="px-8 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exchangeOptions.map((option) => (
            <div 
              key={option.id}
              className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#3a3a3a] transition-all"
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  option.status === 'live' ? 'bg-green-500/20 text-green-400' :
                  option.status === 'ready' ? 'bg-blue-500/20 text-blue-400' :
                  option.status === 'planned' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {option.status.toUpperCase()}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">{option.name}</h3>
              
              {/* Description */}
              <p className="text-gray-400 mb-4 h-12">{option.description}</p>
              
              {/* Tech Stack */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">TECH STACK</p>
                <p className="text-sm text-gray-300">{option.tech}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-2">KEY FEATURES</p>
                <ul className="space-y-1">
                  {option.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => router.push(option.path)}
                disabled={option.status === 'concept'}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  option.status === 'concept' 
                    ? 'bg-[#1a1a1a] text-gray-600 cursor-not-allowed'
                    : `bg-gradient-to-r ${option.color} hover:opacity-90 text-white`
                }`}
              >
                {option.status === 'live' ? 'Open Exchange' :
                 option.status === 'ready' ? 'View Demo' :
                 option.status === 'planned' ? 'Coming Soon' :
                 'In Concept'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Feature Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left pb-4 text-sm text-gray-500">Feature</th>
                <th className="text-center pb-4 text-sm text-gray-500">Custom</th>
                <th className="text-center pb-4 text-sm text-gray-500">HollaEx</th>
                <th className="text-center pb-4 text-sm text-gray-500">Bisq</th>
                <th className="text-center pb-4 text-sm text-gray-500">OpenCEX</th>
                <th className="text-center pb-4 text-sm text-gray-500">AMM</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ['Setup Time', '5 min', '15 min', '30 min', '1 hour', '2 hours'],
                ['Decentralization', '❌', '❌', '✅', '❌', '✅'],
                ['KYC/AML', 'Optional', '✅', '❌', '✅', '❌'],
                ['Order Books', '✅', '✅', '✅', '✅', '❌'],
                ['Liquidity Pools', '❌', '❌', '❌', '❌', '✅'],
                ['BSV Native', '✅', 'Partial', 'Partial', 'Partial', '✅'],
                ['Self-Hosted', '✅', '✅', '✅', '✅', '✅'],
                ['API Access', 'Basic', 'Full', 'Limited', 'Full', 'Smart Contract'],
                ['Mobile Ready', '✅', '✅', '❌', '✅', '✅'],
                ['Transaction Speed', 'Instant', 'Fast', 'Slow', 'Fast', 'Instant'],
              ].map(([feature, ...values]) => (
                <tr key={feature} className="border-b border-[#1a1a1a]">
                  <td className="py-3 text-gray-300">{feature}</td>
                  {values.map((value, i) => (
                    <td key={i} className="py-3 text-center">
                      {value === '✅' ? <span className="text-green-500">✅</span> :
                       value === '❌' ? <span className="text-gray-600">❌</span> :
                       <span className="text-gray-400">{value}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Ready to Trade?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with our lightweight exchange or explore professional options for your needs
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => router.push('/exchange')}
              className="px-8 py-4 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] text-white rounded-lg font-semibold text-lg transition-all"
            >
              Open Current Exchange
            </button>
            <button 
              onClick={() => router.push('/exchange/hollaex')}
              className="px-8 py-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-lg font-semibold text-lg transition-all"
            >
              Try HollaEx Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}