'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

export default function BisqExchangePage() {
  const router = useRouter()
  const [activeView, setActiveView] = useState<'offers' | 'create' | 'portfolio'>('offers')
  const [selectedOffer, setSelectedOffer] = useState<any>(null)

  const offers = [
    {
      id: 1,
      type: 'sell',
      token: 'BAPPS',
      amount: '500',
      price: '1.32',
      paymentMethod: 'BSV Direct',
      trader: 'Anonymous_7x3f',
      reputation: 98,
      minAmount: '50',
      maxAmount: '500',
      escrow: true
    },
    {
      id: 2,
      type: 'buy',
      token: 'BWRITER',
      amount: '1200',
      price: '0.43',
      paymentMethod: 'BSV Lightning',
      trader: 'BitTrader_9k2',
      reputation: 95,
      minAmount: '100',
      maxAmount: '1200',
      escrow: true
    },
    {
      id: 3,
      type: 'sell',
      token: 'BSHEETS',
      amount: '800',
      price: '0.29',
      paymentMethod: 'BSV Direct',
      trader: 'CryptoMerchant',
      reputation: 100,
      minAmount: '20',
      maxAmount: '800',
      escrow: true
    },
    {
      id: 4,
      type: 'buy',
      token: 'BAPPS',
      amount: '2000',
      price: '1.25',
      paymentMethod: 'Bank Transfer',
      trader: 'P2P_Master',
      reputation: 92,
      minAmount: '200',
      maxAmount: '2000',
      escrow: true
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Bisq-style Header */}
      <header className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border-b border-[#3a3a3a]">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => router.push('/exchange/options')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#EC4899] to-[#DB2777] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Bisq P2P Exchange</h2>
                  <p className="text-xs text-gray-500">Decentralized • No KYC • Tor Enabled</p>
                </div>
              </div>
            </div>

            {/* Network Status */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Tor Connected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">12 Peers</span>
              </div>
              <button className="px-4 py-2 bg-[#EC4899] hover:bg-[#DB2777] rounded-lg font-medium transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-8 flex space-x-6 border-t border-[#3a3a3a]">
          <button
            onClick={() => setActiveView('offers')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeView === 'offers' 
                ? 'border-[#EC4899] text-white' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Market Offers
          </button>
          <button
            onClick={() => setActiveView('create')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeView === 'create' 
                ? 'border-[#EC4899] text-white' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Create Offer
          </button>
          <button
            onClick={() => setActiveView('portfolio')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeView === 'portfolio' 
                ? 'border-[#EC4899] text-white' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            My Trades
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-8 py-8">
        {activeView === 'offers' && (
          <div>
            {/* Filter Bar */}
            <div className="mb-6 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]">
              <div className="flex items-center space-x-4">
                <select className="bg-[#0a0a0a] border border-[#3a3a3a] rounded px-4 py-2 text-sm">
                  <option>All Tokens</option>
                  <option>BAPPS</option>
                  <option>BWRITER</option>
                  <option>BSHEETS</option>
                </select>
                <select className="bg-[#0a0a0a] border border-[#3a3a3a] rounded px-4 py-2 text-sm">
                  <option>All Payment Methods</option>
                  <option>BSV Direct</option>
                  <option>BSV Lightning</option>
                  <option>Bank Transfer</option>
                </select>
                <input
                  type="text"
                  placeholder="Min amount..."
                  className="bg-[#0a0a0a] border border-[#3a3a3a] rounded px-4 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Max amount..."
                  className="bg-[#0a0a0a] border border-[#3a3a3a] rounded px-4 py-2 text-sm"
                />
                <button className="px-4 py-2 bg-[#EC4899] hover:bg-[#DB2777] rounded text-sm font-medium transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Offers List */}
            <div className="space-y-4">
              {offers.map(offer => (
                <div 
                  key={offer.id}
                  className="p-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg border border-[#3a3a3a] transition-colors cursor-pointer"
                  onClick={() => setSelectedOffer(offer)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      {/* Offer Type */}
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        offer.type === 'buy' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {offer.type.toUpperCase()}
                      </div>

                      {/* Token Info */}
                      <div>
                        <h3 className="text-lg font-semibold">{offer.amount} {offer.token}</h3>
                        <p className="text-sm text-gray-400">@ {offer.price} BSV per token</p>
                      </div>

                      {/* Payment Method */}
                      <div className="px-3 py-1 bg-[#0a0a0a] rounded text-sm">
                        {offer.paymentMethod}
                      </div>

                      {/* Trader Info */}
                      <div>
                        <p className="text-sm font-medium">{offer.trader}</p>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-500">Reputation:</span>
                          <span className={`text-xs font-bold ${
                            offer.reputation >= 95 ? 'text-green-400' : 
                            offer.reputation >= 80 ? 'text-yellow-400' : 
                            'text-red-400'
                          }`}>
                            {offer.reputation}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="text-right">
                      <p className="text-sm text-gray-400 mb-2">
                        {offer.minAmount} - {offer.maxAmount} {offer.token}
                      </p>
                      <button className="px-6 py-2 bg-[#EC4899] hover:bg-[#DB2777] rounded-lg font-medium transition-colors">
                        Take Offer
                      </button>
                    </div>
                  </div>

                  {/* Escrow Badge */}
                  {offer.escrow && (
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        🔒 2-of-2 Multisig Escrow
                      </span>
                      <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded">
                        🛡️ Arbitration Available
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'create' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] p-8">
              <h2 className="text-2xl font-semibold mb-6">Create P2P Offer</h2>
              
              <div className="space-y-6">
                {/* Buy/Sell Toggle */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">I want to</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="py-3 bg-green-600 hover:bg-green-500 rounded-lg font-medium">
                      Buy Tokens
                    </button>
                    <button className="py-3 bg-[#0a0a0a] hover:bg-red-600 rounded-lg font-medium">
                      Sell Tokens
                    </button>
                  </div>
                </div>

                {/* Token Selection */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Token</label>
                  <select className="w-full bg-[#0a0a0a] border border-[#3a3a3a] rounded-lg px-4 py-3">
                    <option>BAPPS - Bitcoin Apps Suite</option>
                    <option>BWRITER - Bitcoin Writer</option>
                    <option>BSHEETS - Bitcoin Sheets</option>
                  </select>
                </div>

                {/* Amount */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Min Amount</label>
                    <input
                      type="number"
                      placeholder="10"
                      className="w-full bg-[#0a0a0a] border border-[#3a3a3a] rounded-lg px-4 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Max Amount</label>
                    <input
                      type="number"
                      placeholder="1000"
                      className="w-full bg-[#0a0a0a] border border-[#3a3a3a] rounded-lg px-4 py-3"
                    />
                  </div>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Price per Token (BSV)</label>
                  <input
                    type="number"
                    placeholder="1.28"
                    className="w-full bg-[#0a0a0a] border border-[#3a3a3a] rounded-lg px-4 py-3"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Payment Method</label>
                  <select className="w-full bg-[#0a0a0a] border border-[#3a3a3a] rounded-lg px-4 py-3">
                    <option>BSV Direct Transfer</option>
                    <option>BSV Lightning Network</option>
                    <option>Bank Transfer (SEPA)</option>
                    <option>Revolut</option>
                  </select>
                </div>

                {/* Security Deposit */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Security Deposit</label>
                  <p className="text-xs text-gray-500 mb-2">Both parties lock funds in escrow</p>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="15"
                      max="50"
                      defaultValue="25"
                      className="flex-1"
                    />
                    <span className="text-sm font-mono">25%</span>
                  </div>
                </div>

                {/* Submit */}
                <button className="w-full py-3 bg-gradient-to-r from-[#EC4899] to-[#DB2777] hover:from-[#DB2777] hover:to-[#BE185D] rounded-lg font-semibold transition-all">
                  Create Offer
                </button>
              </div>
            </div>
          </div>
        )}

        {activeView === 'portfolio' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">My Trades</h2>
            <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] p-8">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">No Active Trades</h3>
                <p className="text-gray-400 mb-6">Your P2P trades will appear here</p>
                <button 
                  onClick={() => setActiveView('offers')}
                  className="px-6 py-2 bg-[#EC4899] hover:bg-[#DB2777] rounded-lg font-medium transition-colors"
                >
                  Browse Offers
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Selected Offer Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedOffer(null)}>
          <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] p-8 max-w-lg" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-semibold mb-4">Trade Details</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className={selectedOffer.type === 'buy' ? 'text-green-400' : 'text-red-400'}>
                  {selectedOffer.type.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Token:</span>
                <span>{selectedOffer.token}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Amount:</span>
                <span>{selectedOffer.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Price:</span>
                <span>{selectedOffer.price} BSV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total:</span>
                <span className="font-bold">{(parseFloat(selectedOffer.amount) * parseFloat(selectedOffer.price)).toFixed(2)} BSV</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setSelectedOffer(null)}
                className="flex-1 py-2 bg-[#0a0a0a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 py-2 bg-[#EC4899] hover:bg-[#DB2777] rounded-lg font-medium transition-colors">
                Start Trade
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}