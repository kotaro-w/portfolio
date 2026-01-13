'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Partner } from '@/types'
import Badge from './Badge'

interface PartnerCardProps {
  partner: Partner
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  const [imageError, setImageError] = useState(false)

  // Microlink APIを使ってURLからスクリーンショットを取得
  // screenshot.delay: ページロード後の待機時間（ミリ秒）
  // screenshot.waitUntil: networkidle0 = ネットワークが完全にアイドルになるまで待つ
  const thumbnailUrl = partner.image
    ? partner.image
    : `https://api.microlink.io/?url=${encodeURIComponent(partner.url)}&screenshot=true&meta=false&embed=screenshot.url&screenshot.delay=3000&screenshot.waitUntil=networkidle0`

  return (
    <motion.a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass glass-hover rounded-xl overflow-hidden group block"
    >
      {/* サムネイル画像 */}
      <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
        {!imageError ? (
          <Image
            src={thumbnailUrl}
            alt={partner.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 text-6xl">
            🏢
          </div>
        )}
        {partner.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* パートナー情報 */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {partner.description}
        </p>

        {/* タグ */}
        {partner.tags && partner.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {partner.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="tools" className="text-xs">
                {tag}
              </Badge>
            ))}
            {partner.tags.length > 3 && (
              <span className="text-xs text-gray-400 self-center">
                +{partner.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* リンク表示 */}
        <div className="flex items-center gap-1 text-sm text-gray-300 group-hover:text-white transition-colors">
          <span>Visit Site</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  )
}
