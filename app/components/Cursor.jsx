"use client";

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if device supports hover (ignore touch screens)
    const matchMedia = window.matchMedia('(hover: hover)');
    if (!matchMedia.matches) {
      setIsHidden(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transition: 'transform 0.1s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
      }}
    >
      {/* 
         OUTER CIRCLE (The Halo)
         Default: Visible with 20% opacity and green color
         Hover: Fades out completely (opacity-0) and shrinks slightly
      */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34d399]/20 transition-all duration-300 ease-out ${
          isHovering ? 'opacity-1 scale-75' : 'opacity-100 scale-100'
        }`}
        style={{ width: '48px', height: '48px' }}
      />

      {/* 
         INNER DOT (The Core)
         Default: Small solid dot
         Hover: Slightly larger to emphasize the click area
      */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#34d399] rounded-full transition-all duration-300 ease-out ${
          isHovering ? 'w-2 h-2' : 'w-1.5 h-1.5'
        }`}
      />
    </div>
  );
}