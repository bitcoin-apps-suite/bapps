'use client'

import { useState } from 'react'
import { 
  Briefcase, GitBranch, DollarSign, Clock,
  Users, FileText, Code, Database,
  PenTool, BarChart, Globe, Zap
} from 'lucide-react'

interface Job {
  id: string
  title: string
  description: string
  category: 'development' | 'content' | 'data' | 'design' | 'marketing' | 'other'
  app: string
  tokens: number
  tokenSymbol: string
  status: 'open' | 'claimed' | 'in_progress' | 'review' | 'completed' | 'disputed'
  githubIssue?: string
  issueUrl?: string
  claimedBy?: string
  claimedAt?: string
  completedAt?: string
  deliverables: string[]
  skills: string[]
  deadline?: string
  tier: 'major' | 'minor' | 'maintenance'
}

const MOCK_JOBS: Job[] = [
  {
    id: 'writer-1',
    title: 'Technical Documentation for Bitcoin Writer API',
    description: 'Create comprehensive API documentation for Bitcoin Writer including code examples, authentication flows, and best practices.',
    category: 'content',
    app: 'Bitcoin Writer',
    tokens: 2500000,
    tokenSymbol: '$BWriter',
    status: 'open',
    githubIssue: '#42',
    issueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-writer/issues/42',
    deliverables: ['API reference docs', 'Code examples', 'Integration guide'],
    skills: ['Technical writing', 'API documentation', 'Markdown'],
    deadline: '2025-01-15',
    tier: 'major'
  },
  {
    id: 'sheets-1',
    title: 'Data Migration Tool for Bitcoin Spreadsheets',
    description: 'Build a tool to import/export data between Bitcoin Spreadsheets and traditional formats (CSV, Excel).',
    category: 'development',
    app: 'Bitcoin Spreadsheets',
    tokens: 3500000,
    tokenSymbol: '$BSheets',
    status: 'claimed',
    githubIssue: '#18',
    issueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-sheets/issues/18',
    claimedBy: 'dev_alice',
    claimedAt: '2024-12-18',
    deliverables: ['Import/export module', 'Format converters', 'Unit tests'],
    skills: ['TypeScript', 'Data processing', 'File formats'],
    deadline: '2025-01-20',
    tier: 'major'
  },
  {
    id: 'drive-1',
    title: 'Storage Optimization for Bitcoin Drive',
    description: 'Implement compression and deduplication algorithms to optimize storage usage on Bitcoin Drive.',
    category: 'development',
    app: 'Bitcoin Drive',
    tokens: 4000000,
    tokenSymbol: '$BDrive',
    status: 'in_progress',
    githubIssue: '#55',
    issueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-drive/issues/55',
    claimedBy: 'storage_expert',
    claimedAt: '2024-12-10',
    deliverables: ['Compression module', 'Dedup algorithm', 'Performance tests'],
    skills: ['Algorithms', 'Storage systems', 'Performance optimization'],
    deadline: '2025-02-01',
    tier: 'major'
  },
  {
    id: 'email-1',
    title: 'Email Template Designer UI',
    description: 'Create a drag-and-drop email template designer for Bitcoin Email with customizable components.',
    category: 'design',
    app: 'Bitcoin Email',
    tokens: 1800000,
    tokenSymbol: '$BEmail',
    status: 'open',
    githubIssue: '#77',
    issueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-email/issues/77',
    deliverables: ['UI mockups', 'Component library', 'Drag-drop implementation'],
    skills: ['React', 'UI/UX', 'Drag-and-drop'],
    deadline: '2025-01-25',
    tier: 'minor'
  },
  {
    id: 'music-1',
    title: 'Playlist Sharing Feature for Bitcoin Music',
    description: 'Implement social playlist sharing with NFT rewards for popular playlists.',
    category: 'development',
    app: 'Bitcoin Music',
    tokens: 2200000,
    tokenSymbol: '$BMusic',
    status: 'review',
    githubIssue: '#33',
    issueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-music/issues/33',
    claimedBy: 'music_dev',
    claimedAt: '2024-12-05',
    deliverables: ['Sharing module', 'NFT integration', 'Social features'],
    skills: ['Web3', 'Social features', 'NFTs'],
    deadline: '2024-12-25',
    tier: 'major'
  },
  {
    id: 'multi-1',
    title: 'Cross-App Authentication System',
    description: 'Build unified HandCash authentication that works across all Bitcoin apps.',
    category: 'development',
    app: 'All Apps',
    tokens: 5000000,
    tokenSymbol: '$BAPPS',
    status: 'open',
    githubIssue: '#101',
    issueUrl: 'https://github.com/bitcoin-apps-suite/bapps/issues/101',
    deliverables: ['Auth library', 'SSO implementation', 'Security audit'],
    skills: ['OAuth', 'HandCash API', 'Security'],
    deadline: '2025-02-15',
    tier: 'major'
  },
  {
    id: 'data-1',
    title: 'Market Data Collection for Bitcoin Apps',
    description: 'Collect and organize market data for all Bitcoin app tokens into spreadsheets.',
    category: 'data',
    app: 'Bitcoin Spreadsheets',
    tokens: 800000,
    tokenSymbol: '$BSheets',
    status: 'open',
    githubIssue: '#22',
    issueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-sheets/issues/22',
    deliverables: ['Data collection scripts', 'Spreadsheet templates', 'Daily updates'],
    skills: ['Data collection', 'Spreadsheets', 'Automation'],
    deadline: '2025-01-10',
    tier: 'maintenance'
  }
]

