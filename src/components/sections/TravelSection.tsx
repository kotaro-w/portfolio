'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { VISITED_COUNTRIES } from '@/lib/constants'

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false })

export default function TravelSection() {
  const globeRef = useRef<any>(null)
  const [globeReady, setGlobeReady] = useState(false)

  useEffect(() => {
    if (globeRef.current && globeReady) {
      // 自動回転を設定
      globeRef.current.controls().autoRotate = true
      globeRef.current.controls().autoRotateSpeed = 0.5
      // 初期視点を設定
      globeRef.current.pointOfView({ lat: 35, lng: 139, altitude: 1.2 })
    }
  }, [globeReady])

  const markerData = VISITED_COUNTRIES.map((country) => ({
    lat: country.lat,
    lng: country.lng,
    name: country.nameJa,
    size: 0.5,
    color: '#a855f7',
  }))

  return (
    <section id="travel" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Travel</span>
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            これまでに訪れた国々の記録。旅行好きの仲間はぜひ、国内外オススメの旅行先を教えてください！
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* 地球儀 */}
            <div className="w-full lg:w-2/3 h-[400px] sm:h-[500px] relative">
              <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                pointsData={markerData}
                pointLat="lat"
                pointLng="lng"
                pointColor="color"
                pointAltitude={0.01}
                pointRadius="size"
                pointsMerge={true}
                atmosphereColor="#a855f7"
                atmosphereAltitude={0.15}
                onGlobeReady={() => setGlobeReady(true)}
                width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 600) : 600}
                height={typeof window !== 'undefined' ? (window.innerWidth < 640 ? 400 : 500) : 500}
              />
            </div>

            {/* 統計と国リスト */}
            <div className="w-full lg:w-1/3">
              <div className="glass rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {VISITED_COUNTRIES.length}
                  </div>
                  <div className="text-gray-300">Cities Visited</div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Visited Cities</h3>
                <div className="flex flex-wrap gap-2">
                  {VISITED_COUNTRIES.map((country) => (
                    <span
                      key={country.name}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {country.nameJa}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
