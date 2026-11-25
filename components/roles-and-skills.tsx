import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness } from 'lucide-react'

const roles = [
  {
    number: '01',
    title: 'Frontend Developer',
    summary: 'Building clear, responsive interfaces and connecting them to real application data.',
    skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend Developer',
    summary: 'Creating APIs and server-side features, with experience in authentication and data handling.',
    skills: ['Node.js', 'Express', 'FastAPI', 'Django', 'Flask', 'Python', 'REST APIs', 'Docker', 'Git', 'WebSockets'],
  },
  {
    number: '03',
    title: 'MERN / Full-Stack Developer',
    summary: 'Working across the interface, API, and database to deliver complete web applications.',
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'Redux', 'JWT', 'RBAC'],
  },
  {
    number: '04',
    title: 'Data Analyst',
    summary: 'Cleaning and exploring data, writing queries, and turning results into useful reports.',
    skills: ['SQL', 'Python', 'Pandas', 'NumPy', 'PostgreSQL', 'MySQL', 'Power BI', 'Streamlit', 'Jira'],
  },
  {
    number: '05',
    title: 'Data Science / AI & ML',
    summary: 'Applying machine-learning techniques through projects in prediction, fraud detection, and retrieval.',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'NLP', 'RAG', 'GNN', 'Neo4j'],
  },
]

export default function RolesAndSkills() {
  return (
    <main className="min-h-screen bg-[#f3f2eb] text-[#1a241d]">
      <header className="border-b border-[#d8dbd0] bg-[#17201b] text-[#f2f0e8]">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link className="text-sm font-semibold tracking-tight" href="/" aria-label="Abhay Panchal home">
            Abhay Panchal<span className="text-[#b9e96e]">.</span>
          </Link>
          <Link className="inline-flex items-center gap-2 text-xs text-[#c8d0c6] transition-colors hover:text-white" href="/">
            <ArrowLeft aria-hidden="true" size={15} /> Back to portfolio
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#5c7047]">
            <BriefcaseBusiness aria-hidden="true" size={15} /> Career interests
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Roles I&apos;m open to</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#5b655c] sm:text-lg">
            I&apos;m open to opportunities across software development and data. Here&apos;s how my current skills line up with each area.
          </p>
        </div>

        <section aria-label="Roles and related skills" className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2">
          {roles.map((role) => (
            <article key={role.number} className="rounded-md border border-[#d8dbd0] bg-[#fbfaf5] p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-[#e5e6de] pb-3">
                <span className="text-[11px] font-medium tracking-[0.14em] text-[#718064]">ROLE {role.number}</span>
                <span className="text-[11px] text-[#879084]">Relevant skills</span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{role.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#626b62]">{role.summary}</p>
              <ul aria-label={`${role.title} skills`} className="mt-5 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <li key={skill} className="rounded-sm bg-[#e8ebdf] px-2.5 py-1.5 text-xs font-medium text-[#3c4c35]">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <p className="mt-5 text-xs leading-6 text-[#737d72]">
          Additional languages from my toolkit: C and C++.
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#d8dbd0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[#626b62]">Also open to related junior and entry-level opportunities where I can keep learning and contribute.</p>
          <a className="inline-flex w-fit items-center gap-2 rounded-sm bg-[#1a241d] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#304331]" href="mailto:abhaypanchal095@gmail.com">
            Get in touch <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </main>
  )
}
