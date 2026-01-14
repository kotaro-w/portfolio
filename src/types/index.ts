export interface Skills {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  level?: number // 1-5
}

export interface Like {
  name: string
  category: 'hobbies' | 'entertainment' | 'food'
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

export interface Partner {
  id: string
  name: string
  description: string
  url: string
  image?: string
  tags?: string[]
  featured?: boolean
}

export interface ContactLink {
  name: string
  url: string
  icon: string
}

export interface VisitedCountry {
  name: string
  nameJa: string
  lat: number
  lng: number
  year?: number
}
