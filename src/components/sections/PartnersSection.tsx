'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import PartnerCard from '@/components/ui/PartnerCard'
import { PARTNERS } from '@/lib/constants'

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            私が関わっている組織やスクールをご紹介します。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((partner, idx) => (
            <ScrollReveal key={partner.id} delay={idx * 0.1}>
              <PartnerCard partner={partner} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
