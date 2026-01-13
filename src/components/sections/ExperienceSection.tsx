'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import Card from '@/components/ui/Card'
import { Timeline, TimelineItem } from '@/components/ui/Timeline'
import Badge from '@/components/ui/Badge'
import { EXPERIENCES } from '@/lib/constants'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            これまでの職歴と経験です。
          </p>
        </ScrollReveal>

        <Timeline>
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem key={exp.id} isLast={idx === EXPERIENCES.length - 1}>
              <ScrollReveal delay={idx * 0.2}>
                <Card hover={false}>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.position}
                    </h3>
                    <span className="text-sm text-purple-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">{exp.company}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, descIdx) => (
                      <li
                        key={descIdx}
                        className="text-gray-400 text-sm flex items-start"
                      >
                        <span className="text-purple-400 mr-2">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="tools" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </ScrollReveal>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
