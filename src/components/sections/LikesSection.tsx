'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import Badge from '@/components/ui/Badge'
import { LIKES } from '@/lib/constants'

const categories = {
  hobbies: { name: 'Sports', color: 'from-blue-500 to-cyan-500' },
  entertainment: { name: 'Entertainment', color: 'from-green-500 to-emerald-500' },
  food: { name: 'Food & Drink', color: 'from-purple-500 to-pink-500' },
}

export default function LikesSection() {
  const groupedLikes = {
    hobbies: LIKES.filter((l) => l.category === 'hobbies'),
    entertainment: LIKES.filter((l) => l.category === 'entertainment'),
    food: LIKES.filter((l) => l.category === 'food'),
  }

  return (
    <section id="likes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Likes</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            私の好きなものや趣味を紹介します
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {Object.entries(groupedLikes).map(([category, likes], idx) => {
            if (likes.length === 0) return null

            return (
              <ScrollReveal key={category} delay={idx * 0.1}>
                <div>
                  <h3
                    className={`text-xl font-bold mb-6 bg-gradient-to-r ${
                      categories[category as keyof typeof categories].color
                    } bg-clip-text text-transparent`}
                  >
                    {categories[category as keyof typeof categories].name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {likes.map((like, likeIdx) => (
                      <ScrollReveal
                        key={like.name}
                        delay={idx * 0.1 + likeIdx * 0.05}
                      >
                        <Badge
                          variant={like.category === 'hobbies' ? 'frontend' : like.category === 'entertainment' ? 'backend' : 'tools'}
                          className="w-full text-center"
                        >
                          {like.name}
                        </Badge>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
