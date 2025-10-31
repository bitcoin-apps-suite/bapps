'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

interface Token {
  id: string
  name: string
  symbol: string
  displaySymbol: string
  price: number
  change24h: number
  volume24h: string
  marketCap: string
  icon?: string
  color: string
  image?: string
}

const tokens: Token[] = [
  {
    id: 'bapps',
    name: 'Bitcoin Office',
    symbol: '$BAPPS',
    displaySymbol: '$BAPPS',
    price: 1.28,
    change24h: 18.5,
    volume24h: '$892K',
    marketCap: '$12.8M',
    color: '#0094FF',
    image: '/bitcoin-apps-logo.jpg'
  },
  {
    id: 'bwriter',
    name: 'Bitcoin Writer',
    symbol: '$bWriter',
    displaySymbol: '$₿Writer',
    price: 0.42,
    change24h: 12.5,
    volume24h: '$142K',
    marketCap: '$2.4M',
    color: '#FF6B00',
    image: '/bitcoin-writer-logo.jpg'
  },
  {
    id: 'bsheets',
    name: 'Bitcoin Spreadsheets',
    symbol: '$bSheets',
    displaySymbol: '$₿Sheets',
    price: 0.28,
    change24h: 8.9,
    volume24h: '$67K',
    marketCap: '$1.2M',
    image: '/bitcoin-sheets-icon.png',
    color: '#3b82f6'
  },
  {
    id: 'bdrive',
    name: 'Bitcoin Drive',
    symbol: '$bDrive',
    displaySymbol: '$₿Drive',
    price: 0.31,
    change24h: -3.2,
    volume24h: '$89K',
    marketCap: '$1.8M',
    image: '/app-images/bitcoin-drive.jpg',
    color: '#22c55e'
  },
  {
    id: 'bemail',
    name: 'Bitcoin Email',
    symbol: '$bMail',
    displaySymbol: '$₿Mail',
    price: 0.24,
    change24h: 5.7,
    volume24h: '$54K',
    marketCap: '$1.1M',
    image: '/bitcoin-email.jpg',
    color: '#9333EA'
  },
  {
    id: 'bmusic',
    name: 'Bitcoin Music',
    symbol: '$bMusic',
    displaySymbol: '$₿Music',
    price: 0.37,
    change24h: 12.8,
    volume24h: '$68K',
    marketCap: '$1.4M',
    image: '/bitcoin-music-icon.jpg',
    color: '#EC4899'
  },
  {
    id: 'bexchange',
    name: 'Bitcoin Exchange',
    symbol: '$bExchange',
    displaySymbol: '$₿Exchange',
    price: 0.89,
    change24h: 24.3,
    volume24h: '$458K',
    marketCap: '$5.2M',
    icon: 'Ex',
    color: '#10B981'
  },
  {
    id: 'senseii',
    name: 'Senseii',
    symbol: '$SENSEII',
    displaySymbol: '$SENSEII',
    price: 0.19,
    change24h: 15.3,
    volume24h: '$42K',
    marketCap: '$900K',
    image: '/senseii.png',
    color: '#000000'
  },
  {
    id: 'cash',
    name: 'Cashboard',
    symbol: '$CASH',
    displaySymbol: '$CASH',
    price: 0.38,
    change24h: 7.2,
    volume24h: '$78K',
    marketCap: '$1.5M',
    image: '/cashboard-app-store.png',
    color: '#059669'
  }
]

