'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'frontend' | 'backend' | 'tools' | 'other'
  className?: string
}

const variantStyles = {
  frontend: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  backend: 'bg-green-500/20 text-green-300 border-green-500/30',
  tools: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  other: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
}

export default function Badge({
  children,
  variant = 'other',
  className,
}: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </motion.span>
  )
}
