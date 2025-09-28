'use client'

import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

export default function ThinkBifferentPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Simple Nav */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-8 py-6">
        <button
          onClick={() => router.push('/')}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ← Back
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Tagline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-thin mb-8 leading-none">
            <span className="block">Think</span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF00FF] to-[#0094FF] bg-clip-text text-transparent">
                ₿ifferent
              </span>
              <span className="absolute -top-2 -right-8 text-base sm:text-lg md:text-xl lg:text-2xl">
                <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] bg-clip-text text-transparent">₿</span>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
            The future of applications is decentralized. 
            <br />
            The future of money is Bitcoin.
            <br />
            The future is now.
          </p>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6">
              <div className="text-5xl mb-4">🔓</div>
              <h3 className="text-lg font-semibold mb-2">Own Your Data</h3>
              <p className="text-gray-400 text-sm">
                No corporate surveillance. No data harvesting. Your information, your control.
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-2">Share The Wealth</h3>
              <p className="text-gray-400 text-sm">
                Every app token is a revenue share. Users become owners, not products.
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Borderless Innovation</h3>
              <p className="text-gray-400 text-sm">
                No gatekeepers. No app store monopolies. Pure peer-to-peer freedom.
              </p>
            </div>
          </div>

          {/* Manifesto */}
          <div className="max-w-4xl mx-auto mb-16 p-8 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-orange-900/10 rounded-xl border border-purple-500/20">
            <h2 className="text-2xl font-semibold mb-6">The ₿itcoin Apps Manifesto</h2>
            <div className="text-left space-y-4 text-gray-300">
              <p>
                For too long, we've accepted the status quo. Centralized platforms that mine our data. 
                App stores that take 30% cuts. Payment processors that freeze accounts. Algorithms that 
                manipulate our behavior.
              </p>
              <p>
                We say: <span className="text-[#FF6B00] font-semibold">Think ₿ifferent</span>.
              </p>
              <p>
                Build applications where users are owners. Where revenue flows to token holders, not 
                venture capitalists. Where your data lives on the blockchain, not corporate servers. 
                Where innovation happens without permission.
              </p>
              <p>
                This isn't just about technology. It's about reimagining the relationship between 
                users and applications. It's about creating an economy where value flows to those 
                who create it.
              </p>
              <p className="font-semibold text-white">
                Welcome to the decentralized revolution. Welcome to Bitcoin Apps.
              </p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button 
              onClick={() => router.push('/bitcoin-apps-store')}
              className="px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFA500] text-white rounded-lg font-semibold text-lg transition-all"
            >
              Join the Revolution
            </button>
            <button 
              onClick={() => router.push('/suite')}
              className="px-8 py-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-lg font-semibold text-lg transition-all"
            >
              Explore the Suite
            </button>
          </div>

          {/* Quote */}
          <div className="mb-16">
            <blockquote className="text-2xl text-gray-400 italic font-light">
              "Here's to the crazy ones, the misfits, the rebels... 
              <br />
              The ones who see things 
              <span className="text-[#FF6B00]"> ₿ifferently</span>."
            </blockquote>
            <p className="text-sm text-gray-500 mt-4">— Inspired by those who dare to change the world</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-[#FF6B00]">25+</div>
              <div className="text-sm text-gray-400">Apps Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0094FF]">50K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00FF88]">$12M+</div>
              <div className="text-sm text-gray-400">Market Cap</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF00FF]">100%</div>
              <div className="text-sm text-gray-400">Decentralized</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}