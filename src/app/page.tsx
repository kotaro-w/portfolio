import AnimatedBackground from '@/components/animations/AnimatedBackground'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import LikesSection from '@/components/sections/LikesSection'
import TravelSection from '@/components/sections/TravelSection'
import PartnersSection from '@/components/sections/PartnersSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <ExperienceSection />
      <LikesSection />
      <TravelSection />
      <PartnersSection />
      <ContactSection />
    </main>
  )
}
