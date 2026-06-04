'use client'

import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Experience() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0)

  const experiences = [
    {
      title: 'MERN Stack Developer Intern',
      company: 'Cypher Analytica',
      period: 'May 2025 – Nov 2025',
      location: 'Remote',
      highlights: [
        'Designed and developed scalable RESTful APIs using Node.js and Express.js with MongoDB integration',
        'Implemented secure authentication and authorization using JWT and Role-Based Access Control (RBAC)',
        'Built backend architecture for multi-role systems and handled real-time communication using WebSockets',
        'Optimized API performance and database queries for better scalability and efficiency'
      ]
    },
    {
      title: 'Frontend Intern (Part-Time)',
      company: 'Pantech Prolabs India Pvt Ltd',
      period: 'Jul 2025 – Oct 2025',
      location: 'Remote',
      highlights: [
        'Collaborated with backend teams to design and integrate RESTful APIs',
        'Assisted in improving API response structure and performance for better frontend consumption',
        'Ensured efficient data handling and communication between frontend and backend systems'
      ]
    },
    {
      title: 'Software Testing Intern',
      company: 'RAROME Smart School Software',
      period: 'Feb 2025 – Jun 2025',
      location: 'Remote',
      highlights: [
        'Executed 100+ manual and regression test cycles across multiple modules',
        'Identified functional and UI defects in production systems',
        'Authored test cases and defect reports using Jira-based bug tracking',
        'Optimized bug tracking workflow, reducing average bug resolution time by 25%'
      ]
    }
  ]

  const education = [
    {
      degree: 'Integrated MCA (IMCA)',
      institution: 'IPS Academy, Indore',
      period: '2021 – 2026',
      cgpa: '7.39/10'
    },
    {
      degree: '12th Grade',
      institution: 'Jath Public H.S. School, Ratlam',
      period: '2021',
      percentage: '78.3%'
    },
    {
      degree: '10th Grade',
      institution: 'Jath Public H.S. School, Ratlam',
      period: '2019',
      percentage: '78.8%'
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Career Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience & Education</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Briefcase className="text-primary" size={28} />
              Work Experience
            </h3>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-2">{exp.title}</h4>
                        <p className="text-primary font-semibold mb-3">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className={`text-primary transition-transform duration-300 ${expandedExperience === index ? 'rotate-180' : ''}`}>
                        ▼
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedExperience === index && (
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-3 text-foreground/70 text-sm leading-relaxed">
                              <span className="text-primary font-bold mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Calendar className="text-primary" size={28} />
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{edu.degree}</h4>
                  <p className="text-primary font-semibold mb-3">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm text-foreground/60">
                    <span>{edu.period}</span>
                    <span className="font-semibold text-primary">
                      {('cgpa' in edu && `CGPA: ${edu.cgpa}`) || 
                       ('percentage' in edu && `${edu.percentage}`)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h4 className="text-lg font-bold text-foreground mb-4">Certifications</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Full Stack MERN Development Frameworks - Vivek IT Solution</li>
                <li>✓ Ultimate Job Ready Data Science, ML & AI Integration - CodeWithHarry</li>
                <li>✓ C/C++ with Object-Oriented Programming - Universal Informatics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
