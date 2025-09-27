'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TrustPage() {
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
              className="text-gray-400 hover:text-white transition-colors"
            >
              $BAPPS
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/trust"
              className="text-[#0094FF] font-bold"
            >
              Trust
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
                src="/bitcoin.png"
                alt="Bitcoin Apps"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Trust & <span className="text-[#0094FF]">Security</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building the future of decentralized applications with transparency, security, and trust at our core.
          </p>
          <div className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#0094FF] to-[#0084e6] rounded-xl">
            <span className="text-2xl font-bold">Trusted</span>
            <span className="text-lg">|</span>
            <span className="text-lg">Open Source</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#252525] rounded-xl p-1 inline-flex">
            {[
              { id: 'overview', label: '#Overview' },
              { id: 'security', label: '#Security' },
              { id: 'transparency', label: '#Transparency' },
              { id: 'community', label: '#Community' }
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
              {/* Trust Philosophy Section */}
              <section className="bg-[#252525] rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Why Trust Matters</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    In the Bitcoin Apps ecosystem, trust isn't just a feature—it's the foundation of everything we build. 
                    Our commitment to <strong className="text-white">transparency, security, and community governance</strong> ensures 
                    that users can confidently engage with our decentralized applications.
                  </p>
                  <p>
                    Every line of code is open source, every transaction is verifiable on the blockchain, and every decision 
                    is made with community input through our <span className="text-[#0094FF] font-bold">$BAPPS</span> governance token.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-[#1e1e1e] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#0094FF]">Open Source</h3>
                    <p className="text-gray-400">All code is publicly auditable with MIT licensing for maximum transparency</p>
                  </div>
                  <div className="bg-[#1e1e1e] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#10B981]">Blockchain Verified</h3>
                    <p className="text-gray-400">Every transaction and data storage operation is cryptographically secured</p>
                  </div>
                  <div className="bg-[#1e1e1e] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#F59E0B]">Community Governed</h3>
                    <p className="text-gray-400">Token holders have voting rights on platform decisions and upgrades</p>
                  </div>
                </div>
              </section>

              {/* Trust Metrics */}
              <section className="bg-[#252525] rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Trust Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0094FF]">100%</div>
                    <div className="text-sm text-gray-400">Open Source Code</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#10B981]">0</div>
                    <div className="text-sm text-gray-400">Security Breaches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F59E0B]">16+</div>
                    <div className="text-sm text-gray-400">Audited Applications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#8B5CF6]">24/7</div>
                    <div className="text-sm text-gray-400">Uptime Monitoring</div>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === 'security' && (
            <section className="bg-[#252525] rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Security Standards</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0094FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
                    <p className="text-gray-400">
                      All user data is encrypted using industry-standard AES-256 encryption before being stored on the Bitcoin blockchain.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0094FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Multi-Signature Wallets</h3>
                    <p className="text-gray-400">
                      Critical operations require multiple signature approvals, eliminating single points of failure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0094FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Regular Security Audits</h3>
                    <p className="text-gray-400">
                      Independent security firms conduct quarterly audits of all smart contracts and application code.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0094FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bug Bounty Program</h3>
                    <p className="text-gray-400">
                      We reward security researchers who responsibly disclose vulnerabilities with substantial $BAPPS token rewards.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'transparency' && (
            <section className="bg-[#252525] rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Complete Transparency</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#1e1e1e] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#0094FF]">Open Source Everything</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#0094FF] mr-2">•</span>
                      <span>All application source code available on GitHub</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0094FF] mr-2">•</span>
                      <span>Smart contract addresses publicly verifiable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0094FF] mr-2">•</span>
                      <span>Development roadmap openly tracked</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0094FF] mr-2">•</span>
                      <span>Community discussions in public forums</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#1e1e1e] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#10B981]">Financial Transparency</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#10B981] mr-2">•</span>
                      <span>All treasury transactions on-chain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#10B981] mr-2">•</span>
                      <span>Revenue sharing mechanisms automated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#10B981] mr-2">•</span>
                      <span>Token distribution publicly auditable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#10B981] mr-2">•</span>
                      <span>Quarterly financial reports published</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'community' && (
            <section className="bg-[#252525] rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Community-Driven Governance</h2>
              
              <div className="space-y-6">
                <div className="bg-[#1e1e1e] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Decentralized Decision Making</h3>
                  <p className="text-gray-300 mb-4">
                    The Bitcoin Apps ecosystem is governed by its community through the $BAPPS token. Every major decision 
                    goes through a transparent voting process where token holders can propose, discuss, and vote on changes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0094FF]">1000+</div>
                      <div className="text-sm text-gray-400">Active Voters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#10B981]">50+</div>
                      <div className="text-sm text-gray-400">Proposals Voted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F59E0B]">95%</div>
                      <div className="text-sm text-gray-400">Participation Rate</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#1e1e1e] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#8B5CF6]">Governance Rights</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Vote on new app additions to the ecosystem</li>
                      <li>• Approve major protocol upgrades</li>
                      <li>• Set treasury spending policies</li>
                      <li>• Elect community representatives</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#1e1e1e] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#EC4899]">Community Benefits</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Revenue sharing from ecosystem growth</li>
                      <li>• Early access to new applications</li>
                      <li>• Discounted trading fees</li>
                      <li>• Direct communication with dev teams</li>
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
            <h2 className="text-3xl font-bold mb-4">Join Our Trusted Ecosystem</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the peace of mind that comes with truly decentralized, transparent, and secure applications. 
              Your data belongs to you, your votes matter, and your trust is earned through action.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/token"
                className="px-8 py-3 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] rounded-lg font-medium transition-all"
              >
                Get $BAPPS Tokens
              </a>
              <a 
                href="https://github.com/bitcoin-apps-suite/bapps"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#252525] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg font-medium transition-all inline-flex items-center space-x-2"
              >
                <span>Review Our Code</span>
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