'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

export default function AMMPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'swap' | 'liquidity' | 'farm'>('swap')
  const [swapAmount, setSwapAmount] = useState('')
  const [selectedFromToken, setSelectedFromToken] = useState('BSV')
  const [selectedToToken, setSelectedToToken] = useState('BAPPS')

  const tokens = [
    { symbol: 'BSV', name: 'Bitcoin SV', balance: '10.5' },
    { symbol: 'BAPPS', name: 'Bitcoin Apps', balance: '1,250' },
    { symbol: 'BWRITER', name: 'Bitcoin Writer', balance: '500' },
    { symbol: 'BSHEETS', name: 'Bitcoin Sheets', balance: '750' },
  ]

  const pools = [
    { pair: 'BAPPS/BSV', tvl: '$2.4M', apr: '127%', your: '$0' },
    { pair: 'BWRITER/BSV', tvl: '$1.8M', apr: '89%', your: '$0' },
    { pair: 'BSHEETS/BSV', tvl: '$1.2M', apr: '76%', your: '$0' },
    { pair: 'BAPPS/BWRITER', tvl: '$890K', apr: '156%', your: '$0' },
  ]

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
              <div className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">∞</span>
              </div>
              <div>
                <h2 className="text-xl font-light">Uniswap-style AMM</h2>
                <p className="text-xs text-gray-500">Automated Market Maker for BSV Tokens</p>
              </div>
            </div>
          </div>
          <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            CONCEPT
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-thin mb-6">
            Decentralized
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#EF4444] bg-clip-text text-transparent"> Liquidity Protocol</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Swap, provide liquidity, and earn yield on Bitcoin SV tokens without order books.
            Powered by smart contracts and automated pricing algorithms.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-purple-400">$12.4M</div>
              <div className="text-xs text-gray-500">Total Value Locked</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">$892K</div>
              <div className="text-xs text-gray-500">24h Volume</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">127%</div>
              <div className="text-xs text-gray-500">Max APR</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">0.3%</div>
              <div className="text-xs text-gray-500">Swap Fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interface */}
      <section className="px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Tabs */}
          <div className="flex bg-[#1a1a1a] rounded-xl p-1 mb-8">
            <button
              onClick={() => setActiveTab('swap')}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'swap' 
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Swap
            </button>
            <button
              onClick={() => setActiveTab('liquidity')}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'liquidity' 
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Liquidity
            </button>
            <button
              onClick={() => setActiveTab('farm')}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'farm' 
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Farm
            </button>
          </div>

          {/* Swap Interface */}
          {activeTab === 'swap' && (
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
              <h3 className="text-xl font-semibold mb-6">Swap Tokens</h3>
              
              {/* From Token */}
              <div className="mb-4">
                <label className="text-sm text-gray-400 mb-2 block">From</label>
                <div className="bg-[#0a0a0a] rounded-lg p-4 border border-[#2a2a2a]">
                  <div className="flex justify-between items-center mb-2">
                    <input
                      type="number"
                      placeholder="0.0"
                      value={swapAmount}
                      onChange={(e) => setSwapAmount(e.target.value)}
                      className="bg-transparent text-2xl font-mono outline-none w-full"
                    />
                    <select 
                      value={selectedFromToken}
                      onChange={(e) => setSelectedFromToken(e.target.value)}
                      className="bg-[#2a2a2a] rounded px-3 py-1 text-sm"
                    >
                      {tokens.map(token => (
                        <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text-sm text-gray-500">
                    Balance: {tokens.find(t => t.symbol === selectedFromToken)?.balance}
                  </div>
                </div>
              </div>

              {/* Swap Icon */}
              <div className="flex justify-center my-2">
                <button className="w-10 h-10 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">↓</span>
                </button>
              </div>

              {/* To Token */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">To</label>
                <div className="bg-[#0a0a0a] rounded-lg p-4 border border-[#2a2a2a]">
                  <div className="flex justify-between items-center mb-2">
                    <input
                      type="number"
                      placeholder="0.0"
                      value={swapAmount ? (parseFloat(swapAmount) * 1.28).toFixed(2) : ''}
                      readOnly
                      className="bg-transparent text-2xl font-mono outline-none w-full"
                    />
                    <select 
                      value={selectedToToken}
                      onChange={(e) => setSelectedToToken(e.target.value)}
                      className="bg-[#2a2a2a] rounded px-3 py-1 text-sm"
                    >
                      {tokens.map(token => (
                        <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text-sm text-gray-500">
                    Balance: {tokens.find(t => t.symbol === selectedToToken)?.balance}
                  </div>
                </div>
              </div>

              {/* Price Info */}
              <div className="bg-[#0a0a0a] rounded-lg p-3 mb-6 text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Price</span>
                  <span>1 {selectedFromToken} = 1.28 {selectedToToken}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Price Impact</span>
                  <span className="text-green-400">&lt;0.01%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Liquidity Provider Fee</span>
                  <span>0.3%</span>
                </div>
              </div>

              {/* Swap Button */}
              <button className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6B21A8] rounded-lg font-semibold transition-all">
                Connect Wallet to Swap
              </button>
            </div>
          )}

          {/* Liquidity Interface */}
          {activeTab === 'liquidity' && (
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
              <h3 className="text-xl font-semibold mb-6">Your Liquidity Positions</h3>
              
              <div className="bg-[#0a0a0a] rounded-lg p-8 text-center mb-6">
                <div className="text-5xl mb-4">💧</div>
                <p className="text-gray-400 mb-4">No liquidity positions found</p>
                <button className="px-6 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-lg font-medium">
                  Add Liquidity
                </button>
              </div>

              <h4 className="text-lg font-semibold mb-4">Available Pools</h4>
              <div className="space-y-3">
                {pools.map(pool => (
                  <div key={pool.pair} className="bg-[#0a0a0a] rounded-lg p-4 border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{pool.pair}</div>
                        <div className="text-sm text-gray-500">TVL: {pool.tvl}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{pool.apr} APR</div>
                        <button className="text-sm text-purple-400 hover:text-purple-300">
                          Add Liquidity →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Farming Interface */}
          {activeTab === 'farm' && (
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
              <h3 className="text-xl font-semibold mb-6">Yield Farming</h3>
              
              <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-2">🌾 Active Farms</h4>
                <p className="text-sm text-gray-400 mb-4">Stake LP tokens to earn BAPPS rewards</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Total Value Locked</span>
                    <div className="text-xl font-bold">$8.7M</div>
                  </div>
                  <div>
                    <span className="text-gray-400">BAPPS Distributed</span>
                    <div className="text-xl font-bold">2.4M</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {pools.map(pool => (
                  <div key={pool.pair} className="bg-[#0a0a0a] rounded-lg p-4 border border-[#2a2a2a]">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {pool.pair}
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">
                            2x Rewards
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">Earn BAPPS</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{pool.apr}</div>
                        <div className="text-xs text-gray-500">APR</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded text-sm transition-colors">
                        Stake LP
                      </button>
                      <button className="flex-1 py-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded text-sm transition-colors">
                        Harvest
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-16 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">How AMM Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Constant Product Formula</h3>
              <p className="text-sm text-gray-400">
                x * y = k ensures liquidity at all price points through automated pricing
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#EC4899] to-[#DB2777] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Liquidity Pools</h3>
              <p className="text-sm text-gray-400">
                Provide equal value of two tokens to earn 0.3% on every trade
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#EF4444] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Yield Farming</h3>
              <p className="text-sm text-gray-400">
                Stake LP tokens to earn additional BAPPS rewards on top of trading fees
              </p>
            </div>
          </div>

          {/* Smart Contract Example */}
          <div className="mt-12 bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
            <h3 className="text-lg font-semibold mb-4">BSV Smart Contract Example</h3>
            <pre className="bg-[#0a0a0a] p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">{`contract LiquidityPool {
  public function swap(
    tokenIn: Token,
    amountIn: u256,
    tokenOut: Token,
    minAmountOut: u256
  ) {
    require(amountIn > 0, "Invalid amount");
    
    // Calculate output amount using x*y=k
    let reserveIn = getReserve(tokenIn);
    let reserveOut = getReserve(tokenOut);
    let amountOut = getAmountOut(amountIn, reserveIn, reserveOut);
    
    require(amountOut >= minAmountOut, "Slippage too high");
    
    // Execute swap
    tokenIn.transferFrom(msg.sender, this.address, amountIn);
    tokenOut.transfer(msg.sender, amountOut);
    
    // Update reserves
    updateReserves(tokenIn, tokenOut);
    
    emit Swap(msg.sender, tokenIn, amountIn, tokenOut, amountOut);
  }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="px-8 py-16 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-orange-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">In Development</h2>
          <p className="text-xl text-gray-300 mb-8">
            AMM functionality is currently in concept phase. Join our community to stay updated on development progress.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              disabled
              className="px-8 py-3 bg-gray-800 text-gray-500 rounded-lg font-medium cursor-not-allowed"
            >
              Coming Soon
            </button>
            <button 
              onClick={() => router.push('/exchange/options')}
              className="px-8 py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg font-medium transition-colors"
            >
              View Other Options
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}