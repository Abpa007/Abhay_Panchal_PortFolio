'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Mail,
  MapPin,
  Radio,
  Sparkles,
} from 'lucide-react'

type Project = {
  number: string
  title: string
  category: 'AI & Data' | 'Full-stack' | 'Analytics'
  description: string
  details: string[]
  stack: string[]
  link?: string
  linkLabel?: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Omni-Sentinel',
    category: 'AI & Data',
    description: 'A fraud investigation tool that follows suspicious transactions across linked accounts.',
    details: ['Trained GraphSAGE models with PyTorch and queried transaction links in Neo4j', 'Built the services with FastAPI and Docker', 'Added risk scores that run in under 5 ms and telemetry checks from multiple agents'],
    stack: ['Python', 'GraphSAGE', 'Neo4j', 'FastAPI', 'Docker'],
    link: 'https://github.com/Abpa007/Omni-Sentinel',
    linkLabel: 'Source code',
  },
  {
    number: '02',
    title: 'Event Streaming Engine',
    category: 'Full-stack',
    description: 'A small event-streaming engine for sending updates between services in real time.',
    details: ['Routed events with FastAPI and asyncio', 'Kept WebSocket connections open and separated streams into rooms', 'Built a Streamlit page to check gateway health, connections, and audit events'],
    stack: ['Python', 'FastAPI', 'asyncio', 'WebSockets', 'Streamlit'],
  },
  {
    number: '03',
    title: 'Fraud Ring Detection',
    category: 'AI & Data',
    description: 'A fraud-detection project that looks for suspicious groups of accounts in transaction data.',
    details: ['Compared graph embeddings with vector similarity search', 'Exposed fraud scores through a FastAPI /predict/fraud endpoint', 'Used Streamlit to review account profiles, activity, and risk signals'],
    stack: ['PyTorch', 'GNN', 'FastAPI', 'Vector search', 'Streamlit'],
  },
  {
    number: '04',
    title: 'FinTech Fraud Analysis',
    category: 'Analytics',
    description: 'An analysis of more than a million sample transactions to see where fraud and financial losses show up.',
    details: ['Organized 1M+ transactions in a PostgreSQL star schema', 'Tested Isolation Forest and XGBoost for suspicious activity', 'Built Power BI reports backed by fast SQL aggregations'],
    stack: ['Python', 'PostgreSQL', 'XGBoost', 'Power BI', 'SQL'],
  },
  {
    number: '05',
    title: 'SaaS Churn Analysis',
    category: 'Analytics',
    description: 'A look at which SaaS customers may leave and how much recurring revenue could be at risk.',
    details: ['Scored churn risk across 100,000 customer profiles', 'Prepared the data in a PostgreSQL star-schema warehouse', 'Created Power BI and DAX views for MRR, churn, and revenue at risk'],
    stack: ['PostgreSQL', 'Power BI', 'DAX', 'Python', 'Analytics'],
  },
  {
    number: '06',
    title: 'Customer Data Pipeline',
    category: 'Analytics',
    description: 'A data-cleaning and reporting pipeline for exploring a large customer dataset.',
    details: ['Cleaned and standardized 100,000+ records with Python', 'Indexed PostgreSQL tables for quick queries', 'Made Streamlit dashboards with segment filters and CSV export'],
    stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'ETL', 'Streamlit'],
  },
  {
    number: '07',
    title: 'inSupply',
    category: 'Full-stack',
    description: 'An inventory app for keeping track of stock, orders, and day-to-day supply activity.',
    details: ['Handled stock changes with MongoDB transactions and role-based access', 'Added CSV imports, low-stock alerts, and reports', 'Generated PDF invoices and supported uploads and return reviews'],
    stack: ['MERN', 'MongoDB', 'RBAC', 'Cron', 'Cloudinary'],
    link: 'https://in-supply.vercel.app/',
    linkLabel: 'Live project',
  },
  {
    number: '08',
    title: 'Restaurant Ordering & Delivery',
    category: 'Full-stack',
    description: 'An online food-ordering app with separate views for customers, admins, and delivery staff.',
    details: ['Built customer, admin, and delivery flows with Next.js and MERN', 'Added login, a Redux-powered cart, and payment handling', 'Used WebSockets to show order updates as they happen'],
    stack: ['Next.js', 'Node.js', 'MongoDB', 'WebSockets', 'Redux'],
    link: 'https://sanwariya-pizza.vercel.app/',
    linkLabel: 'Live project',
  },
  {
    number: '09',
    title: 'Expense Tracker',
    category: 'Full-stack',
    description: 'A personal finance app for logging expenses and keeping an eye on spending.',
    details: ['Stored transactions in MongoDB and protected the REST API', 'Used bcrypt for password hashing and JWT for authenticated requests', 'Added category filters, transaction history, and Redux summaries'],
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'Redux'],
    link: 'https://expense-tracker-frontend-nu-seven.vercel.app/',
    linkLabel: 'Live project',
  },
  {
    number: '10',
    title: 'AP-Store',
    category: 'Full-stack',
    description: 'An online store where customers can browse products, manage a cart, and place orders.',
    details: ['Added product search and filters', 'Built the cart and checkout flow', 'Handled sign-in and order management'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    link: 'https://github.com/Abpa007/AP-Store',
    linkLabel: 'Source code',
  },
  {
    number: '11',
    title: 'RAG Teaching Assistant',
    category: 'AI & Data',
    description: 'A teaching assistant that searches course videos and uses their transcripts to answer questions.',
    details: ['Transcribed long videos with Whisper', 'Split course material into sections and created semantic embeddings', 'Retrieved relevant passages to give answers with course context'],
    stack: ['Python', 'RAG', 'Whisper', 'NLP', 'Embeddings'],
  },
  {
    number: '12',
    title: 'Property Price Prediction',
    category: 'AI & Data',
    description: 'A project exploring which property details are most useful for estimating a home\'s price.',
    details: ['Explored the dataset and handled missing values', 'Prepared features and compared regression models', 'Served predictions with Flask and measured errors with RMSE and MAE'],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'EDA'],
  },
]

