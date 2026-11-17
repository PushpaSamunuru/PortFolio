'use client';

import { useState } from 'react';

const skills = ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Flask / FastAPI', 'SQL / Pandas'];

const projects = [
  {
    title: 'CarePilot AI',
    image: '/project-images/carepilot-ai.webp',
    description: 'Healthcare operations demo for patient intake, AI-style summaries, follow-up workflows, PDF reports, and KPI dashboards.',
    stack: 'React · TypeScript · Tailwind CSS · jsPDF',
    github: 'https://github.com/PushpaSamunuru/carepilot-ai',
    demo: 'https://ai-carepilot.netlify.app/',
  },
  {
    title: 'DocuMind AI',
    image: '/project-images/documind-ai.webp',
    description: 'Privacy-first document intelligence app to chat with multiple PDFs using local AI, FAISS semantic search, and cited answers.',
    stack: 'Python · Streamlit · Ollama · Gemma 3 · FAISS',
    github: 'https://github.com/PushpaSamunuru/DocuMind-AI',
  },
  {
    title: 'AI Support Ticket Triage',
    image: '/project-images/ai-support-ticket-triage.webp',
    description: 'NLP system that categorizes support tickets, predicts urgency, flags risky language, and displays confidence scores for human review.',
    stack: 'FastAPI · Transformers · SQLite · SQLAlchemy',
    github: 'https://github.com/PushpaSamunuru/ai-support-ticket-triage',
  },
  {
    title: 'Health Insights Agent',
    image: '/project-images/health-insights-agent.webp',
    description: 'AI-powered app for extracting lab values from blood report PDFs and presenting easy-to-understand health summaries.',
    stack: 'Python · Streamlit · Groq · Supabase · FAISS',
    github: 'https://github.com/PushpaSamunuru/Health_Insights_Agent',
  },
];

const nav = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0a16] text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0a16]/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-tight text-white">PUSHPA<span className="text-violet-400">.</span></a>
          <div className="hidden items-center gap-8 text-sm md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-slate-300 transition hover:text-violet-300">{label}</a>
            ))}
          </div>
          <button type="button" className="rounded-lg border border-white/20 px-3 py-2 text-sm md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        </div>
        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-slate-200">{label}</a>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="flex min-h-[75vh] scroll-mt-24 items-center px-6 py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_350px]">
          <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">AI & Machine Learning Engineer</p>
          <h1 className="mb-7 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Hi, I'm <span className="text-violet-300">Pushpa Samunuru.</span>
          </h1>
          <p className="mb-5 max-w-2xl text-xl leading-relaxed text-slate-200 sm:text-2xl">Building intelligent systems and practical software solutions.</p>
          <p className="mb-9 max-w-2xl leading-8 text-slate-400">I work with Python, machine learning, AI applications, and automation to solve real-world problems.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500">Explore Projects</a>
            <a href="#contact" className="rounded-lg border border-violet-400/50 px-6 py-3 font-semibold text-violet-200 transition hover:bg-white/5">Contact Me</a>
          </div>
          </div>
          <div className="mx-auto w-full max-w-[350px] lg:mx-0">
            <img src="/portfolio.jpg" alt="Pushpa Samunuru" className="w-full rounded-2xl border border-violet-400/20 object-cover shadow-[0_20px_70px_rgba(79,70,229,0.15)]" />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-white/10 bg-[#100e20] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-300">Introduction</p>
          <h2 className="mb-7 text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="max-w-3xl text-lg leading-9 text-slate-300">
            I'm passionate about AI and currently transitioning into an AI Engineer role. With a strong foundation in Python, ML model building, automation, and frameworks like TensorFlow and PyTorch, I aim to create intelligent systems that solve real-world problems in NLP, cybersecurity, and human-AI interaction.
          </p>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-t border-white/10 bg-[#100e20] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-300">Professional Background</p>
          <h2 className="mb-9 text-3xl font-bold sm:text-4xl">Experience</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-[#17142b] p-6">
              <p className="mb-2 text-sm font-medium text-violet-300">2026 – Present</p>
              <h3 className="text-xl font-semibold">IT Operations Lead</h3>
              <p className="mt-1 text-slate-300">MedBetterHealth</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">Support IT operations, workflow automation, and technology improvements for healthcare services.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#17142b] p-6">
              <p className="mb-2 text-sm font-medium text-violet-300">Dec 2022 – Oct 2024</p>
              <h3 className="text-xl font-semibold">Project Engineer</h3>
              <p className="mt-1 text-slate-300">Wipro</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">Built enterprise software features and automation using .NET, Angular, MySQL, and Python.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#17142b] p-6">
              <p className="mb-2 text-sm font-medium text-violet-300">Oct 2022 – Dec 2022</p>
              <h3 className="text-xl font-semibold">Automation Engineer Intern</h3>
              <p className="mt-1 text-slate-300">BayOne Solutions</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">Developed Python testing workflows and validated machine learning applications with edge-case testing.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#17142b] p-6">
              <p className="mb-2 text-sm font-medium text-violet-300">Mar 2022 – May 2022</p>
              <h3 className="text-xl font-semibold">Project Intern</h3>
              <p className="mt-1 text-slate-300">Wipro</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">Developed an Online VCD application using Java and J2EE.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-300">Technologies</p>
          <h2 className="mb-9 text-3xl font-bold sm:text-4xl">Skills</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {skills.map(skill => (
              <div key={skill} className="rounded-xl border border-white/10 bg-white/[0.035] p-5 font-medium text-slate-200">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-y border-white/10 bg-[#100e20] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-300">Selected Work</p>
          <h2 className="mb-9 text-3xl font-bold sm:text-4xl">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map(project => (
              <article key={project.title} className="group relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-[#17142b] focus-within:border-violet-400/60">
                <img
                  src={project.image}
                  alt={project.title + ' project illustration'}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-focus-within:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090819] via-[#090819]/65 to-transparent transition duration-300 md:group-hover:bg-[#090819]/85 md:group-focus-within:bg-[#090819]/85" />
                <div className="relative flex min-h-[340px] flex-col justify-end p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
                  <div className="mt-3 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-52 md:group-hover:opacity-100 md:group-focus-within:max-h-52 md:group-focus-within:opacity-100">
                    <p className="text-sm leading-6 text-slate-100">{project.description}</p>
                    <p className="mt-3 text-xs leading-5 text-violet-200">{project.stack}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-violet-300/60 bg-[#17142b]/90 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300">
                      View on GitHub ↗
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-300">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-300">Get in Touch</p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Let's Connect</h2>
          <p className="mb-6 max-w-xl leading-8 text-slate-400">Interested in collaborating or discussing an opportunity? I'd be happy to connect.</p>
          <a href="mailto:pushpasamunuru0901@gmail.com" className="break-all text-violet-300 hover:underline">pushpasamunuru0901@gmail.com</a>
          <div className="mt-7 flex gap-7">
            <a href="https://www.linkedin.com/in/s-pushpa" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-violet-300">LinkedIn</a>
            <a href="https://github.com/PushpaSamunuru" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-violet-300">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pushpa Samunuru. All rights reserved.
      </footer>
    </main>
  );
}
