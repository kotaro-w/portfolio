import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Kotaro Wakatsuki',
  description:
    '若槻 光太郎のポートフォリオサイト',
  keywords: [
    'Portfolio',
  ],
  authors: [{ name: 'Portfolio' }],
  icons: {
    icon: '/kw_favicon.png',
    apple: '/kw_favicon.png',
  },
  openGraph: {
    title: 'Portfolio | Kotaro Wakatsuki',
    description:
      '若槻 光太郎のポートフォリオサイト',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Kotaro Wakatsuki',
    description:
      '若槻 光太郎のポートフォリオサイト',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
