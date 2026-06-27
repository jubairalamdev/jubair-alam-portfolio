"use client";

import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Ai Hub - React SPA',
    description:
      "AI Hub is a component-driven architecture, I ensured the site is modular, scalable, and easy to maintain.",
    image: './assets/Ai-hub.png',
    tags: ['React', 'JavaScript', 'Tailwind', 'DaisyUi', 'HTML'],
    liveUrl: 'https://lnkd.in/gjMrvkKy ',
    githubUrl: 'https://lnkd.in/gsrHEaFp',
    featured: true,
  },
  {
    title: 'BPL Dream 11',
    description:
      'Virtual Economy: Start your journey by claiming 20M free credits with a single click.',
    image:"./assets/bpl-dream.png",
    tags: ['React', 'JavaScript', 'Tailwind', 'DaisyUi', 'Toastify', 'HTML'],
    liveUrl: 'https://bpl-dream-11-by-jubair-alam.netlify.app/',
    githubUrl: 'https://github.com/jubairalamdev/bpl-dream-11',
    featured: true,
  },
  {
    title: 'Dev Board Dashboard',
    description:
      'DevBoard, was a deep dive into the core and fundamentals of React. ',
    image: "./assets/dev-board.png",
    tags: ['React', 'JavaScript', 'Tailwind', 'DaisyUi', 'HTML'],
    liveUrl: ' https://dev-board-react-by-jubair-alam.netlify.app/',
    githubUrl: 'https://github.com/jubairalamdev/dev-board',
    featured: false,
  },
  {
    title: 'Issue Tracker',
    description:
      ' Issue Tracking System that emphasizes clean architecture and real-time performance. ',
    image: "./assets/issue-tracker.png",
    tags: ['HTML5', 'Tailwind CSS', 'CSS', 'JavaScript', 'DaisyUi'],
    
    liveUrl: 'https://github-issue-tracker-by-jubair-alam.netlify.app/',
    githubUrl: 'https://github.com/jubairalamdev/Issue-Tracker-B13-A5/',
    featured: false,
  },
  {
    title: 'English Janala',
    description:
      'A project focused on building an interactive, API-driven platform to help users master new words.',
    image: "./assets/english-janala.png",
    tags: ['HTML5', 'Tailwind CSS', 'CSS', 'JavaScript'],
  
    liveUrl: 'https://english-janala-by-jubair-alam.netlify.app/',
    githubUrl: 'https://github.com/jubairalamdev/English-Janala/',
    featured: false,
  },
  {
    title: 'Green Earth',
    description:
      'This is a Plant E-commerce Dashboard that focuses on a seamless user journey.',
    image: "./assets/green-earth.png",
    tags: ['HTML5', 'Tailwind CSS', 'CSS', 'JavaScript'],
    
    liveUrl: 'https://github.com/jubairalamdev/Green-Earth/',
    githubUrl: 'https://green-earth-by-jubair-alam.netlify.app/',
    featured: false,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

const placeholderColors = [
  'from-accent/20 via-dark-600 to-purple-500/20',
  'from-purple-500/20 via-dark-600 to-blue-500/20',
  'from-blue-500/20 via-dark-600 to-accent/20',
  'from-orange-500/20 via-dark-600 to-accent/20',
  'from-pink-500/20 via-dark-600 to-purple-500/20',
  'from-cyan-500/20 via-dark-600 to-blue-500/20',
];

export default function Projects() {

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/30 via-dark-900 to-dark-900" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            My Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-accent">Works</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great products
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group rounded-2xl bg-dark-600/30 border border-white/5 hover:border-accent/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${placeholderColors[index % placeholderColors.length]} overflow-hidden`}>
                <img src={project.image} alt={project.title}/>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="w-11 h-11 rounded-full bg-accent/20 hover:bg-accent/30 border border-accent/30 flex items-center justify-center text-accent transition-colors"
                    aria-label="Live Demo"
                    target='blank'
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-11 h-11 rounded-full bg-accent/20 hover:bg-accent/30 border border-accent/30 flex items-center justify-center text-accent transition-colors"
                    aria-label="Source Code"
                    target='blank'
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/5 text-accent text-xs font-medium rounded-md border border-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}