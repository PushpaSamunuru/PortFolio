
"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "AI & Machine Learning",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "LLMs"],
  },
  {
    title: "Backend & Development",
    items: ["FastAPI", "React", "Next.js", "SQL", "REST APIs", "Git"],
  },
  {
    title: "Cloud & Automation",
    items: ["AWS", "Azure", "Docker", "Microsoft 365", "Power Apps", "Automation"],
  },
];

const projects = [
  {
    title: "AI Monitoring System",
    description:
      "Python and machine learning concepts for detecting faults and anomalies in infrastructure systems.",
    tags: ["Python", "Machine Learning", "Monitoring"],
  },
  {
    title: "ML Testing Framework",
    description:
      "Testing workflows focused on model validation, edge cases, and reliability.",
    tags: ["Python", "ML Testing", "Validation"],
  },
  {
    title: "Automation Scripts",
    description:
      "Python automation for data processing and repeatable operational workflows.",
    tags: ["Python", "Automation", "Data Processing"],
  },
];

const experience = [
  {
    role: "IT Operations Lead",
    company: "MedBetterHealth",
    period: "2026 – Present",
    description:
      "Working across cloud applications, Microsoft 365 administration, web development, integrations, technical operations, and AI-powered workflow automation.",
  },
  {
    role: "Project Engineer",
    company: "Wipro",
    period: "2022 – 2024",
    description:
      "Worked with application development, debugging, enterprise systems, and software automation.",
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65 },
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090B18] text-slate-100">
      {/* NAVIGATION */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090B18]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a
            href="#home"
            className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-xl font-bold text-transparent"
          >
            Pushpa Samunuru
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-purple-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/20 p-2 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 bg-[#101329] px-6 py-5 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-200 hover:text-purple-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-14 px-6 pb-20 pt-36 md:flex-row"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-purple-600/25 blur-[110px]"
          animate={reduceMotion ? {} : { x: [0, 65, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 bottom-10 h-[400px] w-[400px] rounded-full bg-indigo-600/25 blur-[110px]"
          animate={reduceMotion ? {} : { x: [0, -50, 0], y: [0, -35, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 flex-1 text-center md:text-left"
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
            <Sparkles size={16} />
            Building intelligent digital solutions
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Hi, I'm
            <span className="mt-2 block bg-gradient-to-r from-white via-purple-300 to-violet-500 bg-clip-text text-transparent">
              Pushpa
            </span>
          </h1>

          <p className="mb-5 text-xl font-semibold text-purple-300 md:text-2xl">
            AI & ML Engineer | Software Developer
          </p>

          <p className="mb-8 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            I build AI-powered applications, automation workflows, and
            cloud-connected software solutions. My interests span machine
            learning, Python development, and practical AI systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:scale-105"
            >
              Explore Projects <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-purple-400/50 px-7 py-3 font-semibold text-purple-200 transition hover:bg-purple-500/15"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex justify-center gap-5 md:justify-start">
            <a
              href="https://github.com/PushpaSamunuru"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-400 transition hover:text-purple-300"
            >
              <Github size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/s-pushpa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-400 transition hover:text-purple-300"
            >
              <Linkedin size={25} />
            </a>
            <a
              href="mailto:pushpasamunuru0901@gmail.com"
              aria-label="Send email"
              className="text-slate-400 transition hover:text-purple-300"
            >
              <Mail size={25} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 flex w-full max-w-sm flex-1 justify-center"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="absolute inset-4 rounded-3xl bg-purple-600/40 blur-3xl" />
          <img
            src="/portfolio.jpg"
            alt="Pushpa Samunuru"
            className="relative w-full max-w-[350px] rounded-3xl border border-purple-400/40 object-cover shadow-2xl shadow-purple-950/60"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-6 py-24">
        <motion.div {...reveal} className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Introduction
          </p>
          <h2 className="mb-7 text-4xl font-bold md:text-5xl">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="max-w-3xl text-lg leading-9 text-slate-400">
            I'm a computer science professional with experience in software
            engineering, IT operations, cloud-based applications, and
            automation. I enjoy connecting AI and software development to
            solve real business problems, from intelligent workflows to
            practical enterprise applications.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 bg-[#0D1125] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal}>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-purple-400">
              My Technology Stack
            </p>
            <h2 className="mb-12 text-4xl font-bold md:text-5xl">
              Technical <span className="text-purple-400">Skills</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((group, index) => (
              <motion.div
                key={group.title}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={reduceMotion ? {} : { y: -7 }}
                className="rounded-2xl border border-purple-500/20 bg-white/[0.04] p-7 shadow-lg transition-colors hover:border-purple-400/60 hover:bg-purple-500/10"
              >
                <Code2 className="mb-5 text-purple-400" size={30} />
                <h3 className="mb-6 text-xl font-bold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-[#151A35] px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div {...reveal}>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-purple-400">
              Professional Journey
            </p>
            <h2 className="mb-12 text-4xl font-bold md:text-5xl">
              Work <span className="text-purple-400">Experience</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {experience.map((job) => (
              <motion.div
                key={job.company}
                {...reveal}
                className="rounded-2xl border border-white/10 bg-[#11162D] p-7 transition-colors hover:border-purple-500/50"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <BriefcaseBusiness className="mb-3 text-purple-400" />
                    <h3 className="text-2xl font-bold">{job.role}</h3>
                    <p className="mt-1 text-purple-300">{job.company}</p>
                  </div>
                  <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                    {job.period}
                  </span>
                </div>
                <p className="leading-8 text-slate-400">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-[#0D1125] px-6 py-20">
        <motion.div {...reveal} className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-4xl font-bold">
            <span className="text-purple-400">Education</span>
          </h2>

          <div className="rounded-2xl border border-purple-500/20 bg-white/[0.04] p-8">
            <GraduationCap className="mb-4 text-purple-400" size={32} />
            <h3 className="text-2xl font-bold">
              Master of Science in Computer Science
            </h3>
            <p className="mt-2 text-lg text-purple-300">
              Florida Atlantic University
            </p>
            <p className="mt-3 text-slate-400">2024 – 2026</p>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal}>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-purple-400">
              Selected Work
            </p>
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <p className="mb-12 text-slate-400">
              Project summaries and technical focus areas. Detailed case
              studies and repository links will be added after verification.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={reduceMotion ? {} : { y: -8 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#11162D] transition-colors hover:border-purple-400/60"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-purple-900/70 via-[#181D41] to-indigo-900/70">
                  <Code2 size={58} className="text-purple-300/70" />
                </div>
                <div className="p-7">
                  <h3 className="mb-4 text-xl font-bold">{project.title}</h3>
                  <p className="mb-6 min-h-28 leading-7 text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/10 bg-[#0D1125] px-6 py-24"
      >
        <motion.div {...reveal} className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-purple-400">
            Let's Connect
          </p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Let's Build Something{" "}
            <span className="text-purple-400">Great</span>
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-lg leading-8 text-slate-400">
            Interested in AI, machine learning, software engineering, or
            collaboration? I'd love to connect.
          </p>

          <a
            href="mailto:pushpasamunuru0901@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <Mail size={20} />
            Get in Touch
          </a>

          <div className="mt-8 flex justify-center gap-7">
            <a
              href="https://github.com/PushpaSamunuru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/s-pushpa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-300"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pushpa Samunuru. All rights reserved.
      </footer>
    </main>
  );
}
