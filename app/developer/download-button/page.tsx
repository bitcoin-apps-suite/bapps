'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DownloadButton, { GetItOnBitcoinApps, BitcoinAppsBadge } from '@/components/DownloadButton'
import Footer from '@/components/Footer'

export default function DownloadButtonKitPage() {
  const router = useRouter()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const htmlCode = `<!-- Bitcoin Apps Store Download Button -->
<a href="https://www.bitcoinapps.store" style="display: inline-flex; align-items: center; gap: 12px; background: black; color: white; padding: 12px 24px; border-radius: 12px; text-decoration: none; font-family: system-ui; border: 1px solid #333;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#FF6B00"/>
    <path d="M12.5 6.5v-2m0 15v-2m-4-11v12m6-12v12m-1-12.5c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5m-2 0h2m-2 0c1.5 0 3 .5 3 2.5s-1.5 2.5-3 2.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <div>
    <div style="font-size: 10px; color: #999;">Download on the</div>
    <div style="font-weight: 600;">Bitcoin Apps Store</div>
  </div>
</a>`

  const reactCode = `import DownloadButton from '@bitcoinapps/download-button'

// Default dark button
<DownloadButton />

// Rainbow variant
<DownloadButton variant="rainbow" />

// Light variant
<DownloadButton variant="light" />

// With app name
<DownloadButton appName="Your App" />

// Different sizes
<DownloadButton size="small" />
<DownloadButton size="large" />`

  const npmInstall = `npm install @bitcoinapps/download-button`

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
              <div className="text-2xl">🛠️</div>
              <div>
                <h2 className="text-xl font-light">Download Button Kit</h2>
                <p className="text-xs text-gray-500">Add Bitcoin Apps Store button to your website</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-16 text-center">
        <h1 className="text-5xl font-thin mb-6">
          Bitcoin Apps Store
          <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF00FF] to-[#0094FF] bg-clip-text text-transparent"> Download Button</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Let users download your app from Bitcoin Apps Store with our official download buttons. 
          Just like App Store and Google Play buttons, but for the decentralized future.
        </p>
      </section>

      {/* Button Showcase */}
      <section className="px-8 py-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Button Variants</h2>
        
        <div className="space-y-12">
          {/* Standard Buttons */}
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a]">
            <h3 className="text-xl font-semibold mb-6">Standard Buttons</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Dark */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Dark (Default)</p>
                <div className="bg-white/5 p-6 rounded-lg flex justify-center">
                  <DownloadButton variant="dark" />
                </div>
              </div>

              {/* Light */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Light</p>
                <div className="bg-white p-6 rounded-lg flex justify-center">
                  <DownloadButton variant="light" />
                </div>
              </div>

              {/* Rainbow */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Rainbow</p>
                <div className="bg-white/5 p-6 rounded-lg flex justify-center">
                  <DownloadButton variant="rainbow" />
                </div>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a]">
            <h3 className="text-xl font-semibold mb-6">Sizes</h3>
            
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">Small</p>
                <DownloadButton size="small" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">Medium</p>
                <DownloadButton size="medium" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">Large</p>
                <DownloadButton size="large" />
              </div>
            </div>
          </div>

          {/* Alternative Styles */}
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a]">
            <h3 className="text-xl font-semibold mb-6">Alternative Styles</h3>
            
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">Get It On Style</p>
                <GetItOnBitcoinApps />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">Minimal Badge</p>
                <BitcoinAppsBadge />
              </div>
            </div>
          </div>

          {/* With App Name */}
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a]">
            <h3 className="text-xl font-semibold mb-6">With App Name</h3>
            
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <DownloadButton appName="Bitcoin Writer" variant="rainbow" />
              <DownloadButton appName="Bitcoin Music" />
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Implementation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* HTML Version */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Plain HTML</h3>
              <button
                onClick={() => copyToClipboard(htmlCode, 'html')}
                className="px-3 py-1 bg-[#0a0a0a] hover:bg-[#2a2a2a] rounded text-sm transition-colors"
              >
                {copiedCode === 'html' ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <pre className="bg-[#0a0a0a] p-4 rounded-lg overflow-x-auto">
              <code className="text-xs text-gray-300">{htmlCode}</code>
            </pre>
          </div>

          {/* React Version */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">React/Next.js</h3>
              <button
                onClick={() => copyToClipboard(reactCode, 'react')}
                className="px-3 py-1 bg-[#0a0a0a] hover:bg-[#2a2a2a] rounded text-sm transition-colors"
              >
                {copiedCode === 'react' ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <pre className="bg-[#0a0a0a] p-4 rounded-lg overflow-x-auto">
              <code className="text-xs text-gray-300">{reactCode}</code>
            </pre>
          </div>
        </div>

        {/* NPM Package */}
        <div className="mt-8 bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
          <h3 className="text-lg font-semibold mb-4">NPM Package</h3>
          <div className="bg-[#0a0a0a] p-4 rounded-lg">
            <code className="text-sm text-gray-300">{npmInstall}</code>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Coming soon: Official NPM package for easy integration
          </p>
        </div>
      </section>

      {/* Guidelines */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Brand Guidelines</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
            <h3 className="text-lg font-semibold mb-4 text-green-400">✓ Do's</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Use official button designs</li>
              <li>• Link to your app's page on Bitcoin Apps Store</li>
              <li>• Maintain minimum size of 120px width</li>
              <li>• Use on dark or light backgrounds as appropriate</li>
              <li>• Include proper alt text for accessibility</li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#3a3a3a]">
            <h3 className="text-lg font-semibold mb-4 text-red-400">✗ Don'ts</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Don't modify the button design or colors</li>
              <li>• Don't change the Bitcoin logo</li>
              <li>• Don't use misleading text</li>
              <li>• Don't link to external sites</li>
              <li>• Don't make it smaller than minimum size</li>
            </ul>
          </div>
        </div>

        {/* Download Assets */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Download Assets</h3>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#0094FF] to-[#0084e6] hover:from-[#0084e6] hover:to-[#0074d6] rounded-lg font-medium transition-all">
              Download SVG Assets
            </button>
            <button className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg font-medium transition-all">
              Download PNG Assets
            </button>
            <button className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg font-medium transition-all">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-16 text-center border-t border-[#2a2a2a]">
        <h2 className="text-3xl font-semibold mb-6">Ready to List Your App?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the Bitcoin Apps Store and reach thousands of users in the decentralized ecosystem
        </p>
        <button 
          onClick={() => router.push('/bitcoin-apps-store')}
          className="px-8 py-4 bg-gradient-to-r from-[#FF6B00] via-[#FF00FF] to-[#0094FF] hover:opacity-90 text-white rounded-lg font-semibold text-lg transition-all"
        >
          Submit Your App
        </button>
      </section>

      <Footer />
    </div>
  )
}