'use client'

import Image from 'next/image'

interface SidebarProps {
  categories: string[]
  selectedCategory: string
  onCategorySelect: (category: string) => void
}

export default function Sidebar({ categories, selectedCategory, onCategorySelect }: SidebarProps) {
  return (
    <aside className="w-64 bg-[#252525] border-r border-[#3a3a3a] flex flex-col">
      <div className="p-6 border-b border-[#3a3a3a]">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image
              src="/bitcoin-apps-logo.jpg"
              alt="Bitcoin Apps"
              fill
              className="object-cover rounded-lg"
              sizes="40px"
            />
          </div>
          <div>
            <h2 className="text-white font-semibold">Bitcoin Apps</h2>
            <p className="text-xs text-gray-400">Blockchain Cloud</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`
                w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm
                ${selectedCategory === category 
                  ? 'bg-[#0094FF] text-white' 
                  : 'text-gray-400 hover:bg-[#2a2a2a] hover:text-white'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span>{category}</span>
                {category === 'All Apps' && (
                  <span className="text-xs opacity-60">
                    {categories.length - 1}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#3a3a3a]">
          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-[#2a2a2a] hover:text-white transition-all">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Updates</span>
              </div>
            </button>
            <button className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-[#2a2a2a] hover:text-white transition-all">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Settings</span>
              </div>
            </button>
            <button className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-[#2a2a2a] hover:text-white transition-all">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Help</span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      
      <div className="p-4 border-t border-[#3a3a3a]">
        <div className="bg-[#1e1e1e] rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Storage</span>
            <span className="text-xs text-gray-400">2.1 GB / 5 GB</span>
          </div>
          <div className="w-full bg-[#3a3a3a] rounded-full h-1.5">
            <div className="bg-gradient-to-r from-[#0094FF] to-[#00C896] h-1.5 rounded-full" style={{ width: '42%' }}></div>
          </div>
        </div>
      </div>
    </aside>
  )
}