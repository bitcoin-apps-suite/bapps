'use client'

import { AlertTriangle } from 'lucide-react'

export default function ProofOfConceptBar() {
  return (
    <div className="bg-black text-gray-300 px-4 py-2 text-center text-sm font-medium flex items-center justify-center gap-2 sticky top-0 z-50 border-b border-gray-800">
      <AlertTriangle className="w-4 h-4" />
      <span>PROOF OF CONCEPT - This is a demonstration of Bitcoin Apps Store</span>
      <AlertTriangle className="w-4 h-4" />
    </div>
  )
}