'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function CoverPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a] px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm">
            <Link 
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Apps
            </Link>
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
            <a 
              href="/docs"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Developer Docs
            </a>
            <Link 
              href="/token"
              className="text-gray-400 hover:text-white transition-colors"
            >
              $BAPPS Token
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative w-32 h-32">
              <Image
                src="/bitcoin-apps-logo.jpg"
                alt="Bitcoin Apps"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Title with Rainbow Bitcoin and White App Store */}
          <h1 className="text-7xl md:text-8xl font-thin mb-8 tracking-tight">
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Bitcoin
            </span>
            <span className="text-white"> App Store</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto">
            The decentralized marketplace for Bitcoin-native applications
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-[#252525] rounded-xl p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Secure & Decentralized</h3>
              <p className="text-gray-400 text-sm">
                Built on Bitcoin's immutable blockchain for maximum security
              </p>
            </div>
            <div className="bg-[#252525] rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">
                Instant app deployment and updates via Lightning Network
              </p>
            </div>
            <div className="bg-[#252525] rounded-xl p-6">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Open Ecosystem</h3>
              <p className="text-gray-400 text-sm">
                Open source platform fostering innovation and collaboration
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-[#0094FF] to-[#0084e6] text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Browse Apps
            </Link>
            <Link
              href="/token"
              className="px-8 py-4 bg-[#252525] text-white rounded-xl font-semibold hover:bg-[#303030] transition-all"
            >
              Learn About $BAPPS
            </Link>
            <a
              href="https://github.com/bitcoin-apps-suite/bapps"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#252525] text-white rounded-xl font-semibold hover:bg-[#303030] transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1a1a1a] border-t border-[#3a3a3a] px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>© 2024 Bitcoin Office. All rights reserved.</div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}