"use client";

import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Digital Life Lessons',
    description:
      "Digital Life Lessons is a Full Stack MERN Project with every social media like features available.",
    image: './assets/digital-life-lessons.png',
    tags: ['Next', 'Node', 'Express', 'Tailwind', 'Better Auth', "Stripe"],
    liveUrl: 'https://digital-life-lessons-flame.vercel.app/',
    githubUrl: 'https://github.com/jubairalamdev/digital-life-lessons-a10/tree/master',
    featured: true,
  },
  {
    title: 'Paw Pals',
    description:
      'A home for every pets to get adopted with their best buddies. This website covers a economical system.',
    image:"./assets/paw-pals.png",
    tags: ['Next', 'Node', 'Express', 'DaisyUi', 'Toastify', 'Tailwind', "Better Auth"],
    liveUrl: 'https://paw-pals-a9.vercel.app/',
    githubUrl: 'https://github.com/jubairalamdev/Paw-Pals-A9',
    featured: true,
  },
  {
    title: 'Cloud Read',
    description:
      'Cloud Read is a Fully Frontend project focusing on a library website system that is fully functional',
    image: "./assets/cloud-read.png",
    tags: ['Next', 'JavaScript', 'Tailwind', 'DaisyUi', 'Toastify'],
    liveUrl: ' https://dev-board-react-by-jubair-alam.netlify.app/',
    githubUrl: 'https://github.com/jubairalamdev/dev-board',
    featured: false,
  },
  {
    title: 'Keen Keeper',
    description:
      'Keen Keeper is a communication website where people can call, chat and video call their beloved once.',
    image: "./assets/keen-keeper.png",
    tags: ['Next', 'Tailwind CSS', 'CSS', 'JavaScript', 'DaisyUi'],
    
    liveUrl: 'https://a7-keen-keeper-topaz.vercel.app/',
    githubUrl: 'https://github.com/jubairalamdev/keen-keeper-A7',
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
                <Image width={500} height={500} src={project.image} alt={project.title}/>

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