'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

export default function BitcoinAppsStorePage() {
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
                  alt="Bitcoin Apps Store"
                  fill
                  className="object-cover rounded-lg"
                  sizes="40px"
                />
              </div>
              <div>
                <h2 className="text-xl font-light">Bitcoin Apps Store</h2>
                <p className="text-xs text-gray-500">The Decentralized App Marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl lg:text-8xl font-thin mb-6">
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF00FF] via-[#00FF88] to-[#0094FF] bg-clip-text text-transparent animate-gradient bg-300">
              Bitcoin
            </span>
            <span className="text-white"> Apps Store</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            The World's First Decentralized App Marketplace
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            List your Bitcoin-powered applications, create tradeable tokens, and tap into the growing ecosystem of blockchain productivity tools
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-8 py-16 bg-gradient-to-b from-transparent to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Bitcoin Apps Store?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-8 hover:border-[#0094FF]/50 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Launch Your App</h3>
              <p className="text-gray-400">
                Submit your Bitcoin-powered application to reach thousands of users in the decentralized ecosystem
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-8 hover:border-[#0094FF]/50 transition-colors">
              <div className="text-4xl mb-4">🪙</div>
              <h3 className="text-xl font-semibold mb-3">Create App Tokens</h3>
              <p className="text-gray-400">
                Every app can have its own tradeable token, creating instant liquidity and community ownership
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-8 hover:border-[#0094FF]/50 transition-colors">
              <div className="text-4xl mb-4">💹</div>
              <h3 className="text-xl font-semibold mb-3">Generate Revenue</h3>
              <p className="text-gray-400">
                Multiple revenue streams: app sales, subscriptions, token appreciation, and transaction fees
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-8 hover:border-[#0094FF]/50 transition-colors">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-3">True Ownership</h3>
              <p className="text-gray-400">
                Built on Bitcoin blockchain - no central authority can remove your app or freeze your funds
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-8 hover:border-[#0094FF]/50 transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-400">
                Access users worldwide without geographical restrictions or traditional payment barriers
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-8 hover:border-[#0094FF]/50 transition-colors">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-3">Direct Payments</h3>
              <p className="text-gray-400">
                Native Bitcoin transactions with smart contract capabilities, settled directly on the blockchain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Categories */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">App Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Bitcoin Office',
              'Bitcoin Finance',
              'Bitcoin Games',
              'Bitcoin Social',
              'Bitcoin Media',
              'Bitcoin Art',
              'Bitcoin Education',
              'Bitcoin Infrastructure'
            ].map((category) => (
              <div key={category} className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-lg p-4 text-center border border-[#3a3a3a]">
                <span className="text-sm font-medium">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="px-8 py-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Revenue Opportunities</h2>
          
          <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20 rounded-xl border border-purple-500/30 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#0094FF]">For App Developers</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Direct app sales and subscriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Token creation and appreciation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>In-app purchases and features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ad revenue sharing</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#FF6B00]">For Token Holders</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Token value appreciation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Staking rewards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Governance rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Early access to new apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* $BExchange Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Coming Soon: $BExchange</h2>
          <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Central Trading Hub</h3>
            <p className="text-lg mb-6">
              Trade all Bitcoin app tokens in one unified exchange. Deep liquidity, instant swaps, and portfolio management tools.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-3xl mb-2">📊</div>
                <span>Real-time Charts</span>
              </div>
              <div>
                <div className="text-3xl mb-2">💱</div>
                <span>Instant Swaps</span>
              </div>
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <span>Secure Trading</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-16 bg-gradient-to-b from-transparent to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to List Your App?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the decentralized revolution. List your app, create your token, and tap into the Bitcoin economy.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] text-white rounded-lg font-semibold text-lg transition-all">
              Submit Your App
            </button>
            <button className="px-8 py-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-lg font-semibold text-lg transition-all">
              View Documentation
            </button>
          </div>
          
          <div className="mt-12 p-6 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">Listing Requirements</h3>
            <ul className="text-sm text-gray-400 space-y-2 text-left">
              <li>• Bitcoin-powered functionality (payments, storage, or authentication)</li>
              <li>• Working prototype or beta version</li>
              <li>• Token economics plan (optional but recommended)</li>
              <li>• Basic documentation and support</li>
              <li>• One-time listing fee: 0.001 BTC</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0094FF]">25+</div>
              <div className="text-gray-400">Listed Apps</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B00]">$12M+</div>
              <div className="text-gray-400">Total Market Cap</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#10B981]">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#EC4899]">$2M+</div>
              <div className="text-gray-400">Daily Volume</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}