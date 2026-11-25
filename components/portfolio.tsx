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
    description: 'An autonomous financial-forensics platform that traces suspicious activity through connected transaction networks.',
    details: ['GraphSAGE models with PyTorch and Neo4j graph queries', 'FastAPI services with Dockerized microservices', 'Sub-5ms risk-scoring pipeline and multi-agent telemetry analysis'],
    stack: ['Python', 'GraphSAGE', 'Neo4j', 'FastAPI', 'Docker'],
    link: 'https://github.com/Abpa007/Omni-Sentinel',
    linkLabel: 'Source code',
  },
  {
    number: '02',
    title: 'Distributed Event Streaming Engine',
    category: 'Full-stack',
    description: 'A low-latency async pub/sub engine for persistent, isolated live data streams and operational visibility.',
    details: ['FastAPI and asyncio-based event routing', 'Persistent WebSocket gateways with room partitioning', 'Streamlit console for gateway health, sockets, and audit metrics'],
    stack: ['Python', 'FastAPI', 'asyncio', 'WebSockets', 'Streamlit'],
  },
  {
    number: '03',
    title: 'GNN Fraud Ring Intelligence',
    category: 'AI & Data',
    description: 'A multi-modal detection service designed to identify complex fraud rings from transaction behavior and graph signals.',
    details: ['Graph embeddings paired with vector-similarity search', 'FastAPI scoring endpoint at /predict/fraud', 'Streamlit intelligence hub for profiles, velocity, and risk signals'],
    stack: ['PyTorch', 'GNN', 'FastAPI', 'Vector search', 'Streamlit'],
  },
  {
    number: '04',
    title: 'Autonomous FinTech Fraud Analytics',
    category: 'Analytics',
    description: 'A transaction analytics platform that turns a high-volume synthetic dataset into fraud and loss intelligence.',
    details: ['Generated and modeled 1M+ transactions in a PostgreSQL star schema', 'Isolation Forest and XGBoost with automated risk telemetry', 'Power BI executive reporting with sub-second SQL aggregations'],
    stack: ['Python', 'PostgreSQL', 'XGBoost', 'Power BI', 'SQL'],
  },
  {
    number: '05',
    title: 'SaaS Churn & Revenue Intelligence',
    category: 'Analytics',
    description: 'A B2B retention analytics suite that translates customer engagement signals into revenue-at-risk priorities.',
    details: ['Churn scoring across 100,000 enterprise account profiles', 'PostgreSQL warehouse with a star-schema model', 'Power BI and DAX measures for MRR, churn, and revenue at risk'],
    stack: ['PostgreSQL', 'Power BI', 'DAX', 'Python', 'Analytics'],
  },
  {
    number: '06',
    title: 'Enterprise Customer Analytics Pipeline',
    category: 'Analytics',
    description: 'A repeatable ETL and BI workflow for turning large, raw customer datasets into useful segments and KPIs.',
    details: ['Python ETL to clean and standardize 100,000+ records', 'Indexed PostgreSQL data for sub-second analytics queries', 'Streamlit dashboards with segment filters and CSV exports'],
    stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'ETL', 'Streamlit'],
  },
  {
    number: '07',
    title: 'inSupply',
    category: 'Full-stack',
    description: 'A multi-tenant inventory and supply-chain platform built around reliable stock movement and operational reporting.',
    details: ['Atomic MongoDB transactions, RBAC, and scheduled state transitions', 'CSV ingestion, low-stock alerts, and KPI reporting', 'On-demand PDF invoices, media uploads, and return audit previews'],
    stack: ['MERN', 'MongoDB', 'RBAC', 'Cron', 'Cloudinary'],
    link: 'https://in-supply.vercel.app/',
    linkLabel: 'Live project',
  },
  {
    number: '08',
    title: 'Restaurant Ordering & Delivery',
    category: 'Full-stack',
    description: 'A three-role food ordering experience with secure checkout and live order status updates.',
    details: ['Next.js and MERN user, admin, and delivery workflows', 'JWT access, Redux cart state, and payment integration', 'WebSocket order tracking with responsive Tailwind layouts'],
    stack: ['Next.js', 'Node.js', 'MongoDB', 'WebSockets', 'Redux'],
    link: 'https://sanwariya-pizza.vercel.app/',
    linkLabel: 'Live project',
  },
  {
    number: '09',
    title: 'Expense Tracker',
    category: 'Full-stack',
    description: 'A secure personal finance app for recording transactions, reviewing ledgers, and understanding spending patterns.',
    details: ['Protected REST APIs and MongoDB financial records', 'Bcrypt password hashing and JWT-protected endpoints', 'Redux-powered summaries, category filters, and transaction history'],
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'Redux'],
    link: 'https://expense-tracker-frontend-nu-seven.vercel.app/',
    linkLabel: 'Live project',
  },
  {
    number: '10',
    title: 'AP-Store',
    category: 'Full-stack',
    description: 'An end-to-end shopping experience with product discovery, basket management, and order flows.',
    details: ['Product catalog with filtering and search', 'Stateful cart and checkout experience', 'Authentication and order management workflows'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    link: 'https://github.com/Abpa007/AP-Store',
    linkLabel: 'Source code',
  },
  {
    number: '11',
    title: 'RAG Teaching Assistant',
    category: 'AI & Data',
    description: 'A video-aware learning assistant that grounds answers in transcribed course material and retrieved context.',
    details: ['OpenAI Whisper transcription for long-form video', 'Hierarchical document chunking and semantic embeddings', 'Retrieval-augmented prompts designed to preserve context'],
    stack: ['Python', 'RAG', 'Whisper', 'NLP', 'Embeddings'],
  },
  {
    number: '12',
    title: 'Real Estate Price Intelligence',
    category: 'AI & Data',
    description: 'An end-to-end property price prediction workflow, from exploratory analysis through a lightweight API.',
    details: ['Exploratory analysis and structured handling of missing data', 'Feature preparation and regression model evaluation', 'Flask API with RMSE and MAE model assessment'],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'EDA'],
  },
]

