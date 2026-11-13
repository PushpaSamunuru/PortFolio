
'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useReducedMotion } from 'framer-motion';

const projects = [
  {
    title: 'AI Monitoring System',
    description: 'Python tools & ML models to detect faults in real-time infrastructure systems.',
    image: 'https://picsum.photos/seed/ai/600/300',
    github: '',
  },
  {
    title: 'ML Testing Framework',
    description: 'Built robust testing tools to simulate edge cases and validate model reliability.',
    image: 'https://picsum.photos/seed/mltesting/600/300',
    github: '',
  },
  {
    title: 'Automation Scripts',
    description: 'Developed Python-based automations to parse data and manage enterprise workflows.',
    image: 'https://picsum.photos/seed/automation/600/300',
    github: '',
  },
];

const skills = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'Scikit-learn',
  'Flask / FastAPI',
  'SQL / Pandas',
];

const nav = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

function Orb({ position, scale, color }) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 24, 20]} />
      <meshStandardMaterial color={color} roughness={0.85} />
    </mesh>
  );
}

function Rod({
  position,
  radius = 0.1,
  length = 1,
  color,
  rotation = [0, 0, 0],
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <cylinderGeometry args={[radius, radius, length, 16]} />
      <meshStandardMaterial color={color} roughness={0.7} />
    </mesh>
  );
}