export default function ExchangePage() {
  const router = useRouter()
  const [selectedToken, setSelectedToken] = useState(tokens[0])
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  const calculateTotal = () => {
    const amountNum = parseFloat(amount) || 0
    const priceNum = parseFloat(price) || selectedToken.price
    return (amountNum * priceNum).toFixed(4)
  }

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
              <div className="text-2xl">💱</div>
              <div>
                <h2 className="text-xl font-light">$BExchange</h2>
                <p className="text-xs text-gray-500">Central Trading Hub for Bitcoin Apps</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Trading Interface */}
      <div className="flex flex-col lg:flex-row">
        {/* Token List Sidebar */}
        <div className="lg:w-80 border-r border-[#2a2a2a] p-4 h-[calc(100vh-73px)] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">All Tokens</h3>
          <div className="space-y-2">
            {tokens.map((token) => (
              <button
                key={token.id}
                onClick={() => setSelectedToken(token)}
                className={`w-full p-3 rounded-lg border transition-all ${
                  selectedToken.id === token.id 
                    ? 'bg-[#1a1a1a] border-[#0094FF]' 
                    : 'bg-[#0a0a0a] border-[#2a2a2a] hover:bg-[#1a1a1a]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold relative overflow-hidden"
                      style={{ backgroundColor: token.image ? undefined : token.color }}
                    >
                      {token.image ? (
                        <Image
                          src={token.image}
                          alt={token.name}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      ) : (
                        <span className="text-sm">{token.icon}</span>
                      )}
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-sm">{token.displaySymbol}</div>
                      <div className="text-xs text-gray-500">{token.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono">${token.price.toFixed(3)}</div>
                    <div className={`text-xs font-mono ${
                      token.change24h > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {token.change24h > 0 ? '+' : ''}{token.change24h}%
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Trading Panel */}
        <div className="flex-1 p-8">
          {/* Token Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold relative overflow-hidden"
                  style={{ backgroundColor: selectedToken.image ? undefined : selectedToken.color }}
                >
                  {selectedToken.image ? (
                    <Image
                      src={selectedToken.image}
                      alt={selectedToken.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  ) : (
                    <span className="text-2xl">{selectedToken.icon}</span>
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{selectedToken.displaySymbol}</h1>
                  <p className="text-gray-400">{selectedToken.name}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-mono font-bold">${selectedToken.price.toFixed(3)}</div>
                <div className={`text-lg font-mono ${
                  selectedToken.change24h > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {selectedToken.change24h > 0 ? '+' : ''}{selectedToken.change24h}% (24h)
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#0a0a0a] rounded-lg">
              <div>
                <div className="text-xs text-gray-500">Market Cap</div>
                <div className="text-lg font-mono">{selectedToken.marketCap}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">24h Volume</div>
                <div className="text-lg font-mono">{selectedToken.volume24h}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">24h High</div>
                <div className="text-lg font-mono">${(selectedToken.price * 1.15).toFixed(3)}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">24h Low</div>
                <div className="text-lg font-mono">${(selectedToken.price * 0.92).toFixed(3)}</div>
              </div>
            </div>
          </div>

          {/* Trading Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-6">
              <div className="flex mb-6">
                <button
                  onClick={() => setOrderType('buy')}
                  className={`flex-1 py-2 rounded-l-lg font-medium transition-colors ${
                    orderType === 'buy' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-[#1a1a1a] text-gray-400'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setOrderType('sell')}
                  className={`flex-1 py-2 rounded-r-lg font-medium transition-colors ${
                    orderType === 'sell' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-[#1a1a1a] text-gray-400'
                  }`}
                >
                  Sell
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Amount ({selectedToken.displaySymbol})</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#0094FF]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Price (USD)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder={selectedToken.price.toFixed(3)}
                    className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#0094FF]"
                  />
                </div>

                <div className="pt-4 border-t border-[#2a2a2a]">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Total</span>
                    <span className="text-xl font-mono font-bold">${calculateTotal()}</span>
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    orderType === 'buy'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400'
                      : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400'
                  } text-white`}>
                    {orderType === 'buy' ? 'Buy' : 'Sell'} {selectedToken.displaySymbol}
                  </button>
                </div>
              </div>
            </div>

            {/* Order Book */}
            <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Order Book</h3>
              
              <div className="space-y-4">
                {/* Sell Orders */}
                <div>
                  <div className="text-xs text-gray-500 mb-2">SELL ORDERS</div>
                  <div className="space-y-1">
                    {[0.445, 0.442, 0.438, 0.435, 0.432].map((price, i) => (
                      <div key={`sell-${i}`} className="flex justify-between text-sm">
                        <span className="text-red-400 font-mono">${price.toFixed(3)}</span>
                        <span className="text-gray-400 font-mono">{(Math.random() * 1000).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Price */}
                <div className="py-2 border-y border-[#3a3a3a]">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Last Price</span>
                    <span className="text-lg font-mono font-bold text-white">
                      ${selectedToken.price.toFixed(3)}
                    </span>
                  </div>
                </div>

                {/* Buy Orders */}
                <div>
                  <div className="text-xs text-gray-500 mb-2">BUY ORDERS</div>
                  <div className="space-y-1">
                    {[0.418, 0.415, 0.412, 0.408, 0.405].map((price, i) => (
                      <div key={`buy-${i}`} className="flex justify-between text-sm">
                        <span className="text-green-400 font-mono">${price.toFixed(3)}</span>
                        <span className="text-gray-400 font-mono">{(Math.random() * 1000).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Trades */}
          <div className="mt-8 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Trades</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-[#2a2a2a]">
                    <th className="pb-2 text-xs text-gray-500">Time</th>
                    <th className="pb-2 text-xs text-gray-500">Type</th>
                    <th className="pb-2 text-xs text-gray-500">Price</th>
                    <th className="pb-2 text-xs text-gray-500">Amount</th>
                    <th className="pb-2 text-xs text-gray-500">Total</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { time: '12:34:56', type: 'buy', price: 0.423, amount: 125.50, total: 53.09 },
                    { time: '12:34:45', type: 'sell', price: 0.421, amount: 89.25, total: 37.57 },
                    { time: '12:34:32', type: 'buy', price: 0.424, amount: 210.00, total: 89.04 },
                    { time: '12:34:28', type: 'buy', price: 0.422, amount: 45.75, total: 19.31 },
                    { time: '12:34:15', type: 'sell', price: 0.420, amount: 178.90, total: 75.14 },
                  ].map((trade, i) => (
                    <tr key={i} className="border-b border-[#1a1a1a]">
                      <td className="py-2 text-gray-400">{trade.time}</td>
                      <td className={`py-2 ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.type.toUpperCase()}
                      </td>
                      <td className="py-2 font-mono">${trade.price.toFixed(3)}</td>
                      <td className="py-2 font-mono">{trade.amount.toFixed(2)}</td>
                      <td className="py-2 font-mono">${trade.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}