'use client';

import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Monitoring System",
      description: "Python tools & ML models to detect faults in real-time infrastructure systems.",
      image: "https://picsum.photos/seed/ai/600/300",
      github: "#",
    },
    {
      title: "ML Testing Framework",
      description: "Built robust testing tools to simulate edge cases and validate model reliability.",
      image: "https://picsum.photos/seed/mltesting/600/300",
      github: "#",
    },
    {
      title: "Automation Scripts",
      description: "Developed Python-based automations to parse data and manage enterprise workflows.",
      image: "https://picsum.photos/seed/automation/600/300",
      github: "#",
    }
  ];

  return (
    
<div className="min-h-screen overflow-x-hidden bg-[#090B18] text-white">

      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#090B18]/85 px-8 py-4 shadow-lg shadow-purple-950/20 backdrop-blur-xl">
        
<h1 className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
  Pushpa Samunuru
</h1>

        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-indigo-500">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section with gradient background blobs */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 pt-28 md:pt-40 max-w-6xl mx-auto">
  {/* Background Blobs */}

<motion.div
  className="pointer-events-none absolute -left-40 top-10 -z-0 h-[450px] w-[450px] rounded-full bg-purple-600/25 blur-[110px]"
  animate={{
    x: [0, 70, 0],
    y: [0, 40, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="pointer-events-none absolute -right-32 bottom-0 -z-0 h-[450px] w-[450px] rounded-full bg-indigo-600/25 blur-[110px]"
  animate={{
    x: [0, -60, 0],
    y: [0, -40, 0],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
  
{/* HERO TEXT CONTAINER */}
<div className="relative z-10 flex-1 text-center md:text-left">


    
<motion.h2
  className="mb-6 bg-gradient-to-r from-white via-purple-200 to-violet-500 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Hi, I'm Pushpa
</motion.h2>

    <motion.p className="mb-8 text-xl text-slate-300 md:text-2xl"

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}>
      AI & ML Engineer | Python Enthusiast | Automation Expert
    </motion.p>
    <div className="flex gap-4 justify-center md:justify-start">
      <a href="#projects" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">View Projects</a>
      <a href="#contact" className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-100 transition">Contact Me</a>
    </div>
  </div>

  {/* IMAGE ON RIGHT */}
 {/* IMAGE ON RIGHT */}
<div className="z-10 flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
  <img
    src="/portfolio.jpg"
    alt="Pushpa Samunuru"
    className="w-[300px] md:w-[400px] lg:w-[450px] h-auto max-h-[600px] object-cover rounded-xl shadow-2xl border-4 border-indigo-200"
  />
</div>

</section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-indigo-700">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          I'm passionate about AI and currently transitioning into an AI Engineer role. With a strong foundation in Python, ML model building, automation, and frameworks like TensorFlow and PyTorch, I aim to create intelligent systems that solve real-world problems in NLP, cybersecurity, and human-AI interaction.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-indigo-700">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow p-4 rounded">Python</div>
            <div className="bg-white shadow p-4 rounded">TensorFlow</div>
            <div className="bg-white shadow p-4 rounded">PyTorch</div>
            <div className="bg-white shadow p-4 rounded">Scikit-learn</div>
            <div className="bg-white shadow p-4 rounded">Flask / FastAPI</div>
            <div className="bg-white shadow p-4 rounded">SQL / Pandas</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-indigo-700">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <a href={project.github} className="text-indigo-600 hover:underline text-sm">View on GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-indigo-50 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4 text-indigo-700">Get in Touch</h3>
        <p className="mb-4 text-gray-600">Interested in working together or just want to say hi?</p>
        <p className="text-lg font-medium text-indigo-800">pushpasamunuru0901@gmail.com</p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/s-pushpa" target="_blank" className="text-indigo-600 hover:underline">LinkedIn</a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Pushpa Samunuru. All rights reserved.
      </footer>
    </div>
  );
}
