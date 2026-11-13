
"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github, Linkedin, Mail, Menu, X, ArrowUpRight,
  Sparkles, GraduationCap, BriefcaseBusiness, Code2
} from "lucide-react";

// ---------------------------
// PORTFOLIO CONTENT
// ---------------------------

const skills = [
  {
    title: "AI & Machine Learning",
    items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "NLP", "LLMs"]
  },
  {
    title: "Software Engineering",
    items: ["React", "Next.js", "FastAPI", "SQL", "REST APIs", "Git"]
  },
  {
    title: "Cloud & Automation",
    items: ["AWS", "Docker", "Azure", "Microsoft 365", "Automation"]
  }
];

const experience = [
  {
    role: "IT Operations Lead",
    company: "MedBetterHealth",
    period: "2026 – Present",
    description:
      "IT operations, cloud applications, enterprise integrations, software development, and workflow automation."
  },
  {
    role: "Project Engineer",
    company: "Wipro",
    period: "2022 – 2024",
    description:
      "Enterprise application development, debugging, software maintenance, and automation."
  }
];

const projects = [
  {
    title: "AI Monitoring System",
    description:
      "Concepts and workflows for intelligent infrastructure monitoring and anomaly detection.",
    tags: ["Python", "Machine Learning", "Monitoring"]
  },
  {
    title: "ML Testing Framework",
    description:
      "Model validation, edge-case testing, and reliability-focused machine learning workflows.",
    tags: ["Python", "Testing", "ML"]
  },
  {
    title: "Automation Scripts",
    description:
      "Python-based data processing and repeatable operational automation.",
    tags: ["Python", "Automation", "Data"]
  }
];

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"]
];

// ---------------------------
// 3D OBJECT HELPERS
// ---------------------------

function BoxObject({
  position = [0, 0, 0],
  args = [1, 1, 1],
  color = "#ffffff",
  rotation = [0, 0, 0],
  emissive = "#000000",
  intensity = 0
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={intensity}
        roughness={0.55}
        metalness={0.15}
      />
    </mesh>
  );
}

function SphereObject({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  color = "#ffffff"
}) {
  return (
    <mesh position={position} scale={scale} castShadow>
      <sphereGeometry args={[1, 32, 24]} />
      <meshStandardMaterial color={color} roughness={0.7} />
    </mesh>
  );
}

function CylinderObject({
  position,
  args,
  color,
  rotation = [0, 0, 0]
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <cylinderGeometry args={args} />
      <meshStandardMaterial color={color} roughness={0.65} />
    </mesh>
  );
}

// ---------------------------
// STYLIZED 3D CHARACTER
// ---------------------------

