'use client'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#2a2a2a] px-4 lg:px-8 py-6 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col space-y-2">
            <div className="text-xs">
              The Bitcoin Corporation LTD (16735102) - Registered in England and Wales
            </div>
            <div className="text-xs">
              © 2025 The Bitcoin Corporation Ltd. All rights reserved.
            </div>
          </div>
          
          <div className="flex flex-col lg:items-end space-y-2">
            <div className="text-xs">
              Licensed under the{' '}
              <a 
                href="https://github.com/bitcoin-sv/bsv-skills-center/blob/master/LICENSE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0094FF] hover:text-[#0084e6] transition-colors underline"
              >
                BSV Open License
              </a>
            </div>
            <div className="text-xs">
              Individual apps may be subject to their respective licenses
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}