"use client";

import { useEffect, useRef, useState } from 'react';

const TRAIL_COUNT = 6;
const TRAIL_SIZES = [18, 14, 11, 9, 7, 5];
const TRAIL_OPACITY = [0.55, 0.4, 0.28, 0.18, 0.12, 0.08];
const RING_SIZE = 44;
const RING_LERP = 0.3;
const TRAIL_LERP_FACTORS = [0.38, 0.28, 0.2, 0.14, 0.09, 0.05];

export default function Cursor() {
  const [isHidden, setIsHidden] = useState(false);
  const ringRef = useRef(null);
  const dotRefs = useRef([]);
  const hoveringRef = useRef(false);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) {
      setIsHidden(true);
      return;
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const trail = Array.from({ length: TRAIL_COUNT + 1 }, () => ({ ...target }));

    const onMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const el = e.target;
      hoveringRef.current = !!(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.closest('a, button, input, textarea') ||
        window.getComputedStyle(el).cursor === 'pointer'
      );
    };

    let raf;
    const loop = () => {
      trail[0].x += (target.x - trail[0].x) * RING_LERP;
      trail[0].y += (target.y - trail[0].y) * RING_LERP;
      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * TRAIL_LERP_FACTORS[i - 1];
        trail[i].y += (trail[i - 1].y - trail[i].y) * TRAIL_LERP_FACTORS[i - 1];
      }

      if (ringRef.current) {
        const scale = hoveringRef.current ? 0.72 : 1;
        ringRef.current.style.transform = `translate3d(${trail[0].x}px, ${trail[0].y}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.transition = hoveringRef.current
          ? 'width 0.25s, height 0.25s, border-width 0.25s'
          : '';
      }
      for (let i = 1; i < trail.length; i++) {
        if (dotRefs.current[i - 1]) {
          dotRefs.current[i - 1].style.transform = `translate3d(${trail[i].x}px, ${trail[i].y}px, 0) translate(-50%, -50%)`;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div aria-hidden="true">
      {/* Color-inverting ring at the cursor head */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference rounded-full border-2 border-[#34d399] transition-[width,height] duration-300 ease-out"
        style={{
          width: RING_SIZE,
          height: RING_SIZE,
          transform: `translate3d(-100px, -100px, 0)`,
        }}
      />

      {/* Trailing dots */}
      {TRAIL_SIZES.map((size, i) => (
        <div
          key={i}
          ref={(el) => (dotRefs.current[i] = el)}
          className="fixed top-0 left-0 z-[9990] pointer-events-none rounded-full bg-[#34d399]"
          style={{
            width: size,
            height: size,
            opacity: TRAIL_OPACITY[i],
            transform: `translate3d(-100px, -100px, 0)`,
            boxShadow: '0 0 12px rgba(52, 211, 153, 0.4)',
          }}
        />
      ))}
    </div>
  );
}