function Avatar() {
  const head = useRef();

  useFrame(({ clock }) => {
    if (head.current) {
      head.current.rotation.y =
        Math.sin(clock.elapsedTime * 0.6) * 0.09;
    }
  });

  return (
    <group position={[1.1, -0.3, 0.55]}>
      {/* Shoes */}
      <SphereObject
        position={[-0.19, -1.73, 0.13]}
        scale={[0.18, 0.11, 0.31]}
        color="#e5dcff"
      />
      <SphereObject
        position={[0.19, -1.73, 0.13]}
        scale={[0.18, 0.11, 0.31]}
        color="#e5dcff"
      />

      {/* Legs */}
      <CylinderObject
        position={[-0.18, -1.08, 0]}
        args={[0.13, 0.15, 1.22, 16]}
        color="#292444"
      />
      <CylinderObject
        position={[0.18, -1.08, 0]}
        args={[0.13, 0.15, 1.22, 16]}
        color="#292444"
      />

      {/* Torso */}
      <CylinderObject
        position={[0, 0.03, 0]}
        args={[0.31, 0.25, 1.05, 20]}
        color="#eee7ff"
      />

      {/* Arms */}
      <CylinderObject
        position={[-0.41, -0.06, 0]}
        args={[0.10, 0.09, 0.88, 16]}
        color="#eee7ff"
        rotation={[0, 0, -0.20]}
      />
      <CylinderObject
        position={[0.41, -0.06, 0]}
        args={[0.10, 0.09, 0.88, 16]}
        color="#eee7ff"
        rotation={[0, 0, 0.20]}
      />

      {/* Hands */}
      <SphereObject
        position={[-0.49, -0.53, 0]}
        scale={[0.10, 0.14, 0.10]}
        color="#b9795f"
      />
      <SphereObject
        position={[0.49, -0.53, 0]}
        scale={[0.10, 0.14, 0.10]}
        color="#b9795f"
      />

      {/* Head and hair */}
      <group ref={head} position={[0, 0.87, 0]}>
        <SphereObject
          position={[0, 0.02, -0.11]}
          scale={[0.34, 0.43, 0.31]}
          color="#211626"
        />
        <SphereObject
          position={[0, 0, 0.05]}
          scale={[0.29, 0.35, 0.27]}
          color="#bd8067"
        />

        {/* Side hair */}
        <SphereObject
          position={[-0.27, -0.23, -0.09]}
          scale={[0.13, 0.37, 0.17]}
          color="#211626"
        />
        <SphereObject
          position={[0.27, -0.23, -0.09]}
          scale={[0.13, 0.37, 0.17]}
          color="#211626"
        />

        {/* Eyes */}
        <SphereObject
          position={[-0.105, 0.035, 0.297]}
          scale={[0.026, 0.033, 0.018]}
          color="#211626"
        />
        <SphereObject
          position={[0.105, 0.035, 0.297]}
          scale={[0.026, 0.033, 0.018]}
          color="#211626"
        />

        {/* Glasses */}
        {[-0.11, 0.11].map((x) => (
          <mesh key={x} position={[x, 0.04, 0.31]}>
            <torusGeometry args={[0.092, 0.012, 8, 32]} />
            <meshStandardMaterial color="#171326" />
          </mesh>
        ))}

        {/* Smile */}
        <mesh
          position={[0, -0.14, 0.31]}
          rotation={[0, 0, Math.PI]}
        >
          <torusGeometry
            args={[0.07, 0.008, 8, 24, Math.PI]}
          />
          <meshStandardMaterial color="#6d3444" />
        </mesh>
      </group>
    </group>
  );
}

// ---------------------------
// DEVELOPER WORKSTATION
// ---------------------------

function Workstation() {
  return (
    <group position={[-0.7, -0.75, -0.35]}>
      {/* Desk */}
      <BoxObject
        position={[0, -0.14, 0]}
        args={[2.7, 0.13, 1.15]}
        color="#29203e"
      />
      <BoxObject
        position={[-1.1, -0.85, 0]}
        args={[0.12, 1.4, 0.12]}
        color="#6b5a88"
      />
      <BoxObject
        position={[1.1, -0.85, 0]}
        args={[0.12, 1.4, 0.12]}
        color="#6b5a88"
      />

      {/* Two monitors */}
      {[-0.55, 0.55].map((x, i) => (
        <group
          key={i}
          position={[x, 0.65, -0.20]}
          rotation={[0, i === 0 ? 0.13 : -0.13, 0]}
        >
          <BoxObject
            args={[1.13, 0.75, 0.07]}
            color="#171425"
          />
          <BoxObject
            position={[0, 0, 0.043]}
            args={[1.02, 0.65, 0.015]}
            color="#171b38"
            emissive="#35206e"
            intensity={0.5}
          />

          {/* Decorative code lines */}
          {[0, 1, 2, 3, 4].map((line) => (
            <BoxObject
              key={line}
              position={[
                -0.27 + (line % 2) * 0.08,
                0.22 - line * 0.105,
                0.056
              ]}
              args={[0.31 + (line % 3) * 0.11, 0.018, 0.008]}
              color={line % 2 ? "#5eead4" : "#c4b5fd"}
              emissive={line % 2 ? "#5eead4" : "#a78bfa"}
              intensity={0.8}
            />
          ))}

          <BoxObject
            position={[0, -0.51, 0]}
            args={[0.07, 0.29, 0.08]}
            color="#807397"
          />
          <BoxObject
            position={[0, -0.67, 0.08]}
            args={[0.38, 0.04, 0.30]}
            color="#807397"
          />
        </group>
      ))}

      {/* Keyboard */}
      <BoxObject
        position={[0, -0.045, 0.36]}
        args={[0.85, 0.035, 0.28]}
        color="#5a4b79"
      />
    </group>
  );
}

