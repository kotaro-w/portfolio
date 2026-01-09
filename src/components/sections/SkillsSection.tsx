'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import Badge from '@/components/ui/Badge'
import { SKILLS } from '@/lib/constants'

const categories = {
  frontend: { name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  backend: { name: 'Backend', color: 'from-green-500 to-emerald-500' },
  tools: { name: 'Tools', color: 'from-purple-500 to-pink-500' },
  other: { name: 'Other', color: 'from-gray-500 to-slate-500' },
}

export default function SkillsSection() {
  const groupedSkills = {
    frontend: SKILLS.filter((s) => s.category === 'frontend'),
    backend: SKILLS.filter((s) => s.category === 'backend'),
    tools: SKILLS.filter((s) => s.category === 'tools'),
    other: SKILLS.filter((s) => s.category === 'other'),
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            これまでの経験で習得した技術スタックです
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, skills], idx) => {
            if (skills.length === 0) return null

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
                    {skills.map((skill, skillIdx) => (
                      <ScrollReveal
                        key={skill.name}
                        delay={idx * 0.1 + skillIdx * 0.05}
                      >
                        <Badge
                          variant={skill.category}
                          className="w-full text-center"
                        >
                          {skill.name}
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