const filters = ['All projects', 'AI & Data', 'Full-stack', 'Analytics'] as const

const experience = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Cypher Analytica',
    period: 'May 2025 — Nov 2025',
    points: ['Built 10+ APIs with Node.js and Express, including login and role-based access for three dashboards.', 'Connected live WebSocket updates and improved MongoDB schemas, indexes, and queries.', 'Used Python to review server logs and wrote API and data-flow documentation.'],
  },
  {
    role: 'Frontend Intern · Part-time',
    company: 'Pantech Prolabs India Pvt. Ltd.',
    period: 'Jul 2025 — Oct 2025',
    points: ['Built responsive React and Tailwind pages that used data from REST APIs.', 'Made reusable UI components and added validation to application forms with a remote team.'],
  },
  {
    role: 'Software Testing Intern',
    company: 'RAROME Smart School Software',
    period: 'Feb 2025 — Jun 2025',
    points: ['Manually and regression-tested four application modules on different devices.', 'Filed UI, logic, and API bugs in Jira, then checked fixes with developers.']
  },
]

function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function Navigation() {
  const [open, setOpen] = useState(false)
  const items = [['Work', '#work'], ['Experience', '#experience'], ['About', '#about'], ['Roles & Skills', '/roles-and-skills'], ['Contact', '#contact']]
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Abhay Panchal, home"><span className="wordmark-mark">AP</span><span>abhay<span className="wordmark-dot">.</span></span></a>
      <button className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
        {items.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="mailto:abhaypanchal095@gmail.com">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> OPEN TO DEVELOPER ROLES <span className="eyebrow-location"><MapPin aria-hidden="true" /> INDORE, INDIA</span></p>
        <h1>I build useful<br /><span>software.</span></h1>
        <div className="hero-bottom">
          <p className="hero-intro">I&apos;m Abhay. I build web apps, work with data, and enjoy turning a messy problem into something people can actually use.</p>
          <a className="circle-link" href="#work" aria-label="Explore selected projects"><ArrowDown aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-side">
        <div className="portrait-frame" style={{ position: 'absolute', inset: '5% 8%', overflow: 'hidden', padding: 8, border: '1px solid rgb(219 190 142 / 55%)', background: 'linear-gradient(145deg, rgb(219 190 142 / 19%), rgb(242 240 232 / 4%))', boxShadow: '0 24px 80px rgb(0 0 0 / 38%), 0 0 70px rgb(219 190 142 / 8%)' }}>
          <Image
            className="portrait-image"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_z6ks28z6ks28z6ks-PIvAjCTUaSpYmVA0PRS98fhq5WH1fc.png"
            alt="Illustrated portrait of Abhay Panchal in a navy suit and tie"
            width={1024}
            height={1024}
            priority
            unoptimized
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'saturate(.82) contrast(.96)' }}
          />
          <div className="portrait-caption" style={{ position: 'absolute', right: 16, bottom: 16, left: 16, display: 'flex', justifyContent: 'space-between', gap: 8, padding: '10px 12px', border: '1px solid rgb(255 255 255 / 18%)', background: 'rgb(23 32 27 / 88%)', color: '#dce7cf', fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '.12em', backdropFilter: 'blur(8px)' }}><span>ABHAY PANCHAL</span><span style={{ color: '#b9e96e', whiteSpace: 'nowrap' }}>DEVELOPER · DATA</span></div>
        </div>
        <span className="hero-index">01 / 05</span>
      </div>
      <div className="hero-marquee" aria-hidden="true"><span>WEB DEVELOPMENT</span><span>·</span><span>WORKING WITH DATA</span><span>·</span><span>ALWAYS LEARNING</span><span>·</span><span>WEB DEVELOPMENT</span></div>
    </section>
  )
}

