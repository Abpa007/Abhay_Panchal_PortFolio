'use client'

import { ExternalLink, Code } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'RAG-Based AI Teaching Assistant',
      description: 'An intelligent teaching assistant powered by Retrieval-Augmented Generation (RAG) that processes video content and provides contextual answers using LLM technology.',
      technologies: ['Python', 'LLM', 'OpenAI Whisper', 'Pandas', 'Joblib', 'NLP'],
      links: {
        live: '#',
        github: '#'
      },
      highlights: [
        'Multi-hour video-to-text transcription with OpenAI Whisper',
        'Document splitting and hierarchical data chunking',
        'Text embedding arrays for semantic matching',
        'Local LLM prompt pipeline optimization',
        'Context window loss elimination during inference'
      ]
    },
    {
      title: 'Real Estate Predictive Analytics System',
      description: 'An end-to-end machine learning pipeline that predicts housing property prices using advanced regression techniques and statistical analysis.',
      technologies: ['Scikit-Learn', 'Flask', 'Python', 'Pandas', 'EDA'],
      links: {
        live: '#',
        github: '#'
      },
      highlights: [
        'Advanced exploratory data analysis (EDA)',
        'Handling structural missing values and categorical data',
        'Stratified Shuffle Splitting and Feature Scaling',
        'RMSE and MAE evaluation metrics',
        'Lightweight Flask API deployment'
      ]
    },
    {
      title: 'Sanwariya Pizza',
      description: 'A full-featured pizza delivery platform with real-time order tracking, payment integration, and role-based access control.',
      technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'WebSockets'],
      links: {
        live: 'https://sanwariya-pizza.vercel.app/',
        github: '#'
      },
      highlights: [
        'Backend architecture with JWT authentication',
        'Stripe payment gateway integration',
        'Real-time order tracking with WebSockets',
        'Role-Based Access Control (RBAC)',
        'Asynchronous transaction updates'
      ]
    },
    {
      title: 'Expense Tracker',
      description: 'A comprehensive expense management application with secure authentication and detailed financial tracking capabilities.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      links: {
        live: 'https://expense-tracker-frontend-nu-seven.vercel.app/',
        github: '#'
      },
      highlights: [
        'Secure JWT-based authentication',
        'Role-based access control',
        'Optimized database queries',
        'Detailed expense analytics',
        'Responsive UI design'
      ]
    },
    {
      title: 'AP-Store',
      description: 'A complete e-commerce platform featuring product management, shopping cart functionality, and seamless checkout process.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      links: {
        live: '#',
        github: 'https://github.com/Abpa007/AP-Store'
      },
      highlights: [
        'Product catalog with filtering',
        'Shopping cart management',
        'Checkout functionality',
        'User authentication',
        'Order management system'
      ]
    }
  ]

  const isDataScience = (tech: string[]): boolean => {
    return tech.some(t => ['Python', 'LLM', 'Scikit-Learn', 'TensorFlow', 'NLP'].includes(t))
  }

  return (
    <section id="projects" className="relative py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            A collection of projects showcasing my expertise in full-stack development and data science.
          </p>
          <div className="h-1 w-12 bg-primary rounded-full"></div>
        </div>

        {/* Projects Grid - Data Science First */}
        <div className="space-y-16 lg:space-y-20">
          {/* Data Science Projects */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Data Science and AI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(0, 2).map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="p-8 space-y-6">
                    {/* Badge */}
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      ML / AI
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t border-border">
                      {project.links.github !== '#' && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                        >
                          <Code size={18} />
                          Code
                        </a>
                      )}
                      {project.links.live !== '#' && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                        >
                          <ExternalLink size={18} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-Stack Projects */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Full-Stack Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(2).map((project, index) => (
                <div
                  key={index + 2}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col"
                  onMouseEnter={() => setHoveredProject(index + 2)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="p-6 space-y-4 flex flex-col flex-grow">
                    {/* Badge */}
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold w-fit">
                      MERN
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      {project.links.live !== '#' && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                      {project.links.github !== '#' && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
                        >
                          <Code size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-12 border-t border-border/50 text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
            Interested in working together?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            I am always happy to explore new opportunities and collaborate on exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Contact me
            </a>
            <a
              href="https://github.com/Abpa007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <Code size={18} />
              View code
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
