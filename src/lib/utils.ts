import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Tailwindクラスを安全にマージする関数
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * セクションIDからスムーズスクロール
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