function Block({ position, size, color, emissive = '#000000' }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function Girl({ speaking, replay, reducedMotion }) {
  const root = useRef(null);
  const armL = useRef(null);
  const armR = useRef(null);
  const legL = useRef(null);
  const legR = useRef(null);
  const mouth = useRef(null);
  const start = useRef(null);

  useEffect(() => {
    start.current = null;
  }, [replay]);

  useFrame(({ clock }, delta) => {
    if (!root.current) return;

    if (start.current === null) {
      start.current = clock.elapsedTime;
    }

    const t = clock.elapsedTime - start.current;
    const walking = !reducedMotion && t < 2.6;
    const p = reducedMotion ? 1 : Math.min(t / 2.6, 1);
    const eased = 1 - (1 - p) ** 3;

    root.current.position.x =
      3.5 + (1.05 - 3.5) * eased;

    root.current.position.y =
      -0.28 +
      (walking ? Math.abs(Math.sin(t * 10)) * 0.045 : 0);

    const stride = walking ? Math.sin(t * 10) * 0.35 : 0;

    if (legL.current) {
      legL.current.rotation.x = stride;
    }

    if (legR.current) {
      legR.current.rotation.x = -stride;
    }

    if (armL.current) {
      armL.current.rotation.x = -stride * 0.5;
    }

    if (armR.current) {
      const waving =
        !reducedMotion && t >= 2.6 && t < 6.5;

      const target = waving
        ? -2.35 + Math.sin(t * 9) * 0.16
        : -0.12;

      armR.current.rotation.z +=
        (target - armR.current.rotation.z) *
        Math.min(delta * 8, 1);
    }

    if (mouth.current) {
      mouth.current.scale.y = speaking
        ? 0.017 +
          Math.abs(Math.sin(clock.elapsedTime * 11)) * 0.028
        : 0.012;
    }
  });

  return (
    <group ref={root} position={[3.5, -0.28, 0.55]}>
      {/* Feet */}
      <Orb
        position={[-0.18, -1.75, 0.14]}
        scale={[0.18, 0.1, 0.29]}
        color="#e9ddff"
      />
      <Orb
        position={[0.18, -1.75, 0.14]}
        scale={[0.18, 0.1, 0.29]}
        color="#e9ddff"
      />

      {/* Legs */}
      <group ref={legL} position={[-0.18, -0.47, 0]}>
        <Rod
          position={[0, -0.61, 0]}
          radius={0.14}
          length={1.22}
          color="#29223f"
        />
      </group>

      <group ref={legR} position={[0.18, -0.47, 0]}>
        <Rod
          position={[0, -0.61, 0]}
          radius={0.14}
          length={1.22}
          color="#29223f"
        />
      </group>

      {/* Torso */}
      <mesh position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.29, 0.25, 1.04, 20]} />
        <meshStandardMaterial color="#eae2ff" />
      </mesh>

      {/* Left arm */}
      <group ref={armL} position={[-0.35, 0.37, 0]}>
        <Rod
          position={[-0.09, -0.41, 0]}
          radius={0.1}
          length={0.85}
          color="#eae2ff"
          rotation={[0, 0, -0.2]}
        />
        <Orb
          position={[-0.17, -0.84, 0]}
          scale={[0.11, 0.13, 0.11]}
          color="#bf856e"
        />
      </group>

      {/* Right arm - waves */}
      <group ref={armR} position={[0.35, 0.37, 0]}>
        <Rod
          position={[0.09, -0.41, 0]}
          radius={0.1}
          length={0.85}
          color="#eae2ff"
          rotation={[0, 0, 0.2]}
        />
        <Orb
          position={[0.17, -0.84, 0]}
          scale={[0.11, 0.13, 0.11]}
          color="#bf856e"
        />
      </group>

      {/* Female face */}
      <group position={[0, 0.87, 0]}>
        {/* Hair behind face */}
        <Orb
          position={[0, 0.02, -0.13]}
          scale={[0.35, 0.43, 0.29]}
          color="#241625"
        />

        {/* Face */}
        <Orb
          position={[0, -0.01, 0.06]}
          scale={[0.285, 0.33, 0.265]}
          color="#c78b72"
        />

        {/* Hair crown */}
        <Orb
          position={[0, 0.25, -0.04]}
          scale={[0.32, 0.17, 0.27]}
          color="#241625"
        />

        {/* Long hair */}
        {[-0.29, 0.29].map((x) => (
          <Orb
            key={`hair-${x}`}
            position={[x, -0.27, -0.05]}
            scale={[0.105, 0.38, 0.15]}
            color="#241625"
          />
        ))}

        {/* Eyes and glasses */}
        {[-0.105, 0.105].map((x) => (
          <group key={`eye-${x}`}>
            <Orb
              position={[x, 0.04, 0.304]}
              scale={[0.045, 0.034, 0.018]}
              color="#fff9f3"
            />
            <Orb
              position={[x, 0.04, 0.323]}
              scale={[0.019, 0.024, 0.012]}
              color="#1c1522"
            />

            <mesh position={[x, 0.04, 0.34]}>
              <torusGeometry args={[0.088, 0.01, 8, 32]} />
              <meshStandardMaterial color="#20182c" />
            </mesh>
          </group>
        ))}

        {/* Glasses bridge */}
        <Block
          position={[0, 0.04, 0.34]}
          size={[0.05, 0.012, 0.014]}
          color="#20182c"
        />

        {/* Nose */}
        <Orb
          position={[0, -0.075, 0.326]}
          scale={[0.027, 0.04, 0.025]}
          color="#ad725e"
        />

        {/* Small animated mouth */}
        <mesh
          ref={mouth}
          position={[0, -0.16, 0.319]}
          scale={[0.055, 0.012, 0.014]}
        >
          <sphereGeometry args={[1, 20, 12]} />
          <meshStandardMaterial color="#74384b" />
        </mesh>
      </group>
    </group>
  );
}

