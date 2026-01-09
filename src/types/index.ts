export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  level?: number // 1-5
}

export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string[]
  technologies?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface ContactLink {
  name: string
  url: string
  icon: string
}