function SelectedWork() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All projects')
  const visibleProjects = useMemo(() => filter === 'All projects' ? projects : projects.filter((project) => project.category === filter), [filter])
  return (
    <section id="work" className="work-section section-wrap">
      <SectionLabel number="01">PROJECTS <span className="label-count">({String(projects.length).padStart(2, '0')})</span></SectionLabel>
      <div className="work-heading-row"><div><p className="eyebrow dark-eyebrow">A FEW OF MY PROJECTS</p><h2>Things I&apos;ve <span>built.</span></h2></div><p className="section-intro">A mix of web development, analytics, and machine learning projects. Here are the ones I&apos;ve spent the most time on.</p></div>
      <div className="project-toolbar"><div className="filter-list" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" className={`filter-button${filter === item ? ' active' : ''}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === 'All projects' ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}</div><p className="project-showing">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</p></div>
      <div className="project-grid" aria-live="polite">{visibleProjects.map((project) => <article className="project-card" key={project.number}>
        <div className="project-topline"><span className="project-number">PROJECT / {project.number}</span><span className="project-category">{project.category}</span></div>
        <div className={`project-art art-${project.number}`} aria-hidden="true"><span className="art-grid"/><span className="art-orbit art-orbit-a"/><span className="art-orbit art-orbit-b"/><span className="art-symbol">{project.category === 'Analytics' ? <Radio /> : project.category === 'AI & Data' ? <Sparkles /> : <Code2 />}</span><span className="art-word">{project.number === '01' ? 'OMNI' : project.number === '04' ? 'SIGNAL' : project.number === '07' ? 'SUPPLY' : project.number === '11' ? 'RETRIEVE' : project.category.toUpperCase()}</span></div>
        <div className="project-content"><div className="project-title-row"><h3>{project.title}</h3>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel}: ${project.title}`}><ArrowUpRight aria-hidden="true" /></a>}</div><p className="project-description">{project.description}</p>
          <ul className="project-details">{project.details.map((detail) => <li key={detail}><span aria-hidden="true">↳</span>{detail}</li>)}</ul>
          <div className="project-footer"><div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.link && <a className="project-text-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight aria-hidden="true" /></a>}</div>
        </div>
      </article>)}</div>
    </section>
  )
}

function ExperienceSection() {
  return <section id="experience" className="experience-section"><div className="section-wrap"><SectionLabel number="02">EXPERIENCE</SectionLabel><div className="experience-heading"><h2>Where I&apos;ve<br /><span>worked.</span></h2><p>Internships where I worked on APIs, interfaces, and testing alongside the teams building them.</p></div><div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-index"><span>0{index + 1}</span><span className="timeline-dot" /></div><div className="timeline-main"><p className="timeline-company">{item.company}</p><h3>{item.role}</h3><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div><p className="timeline-period">{item.period}</p></article>)}</div></div></section>
}

function AboutSection() {
  return <section id="about" className="about-section section-wrap"><SectionLabel number="03">ABOUT ME</SectionLabel><div className="about-layout"><div className="about-statement"><p className="eyebrow dark-eyebrow">DEVELOPER · DATA · INDORE</p><h2>I like figuring<br />things <span>out.</span></h2><p className="about-copy">I enjoy working across the backend, the interface, and the data behind a product. Lately, I&apos;ve been spending more time on analytics and applied AI.</p><a className="inline-link" href="https://github.com/Abpa007" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight aria-hidden="true" /></a></div><div className="about-details"><div className="education-card"><div className="about-card-label"><BriefcaseBusiness aria-hidden="true" /> EDUCATION <span>2021 — 2026</span></div><h3>Integrated Master of Computer Applications</h3><p>IPS Academy, Indore</p><p className="education-score">CGPA <strong>7.74</strong></p></div><div className="certification-card"><div className="about-card-label"><Sparkles aria-hidden="true" /> CERTIFICATIONS</div><ul><li>Job Ready Data Science, ML & AI <span>CodeWithHarry</span></li><li>Full Stack MERN Development <span>Vivek IT Solution</span></li><li>C/C++ with Object-Oriented Programming <span>Universal Informatics</span></li></ul></div></div></div></section>
}

function ContactSection() {
  return <footer id="contact" className="contact-section"><div className="contact-inner"><SectionLabel number="04">GET IN TOUCH</SectionLabel><div className="contact-heading"><p>Have a project in mind?</p><h2>Let&apos;s<br /><span>talk.</span></h2><a className="contact-round-link" href="mailto:abhaypanchal095@gmail.com" aria-label="Email Abhay Panchal"><ArrowUpRight aria-hidden="true" /></a></div><div className="contact-bottom"><div className="contact-email"><span>EMAIL ME</span><a href="mailto:abhaypanchal095@gmail.com">abhaypanchal095@gmail.com <ArrowUpRight aria-hidden="true" /></a><a href="tel:+919406969849">+91 94069 69849</a></div><div className="social-links"><a href="https://github.com/Abpa007" target="_blank" rel="noreferrer"><Code2 aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a><a href="https://www.linkedin.com/in/abhay-panchal-3b853b376" target="_blank" rel="noreferrer"><Globe2 aria-hidden="true" /> LinkedIn <ArrowUpRight aria-hidden="true" /></a><a href="mailto:abhaypanchal095@gmail.com"><Mail aria-hidden="true" /> Email <ArrowUpRight aria-hidden="true" /></a></div></div><div className="footer-legal"><span>© {new Date().getFullYear()} Abhay Panchal</span><span>Made in Indore, India.</span><a href="#top">BACK TO TOP <ArrowRight aria-hidden="true" /></a></div></div></footer>
}

export default function Portfolio() {
  return <><Navigation /><main><Hero /><SelectedWork /><ExperienceSection /><AboutSection /></main><ContactSection /></>
}
