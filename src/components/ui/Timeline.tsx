'use client'

import { ReactNode } from 'react'

interface TimelineProps {
  children: ReactNode
}

interface TimelineItemProps {
  children: ReactNode
  isLast?: boolean
}

export function Timeline({ children }: TimelineProps) {
  return <div className="relative">{children}</div>
}

export function TimelineItem({ children, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* タイムライン線 */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent" />
      )}

      {/* タイムラインドット */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-[#1a1a2e] z-10" />

      {/* コンテンツ */}
      <div>{children}</div>
    </div>
  )
}
