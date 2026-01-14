import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Frontend Developer',
  description:
    'モダンなWebアプリケーション開発を専門とするフロントエンドデベロッパーのポートフォリオサイト',
  keywords: [
    'Web Developer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Portfolio' }],
  icons: {
    icon: '/kw_favicon.png',
    apple: '/kw_favicon.png',
  },
  openGraph: {
    title: 'Portfolio | Frontend Developer',
    description:
      'モダンなWebアプリケーション開発を専門とするフロントエンドデベロッパーのポートフォリオサイト',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Frontend Developer',
    description:
      'モダンなWebアプリケーション開発を専門とするフロントエンドデベロッパーのポートフォリオサイト',
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
