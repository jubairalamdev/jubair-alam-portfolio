"use client";

import { useEffect, useState, useRef } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const roles = ['Full Stack Developer', 'MERN Stack Expert', 'Problem Solver', 'UI/UX Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const sphereRef = useRef(null);

useEffect(() => {
  const canvas = sphereRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const size = 384;
  const center = size / 2;
  const radius = size * 0.38;
  const dotsCount = 1200;
  const fov = 300;

  // Generate sphere points using fibonacci sphere distribution
  const dots = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < dotsCount; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / dotsCount);
    const phi = 2 * Math.PI * i / goldenRatio;
    dots.push({
      x: Math.sin(theta) * Math.cos(phi),
      y: Math.sin(theta) * Math.sin(phi),
      z: Math.cos(theta),
    });
  }

  // Audio data simulation (fake music bars)
  const barCount = 64;
  const bars = new Array(barCount).fill(0);
  const barTargets = new Array(barCount).fill(0);

  let angleY = 0;
  let angleX = 0.15;
  let frame = 0;
  let animId;

  function generateBarTargets() {
    for (let i = 0; i < barCount; i++) {
      // Simulate music frequency pattern
      const freq = Math.sin(frame * 0.03 + i * 0.3) * 0.5 +
        Math.sin(frame * 0.07 + i * 0.15) * 0.3 +
        Math.sin(frame * 0.02 + i * 0.6) * 0.2;
      barTargets[i] = Math.abs(freq) * 0.8 + Math.random() * 0.2;
    }
  }

  function draw() {
    frame++;
    angleY += 0.004;

    // Update bar targets every 3 frames for smoother feel
    if (frame % 3 === 0) generateBarTargets();

    // Smooth bar interpolation
    for (let i = 0; i < barCount; i++) {
      bars[i] += (barTargets[i] - bars[i]) * 0.15;
    }

    ctx.clearRect(0, 0, size, size);

    // Outer glow ring
    const glowGrad = ctx.createRadialGradient(center, center, radius * 0.8, center, center, radius * 1.4);
    glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.06)');
    glowGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.03)');
    glowGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(center, center, radius * 1.4, 0, Math.PI * 2);
    ctx.fill();

    // Center glow
    const centerGlow = ctx.createRadialGradient(center, center, 0, center, center, radius * 0.5);
    centerGlow.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
    centerGlow.addColorStop(1, 'rgba(16, 185, 129, 0)');
    ctx.fillStyle = centerGlow;
    ctx.beginPath();
    ctx.arc(center, center, radius * 0.5, 0, Math.PI * 2);
    ctx.fill();

    // Draw music bars (circular, behind sphere)
    const barRadius = radius * 1.05;
    const barWidth = (Math.PI * 2 * barRadius) / barCount * 0.6;
    ctx.save();
    for (let i = 0; i < barCount; i++) {
      const angle = (i / barCount) * Math.PI * 2 - Math.PI / 2;
      const barHeight = bars[i] * radius * 0.35;
      const x1 = center + Math.cos(angle) * barRadius;
      const y1 = center + Math.sin(angle) * barRadius;
      const x2 = center + Math.cos(angle) * (barRadius + barHeight);
      const y2 = center + Math.sin(angle) * (barRadius + barHeight);

      const alpha = 0.15 + bars[i] * 0.5;
      ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
      ctx.lineWidth = barWidth;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ctx.restore();

    // Project and sort dots
    const projected = dots.map((dot) => {
      // Rotate Y
      let x = dot.x * Math.cos(angleY) - dot.z * Math.sin(angleY);
      let z = dot.x * Math.sin(angleY) + dot.z * Math.cos(angleY);
      let y = dot.y;

      // Rotate X (slight tilt)
      let y2 = y * Math.cos(angleX) - z * Math.sin(angleX);
      let z2 = y * Math.sin(angleX) + z * Math.cos(angleX);

      const scale = fov / (fov + z2 * radius);
      const px = center + x * radius * scale;
      const py = center + y2 * radius * scale;

      // Map z depth to a bar index for pulsing
      const normalizedZ = (z2 + 1) / 2;
      const barIdx = Math.floor(normalizedZ * (barCount - 1));
      const pulse = 1 + bars[barIdx] * 0.15;

      return {
        x: px,
        y: py,
        z: z2,
        scale: scale * pulse,
      };
    });

    // Sort back to front
    projected.sort((a, b) => a.z - b.z);

    // Draw dots
    for (const p of projected) {
      const depth = (p.z + 1) / 2; // 0 = back, 1 = front
      const alpha = 0.05 + depth * 0.85;
      const dotSize = Math.max(0.5, 1.5 * p.scale);

      ctx.beginPath();
      ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
      ctx.fill();

      // Bright glow on front-facing dots
      if (depth > 0.75) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, dotSize * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${(depth - 0.75) * 0.2})`;
        ctx.fill();
      }
    }

    // Inner highlight ring
    ctx.beginPath();
    ctx.arc(center, center, radius * 0.98, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.04)';
    ctx.lineWidth = 1;
    ctx.stroke();

    animId = requestAnimationFrame(draw);
  }

  draw();

  return () => cancelAnimationFrame(animId);
}, []);

  return (
    <section
      id="home"
      className="relative py-20 flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium">Available for work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-4">
              <span className="text-white">Hi, I&apos;m</span>
              <br />
              <span className="text-accent">Jubair Alam</span>
            </h1>

            <div className="h-10 sm:h-12 mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium">
                {displayText}
                <span className="text-accent animate-pulse">|</span>
              </span>
            </div>

            <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-lg mb-8">
              Passionate full stack developer with expertise in building scalable web applications.
              I transform ideas into elegant, high-performance digital experiences using modern
              technologies and clean code practices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
              target="_blank"
                href="https://docs.google.com/document/d/1v7yN2TpiqF5Q8p3ld48m6L-NOm1UYd1hPXqqvFPkNkY/edit?usp=sharing"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                <ExternalLink size={18} />
                GET CV
              </Link>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                Contact Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Find me on</span>
              <div className="w-8 h-px bg-slate-700" />
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/jubairalamdev', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/jubair-alam-alif/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:jubairalam.dev@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target='blank'
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent/10 border border-white/5 hover:border-accent/20 flex items-center justify-center text-slate-400 hover:text-accent transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-2xl border border-accent/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-2xl border border-accent/5 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute -inset-12 rounded-full bg-accent/5 blur-2xl" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image 
                    src='./assets/profile.png'
                    alt="Profile" 
                    height={800}
                    width={700}
                    className="w-[90%] h-[90%] -mt-16 object-cover rounded-full  shadow-2xl"
                  />
                </div>
                <canvas
                  ref={sphereRef}
                  width={384}
                  height={384}
                  className="w-full h-full"
                />
                {/* Glow behind sphere */}
                <div className="absolute inset-0 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />
              </div>

              {/* Floating badges */}
              <div className="absolute z-10 md:bottom-10 -bottom-2 -left-1 md:left-10 px-4 py-2 bg-dark-600 border border-white/10 rounded-xl shadow-xl bouncing-div-1">
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-xs text-slate-400">Hours Coded</div>
              </div>
              <div className="absolute md:top-8 md:right-10 -top-2 -right-1 z-10 px-4 py-2 bg-dark-600 border border-white/10 rounded-xl shadow-xl bouncing-div-2">
                <div className="text-2xl font-bold text-accent">20+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}