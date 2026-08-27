'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const ParticleBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate a fixed set of deterministic particles for visual stability
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: (i * 13.7 + 7) % 100,
      y: (i * 23.3 + 11) % 100,
      size: (i % 3) * 2 + 3,
      duration: 10 + (i % 5) * 3,
      delay: (i % 4) * 1.2,
      opacity: 0.15 + (i % 4) * 0.08,
    }));
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Ambient gradient glow spheres */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating particles - only animate on client after mount */}
      {mounted && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-sky-400/40 dark:bg-sky-400/60 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: ['0%', '-25%', '10%', '0%'],
            x: ['0%', '12%', '-12%', '0%'],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.6, p.opacity],
            scale: [1, 1.3, 0.85, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