const filters = ['All work', 'AI & Data', 'Full-stack', 'Analytics'] as const

const skillGroups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'C', 'C++'] },
  { title: 'Product engineering', items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Django', 'Flask'] },
  { title: 'Data & AI', items: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'RAG', 'NLP', 'GNN'] },
  { title: 'Platforms & workflow', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Neo4j', 'Power BI', 'Streamlit', 'Docker', 'Git', 'Jira'] },
]

const experience = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Cypher Analytica',
    period: 'May 2025 — Nov 2025',
    points: ['Built 10+ Node.js and Express APIs, JWT authentication, and role-based access for three dashboard portals.', 'Integrated real-time WebSocket feeds; improved MongoDB schemas, indexes, and aggregation pipelines.', 'Used Python scripts for server-log analysis and documented API and data-flow specifications.'],
  },
  {
    role: 'Frontend Intern · Part-time',
    company: 'Pantech Prolabs India Pvt. Ltd.',
    period: 'Jul 2025 — Oct 2025',
    points: ['Built responsive React and Tailwind interfaces that consumed asynchronous REST and JSON data.', 'Created reusable UI modules and validation across application forms in a remote engineering team.'],
  },
  {
    role: 'Software Testing Intern',
    company: 'RAROME Smart School Software',
    period: 'Feb 2025 — Jun 2025',
    points: ['Ran manual and regression testing across four application modules and multiple device viewports.', 'Logged UI, logic, and API defects in Jira and collaborated with developers through verification.'],
  },
]

function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function Navigation() {
  const [open, setOpen] = useState(false)
  const items = [['Work', '#work'], ['Experience', '#experience'], ['About', '#about'], ['Contact', '#contact']]
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
        <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR THE NEXT CHAPTER <span className="eyebrow-location"><MapPin aria-hidden="true" /> INDORE, INDIA</span></p>
        <h1>Ideas into<br /><span>impact.</span></h1>
        <div className="hero-bottom">
          <p className="hero-intro">I&apos;m Abhay Panchal — a developer and data practitioner building thoughtful software, useful intelligence, and the systems in between.</p>
          <a className="circle-link" href="#work" aria-label="Explore selected projects"><ArrowDown aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-side">
        <div className="portrait-frame" style={{ position: 'absolute', inset: '5% 8%', overflow: 'hidden', padding: 8, border: '1px solid rgb(197 239 128 / 48%)', background: 'linear-gradient(145deg, rgb(197 239 128 / 13%), rgb(242 240 232 / 5%))', boxShadow: '0 24px 80px rgb(0 0 0 / 28%), 0 0 70px rgb(197 239 128 / 8%)' }}>
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
      <div className="hero-marquee" aria-hidden="true"><span>BUILD WITH PURPOSE</span><span>·</span><span>MAKE DATA USEFUL</span><span>·</span><span>SHIP WITH CARE</span><span>·</span><span>BUILD WITH PURPOSE</span></div>
    </section>
  )
}