function Desk() {
  return (
    <group position={[-0.65, -0.8, -0.3]}>
      <Block
        position={[0, -0.12, 0]}
        size={[2.6, 0.13, 1.05]}
        color="#29213f"
      />

      {[-1.06, 1.06].map((x) => (
        <Block
          key={x}
          position={[x, -0.8, 0]}
          size={[0.12, 1.35, 0.12]}
          color="#6b568e"
        />
      ))}

      {[-0.53, 0.53].map((x, i) => (
        <group key={i} position={[x, 0.6, -0.18]}>
          <Block
            position={[0, 0, 0]}
            size={[1.05, 0.74, 0.07]}
            color="#171322"
          />
          <Block
            position={[0, 0, 0.042]}
            size={[0.96, 0.65, 0.015]}
            color="#252064"
            emissive="#32208c"
          />

          {[0, 1, 2, 3].map((n) => (
            <Block
              key={n}
              position={[-0.2, 0.2 - n * 0.12, 0.055]}
              size={[0.32 + (n % 2) * 0.15, 0.017, 0.01]}
              color={n % 2 ? '#6ee7d8' : '#c4b5fd'}
            />
          ))}

          <Block
            position={[0, -0.5, 0]}
            size={[0.07, 0.27, 0.07]}
            color="#78668d"
          />
          <Block
            position={[0, -0.65, 0.06]}
            size={[0.35, 0.04, 0.25]}
            color="#78668d"
          />
        </group>
      ))}
    </group>
  );
}

function Scene({ speaking, replay, reducedMotion }) {
  return (
    <>
      <ambientLight intensity={1.8} />
      <directionalLight position={[2, 5, 5]} intensity={3} />
      <pointLight
        position={[-2, 2, 2]}
        intensity={20}
        distance={9}
        color="#9f65ff"
      />

      <Desk />

      <Girl
        speaking={speaking}
        replay={replay}
        reducedMotion={reducedMotion}
      />

      <mesh position={[0, -2.16, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.1, 64]} />
        <meshStandardMaterial color="#21143f" />
      </mesh>
    </>
  );
}

