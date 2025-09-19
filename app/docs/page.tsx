'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Contributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
  merged_prs: number
  estimated_tokens: number
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [contributors, setContributors] = useState<Contributor[]>([])
  const [loadingContributors, setLoadingContributors] = useState(true)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  useEffect(() => {
    fetchContributors()
    // Refresh contributors data every 5 minutes
    const interval = setInterval(fetchContributors, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const fetchContributors = async () => {
    try {
      const response = await fetch('/api/contributors')
      if (response.ok) {
        const data = await response.json()
        setContributors(data)
      }
    } catch (error) {
      console.error('Failed to fetch contributors:', error)
    } finally {
      setLoadingContributors(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Developer Taskbar - not sticky, disappears on scroll */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a] px-8 py-2">
        <div className="flex items-center justify-center space-x-8 text-sm">
          <Link href="https://github.com/bitcoin-apps-suite/bapps" className="hover:text-[#0094FF] transition-colors">
            GitHub
          </Link>
          <span className="text-[#3a3a3a]">|</span>
          <Link href="/docs" className="text-[#0094FF]">
            Developer Docs
          </Link>
          <span className="text-[#3a3a3a]">|</span>
          <Link href="/token" className="hover:text-[#0094FF] transition-colors">
            <span className="text-[#0094FF] font-bold">$BAPPS</span> Token
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#252525] border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/bitcoin-apps-logo.jpg"
                  alt="Bitcoin Apps"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold">Bitcoin Apps Suite</h1>
                <p className="text-xs text-gray-400">Developer Documentation</p>
              </div>
            </Link>
            
            {/* Placeholder for mobile */}
            <div className="w-10 lg:hidden"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-12">
        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}
        
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Navigation - Mobile */}
          <aside className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-[#1a1a1a] transform transition-transform duration-200 ${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="p-4 border-b border-[#3a3a3a]">
              <h2 className="text-lg font-semibold">Documentation</h2>
            </div>
            <nav className="p-4 space-y-1">
              <button
                onClick={() => {
                  setActiveSection('overview')
                  setMobileSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'overview' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => {
                  setActiveSection('rewards')
                  setMobileSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'rewards' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                $BAPPS Rewards
              </button>
              <button
                onClick={() => {
                  setActiveSection('contributing')
                  setMobileSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'contributing' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                How to Contribute
              </button>
              <button
                onClick={() => {
                  setActiveSection('guidelines')
                  setMobileSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'guidelines' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                Code Guidelines
              </button>
              <button
                onClick={() => {
                  setActiveSection('allocation')
                  setMobileSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'allocation' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                Token Allocation
              </button>
              <button
                onClick={() => {
                  setActiveSection('faq')
                  setMobileSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'faq' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  setActiveSection('contributors')
                  setMobileSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'contributors' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                Top Contributors
              </button>
            </nav>
          </aside>
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <nav className="sticky top-8 space-y-1">
              <button
                onClick={() => setActiveSection('overview')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'overview' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveSection('rewards')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'rewards' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                $BAPPS Rewards
              </button>
              <button
                onClick={() => setActiveSection('contributing')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'contributing' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                How to Contribute
              </button>
              <button
                onClick={() => setActiveSection('guidelines')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'guidelines' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                Code Guidelines
              </button>
              <button
                onClick={() => setActiveSection('allocation')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'allocation' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                Token Allocation
              </button>
              <button
                onClick={() => setActiveSection('faq')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'faq' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setActiveSection('contributors')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'contributors' ? 'bg-[#0094FF] text-white' : 'text-gray-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                Top Contributors
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-12">
            {activeSection === 'overview' && (
              <section>
                <h1 className="text-4xl font-bold mb-6">Developer Documentation</h1>
                <p className="text-lg text-gray-300 mb-8">
                  Welcome to the Bitcoin Apps Suite developer documentation. Learn how to contribute to our ecosystem
                  and earn <span className="text-[#0094FF] font-bold">$BAPPS</span> tokens for successfully merged pull requests.
                </p>

                <div className="bg-[#252525] rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">What is Bitcoin Apps Suite?</h2>
                  <p className="text-gray-300 mb-4">
                    Bitcoin Apps Suite is an open-source ecosystem of decentralized applications built on Bitcoin blockchain
                    technology. We're creating a "Blockchain Cloud" where every app has its own token, creating a sustainable
                    economic model for developers and users.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#0094FF] mr-2">•</span>
                      <span>16+ decentralized applications across multiple categories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0094FF] mr-2">•</span>
                      <span>Every app has its own $B-prefixed token (e.g., $BWriter, $BDrive)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0094FF] mr-2">•</span>
                      <span>MIT licensed, fork-friendly development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0094FF] mr-2">•</span>
                      <span>Developer rewards through $BAPPS tokens</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-[#252525] rounded-lg p-6 border border-[#3a3a3a]">
                    <h3 className="text-[#0094FF] font-bold mb-2">Open Source</h3>
                    <p className="text-sm text-gray-400">MIT licensed code, welcoming all contributions</p>
                  </div>
                  <div className="bg-[#252525] rounded-lg p-6 border border-[#3a3a3a]">
                    <h3 className="text-[#0094FF] font-bold mb-2">Token Rewards</h3>
                    <p className="text-sm text-gray-400">Earn $BAPPS tokens for merged PRs</p>
                  </div>
                  <div className="bg-[#252525] rounded-lg p-6 border border-[#3a3a3a]">
                    <h3 className="text-[#0094FF] font-bold mb-2">Community Driven</h3>
                    <p className="text-sm text-gray-400">Shape the future of decentralized apps</p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'rewards' && (
              <section>
                <h1 className="text-4xl font-bold mb-6">$BAPPS Token Rewards</h1>
                
                <div className="bg-gradient-to-r from-[#0094FF] to-[#00C896] p-8 rounded-lg mb-8">
                  <h2 className="text-3xl font-bold mb-4">Earn $BAPPS Tokens</h2>
                  <p className="text-xl">
                    Every successfully merged pull request earns you $BAPPS tokens!
                  </p>
                  <p className="mt-4 opacity-90">
                    The amount depends on the impact, quality, and complexity of your contribution.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-[#0094FF] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                        <div>
                          <h4 className="font-semibold mb-1">Fork & Code</h4>
                          <p className="text-gray-400">Fork the repository and implement your feature, fix, or improvement</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#0094FF] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                        <div>
                          <h4 className="font-semibold mb-1">Submit PR</h4>
                          <p className="text-gray-400">Create a pull request with clear description and documentation</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#0094FF] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                        <div>
                          <h4 className="font-semibold mb-1">Review & Merge</h4>
                          <p className="text-gray-400">Your code is reviewed and merged if it meets our standards</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#0094FF] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                        <div>
                          <h4 className="font-semibold mb-1">Receive Tokens</h4>
                          <p className="text-gray-400">$BAPPS tokens are allocated based on your contribution's impact</p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Token Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border border-[#3a3a3a] rounded-lg p-4">
                        <h4 className="text-[#0094FF] font-semibold mb-2">Universal Access</h4>
                        <p className="text-sm text-gray-400">Unlock premium features across all Bitcoin Apps</p>
                      </div>
                      <div className="border border-[#3a3a3a] rounded-lg p-4">
                        <h4 className="text-[#0094FF] font-semibold mb-2">Trading Gateway</h4>
                        <p className="text-sm text-gray-400">Primary trading pair for all app tokens</p>
                      </div>
                      <div className="border border-[#3a3a3a] rounded-lg p-4">
                        <h4 className="text-[#0094FF] font-semibold mb-2">Revenue Sharing</h4>
                        <p className="text-sm text-gray-400">Receive dividends from ecosystem growth</p>
                      </div>
                      <div className="border border-[#3a3a3a] rounded-lg p-4">
                        <h4 className="text-[#0094FF] font-semibold mb-2">Governance Rights</h4>
                        <p className="text-sm text-gray-400">Vote on ecosystem decisions and features</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
                    <h3 className="text-yellow-500 font-semibold mb-2">Important Note</h3>
                    <p className="text-gray-300">
                      Token allocation is at the sole discretion of the Bitcoin Apps Suite team. The amount of tokens
                      awarded depends on various factors including code quality, feature importance, bug severity,
                      and overall impact on the ecosystem. There are no guarantees of token distribution for any
                      particular contribution.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'contributing' && (
              <section>
                <h1 className="text-4xl font-bold mb-6">How to Contribute</h1>
                
                <div className="bg-[#252525] rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Fork the Repository</h3>
                      <div className="bg-[#1a1a1a] rounded-lg p-4 font-mono text-sm">
                        <p className="text-gray-400"># Fork on GitHub, then clone your fork</p>
                        <p>git clone https://github.com/YOUR_USERNAME/bapps.git</p>
                        <p>cd bitcoin-apps-suite</p>
                        <p className="mt-2 text-gray-400"># Add upstream remote</p>
                        <p>git remote add upstream https://github.com/bitcoin-apps-suite/bapps.git</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Set Up Development Environment</h3>
                      <div className="bg-[#1a1a1a] rounded-lg p-4 font-mono text-sm">
                        <p className="text-gray-400"># Install dependencies</p>
                        <p>npm install</p>
                        <p className="mt-2 text-gray-400"># Run development server</p>
                        <p>npm run dev</p>
                        <p className="mt-2 text-gray-400"># Open http://localhost:1000</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Create a Feature Branch</h3>
                      <div className="bg-[#1a1a1a] rounded-lg p-4 font-mono text-sm">
                        <p className="text-gray-400"># Create and checkout new branch</p>
                        <p>git checkout -b feature/your-feature-name</p>
                        <p className="mt-2 text-gray-400"># Or for bug fixes</p>
                        <p>git checkout -b fix/bug-description</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">4. Make Your Changes</h3>
                      <p className="text-gray-400 mb-2">Implement your feature or fix following our code guidelines</p>
                      <ul className="space-y-1 text-gray-400">
                        <li>• Write clean, readable code</li>
                        <li>• Add tests if applicable</li>
                        <li>• Update documentation</li>
                        <li>• Follow existing patterns</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">5. Submit Pull Request</h3>
                      <div className="bg-[#1a1a1a] rounded-lg p-4 font-mono text-sm">
                        <p className="text-gray-400"># Commit your changes</p>
                        <p>git add .</p>
                        <p>git commit -m "feat: add amazing feature"</p>
                        <p className="mt-2 text-gray-400"># Push to your fork</p>
                        <p>git push origin feature/your-feature-name</p>
                        <p className="mt-2 text-gray-400"># Create PR on GitHub</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#252525] rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">What We're Looking For</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-[#0094FF] font-semibold mb-3">High Priority</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Core feature implementation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Performance improvements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Security enhancements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>New app integrations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Token functionality</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-[#0094FF] font-semibold mb-3">Also Valuable</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Bug fixes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>UI/UX improvements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Documentation updates</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Test coverage</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Code refactoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'guidelines' && (
              <section>
                <h1 className="text-4xl font-bold mb-6">Code Guidelines</h1>
                
                <div className="space-y-6">
                  <div className="bg-[#252525] rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-[#0094FF] font-semibold mb-2">Frontend</h3>
                        <ul className="space-y-1 text-gray-400">
                          <li>• Next.js 15.5</li>
                          <li>• React 19</li>
                          <li>• TypeScript</li>
                          <li>• Tailwind CSS</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[#0094FF] font-semibold mb-2">Backend & Tools</h3>
                        <ul className="space-y-1 text-gray-400">
                          <li>• Bitcoin (BSV) blockchain</li>
                          <li>• Vercel deployment</li>
                          <li>• Google/Twitter/HandCash auth</li>
                          <li>• Git version control</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Coding Standards</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">TypeScript</h3>
                        <ul className="space-y-1 text-gray-400">
                          <li>• Use strict type checking</li>
                          <li>• Define interfaces for all props</li>
                          <li>• Avoid `any` type unless absolutely necessary</li>
                          <li>• Use descriptive variable and function names</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">React Components</h3>
                        <ul className="space-y-1 text-gray-400">
                          <li>• Prefer functional components with hooks</li>
                          <li>• Keep components small and focused</li>
                          <li>• Use proper prop validation</li>
                          <li>• Implement error boundaries where needed</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Styling</h3>
                        <ul className="space-y-1 text-gray-400">
                          <li>• Use Tailwind CSS classes</li>
                          <li>• Follow existing color scheme</li>
                          <li>• Maintain consistent spacing</li>
                          <li>• Ensure responsive design</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Commit Messages</h2>
                    <p className="text-gray-400 mb-4">Follow conventional commit format:</p>
                    <div className="bg-[#1a1a1a] rounded-lg p-4 font-mono text-sm">
                      <p className="text-[#0094FF]">feat: add new feature</p>
                      <p className="text-[#00C896]">fix: resolve bug in component</p>
                      <p className="text-yellow-500">docs: update README</p>
                      <p className="text-purple-500">style: format code</p>
                      <p className="text-orange-500">refactor: restructure module</p>
                      <p className="text-red-500">test: add unit tests</p>
                      <p className="text-gray-500">chore: update dependencies</p>
                    </div>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Pull Request Guidelines</h2>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">1.</span>
                        <span>Provide clear title and description</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">2.</span>
                        <span>Reference any related issues</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">3.</span>
                        <span>Include screenshots for UI changes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">4.</span>
                        <span>Ensure all tests pass</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">5.</span>
                        <span>Keep changes focused and atomic</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'allocation' && (
              <section>
                <h1 className="text-4xl font-bold mb-6">Token Allocation</h1>
                
                <div className="bg-gradient-to-r from-[#252525] to-[#2a2a2a] rounded-lg p-8 mb-8">
                  <h2 className="text-3xl font-semibold mb-4">Allocation Criteria</h2>
                  <p className="text-gray-300">
                    $BAPPS tokens are allocated based on the impact and quality of contributions.
                    The exact amount is determined by our team after careful review.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#252525] rounded-lg p-6 border-2 border-[#0094FF]">
                    <h3 className="text-2xl font-bold text-[#0094FF] mb-2">Major Features</h3>
                    <p className="text-3xl font-bold mb-2">250,000 - 500,000</p>
                    <p className="text-gray-400 text-sm">$BAPPS tokens</p>
                    <ul className="mt-4 space-y-1 text-sm text-gray-400">
                      <li>• New app development</li>
                      <li>• Core functionality</li>
                      <li>• Major integrations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#252525] rounded-lg p-6 border-2 border-[#00C896]">
                    <h3 className="text-2xl font-bold text-[#00C896] mb-2">Improvements</h3>
                    <p className="text-3xl font-bold mb-2">50,000 - 150,000</p>
                    <p className="text-gray-400 text-sm">$BAPPS tokens</p>
                    <ul className="mt-4 space-y-1 text-sm text-gray-400">
                      <li>• Performance boosts</li>
                      <li>• UI enhancements</li>
                      <li>• Security patches</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#252525] rounded-lg p-6 border-2 border-yellow-500">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-2">Maintenance</h3>
                    <p className="text-3xl font-bold mb-2">10,000 - 50,000</p>
                    <p className="text-gray-400 text-sm">$BAPPS tokens</p>
                    <ul className="mt-4 space-y-1 text-sm text-gray-400">
                      <li>• Bug fixes</li>
                      <li>• Documentation</li>
                      <li>• Minor updates</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#252525] rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Factors Considered</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#0094FF] rounded-full w-2 h-2 mt-2 mr-4"></div>
                      <div>
                        <h3 className="font-semibold mb-1">Code Quality</h3>
                        <p className="text-gray-400">Clean, efficient, well-documented code earns more tokens</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#0094FF] rounded-full w-2 h-2 mt-2 mr-4"></div>
                      <div>
                        <h3 className="font-semibold mb-1">Impact</h3>
                        <p className="text-gray-400">Features that benefit many users or solve critical problems</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#0094FF] rounded-full w-2 h-2 mt-2 mr-4"></div>
                      <div>
                        <h3 className="font-semibold mb-1">Innovation</h3>
                        <p className="text-gray-400">Novel solutions and creative approaches are highly valued</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#0094FF] rounded-full w-2 h-2 mt-2 mr-4"></div>
                      <div>
                        <h3 className="font-semibold mb-1">Consistency</h3>
                        <p className="text-gray-400">Regular contributors may receive bonus allocations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
                  <h3 className="text-yellow-500 font-semibold mb-2">Disclaimer</h3>
                  <p className="text-gray-300 text-sm">
                    These ranges are indicative only. Actual token allocation is at the sole discretion of the
                    Bitcoin Apps Suite team. There are no guarantees of specific amounts for any contribution.
                    Token allocation may change based on ecosystem needs and token availability.
                  </p>
                </div>
              </section>
            )}

            {activeSection === 'faq' && (
              <section>
                <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
                
                <div className="space-y-4">
                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">When do I receive my $BAPPS tokens?</h3>
                    <p className="text-gray-400">
                      Tokens are typically allocated within 7-14 days after your pull request is merged.
                      You'll receive notification via the email associated with your GitHub account.
                    </p>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">How are tokens delivered?</h3>
                    <p className="text-gray-400">
                      Tokens are sent to your Bitcoin (BSV) wallet address. You'll need to provide a valid
                      BSV address when your PR is approved. We recommend using HandCash or a compatible wallet.
                    </p>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Can I contribute anonymously?</h3>
                    <p className="text-gray-400">
                      Yes, you can contribute under a pseudonym. However, you'll still need to provide a
                      valid BSV wallet address to receive tokens.
                    </p>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">What if my PR is not merged?</h3>
                    <p className="text-gray-400">
                      If your PR is not merged, you won't receive tokens for that contribution. However,
                      we encourage you to address feedback and resubmit. Learning from feedback is part
                      of the process!
                    </p>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Is there a limit to how many tokens I can earn?</h3>
                    <p className="text-gray-400">
                      There's no hard limit on tokens you can earn. The more valuable contributions you make,
                      the more tokens you can receive. Top contributors may also receive bonus allocations.
                    </p>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Can I trade or sell my $BAPPS tokens?</h3>
                    <p className="text-gray-400">
                      Yes! $BAPPS tokens will be tradable on the Bitcoin Exchange (coming soon). They're
                      designed to have real utility and value within the Bitcoin Apps ecosystem.
                    </p>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">What can I do with $BAPPS tokens?</h3>
                    <p className="text-gray-400">
                      $BAPPS tokens provide:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-400">
                      <li>• Access to premium features across all Bitcoin Apps</li>
                      <li>• Trading pair for other app tokens ($BWriter, $BDrive, etc.)</li>
                      <li>• Revenue sharing from platform fees</li>
                      <li>• Governance voting rights</li>
                      <li>• Early access to new features and apps</li>
                    </ul>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">How do I get started?</h3>
                    <p className="text-gray-400">
                      Simply fork the repository, make your improvements, and submit a pull request!
                      Check the "How to Contribute" section for detailed steps.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://github.com/bitcoin-apps-suite/bapps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#0094FF] hover:bg-[#0084e5] rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Fork on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'contributors' && (
              <section>
                <h1 className="text-4xl font-bold mb-6">Top Contributors</h1>
                <p className="text-lg text-gray-300 mb-8">
                  Recognizing the developers who are building the Bitcoin Apps ecosystem. Contributors earn{' '}
                  <span className="text-[#0094FF] font-bold">$BAPPS</span> tokens for successfully merged pull requests.
                </p>

                <div className="bg-gradient-to-r from-[#0094FF] to-[#00C896] p-1 rounded-lg mb-8">
                  <div className="bg-[#1a1a1a] p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-semibold">Live Contributor Leaderboard</h2>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">Auto-updates every 5 minutes</span>
                      </div>
                    </div>
                    
                    {loadingContributors ? (
                      <div className="text-center py-8">
                        <div className="w-8 h-8 border-2 border-[#0094FF] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                        <p className="text-gray-400">Loading contributors...</p>
                      </div>
                    ) : contributors.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-[#3a3a3a]">
                              <th className="text-left py-3 px-4">Rank</th>
                              <th className="text-left py-3 px-4">Contributor</th>
                              <th className="text-center py-3 px-4">Commits</th>
                              <th className="text-center py-3 px-4">Merged PRs</th>
                              <th className="text-right py-3 px-4">Est. $BAPPS Earned</th>
                              <th className="text-center py-3 px-4">Profile</th>
                            </tr>
                          </thead>
                          <tbody>
                            {contributors.slice(0, 20).map((contributor, index) => (
                              <tr key={contributor.login} className="border-b border-[#2a2a2a] hover:bg-[#252525] transition-colors">
                                <td className="py-4 px-4">
                                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                                    index === 0 ? 'bg-yellow-500 text-black' :
                                    index === 1 ? 'bg-gray-300 text-black' :
                                    index === 2 ? 'bg-orange-600 text-white' :
                                    'bg-[#3a3a3a] text-gray-400'
                                  } font-bold`}>
                                    {index + 1}
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center space-x-3">
                                    <img
                                      src={contributor.avatar_url}
                                      alt={contributor.login}
                                      className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                      <p className="font-semibold">{contributor.login}</p>
                                      {index < 3 && (
                                        <p className="text-xs text-[#0094FF]">
                                          {index === 0 ? '🏆 Top Contributor' :
                                           index === 1 ? '🥈 Silver Contributor' :
                                           '🥉 Bronze Contributor'}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 px-4 text-center">
                                  <span className="bg-[#252525] px-3 py-1 rounded-full text-sm">
                                    {contributor.contributions}
                                  </span>
                                </td>
                                <td className="py-4 px-4 text-center">
                                  <span className="bg-[#252525] px-3 py-1 rounded-full text-sm">
                                    {contributor.merged_prs}
                                  </span>
                                </td>
                                <td className="py-4 px-4 text-right">
                                  <span className="text-[#0094FF] font-bold">
                                    {contributor.estimated_tokens.toLocaleString()}
                                  </span>
                                </td>
                                <td className="py-4 px-4 text-center">
                                  <a
                                    href={contributor.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0094FF] hover:text-[#00C896] transition-colors"
                                  >
                                    <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-400 mb-4">No contributors yet. Be the first!</p>
                        <Link
                          href="https://github.com/bitcoin-apps-suite/bapps"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-[#0094FF] hover:bg-[#0084e5] rounded-lg transition-colors"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Start Contributing
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">How Rankings Work</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">•</span>
                        <span>Rankings based on total commits to main branch</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">•</span>
                        <span>Merged PRs count toward your contributor score</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">•</span>
                        <span>Token estimates shown are indicative only</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0094FF] mr-2">•</span>
                        <span>Actual allocations determined after PR review</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#252525] rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Join the Leaderboard</h3>
                    <p className="text-gray-400 mb-4">
                      Start contributing to climb the rankings and earn $BAPPS tokens:
                    </p>
                    <div className="space-y-2">
                      <Link
                        href="https://github.com/bitcoin-apps-suite/bapps/fork"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#0094FF] hover:text-[#00C896] transition-colors"
                      >
                        → Fork the repository
                      </Link>
                      <Link
                        href="https://github.com/bitcoin-apps-suite/bapps/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#0094FF] hover:text-[#00C896] transition-colors"
                      >
                        → Browse open issues
                      </Link>
                      <Link
                        href="https://github.com/bitcoin-apps-suite/bapps/pulls"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#0094FF] hover:text-[#00C896] transition-colors"
                      >
                        → View pull requests
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}