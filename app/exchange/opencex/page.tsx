'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

export default function OpenCEXPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<'architecture' | 'features' | 'implementation'>('architecture')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-[#2a2a2a] px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => router.push('/exchange/options')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Options
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h2 className="text-xl font-light">OpenCEX Standard</h2>
                <p className="text-xs text-gray-500">Industry Standard Centralized Exchange Engine</p>
              </div>
            </div>
          </div>
          <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
            PLANNED
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-thin mb-6">
            OpenCEX
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent"> Exchange Engine</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional-grade centralized exchange infrastructure built on industry standards.
            High-performance order matching, REST & WebSocket APIs, and enterprise scalability.
          </p>
          
          {/* Tech Stack */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🐍</div>
              <span className="text-sm text-gray-400">Python</span>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🗄️</div>
              <span className="text-sm text-gray-400">PostgreSQL</span>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <span className="text-sm text-gray-400">Redis</span>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔌</div>
              <span className="text-sm text-gray-400">WebSocket</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tabs */}
      <div className="px-8 border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto flex gap-8">
          <button
            onClick={() => setActiveSection('architecture')}
            className={`py-3 px-1 border-b-2 transition-colors ${
              activeSection === 'architecture' 
                ? 'text-white border-[#F59E0B]' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveSection('features')}
            className={`py-3 px-1 border-b-2 transition-colors ${
              activeSection === 'features' 
                ? 'text-white border-[#F59E0B]' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setActiveSection('implementation')}
            className={`py-3 px-1 border-b-2 transition-colors ${
              activeSection === 'implementation' 
                ? 'text-white border-[#F59E0B]' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            Implementation
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <section className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {activeSection === 'architecture' && (
            <div>
              <h2 className="text-3xl font-semibold mb-8">System Architecture</h2>
              
              {/* Architecture Diagram */}
              <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a] mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Frontend Layer */}
                  <div className="text-center">
                    <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#2a2a2a] mb-4">
                      <div className="text-4xl mb-3">🖥️</div>
                      <h3 className="font-semibold mb-2">Frontend Layer</h3>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>React Trading UI</li>
                        <li>WebSocket Client</li>
                        <li>TradingView Charts</li>
                      </ul>
                    </div>
                  </div>

                  {/* API Layer */}
                  <div className="text-center">
                    <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#2a2a2a] mb-4">
                      <div className="text-4xl mb-3">🔗</div>
                      <h3 className="font-semibold mb-2">API Gateway</h3>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>REST API</li>
                        <li>WebSocket Server</li>
                        <li>Rate Limiting</li>
                      </ul>
                    </div>
                  </div>

                  {/* Backend Layer */}
                  <div className="text-center">
                    <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#2a2a2a] mb-4">
                      <div className="text-4xl mb-3">⚙️</div>
                      <h3 className="font-semibold mb-2">Core Engine</h3>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>Order Matching</li>
                        <li>Risk Management</li>
                        <li>Settlement Engine</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Database Layer */}
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#2a2a2a]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🗄️</span>
                      <h3 className="font-semibold">PostgreSQL</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                      Persistent storage for orders, trades, users, and audit logs
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#2a2a2a]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">⚡</span>
                      <h3 className="font-semibold">Redis</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                      In-memory cache for order books, sessions, and real-time data
                    </p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] text-center">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">100K+</div>
                  <p className="text-sm text-gray-400">Orders/Second</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] text-center">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">&lt;1ms</div>
                  <p className="text-sm text-gray-400">Latency</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] text-center">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">99.99%</div>
                  <p className="text-sm text-gray-400">Uptime</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] text-center">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">∞</div>
                  <p className="text-sm text-gray-400">Scalability</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'features' && (
            <div>
              <h2 className="text-3xl font-semibold mb-8">Core Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Order Management */}
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Order Management
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Market, Limit, Stop, and Stop-Limit orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>OCO (One-Cancels-Other) orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Iceberg and time-weighted orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Post-only and reduce-only options</span>
                    </li>
                  </ul>
                </div>

                {/* API Capabilities */}
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔌</span>
                    API Capabilities
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>RESTful API with full documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>WebSocket streams for real-time data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>FIX protocol support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Rate limiting and DDoS protection</span>
                    </li>
                  </ul>
                </div>

                {/* Security */}
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔒</span>
                    Security Features
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Multi-signature cold storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>2FA and hardware key support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>IP whitelisting and API key management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Automated threat detection</span>
                    </li>
                  </ul>
                </div>

                {/* Admin Tools */}
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    Admin Tools
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Real-time monitoring dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>KYC/AML integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Fee management system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Liquidity management tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'implementation' && (
            <div>
              <h2 className="text-3xl font-semibold mb-8">Implementation Roadmap</h2>
              
              {/* Timeline */}
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">Q1</span>
                  </div>
                  <div className="flex-1 bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a]">
                    <h3 className="text-lg font-semibold mb-2">Phase 1: Core Engine</h3>
                    <p className="text-sm text-gray-400">Order matching engine, basic API, PostgreSQL integration</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D97706] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">Q2</span>
                  </div>
                  <div className="flex-1 bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a]">
                    <h3 className="text-lg font-semibold mb-2">Phase 2: BSV Integration</h3>
                    <p className="text-sm text-gray-400">BSV wallet system, token support, smart contract integration</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">Q3</span>
                  </div>
                  <div className="flex-1 bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] opacity-60">
                    <h3 className="text-lg font-semibold mb-2">Phase 3: Advanced Features</h3>
                    <p className="text-sm text-gray-400">Margin trading, derivatives, advanced order types</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">Q4</span>
                  </div>
                  <div className="flex-1 bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] opacity-60">
                    <h3 className="text-lg font-semibold mb-2">Phase 4: Launch</h3>
                    <p className="text-sm text-gray-400">Public beta, stress testing, mainnet deployment</p>
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
                <h3 className="text-lg font-semibold mb-4">Example API Usage</h3>
                <pre className="bg-[#0a0a0a] p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-300">{`# Place a limit order
POST /api/v1/orders
{
  "symbol": "BAPPS/BSV",
  "side": "buy",
  "type": "limit",
  "price": 1.28,
  "quantity": 100,
  "timeInForce": "GTC"
}

# Subscribe to order book updates
WS /stream?symbols=BAPPS/BSV
{
  "type": "subscribe",
  "channels": ["orderbook", "trades"],
  "symbols": ["BAPPS/BSV"]
}`}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-300 mb-8">
            OpenCEX will provide institutional-grade exchange infrastructure for the Bitcoin Apps ecosystem
          </p>
          <div className="flex justify-center gap-4">
            <button 
              disabled
              className="px-8 py-3 bg-gray-800 text-gray-500 rounded-lg font-medium cursor-not-allowed"
            >
              View Documentation
            </button>
            <button 
              disabled
              className="px-8 py-3 bg-gray-800 text-gray-500 rounded-lg font-medium cursor-not-allowed"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}