const categoryIcons = {
  development: <Code className="w-5 h-5" />,
  content: <PenTool className="w-5 h-5" />,
  data: <Database className="w-5 h-5" />,
  design: <FileText className="w-5 h-5" />,
  marketing: <BarChart className="w-5 h-5" />,
  other: <Briefcase className="w-5 h-5" />
}

const statusColors = {
  open: 'bg-green-500',
  claimed: 'bg-yellow-500',
  in_progress: 'bg-blue-500',
  review: 'bg-purple-500',
  completed: 'bg-gray-500',
  disputed: 'bg-red-500'
}

const tierColors = {
  major: 'text-purple-400 border-purple-400',
  minor: 'text-blue-400 border-blue-400',
  maintenance: 'text-gray-400 border-gray-400'
}

export default function JobsPage() {
  const [jobs] = useState<Job[]>(MOCK_JOBS)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedApp, setSelectedApp] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory
    const matchesStatus = selectedStatus === 'all' || job.status === selectedStatus
    const matchesApp = selectedApp === 'all' || job.app === selectedApp
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesStatus && matchesApp && matchesSearch
  })

  const stats = {
    totalJobs: jobs.length,
    openJobs: jobs.filter(j => j.status === 'open').length,
    totalTokens: jobs.reduce((sum, j) => sum + j.tokens, 0),
    activeContractors: new Set(jobs.filter(j => j.claimedBy).map(j => j.claimedBy)).size
  }

  const apps = [...new Set(jobs.map(j => j.app))]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Bitcoin Jobs
              </h1>
              <p className="text-gray-400 mt-1">Decentralized Work Marketplace</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Apps
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Jobs</p>
                <p className="text-2xl font-bold">{stats.totalJobs}</p>
              </div>
              <Briefcase className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Open Jobs</p>
                <p className="text-2xl font-bold">{stats.openJobs}</p>
              </div>
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Tokens</p>
                <p className="text-2xl font-bold">{(stats.totalTokens / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Contractors</p>
                <p className="text-2xl font-bold">{stats.activeContractors}</p>
              </div>
              <Users className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-[200px] px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="all">All Categories</option>
            <option value="development">Development</option>
            <option value="content">Content</option>
            <option value="data">Data</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="other">Other</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="claimed">Claimed</option>
            <option value="in_progress">In Progress</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
          </select>
          <select
            value={selectedApp}
            onChange={(e) => setSelectedApp(e.target.value)}
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="all">All Apps</option>
            {apps.map(app => (
              <option key={app} value={app}>{app}</option>
            ))}
          </select>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <span className={`px-2 py-1 text-xs border rounded-full ${tierColors[job.tier]}`}>
                      {job.tier}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${statusColors[job.status]}`} />
                    <span className="text-sm text-gray-400">{job.status.replace('_', ' ')}</span>
                  </div>
                  <p className="text-gray-400 mb-3">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      {categoryIcons[job.category]}
                      <span>{job.category}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Globe className="w-4 h-4" />
                      <span>{job.app}</span>
                    </div>
                    {job.githubIssue && (
                      <a href={job.issueUrl} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                        <GitBranch className="w-4 h-4" />
                        <span>{job.githubIssue}</span>
                      </a>
                    )}
                    {job.deadline && (
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{job.deadline}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 text-xs bg-gray-800 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-right ml-4">
                  <div className="text-2xl font-bold text-green-400">
                    {(job.tokens / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-gray-400">{job.tokenSymbol}</div>
                  {job.claimedBy && (
                    <div className="mt-2 text-sm text-gray-500">
                      @{job.claimedBy}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                <div className="flex gap-2">
                  {job.deliverables.map((deliverable, i) => (
                    <span key={i} className="text-xs text-gray-500">
                      • {deliverable}
                    </span>
                  ))}
                </div>
                {job.status === 'open' && (
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all text-sm">
                    Claim Job
                  </button>
                )}
                {job.status === 'claimed' && job.claimedBy && (
                  <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                    View Contract
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}