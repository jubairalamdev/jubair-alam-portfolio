"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

export default function Home() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact showToast={showToast} />
      <Footer />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-24 right-6 z-[100] toast-animate">
          <div className={`px-6 py-3 rounded-lg shadow-2xl border ${
            toast.type === 'success'
              ? 'bg-accent/20 border-accent/30 text-accent-light'
              : 'bg-red-500/20 border-red-500/30 text-red-400'
          }`}>
            <div className="flex items-center gap-2">
              {toast.type === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span className="text-sm font-medium">{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}