function SelectedWork() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All work')
  const visibleProjects = useMemo(() => filter === 'All work' ? projects : projects.filter((project) => project.category === filter), [filter])
  return (
    <section id="work" className="work-section section-wrap">
      <SectionLabel number="01">SELECTED WORK <span className="label-count">({String(projects.length).padStart(2, '0')})</span></SectionLabel>
      <div className="work-heading-row"><div><p className="eyebrow dark-eyebrow">A PROJECT FOR EVERY QUESTION</p><h2>Built to be <span>useful.</span></h2></div><p className="section-intro">From resilient commerce flows to graph-powered fraud intelligence — here&apos;s the work, one distinct idea at a time.</p></div>
      <div className="project-toolbar"><div className="filter-list" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" className={`filter-button${filter === item ? ' active' : ''}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === 'All work' ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}</div><p className="project-showing">SHOWING {String(visibleProjects.length).padStart(2, '0')} PROJECTS</p></div>
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
  return <section id="experience" className="experience-section"><div className="section-wrap"><SectionLabel number="02">EXPERIENCE</SectionLabel><div className="experience-heading"><h2>Learning by<br /><span>doing the work.</span></h2><p>Three internships. Three different lenses on building software that people can rely on.</p></div><div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-index"><span>0{index + 1}</span><span className="timeline-dot" /></div><div className="timeline-main"><p className="timeline-company">{item.company}</p><h3>{item.role}</h3><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div><p className="timeline-period">{item.period}</p></article>)}</div></div></section>
}

function AboutSection() {
  return <section id="about" className="about-section section-wrap"><SectionLabel number="03">A LITTLE CONTEXT</SectionLabel><div className="about-layout"><div className="about-statement"><p className="eyebrow dark-eyebrow">DEVELOPER · DATA EXPLORER · LIFELONG LEARNER</p><h2>Curious by nature.<br />Grounded in <span>craft.</span></h2><p className="about-copy">I work across full-stack engineering, analytics, and applied AI. That mix helps me see a problem from the data layer to the interface — and build the pieces into one considered solution.</p><a className="inline-link" href="https://github.com/Abpa007" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight aria-hidden="true" /></a></div><div className="about-details"><div className="education-card"><div className="about-card-label"><BriefcaseBusiness aria-hidden="true" /> EDUCATION <span>2021 — 2026</span></div><h3>Integrated Master of Computer Applications</h3><p>IPS Academy, Indore</p><p className="education-score">CGPA <strong>7.74</strong></p></div><div className="skills-card"><div className="about-card-label"><Code2 aria-hidden="true" /> TOOLKIT <span>FOUR DISCIPLINES</span></div><div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></div>)}</div></div><div className="certification-card"><div className="about-card-label"><Sparkles aria-hidden="true" /> CERTIFICATIONS</div><ul><li>Job Ready Data Science, ML & AI <span>CodeWithHarry</span></li><li>Full Stack MERN Development <span>Vivek IT Solution</span></li><li>C/C++ with Object-Oriented Programming <span>Universal Informatics</span></li></ul></div></div></div></section>
}

function ContactSection() {
  return <footer id="contact" className="contact-section"><div className="contact-inner"><SectionLabel number="04">MAKE SOMETHING MATTER</SectionLabel><div className="contact-heading"><p>Have a good problem?</p><h2>Let&apos;s make it<br /><span>better.</span></h2><a className="contact-round-link" href="mailto:abhaypanchal095@gmail.com" aria-label="Email Abhay Panchal"><ArrowUpRight aria-hidden="true" /></a></div><div className="contact-bottom"><div className="contact-email"><span>THE BEST WAY TO REACH ME</span><a href="mailto:abhaypanchal095@gmail.com">abhaypanchal095@gmail.com <ArrowUpRight aria-hidden="true" /></a><a href="tel:+919406969849">+91 94069 69849</a></div><div className="social-links"><a href="https://github.com/Abpa007" target="_blank" rel="noreferrer"><Code2 aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a><a href="https://www.linkedin.com/in/abhay-panchal-3b853b376" target="_blank" rel="noreferrer"><Globe2 aria-hidden="true" /> LinkedIn <ArrowUpRight aria-hidden="true" /></a><a href="mailto:abhaypanchal095@gmail.com"><Mail aria-hidden="true" /> Email <ArrowUpRight aria-hidden="true" /></a></div></div><div className="footer-legal"><span>© {new Date().getFullYear()} Abhay Panchal</span><span>Designed with intent. Built with care.</span><a href="#top">BACK TO TOP <ArrowRight aria-hidden="true" /></a></div></div></footer>
}

export default function Portfolio() {
  return <><Navigation /><main><Hero /><SelectedWork /><ExperienceSection /><AboutSection /></main><ContactSection /></>
}