// ---------------------------
// ANIMATED 3D SCENE
// ---------------------------

function SceneContents() {
  const group = useRef();

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;

    group.current.rotation.y +=
      (pointer.x * 0.10 - group.current.rotation.y) * 0.035;

    group.current.rotation.x +=
      (-pointer.y * 0.045 - group.current.rotation.x) * 0.035;

    group.current.position.y =
      Math.sin(clock.elapsedTime * 0.8) * 0.045;
  });

  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight
        position={[3, 5, 5]}
        intensity={3}
        color="#f5e9ff"
      />
      <pointLight
        position={[-2, 2, 2]}
        intensity={30}
        distance={9}
        color="#9b5cff"
      />
      <pointLight
        position={[2, 1, -2]}
        intensity={20}
        distance={8}
        color="#4f46e5"
      />

      <group ref={group} rotation={[0, -0.15, 0]}>
        <Workstation />
        <Avatar />

        {/* Platform */}
        <CylinderObject
          position={[0, -2.13, 0]}
          args={[2.6, 2.6, 0.12, 64]}
          color="#24163f"
        />
      </group>
    </>
  );
}

function HeroScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative h-[420px] w-full md:h-[590px]"
      aria-label="Stylized 3D avatar beside a developer workstation"
      role="img"
    >
      <div className="pointer-events-none absolute inset-8 rounded-full bg-purple-700/25 blur-[85px]" />

      <Canvas
        camera={{ position: [0, 0.15, 6.9], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        frameloop={reduceMotion ? "demand" : "always"}
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}

// ---------------------------
// ANIMATED SECTION
// ---------------------------

function Reveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------
// MAIN PORTFOLIO
// ---------------------------

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080817] text-white">

      {/* NAVIGATION */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080817]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-lg font-bold tracking-wide text-purple-200"
          >
            PUSHPA<span className="text-purple-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-300 transition hover:text-purple-300"
              >
                {label}
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
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-white/10 bg-[#101026] px-6 py-6 md:hidden">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-200"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* CINEMATIC HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-purple-800/20 blur-[130px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-800/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-5 lg:grid-cols-2">
          <Reveal className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-200">
              <Sparkles size={15} />
              AI / SOFTWARE ENGINEER
            </div>

            <h1 className="mb-7 font-serif text-6xl leading-[1.05] tracking-tight sm:text-7xl lg:text-[105px]">
              Pushpa
              <span className="block bg-gradient-to-r from-purple-200 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Samunuru.
              </span>
            </h1>

            <h2 className="mb-6 max-w-xl font-serif text-2xl leading-snug text-slate-200 sm:text-3xl">
              Building intelligent systems and the software that powers them.
            </h2>

            <p className="mb-9 max-w-lg text-base leading-8 text-slate-400">
              Computer science professional focused on AI, machine
              learning, Python development, cloud applications,
              and intelligent automation.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3 font-semibold transition hover:bg-purple-500"
              >
                Explore Work <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-purple-400/40 px-7 py-3 font-semibold text-purple-200 transition hover:bg-purple-500/10"
              >
                Let's Connect
              </a>
            </div>

            <div className="mt-10 flex gap-6 text-slate-400">
              <a
                href="https://github.com/PushpaSamunuru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-purple-300"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/s-pushpa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-purple-300"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:pushpasamunuru0901@gmail.com"
                aria-label="Email"
                className="hover:text-purple-300"
              >
                <Mail />
              </a>
            </div>
          </Reveal>

          <div className="relative">
            <HeroScene />
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-slate-500 md:block">
          Scroll to explore ↓
        </div>
      </section>

      {/* ABOUT WITH REAL PHOTO */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#0d0d23] px-6 py-28"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-4 rounded-3xl bg-purple-600/30 blur-3xl" />
              <img
                src="/portfolio.jpg"
                alt="Pushpa Samunuru"
                className="relative w-full rounded-3xl border border-purple-400/30 object-cover shadow-2xl"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-400">
              A little about me
            </p>

            <h2 className="mb-7 font-serif text-5xl md:text-6xl">
              Hello, I'm <span className="text-purple-300">Pushpa.</span>
            </h2>

            <p className="mb-5 text-lg leading-9 text-slate-300">
              I'm a computer science professional with experience
              in software development, IT operations, cloud applications,
              and automation.
            </p>

            <p className="leading-8 text-slate-400">
              I enjoy developing practical solutions that combine
              artificial intelligence with reliable software engineering.
              My interests include machine learning, natural language
              processing, Python, and intelligent enterprise systems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-400">
              Technologies
            </p>
            <h2 className="mb-14 font-serif text-5xl md:text-6xl">
              My <span className="text-purple-300">toolkit.</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((group) => (
              <Reveal key={group.title}>
                <div className="h-full rounded-3xl border border-purple-500/20 bg-white/[0.035] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:bg-purple-500/10">
                  <Code2 className="mb-6 text-purple-400" size={30} />
                  <h3 className="mb-7 text-xl font-semibold">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-[#171731] px-3 py-2 text-sm text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-24 bg-[#0d0d23] px-6 py-28"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-400">
              Career
            </p>
            <h2 className="mb-14 font-serif text-5xl md:text-6xl">
              My <span className="text-purple-300">journey.</span>
            </h2>
          </Reveal>

          <div className="space-y-6">
            {experience.map((job) => (
              <Reveal key={job.company}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition hover:border-purple-500/50">
                  <BriefcaseBusiness className="mb-5 text-purple-400" />

                  <div className="mb-4 flex flex-wrap justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold">{job.role}</h3>
                      <p className="mt-2 text-purple-300">{job.company}</p>
                    </div>
                    <span className="text-sm text-slate-400">
                      {job.period}
                    </span>
                  </div>

                  <p className="leading-8 text-slate-400">
                    {job.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 py-24">
        <Reveal className="mx-auto max-w-5xl">
          <GraduationCap className="mb-6 text-purple-400" size={34} />
          <h2 className="mb-8 font-serif text-5xl">Education.</h2>

          <div className="rounded-3xl border border-purple-500/20 bg-white/[0.035] p-8">
            <h3 className="text-2xl font-semibold">
              M.S. Computer Science
            </h3>
            <p className="mt-3 text-purple-300">
              Florida Atlantic University
            </p>
            <p className="mt-3 text-slate-400">
              2024 – 2026
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-24 bg-[#0d0d23] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-400">
              Selected Work
            </p>
            <h2 className="mb-6 font-serif text-5xl md:text-6xl">
              Featured <span className="text-purple-300">projects.</span>
            </h2>
            <p className="mb-14 text-slate-400">
              Initial project summaries. Verified case studies and
              repository links will be added next.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title}>
                <div className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-[#15152e] transition duration-300 hover:-translate-y-2 hover:border-purple-400/60">
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-purple-900/70 via-indigo-950 to-[#18152c]">
                    <span className="font-serif text-7xl text-purple-300/60">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="mb-4 text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mb-7 min-h-28 leading-7 text-slate-400">
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-6 py-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-purple-400">
            Have an idea?
          </p>

          <h2 className="mb-8 font-serif text-5xl md:text-7xl">
            Let's create
            <span className="block text-purple-300">
              something remarkable.
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl leading-8 text-slate-400">
            Open to connecting about AI, machine learning,
            software development, and engineering opportunities.
          </p>

          <a
            href="mailto:pushpasamunuru0901@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-purple-600 px-9 py-4 font-semibold transition hover:bg-purple-500"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pushpa Samunuru.
        All rights reserved.
      </footer>
    </main>
  );
}
