'use client'

import { useState } from 'react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST API', 'JWT Auth', 'RBAC', 'WebSockets', 'MongoDB']
    },
    {
      category: 'Database & Tools',
      skills: ['MongoDB', 'SQL', 'Git & GitHub', 'Postman', 'Jira', 'VS Code', 'Vercel']
    },
    {
      category: 'Additional',
      skills: ['Python', 'Data Structures & Algorithms', 'Machine Learning Basics', 'RAG Pipelines', 'Cloud Deployment']
    }
  ]

  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">My Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Technologies & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl">
            A comprehensive toolkit of modern technologies and methodologies to deliver high-quality solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg"
              onMouseEnter={() => setHoveredCategory(category.category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      hoveredCategory === category.category
                        ? 'bg-primary text-primary-foreground scale-105'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-20 space-y-8">
          <h3 className="text-2xl font-bold text-foreground mb-12">Proficiency Level</h3>
          {[
            { name: 'Full-Stack Development (MERN)', level: 95 },
            { name: 'Backend API Design', level: 90 },
            { name: 'Frontend UI/UX Implementation', level: 88 },
            { name: 'Database Design & Optimization', level: 85 },
            { name: 'System Architecture', level: 82 }
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-card rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
