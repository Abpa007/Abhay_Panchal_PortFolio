import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness } from 'lucide-react'

const roles = [
  {
    number: '01',
    title: 'Frontend Developer',
    summary: 'Building responsive interfaces and connecting them to real application data.',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Redux Toolkit', 'SSR', 'SSG'],
  },
  {
    number: '02',
    title: 'Backend Developer',
    summary: 'Creating APIs and server-side features, with experience in authentication and data handling.',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'Flask', 'Python', 'RESTful APIs', 'JWT', 'OAuth', 'RBAC', 'Docker', 'WebSockets'],
  },
  {
    number: '03',
    title: 'MERN / Full-Stack Developer',
    summary: 'Working across the interface, API, and database to deliver complete web applications.',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Redux Toolkit', 'MySQL', 'JWT', 'RBAC'],
  },
  {
    number: '04',
    title: 'Data Analyst',
    summary: 'Cleaning and exploring data, writing queries, and turning results into useful reports.',
    skills: ['SQL', 'Python', 'Pandas', 'NumPy', 'PostgreSQL', 'MySQL', 'Power BI', 'Advanced Excel', 'Tableau', 'Looker Studio', 'Snowflake', 'DAX', 'Streamlit'],
  },
  {
    number: '05',
    title: 'Data Science / AI & ML',
    summary: 'Applying machine-learning techniques through projects in prediction, fraud detection, and retrieval.',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'NLP', 'RAG', 'Vector embeddings', 'GNN', 'Neo4j'],
  },
]

const skillGroups = [
  {
    title: 'Languages & fundamentals',
    skills: ['Python', 'JavaScript', 'SQL', 'C', 'C++', 'Object-oriented programming', 'Data structures & algorithms', 'System design', 'Problem solving', 'Statistical analysis', 'UI logic building'],
  },
  {
    title: 'Frontend & web',
    skills: ['React.js', 'Next.js', 'Next.js App Router', 'React Server Components', 'HTML', 'CSS', 'Tailwind CSS', 'Redux', 'Redux Toolkit', 'Responsive design', 'REST API integration', 'Form validation', 'Server-side rendering (SSR)', 'Static site generation (SSG)'],
  },
  {
    title: 'Backend & application security',
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI', 'RESTful APIs', 'JWT authentication', 'OAuth', 'Role-based access control (RBAC)', 'Middleware architecture', 'WebSockets', 'bcrypt', 'Stripe', 'Razorpay', 'Cloudinary'],
  },
  {
    title: 'Databases & data engineering',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Neo4j', 'Schema design', 'Star schema modeling', 'Database indexing', 'Query optimization', 'Aggregation pipelines', 'Transaction management', 'ETL pipelines', 'Data cleaning', 'Web scraping', 'SQLAlchemy'],
  },
  {
    title: 'Data science & AI',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'XGBoost', 'Machine learning', 'Predictive modeling', 'Feature engineering', 'Regression models', 'Neural networks', 'Graph neural networks (GNN)', 'GraphSAGE', 'NLP', 'Sentiment analysis', 'RAG pipelines', 'Vector embeddings', 'OpenAI Whisper'],
  },
  {
    title: 'Analytics & reporting',
    skills: ['Power BI', 'DAX', 'Advanced Excel', 'Tableau', 'Looker Studio', 'Snowflake', 'Streamlit', 'Data visualization', 'Exploratory data analysis (EDA)', 'Trend forecasting', 'A/B testing', 'KPI dashboards', 'CSV data processing'],
  },
  {
    title: 'Tools, quality & delivery',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter Notebook', 'Jira', 'Docker', 'Vercel', 'Render', 'Netlify', 'Unit testing (PyTest)', 'Manual testing', 'Regression testing', 'API testing', 'Cross-browser compatibility', 'Debugging', 'Code reviews', 'CI/CD', 'Agile/Scrum', 'Figma handoff', 'Prompt engineering', 'Gemini API', 'GitHub Copilot', 'Cursor', 'AI-assisted development'],
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

        <section aria-labelledby="complete-skills-heading" className="mt-12 border-t border-[#d8dbd0] pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#5c7047]">Resume-verified skill set</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="complete-skills-heading" className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">The full toolkit.</h2>
            <p className="max-w-lg text-sm leading-6 text-[#626b62]">Skills consolidated from all 10 resume versions. Repeated entries are listed once; role cards above highlight relevant combinations.</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-md border border-[#d8dbd0] bg-[#fbfaf5] p-4 sm:p-5">
                <h3 className="text-sm font-semibold tracking-tight">{group.title}</h3>
                <ul aria-label={group.title} className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-sm bg-[#e8ebdf] px-2.5 py-1.5 text-xs font-medium text-[#3c4c35]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#d8dbd0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[#626b62]">Also open to related junior and entry-level opportunities where I can keep learning and contribute.</p>
          <a className="roles-contact-link inline-flex w-fit items-center gap-2 rounded-sm bg-[#1a241d] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#304331]" href="mailto:abhaypanchal095@gmail.com">
            Get in touch <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </main>
  )
}