function AvatarStage({ speaking, replay }) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="relative h-[400px] w-full md:h-[570px]"
      aria-label="Animated 3D female developer avatar walking in and waving"
      role="img"
    >
      <div className="pointer-events-none absolute inset-10 rounded-full bg-purple-700/20 blur-[85px]" />

      <Canvas
        camera={{ position: [0, 0.1, 7.1], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene
            speaking={speaking}
            replay={replay}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function Portfolio() {
  const [speaking, setSpeaking] = useState(false);
  const [replay, setReplay] = useState(0);
  const [muted, setMuted] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const audioRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const audio = new Audio('/pushpa-intro.mp3');
    audio.preload = 'auto';
    audioRef.current = audio;

    const onPlay = () => {
      setSpeaking(true);
      setBlocked(false);
    };

    const onPause = () => setSpeaking(false);

    const onError = () => {
      setAudioError(true);
      setSpeaking(false);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onPause);
    audio.addEventListener('error', onError);

    const timer = window.setTimeout(async () => {
      try {
        await audio.play();
      } catch {
        setBlocked(true);
      }
    }, reducedMotion ? 400 : 3300);

    return () => {
      window.clearTimeout(timer);
      audio.pause();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onPause);
      audio.removeEventListener('error', onError);
      audioRef.current = null;
    };
  }, [reducedMotion]);

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setSpeaking(false);
  };

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setReplay((n) => n + 1);
    setMuted(false);

    try {
      await audio.play();
      setBlocked(false);
    } catch {
      setBlocked(true);
    }
  };

  const toggleMute = () => {
    if (muted) {
      setMuted(false);
      void play();
    } else {
      setMuted(true);
      stop();
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080817] text-slate-100">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080817]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-xl font-extrabold text-purple-200"
          >
            PUSHPA<span className="text-violet-500">.</span>
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            {nav.map(([name, href]) => (
              <a
                key={href}
                href={href}
                className="text-slate-300 hover:text-purple-300"
              >
                {name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
            {nav.map(([name, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Cinematic Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pb-16 pt-28"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-[550px] w-[550px] rounded-full bg-purple-800/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-7 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs tracking-[0.2em] text-purple-200"
            >
              ✦ AI / SOFTWARE ENGINEER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 font-serif text-6xl leading-tight sm:text-7xl lg:text-[100px]"
            >
              Pushpa
              <span className="block bg-gradient-to-r from-purple-200 to-violet-500 bg-clip-text text-transparent">
                Samunuru.
              </span>
            </motion.h1>

            <p className="mb-5 max-w-xl font-serif text-2xl leading-snug text-slate-200 sm:text-3xl">
              Building intelligent systems and the software that powers them.
            </p>

            <p className="mb-8 max-w-lg leading-8 text-slate-400">
              AI & ML Engineer | Python Enthusiast | Automation Expert.
              I build practical software and intelligent applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-violet-600 px-7 py-3 font-semibold hover:bg-violet-500"
              >
                Explore Work ↗
              </a>

              <a
                href="#contact"
                className="rounded-full border border-violet-400/40 px-7 py-3 font-semibold text-purple-200 hover:bg-purple-500/10"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* 3D Avatar */}
          <div className="relative min-w-0">
            <AvatarStage speaking={speaking} replay={replay} />

            <div className="relative z-10 mx-auto -mt-5 max-w-md rounded-2xl border border-purple-400/30 bg-[#17122d]/95 p-4 text-center shadow-xl">
              <p className="mb-3 text-sm text-purple-100">
                Hi, I'm Pushpa Samunuru! Welcome to my portfolio.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={play}
                  className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold hover:bg-violet-500"
                >
                  ↻ Meet Pushpa
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="rounded-full border border-purple-400/40 px-4 py-2.5 text-sm"
                >
                  {muted ? '🔇 Enable voice' : '🔊 Mute'}
                </button>

                {speaking && (
                  <button
                    type="button"
                    onClick={stop}
                    className="rounded-full border border-white/20 px-4 py-2.5 text-sm"
                  >
                    Stop
                  </button>
                )}
              </div>

              {blocked && !audioError && (
                <p className="mt-3 text-xs text-amber-200">
                  Your browser blocked autoplay. Click Meet Pushpa
                  to hear the introduction.
                </p>
              )}

              {audioError && (
                <p className="mt-3 text-xs text-rose-300">
                  Audio not found. Place pushpa-intro.mp3
                  inside the public folder.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-20 bg-[#0e0d24] px-6 py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-3 rounded-3xl bg-violet-600/30 blur-3xl" />

            <img
              src="/portfolio.jpg"
              alt="Pushpa Samunuru"
              className="relative w-full rounded-3xl border border-purple-400/30 object-cover shadow-2xl"
            />
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-purple-400">
              A little about me
            </p>

            <h2 className="mb-6 font-serif text-5xl">
              About <span className="text-purple-300">Me</span>
            </h2>

            <p className="leading-8 text-slate-300">
              I'm passionate about AI and currently transitioning into
              an AI Engineer role. With a strong foundation in Python,
              ML model building, automation, and frameworks like
              TensorFlow and PyTorch, I aim to create intelligent
              systems that solve real-world problems in NLP,
              cybersecurity, and human-AI interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-20 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-purple-400">
            Technologies
          </p>

          <h2 className="mb-12 font-serif text-5xl">
            My <span className="text-purple-300">Skills</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-purple-500/20 bg-white/[0.04] p-6 font-medium text-slate-200 transition hover:-translate-y-1 hover:border-purple-400/60"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-20 bg-[#0e0d24] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-purple-400">
            Selected work
          </p>

          <h2 className="mb-12 font-serif text-5xl">
            My <span className="text-purple-300">Projects</span>
          </h2>

          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -7 }}
                className="overflow-hidden rounded-2xl border border-purple-500/20 bg-[#17132c]"
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-44 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-300 hover:underline"
                    >
                      View on GitHub ↗
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500">
                      Project link coming soon
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-20 px-6 py-24 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-purple-400">
          Let's connect
        </p>

        <h2 className="mb-6 font-serif text-5xl">
          Get in <span className="text-purple-300">Touch</span>
        </h2>

        <p className="mb-7 text-slate-400">
          Interested in working together or just want to say hi?
        </p>

        <a
          className="break-all text-lg text-purple-300 hover:underline"
          href="mailto:pushpasamunuru0901@gmail.com"
        >
          pushpasamunuru0901@gmail.com
        </a>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/s-pushpa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/PushpaSamunuru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pushpa Samunuru.
        All rights reserved.
      </footer>
    </main>
  );
}
