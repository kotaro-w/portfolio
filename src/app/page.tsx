import AnimatedBackground from '@/components/animations/AnimatedBackground'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
