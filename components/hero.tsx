'use client'

import Image from 'next/image'
import { ChevronRight, Code, Link, Mail, ExternalLink, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-background pt-20 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full w-fit">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-primary">Open to opportunities</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
                Abhay<br/><span className="text-primary">Panchal</span>
              </h1>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-3 pt-2">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Full-Stack Developer and Data Scientist building innovative solutions that matter.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I create scalable web applications with <span className="font-semibold text-foreground">React and Node.js</span> and develop intelligent systems with <span className="font-semibold text-foreground">machine learning</span>.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 py-4">
              <div className="p-3 bg-white/50 rounded-lg border border-border/50 hover:border-primary/40 hover:bg-white transition-all">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Backend</p>
                <p className="text-sm font-semibold text-foreground mt-1">Node.js, Express</p>
              </div>
              <div className="p-3 bg-white/50 rounded-lg border border-border/50 hover:border-primary/40 hover:bg-white transition-all">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Frontend</p>
                <p className="text-sm font-semibold text-foreground mt-1">React, Next.js</p>
              </div>
              <div className="p-3 bg-white/50 rounded-lg border border-border/50 hover:border-primary/40 hover:bg-white transition-all">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Database</p>
                <p className="text-sm font-semibold text-foreground mt-1">MongoDB, PostgreSQL</p>
              </div>
              <div className="p-3 bg-white/50 rounded-lg border border-border/50 hover:border-primary/40 hover:bg-white transition-all">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">AI & ML</p>
                <p className="text-sm font-semibold text-foreground mt-1">Python, TensorFlow</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View My Work
                <ArrowDown size={18} className="rotate-90 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <Mail size={18} />
                Contact me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-6 border-t border-border/50">
              <a href="https://github.com/Abpa007" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="GitHub">
                <Code size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abhay-panchal-3b853b376" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <Link size={20} />
              </a>
              <a href="mailto:abhayp21@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent rounded-2xl blur-2xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl group">
                <Image
                  src="/hero-visual.png"
                  alt="Tech and data science visualization"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating stat cards - hidden on mobile */}
              <div className="hidden sm:block absolute bottom-8 left-0 lg:bottom-4 lg:left-4 bg-white rounded-lg p-4 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">Projects built</p>
                    <p className="text-sm font-bold text-foreground">5+ full stack</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute top-8 right-0 lg:top-4 lg:right-4 bg-white rounded-lg p-4 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">Data science</p>
                    <p className="text-sm font-bold text-foreground">2+ ML models</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
