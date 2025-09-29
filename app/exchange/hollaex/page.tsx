'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

export default function HollaExExchangePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'spot' | 'pro' | 'otc'>('pro')
  const [selectedPair, setSelectedPair] = useState('BAPPS/BSV')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Professional Trading Header */}
      <header className="bg-[#0a0a0a] border-b border-[#2a2a2a]">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => router.push('/exchange/options')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← Back
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#10B981] to-[#059669] rounded flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-lg font-medium">HollaEx Pro</span>
            </div>
            
            {/* Trading Pairs */}
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded text-sm">BAPPS/BSV</button>
              <button className="px-3 py-1 hover:bg-[#1a1a1a] rounded text-sm text-gray-400">BWRITER/BSV</button>
              <button className="px-3 py-1 hover:bg-[#1a1a1a] rounded text-sm text-gray-400">BSHEETS/BSV</button>
              <button className="px-3 py-1 hover:bg-[#1a1a1a] rounded text-sm text-gray-400">More ↓</button>
            </div>
          </div>

          {/* Account Section */}
          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-400 hover:text-white">Orders</button>
            <button className="text-sm text-gray-400 hover:text-white">Portfolio</button>
            <button className="text-sm text-gray-400 hover:text-white">History</button>
            <button className="px-4 py-1.5 bg-gradient-to-r from-[#10B981] to-[#059669] rounded text-sm font-medium">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Market Stats Bar */}
        <div className="px-4 py-2 border-t border-[#1a1a1a] flex items-center space-x-8 text-sm">
          <div>
            <span className="text-gray-500">24h Change</span>
            <span className="text-green-500 ml-2 font-mono">+18.5%</span>
          </div>
          <div>
            <span className="text-gray-500">24h High</span>
            <span className="text-white ml-2 font-mono">1.42</span>
          </div>
          <div>
            <span className="text-gray-500">24h Low</span>
            <span className="text-white ml-2 font-mono">1.08</span>
          </div>
          <div>
            <span className="text-gray-500">24h Volume</span>
            <span className="text-white ml-2 font-mono">892,543 BAPPS</span>
          </div>
        </div>
      </header>

      {/* Trading Interface */}
      <div className="flex h-[calc(100vh-120px)]">
        {/* Left Panel - Chart & Orderbook */}
        <div className="flex-1 flex flex-col">
          {/* TradingView Chart */}
          <div className="flex-1 bg-[#0a0a0a] border-r border-b border-[#2a2a2a] p-4">
            <div className="h-full flex items-center justify-center border-2 border-dashed border-[#2a2a2a] rounded-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">TradingView Chart</h3>
                <p className="text-gray-500">Professional charting with 100+ indicators</p>
                <p className="text-sm text-gray-600 mt-2">Candlestick, Line, Bars, Heikin Ashi</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="h-80 flex">
            {/* Order Book */}
            <div className="w-1/2 bg-[#0a0a0a] border-r border-[#2a2a2a] p-4">
              <h3 className="text-sm font-semibold mb-3 text-gray-400">ORDER BOOK</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-xs text-gray-500 mb-2">
                  <span>Price (BSV)</span>
                  <span className="text-right">Amount</span>
                  <span className="text-right">Total</span>
                </div>
                {/* Sell Orders */}
                {[1.32, 1.31, 1.30, 1.29, 1.28].map(price => (
                  <div key={price} className="grid grid-cols-3 text-xs hover:bg-[#1a1a1a]">
                    <span className="text-red-400 font-mono">{price.toFixed(2)}</span>
                    <span className="text-right text-gray-400">{(Math.random() * 1000).toFixed(0)}</span>
                    <span className="text-right text-gray-400">{(Math.random() * 1000).toFixed(2)}</span>
                  </div>
                ))}
                {/* Spread */}
                <div className="py-2 text-center">
                  <span className="text-lg font-bold text-white">1.28</span>
                  <span className="text-xs text-gray-500 ml-2">Spread: 0.01</span>
                </div>
                {/* Buy Orders */}
                {[1.27, 1.26, 1.25, 1.24, 1.23].map(price => (
                  <div key={price} className="grid grid-cols-3 text-xs hover:bg-[#1a1a1a]">
                    <span className="text-green-400 font-mono">{price.toFixed(2)}</span>
                    <span className="text-right text-gray-400">{(Math.random() * 1000).toFixed(0)}</span>
                    <span className="text-right text-gray-400">{(Math.random() * 1000).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Trades */}
            <div className="w-1/2 bg-[#0a0a0a] border-r border-[#2a2a2a] p-4">
              <h3 className="text-sm font-semibold mb-3 text-gray-400">RECENT TRADES</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-xs text-gray-500 mb-2">
                  <span>Price</span>
                  <span className="text-right">Amount</span>
                  <span className="text-right">Time</span>
                </div>
                {Array.from({length: 12}, (_, i) => ({
                  price: (1.28 + (Math.random() - 0.5) * 0.1),
                  amount: Math.random() * 500,
                  time: `${14 - i}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
                  type: Math.random() > 0.5 ? 'buy' : 'sell'
                })).map((trade, i) => (
                  <div key={i} className="grid grid-cols-3 text-xs hover:bg-[#1a1a1a]">
                    <span className={`font-mono ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                      {trade.price.toFixed(3)}
                    </span>
                    <span className="text-right text-gray-400">{trade.amount.toFixed(2)}</span>
                    <span className="text-right text-gray-600">{trade.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Trading Form */}
        <div className="w-80 bg-[#0a0a0a] border-l border-[#2a2a2a]">
          {/* Trading Tabs */}
          <div className="flex border-b border-[#2a2a2a]">
            <button 
              onClick={() => setActiveTab('spot')}
              className={`flex-1 py-3 text-sm font-medium ${activeTab === 'spot' ? 'text-white border-b-2 border-[#10B981]' : 'text-gray-500'}`}
            >
              Spot
            </button>
            <button 
              onClick={() => setActiveTab('pro')}
              className={`flex-1 py-3 text-sm font-medium ${activeTab === 'pro' ? 'text-white border-b-2 border-[#10B981]' : 'text-gray-500'}`}
            >
              Pro
            </button>
            <button 
              onClick={() => setActiveTab('otc')}
              className={`flex-1 py-3 text-sm font-medium ${activeTab === 'otc' ? 'text-white border-b-2 border-[#10B981]' : 'text-gray-500'}`}
            >
              OTC
            </button>
          </div>

          {/* Order Form */}
          <div className="p-4">
            {/* Buy/Sell Toggle */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button className="py-2 bg-green-600 hover:bg-green-500 rounded font-medium">
                Buy BAPPS
              </button>
              <button className="py-2 bg-[#1a1a1a] hover:bg-red-600 rounded font-medium">
                Sell BAPPS
              </button>
            </div>

            {/* Order Type */}
            <div className="mb-4">
              <label className="text-xs text-gray-500 mb-2 block">Order Type</label>
              <select className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded px-3 py-2 text-sm">
                <option>Limit</option>
                <option>Market</option>
                <option>Stop-Limit</option>
                <option>OCO</option>
              </select>
            </div>

            {/* Price Input */}
            <div className="mb-4">
              <label className="text-xs text-gray-500 mb-2 block">Price</label>
              <div className="relative">
                <input 
                  type="number" 
                  placeholder="1.28"
                  className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded px-3 py-2 pr-12 text-sm"
                />
                <span className="absolute right-3 top-2.5 text-sm text-gray-500">BSV</span>
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-4">
              <label className="text-xs text-gray-500 mb-2 block">Amount</label>
              <div className="relative">
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded px-3 py-2 pr-16 text-sm"
                />
                <span className="absolute right-3 top-2.5 text-sm text-gray-500">BAPPS</span>
              </div>
              {/* Percentage Buttons */}
              <div className="grid grid-cols-4 gap-1 mt-2">
                {['25%', '50%', '75%', '100%'].map(pct => (
                  <button key={pct} className="py-1 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded text-xs">
                    {pct}
                  </button>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="mb-4 p-3 bg-[#1a1a1a] rounded">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total</span>
                <span className="font-mono">0.00 BSV</span>
              </div>
            </div>

            {/* Available Balance */}
            <div className="mb-4 text-xs">
              <div className="flex justify-between mb-1">
                <span className="text-gray-500">Available</span>
                <span className="text-white">0.00 BSV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">In Order</span>
                <span className="text-gray-400">0.00 BSV</span>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded font-semibold">
              Place Buy Order
            </button>
          </div>

          {/* Open Orders */}
          <div className="border-t border-[#2a2a2a] p-4">
            <h3 className="text-sm font-semibold mb-3 text-gray-400">OPEN ORDERS (0)</h3>
            <p className="text-xs text-gray-600 text-center py-4">No open orders</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}