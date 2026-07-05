"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Terminal } from 'lucide-react';

// --- DATA ---
const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code size={24} className="text-accent" />,
    skills: [
      { name: 'React.js', level: 84 },
      { name: 'Next.js', level: 72 },
      { name: 'JavaScript', level: 92 },
      { name: 'Tailwind CSS', level: 97 },
      { name: 'HTML5/CSS3', level: 96 },
    ],
  },
  {
    title: 'Backend',
    icon: <Settings size={24} className="text-accent" />,
    skills: [
      { name: 'Github', level: 84 },
      { name: 'Linux', level: 73 },
      { name: 'MongoDB', level: 82 },
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 87 },
    ],
  }
];

// --- CARD COMPONENT ---
function SkillCard({ skill, categoryIcon }) {
  const [ref, inView] = useInView();

  // Helper hook for intersection observation inside the component
  function useInView(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      }, options);

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }, [options]);

    return [ref, isIntersecting];
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="group relative p-6 rounded-2xl bg-dark-600/40 border border-white/5 backdrop-blur-md hover:bg-dark-600/60 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card Header */}
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className="p-3 rounded-xl bg-dark-800/50 border border-white/5 group-hover:border-accent/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all">
          {categoryIcon}
        </div>
        <span className="text-2xl font-bold text-white/20 group-hover:text-accent/20 transition-colors font-mono">
          {skill.name.substring(0, 2).toUpperCase()}
        </span>
      </div>

      {/* Skill Title & Label */}
      <div className="mb-4 relative z-10">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
          {skill.name}
        </h3>
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 group-hover:text-accent/80 transition-colors">
          Technology
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs text-slate-400">Proficiency</span>
          <span className="text-sm font-bold text-accent">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-dark to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${skill.level}%` : 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// --- MAIN SECTION ---
export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing digital experiences.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={category.title}>
              {/* Category Sub-Header */}
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    categoryIcon={category.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}