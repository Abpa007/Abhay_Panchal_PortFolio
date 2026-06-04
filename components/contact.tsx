'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Code, Link } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhaypanchal095@gmail.com',
      link: 'mailto:abhaypanchal095@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9406969849',
      link: 'tel:+919406969849'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ratlam, Madhya Pradesh',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-6 mb-16 text-center">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Let&apos;s Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Reach out and let&apos;s create something amazing!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-foreground font-semibold mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Abpa007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Code size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/abhay-panchal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Link size={24} />
                </a>
                <a
                  href="mailto:abhaypanchal095@gmail.com"
                  className="p-4 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-card border border-border rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-8">Send Me a Message</h3>

            {submitted ? (
              <div className="space-y-4 text-center py-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-foreground">Message Sent!</h4>
                <p className="text-foreground/60">Thank you for reaching out. I&apos;ll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-foreground/60">
            © 2024 Abhay Panchal. All rights reserved. | Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </section>
  )
}
