'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TokenPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      {/* Developer Taskbar */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a] px-4 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← Back to Apps
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="https://github.com/bitcoin-apps-suite/bapps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/docs"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Dev
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/token"
              className="text-[#0094FF] font-bold"
            >
              $BAPPS
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="relative w-20 h-20">
              <Image
                src="/bitcoin-apps-logo.jpg"
                alt="Bitcoin Apps"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            The <span className="text-[#0094FF]">$BAPPS</span> Token
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The unified token powering the Bitcoin Apps ecosystem. One token to access, trade, and govern the entire blockchain cloud.
          </p>
          <div className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#0094FF] to-[#0084e6] rounded-xl">
            <span className="text-2xl font-bold">$BAPPS</span>
            <span className="text-lg">|</span>
            <span className="text-lg">Master Token</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#252525] rounded-xl p-1 inline-flex">
            {[
              { id: 'overview', label: '#Overview' },
              { id: 'tokenomics', label: '#Tokenomics' },
              { id: 'ecosystem', label: '#Ecosystem' },
              { id: 'roadmap', label: '#Roadmap' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0094FF] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          {activeTab === 'overview' && (
            <>
              {/* Philosophy Section */}
              <section className="bg-[#252525] rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Bitcoin Apps Suite is an <strong className="text-white">open-source ecosystem</strong> building 
                    the future of decentralized applications on Bitcoin. We believe in fostering an open culture where 
                    innovation, collaboration, and value creation are rewarded.
                  </p>
                  <p>
                    The <span className="text-[#0094FF] font-bold">$BAPPS</span> token represents our approach to 
                    creating a sustainable economic model that aligns incentives across developers, users, and investors 
                    while maintaining transparency and openness.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-[#1e1e1e] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#0094FF]">Open Culture</h3>
                    <p className="text-gray-400">MIT Licensed, fork-friendly, collaborative development</p>
                  </div>
                  <div className="bg-[#1e1e1e] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#10B981]">Community First</h3>
                    <p className="text-gray-400">Contributors earn tokens through meaningful work</p>
                  </div>
                  <div className="bg-[#1e1e1e] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#F59E0B]">Value Aligned</h3>
                    <p className="text-gray-400">Success shared with those who build it</p>
                  </div>
                </div>
              </section>

              {/* How It Works */}
              <section className="bg-[#252525] rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0094FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Universal Access Token</h3>
                      <p className="text-gray-400">
                        Hold $BAPPS to unlock premium features across all Bitcoin Apps - Writer, Drive, Sheets, Email, and more.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0094FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Exchange Gateway</h3>
                      <p className="text-gray-400">
                        $BAPPS serves as the primary trading pair for all app tokens ($BWriter, $BDrive, etc.) on the Bitcoin Exchange.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0094FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Revenue Sharing</h3>
                      <p className="text-gray-400">
                        Token holders receive dividends from subscription revenues, exchange fees, and ecosystem growth.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0094FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Governance Rights</h3>
                      <p className="text-gray-400">
                        Vote on new app additions, feature prioritization, and ecosystem development directions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === 'tokenomics' && (
            <section className="bg-[#252525] rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Tokenomics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1e1e1e] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#0094FF]">Token Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Symbol</span>
                      <span className="font-mono">$BAPPS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Supply</span>
                      <span className="font-mono">1,000,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Initial Price</span>
                      <span className="font-mono">$0.10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Network</span>
                      <span className="font-mono">Bitcoin (BSV)</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#1e1e1e] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#10B981]">Distribution</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Community & Rewards</span>
                      <span className="font-mono">40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Development Fund</span>
                      <span className="font-mono">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Exchange Liquidity</span>
                      <span className="font-mono">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Team & Advisors</span>
                      <span className="font-mono">15%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e1e1e] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[#F59E0B]">Utility & Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#0094FF] mr-2">•</span>
                    <span><strong>Access All Apps:</strong> One token unlocks premium features across the entire ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0094FF] mr-2">•</span>
                    <span><strong>Trading Discounts:</strong> Reduced fees when trading app tokens on Bitcoin Exchange</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0094FF] mr-2">•</span>
                    <span><strong>Staking Rewards:</strong> Earn passive income by staking tokens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0094FF] mr-2">•</span>
                    <span><strong>Early Access:</strong> Priority access to new app launches and features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0094FF] mr-2">•</span>
                    <span><strong>Governance Power:</strong> Vote on ecosystem decisions proportional to holdings</span>
                  </li>
                </ul>
              </div>
            </section>
          )}

          {activeTab === 'ecosystem' && (
            <section className="bg-[#252525] rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">The Bitcoin Apps Ecosystem</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { name: 'Writer', ticker: '$BWriter', status: 'Live', color: '#FF6B00' },
                  { name: 'Drive', ticker: '$BDrive', status: 'Live', color: '#22c55e' },
                  { name: 'Sheets', ticker: '$BSheets', status: 'Live', color: '#3b82f6' },
                  { name: 'Email', ticker: '$BEmail', status: 'Live', color: '#9333EA' },
                  { name: 'Exchange', ticker: '$BExchange', status: 'Coming', color: '#10B981' },
                  { name: 'Chat', ticker: '$BChat', status: 'Coming', color: '#059669' },
                  { name: 'Video', ticker: '$BVideo', status: 'Coming', color: '#7C3AED' },
                  { name: 'Wallet', ticker: '$BWallet', status: 'Coming', color: '#F97316' },
                ].map((app) => (
                  <div key={app.name} className="bg-[#1e1e1e] rounded-xl p-6 text-center">
                    <div 
                      className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: app.color }}
                    >
                      {app.name.slice(0, 2)}
                    </div>
                    <h3 className="font-bold mb-1">Bitcoin {app.name}</h3>
                    <p className="text-sm text-[#0094FF] font-mono mb-2">{app.ticker}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      app.status === 'Live' 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-gray-500/20 text-gray-500'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-[#1e1e1e] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">$BAPPS Powers Everything</h3>
                <p className="text-gray-300 mb-4">
                  The $BAPPS token is the backbone of our ecosystem, enabling seamless interactions between all applications 
                  and providing a unified economic layer for the blockchain cloud.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0094FF]">16+</div>
                    <div className="text-sm text-gray-400">Apps in Ecosystem</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#10B981]">$10M+</div>
                    <div className="text-sm text-gray-400">Target Market Cap</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F59E0B]">1000+</div>
                    <div className="text-sm text-gray-400">Active Developers</div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'roadmap' && (
            <section className="bg-[#252525] rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Roadmap</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-[#10B981] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Q1 2025 - Foundation</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Launch $BAPPS token on Bitcoin blockchain</li>
                      <li>• Deploy Bitcoin Exchange for app token trading</li>
                      <li>• Integrate token utilities across live apps</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-[#0094FF] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Q2 2025 - Expansion</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Launch Bitcoin Chat and Bitcoin Domains</li>
                      <li>• Implement staking and governance features</li>
                      <li>• Partner with major Bitcoin wallets</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-gray-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Q3 2025 - Scale</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Launch Bitcoin Video and Music platforms</li>
                      <li>• Cross-chain bridges to other blockchains</li>
                      <li>• Enterprise partnerships and integrations</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-gray-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Q4 2025 - Ecosystem</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Complete 16-app ecosystem launch</li>
                      <li>• Decentralized governance transition</li>
                      <li>• Global marketing and adoption campaign</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0094FF]/20 to-[#0084e6]/20 rounded-2xl p-12 border border-[#0094FF]/30">
            <h2 className="text-3xl font-bold mb-4">Join the Revolution</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of building the future of decentralized applications on Bitcoin. 
              Contribute code, create content, or simply hold tokens to share in our success.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] rounded-lg font-medium transition-all">
                Get $BAPPS Tokens
              </button>
              <a 
                href="https://github.com/bitcoin-apps-suite/bapps"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#252525] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg font-medium transition-all inline-flex items-center space-x-2"
              >
                <span>View on GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}