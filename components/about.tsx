'use client'

import { Code2, Cpu, Zap } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in MERN stack with proficiency in Node.js, Express.js, React.js, and Next.js for building scalable applications.'
    },
    {
      icon: Cpu,
      title: 'System Design & Architecture',
      description: 'Strong understanding of RESTful API design, database optimization, and building robust backend systems.'
    },
    {
      icon: Zap,
      title: 'Performance & Quality',
      description: 'Focused on creating efficient, secure applications with proper authentication, authorization, and data handling.'
    }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Crafting Digital Solutions with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Precision & Passion</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
            I&apos;m a Full-Stack Developer currently pursuing my Integrated MCA at IPS Academy, Indore. With hands-on experience in multiple internships and a deep passion for building scalable web applications, I specialize in turning complex requirements into elegant, performant solutions.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Years Active', value: '3+' },
            { label: 'Projects Completed', value: '15+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Happy Clients', value: '5+' }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
