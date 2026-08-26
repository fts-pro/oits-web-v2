import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Zero-Downtime Migration',
    'Event-Driven Systems',
    'Strict Domain-Driven Design',
    'WebRTC Low-Latency Streaming',
    'PostgreSQL Partitioning',
    'Named Senior Engineer Sign-Off',
    'Automated SAST / DAST Scanning',
    '4–5h Daily Stockholm CET Overlap',
    'Full Codebase IP Ownership'
  ];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="flex w-max animate-marquee space-x-8 text-xs font-mono font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-400">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="hover:text-sky-500 transition-colors whitespace-nowrap">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};