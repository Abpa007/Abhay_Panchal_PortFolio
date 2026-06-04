'use client'

import { useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="overflow-hidden bg-background">
      <Navigation scrolled={scrolled} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Scroll To Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
        style={{
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? 'auto' : 'none'
        }}
        aria-label="Scroll to top"
      >
        <ArrowDown className="w-6 h-6 rotate-180" />
      </button>
    </main>
  )
}
