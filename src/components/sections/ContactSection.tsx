'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Card from '@/components/ui/Card'
import { CONTACT_LINKS } from '@/lib/constants'

const iconMap: Record<string, string> = {
  mail: '✉️',
  github: '💻',
  twitter: '🐦',
  linkedin: '💼',
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            お気軽にご連絡ください。お仕事のご依頼やご質問をお待ちしております
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Card hover={false} className="mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s work together!
              </h3>
              <p className="text-gray-300 mb-6">
                新しいプロジェクトやコラボレーションの機会をお探しですか？
                <br />
                下記のリンクからお気軽にお問い合わせください。
              </p>
            </div>
          </Card>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONTACT_LINKS.map((link, idx) => (
            <ScrollReveal key={link.name} delay={0.3 + idx * 0.1}>
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass glass-hover rounded-xl p-6 flex items-center gap-4 group"
              >
                <div className="text-4xl">{iconMap[link.icon] || '📧'}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {link.name}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">
                    Click to connect
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
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
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.7}>
          <div className="text-center mt-12 text-gray-400 text-sm">
            <p>© 2024 Portfolio. Built with Next.js and Framer Motion.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
