import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/AuthContext'
import ProofOfConceptBar from '@/components/ProofOfConceptBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bitcoin Office ($bOffice)',
  description: 'Decentralized applications powered by Bitcoin blockchain technology',
  keywords: 'bitcoin, blockchain, decentralized apps, cryptocurrency, web3',
  authors: [{ name: 'Bitcoin Office' }],
  creator: 'Bitcoin Office',
  publisher: 'Bitcoin Office',
  icons: {
    icon: '/bitcoin-apps-logo.jpg',
    shortcut: '/bitcoin-apps-logo.jpg',
    apple: '/bitcoin-apps-logo.jpg',
  },
  openGraph: {
    title: 'Bitcoin Office ($bOffice)',
    description: 'Decentralized applications powered by Bitcoin blockchain technology',
    url: 'https://bitcoin-apps-suite.vercel.app',
    siteName: 'Bitcoin Office',
    images: [
      {
        url: '/bitcoin-apps-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Office',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Office ($bOffice)',
    description: 'Decentralized applications powered by Bitcoin blockchain technology',
    images: ['/bitcoin-apps-logo.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProofOfConceptBar />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}