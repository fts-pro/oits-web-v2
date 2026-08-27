'use client';

import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  Workflow, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Cloud, 
  Sparkles, 
  Terminal,
  Zap,
  ArrowRight,
  Code2
} from 'lucide-react';

export type TechDomain = 'all' | 'frontend' | 'backend' | 'infrastructure' | 'specialized';
export type TechRing = 'all' | 'ADOPT' | 'TRIAL' | 'ASSESS';

export interface TechItem {
  id: string;
  name: string;
  domain: 'frontend' | 'backend' | 'infrastructure' | 'specialized';
  domainLabel: string;
  ring: 'ADOPT' | 'TRIAL' | 'ASSESS';
  fluencyRate: number;
  synopsis: string;
  useCases: string[];
  telemetry: string;
  // Radar visual coordinates on 440x440 viewport
  cx: number;
  cy: number;
}

export const TECH_RADAR_ITEMS: TechItem[] = [
  // FRONTEND (Top-Right Quadrant: x > 220, y < 220)
  {
    id: 'react',
    name: 'React',
    domain: 'frontend',
    domainLabel: 'Frontend Sector',
    ring: 'ADOPT',
    fluencyRate: 98,
    synopsis: 'The primary architecture for rendering high-fidelity, high-speed single-page application user interfaces.',
    useCases: ['SaaS Dashboard Clients', 'Stateful Administrative Systems', 'Custom Design Systems'],
    telemetry: 'Component Render Latency < 2ms',
    cx: 280,
    cy: 185,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    domain: 'frontend',
    domainLabel: 'Frontend Sector',
    ring: 'ADOPT',
    fluencyRate: 97,
    synopsis: 'Enterprise-grade React framework providing hybrid static & server rendering, edge routes, and automated asset optimization.',
    useCases: ['High-Concurrency Web Portals', 'SEO-Critical Landing Pages', 'Edge API Aggregations'],
    telemetry: 'First Contentful Paint (FCP) < 0.4s',
    cx: 275,
    cy: 177,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    domain: 'frontend',
    domainLabel: 'Frontend Sector',
    ring: 'ADOPT',
    fluencyRate: 99,
    synopsis: 'Strict type safety across the entire engineering pipeline ensuring compile-time contract enforcement.',
    useCases: ['Universal Domain Models', 'Type-Safe API Contracts', 'Refactoring Large Codebases'],
    telemetry: 'Strict Mode Zero `any` Baseline',
    cx: 272,
    cy: 173,
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    domain: 'frontend',
    domainLabel: 'Frontend Sector',
    ring: 'ADOPT',
    fluencyRate: 96,
    synopsis: 'Utility-first CSS architecture for rapid, consistent, zero-runtime Swiss-Modern UI rendering.',
    useCases: ['Design Token Systems', 'Dark/Light Dynamic Theming', 'Micro-Animation Foundations'],
    telemetry: 'CSS Bundle Size < 12KB Compressed',
    cx: 282,
    cy: 187,
  },
  {
    id: 'vue',
    name: 'Vue.js',
    domain: 'frontend',
    domainLabel: 'Frontend Sector',
    ring: 'TRIAL',
    fluencyRate: 88,
    synopsis: 'Progressive reactive framework evaluated for specific lightweight micro-frontends and rapid widget embeds.',
    useCases: ['Micro-Frontend Integrations', 'Client Side Widgets', 'Legacy SPA Migrations'],
    telemetry: 'Reactivity Overhead < 1.5ms',
    cx: 310,
    cy: 126,
  },
  {
    id: 'threejs',
    name: 'Three.js',
    domain: 'frontend',
    domainLabel: 'Frontend Sector',
    ring: 'ASSESS',
    fluencyRate: 78,
    synopsis: 'WebGL 3D rendering pipeline for immersive spatial data visualizations and interactive 3D assets.',
    useCases: ['Interactive Data Globes', 'Spatial Asset Visualizers', 'WebGL Physics Canvases'],
    telemetry: '60 FPS Hardware-Accelerated Draw Loop',
    cx: 297,
    cy: 46,
  },

  // BACKEND (Top-Left Quadrant: x < 220, y < 220)
  {
    id: 'nodejs',
    name: 'Node.js',
    domain: 'backend',
    domainLabel: 'Backend Sector',
    ring: 'ADOPT',
    fluencyRate: 97,
    synopsis: 'Asynchronous event-driven runtime powering high-throughput API gateways, event consumers, and real-time sockets.',
    useCases: ['High-Concurrency API Gateways', 'Real-Time WebSocket Servers', 'Serverless Functions'],
    telemetry: 'p99 IO Loop Latency < 4ms',
    cx: 153,
    cy: 198,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    domain: 'backend',
    domainLabel: 'Backend Sector',
    ring: 'ADOPT',
    fluencyRate: 98,
    synopsis: 'ACID-compliant relational database engine with advanced JSONB indexing, connection pooling, and partitioned storage.',
    useCases: ['Financial Core Ledgers', 'Relational Transactional Data', 'Row-Level Audited Storage'],
    telemetry: 'Query p95 Latency < 5ms at 50M Rows',
    cx: 179,
    cy: 162,
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    domain: 'backend',
    domainLabel: 'Backend Sector',
    ring: 'ADOPT',
    fluencyRate: 92,
    synopsis: 'Modular TypeScript backend framework with dependency injection, OpenAPI decorators, and microservice transports.',
    useCases: ['Enterprise Microservices', 'Domain-Driven Architectures', 'Audited REST/GraphQL APIs'],
    telemetry: 'Clean DI Module Bootstrap < 200ms',
    cx: 173,
    cy: 168,
  },
  {
    id: 'python',
    name: 'Python',
    domain: 'backend',
    domainLabel: 'Backend Sector',
    ring: 'TRIAL',
    fluencyRate: 90,
    synopsis: 'Backend ecosystem of choice for data processing pipelines, asynchronous FastAPI services, and ML model wrappers.',
    useCases: ['ETL Data Pipelines', 'Asynchronous ML Inference Wrappers', 'Algorithmic Risk Scoring'],
    telemetry: 'FastAPI Serialization Throughput 24k req/sec',
    cx: 110,
    cy: 149,
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    domain: 'backend',
    domainLabel: 'Backend Sector',
    ring: 'TRIAL',
    fluencyRate: 86,
    synopsis: 'Declarative query language providing client-driven data fetching with strict schema contracts and DataLoader batching.',
    useCases: ['Unified Frontend Graph Gateways', 'Bandwidth-Constrained Mobile Sync', 'Multi-Service Federation'],
    telemetry: 'Payload Over-Fetch Reduction 64%',
    cx: 98,
    cy: 175,
  },
  {
    id: 'rust',
    name: 'Rust',
    domain: 'backend',
    domainLabel: 'Backend Sector',
    ring: 'ASSESS',
    fluencyRate: 82,
    synopsis: 'Memory-safe systems programming language leveraged for ultra-low latency compute engines and cryptographic verify routines.',
    useCases: ['High-Density Matching Engines', 'Zero-Allocation Cryptographic Routines', 'WASM Native Modules'],
    telemetry: 'Zero Garbage-Collection Pauses (Deterministic)',
    cx: 139,
    cy: 48,
  },

  // INFRASTRUCTURE / CLOUD (Bottom-Left Quadrant: x < 220, y > 220)
  {
    id: 'aws',
    name: 'AWS',
    domain: 'infrastructure',
    domainLabel: 'Infrastructure Sector',
    ring: 'ADOPT',
    fluencyRate: 98,
    synopsis: 'Primary cloud provider for multi-zone high-availability clusters, managed RDS, ECS/EKS orchestration, and serverless lambdas.',
    useCases: ['Multi-Region VPC Deployments', 'Managed Aurora Serverless', 'CloudFront Global CDN'],
    telemetry: '99.99% Availability SLA Baseline',
    cx: 196,
    cy: 285,
  },
  {
    id: 'docker',
    name: 'Docker',
    domain: 'infrastructure',
    domainLabel: 'Infrastructure Sector',
    ring: 'ADOPT',
    fluencyRate: 99,
    synopsis: 'Standardized containerization format enabling reproducible multi-stage production builds and zero environment drift.',
    useCases: ['Multi-Stage Minimal Alpine Images', 'Local Dev Parity', 'Immutable Artifact Pipelines'],
    telemetry: 'Final Image Size < 85MB Optimized',
    cx: 152,
    cy: 238,
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    domain: 'infrastructure',
    domainLabel: 'Infrastructure Sector',
    ring: 'ADOPT',
    fluencyRate: 100,
    synopsis: 'Automated GitHub Actions pipelines with lint, unit, integration, and security gauntlet checks on every pull request.',
    useCases: ['Automated PR Quality Gates', 'Canary Rollout Orchestration', 'Automated Rollback Triggers'],
    telemetry: 'Full Pipeline Run Duration < 4 Minutes',
    cx: 164,
    cy: 262,
  },
  {
    id: 'terraform',
    name: 'Terraform',
    domain: 'infrastructure',
    domainLabel: 'Infrastructure Sector',
    ring: 'TRIAL',
    fluencyRate: 90,
    synopsis: 'Declarative Infrastructure-as-Code (IaC) managing cloud topology, networking perimeters, and IAM permissions versioned in Git.',
    useCases: ['Automated Environment Provisioning', 'Drift Detection Auditing', 'Multi-Cloud Topology Blueprints'],
    telemetry: 'Zero Manual Console Modifications Policy',
    cx: 157,
    cy: 334,
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    domain: 'infrastructure',
    domainLabel: 'Infrastructure Sector',
    ring: 'TRIAL',
    fluencyRate: 89,
    synopsis: 'Container orchestration engine for horizontal pod auto-scaling, ingress traffic routing, and self-healing service pods.',
    useCases: ['Elastic Auto-Scaling Pods', 'Zero-Downtime Rolling Deploys', 'Cluster Service Meshes'],
    telemetry: 'Auto-Scaling Reaction Latency < 15s',
    cx: 125,
    cy: 308,
  },
  {
    id: 'gcp',
    name: 'Google Cloud (GCP)',
    domain: 'infrastructure',
    domainLabel: 'Infrastructure Sector',
    ring: 'ASSESS',
    fluencyRate: 84,
    synopsis: 'Secondary enterprise cloud platform utilized for BigQuery analytical warehousing and Vertex AI integrations.',
    useCases: ['BigQuery Telemetry Storage', 'Cloud Run Micro-Services', 'Vertex AI Workflows'],
    telemetry: 'Sub-Second Cold Start on Cloud Run',
    cx: 88,
    cy: 356,
  },

  // SPECIALIZED (Bottom-Right Quadrant: x > 220, y > 220)
  {
    id: 'cross-platform',
    name: 'Cross-Platform Solutions',
    domain: 'specialized',
    domainLabel: 'Specialized Sector',
    ring: 'ADOPT',
    fluencyRate: 95,
    synopsis: 'Single-source universal architectures deployed natively across iOS, Android, and Desktop with shared domain business logic.',
    useCases: ['Multi-Device Enterprise Field Apps', 'Unified Design System Implementation', 'Offline-First Sync Engines'],
    telemetry: '60 FPS Native Touch Responsiveness',
    cx: 252,
    cy: 282,
  },
  {
    id: 'pwa',
    name: 'Progressive Web Apps (PWA)',
    domain: 'specialized',
    domainLabel: 'Specialized Sector',
    ring: 'ADOPT',
    fluencyRate: 94,
    synopsis: 'ServiceWorker-cached installable web applications providing offline operation, background sync, and push notifications.',
    useCases: ['Low-Bandwidth Remote Operations', 'Instant Home-Screen Installs', 'Background Telemetry Cache'],
    telemetry: 'Lighthouse PWA Score 100/100',
    cx: 286,
    cy: 243,
  },
  {
    id: 'intelligent-features',
    name: 'Intelligent Features Augmentation',
    domain: 'specialized',
    domainLabel: 'Specialized Sector',
    ring: 'TRIAL',
    fluencyRate: 91,
    synopsis: 'Embedding contextual semantic search, vector embeddings, and automated anomaly classifiers into transactional workflows.',
    useCases: ['Automated Anomaly Detection', 'Semantic Vector Search in DBs', 'Smart Predictive Form Completion'],
    telemetry: 'Semantic Embedding Lookup p95 < 28ms',
    cx: 266,
    cy: 341,
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    domain: 'specialized',
    domainLabel: 'Specialized Sector',
    ring: 'TRIAL',
    fluencyRate: 92,
    synopsis: 'Fine-tuned LLM inference pipelines, RAG architectures, and predictive modeling verified with human sign-off guardrails.',
    useCases: ['Domain-Specific RAG Knowledgebases', 'Predictive Resource Forecasting', 'Automated Code Scaffolding Checks'],
    telemetry: 'RAG Retrieval Grounding Accuracy 99.4%',
    cx: 328,
    cy: 293,
  },
  {
    id: 'iot',
    name: 'Internet of Things (IoT)',
    domain: 'specialized',
    domainLabel: 'Specialized Sector',
    ring: 'ASSESS',
    fluencyRate: 80,
    synopsis: 'MQTT event streaming and telemetry gateways connecting physical hardware sensors to cloud operational dashboards.',
    useCases: ['Fleet Telematics Ingestion', 'Industrial Sensor Gateways', 'Edge Real-Time Dispatch'],
    telemetry: 'MQTT Ingestion 50k msgs/sec Baseline',
    cx: 329,
    cy: 375,
  },
  {
    id: 'ar-vr',
    name: 'AR & VR Solutions',
    domain: 'specialized',
    domainLabel: 'Specialized Sector',
    ring: 'ASSESS',
    fluencyRate: 76,
    synopsis: 'WebXR spatial environments and AR overlays for remote field inspection, architectural walk-throughs, and training simulations.',
    useCases: ['Remote Spatial Inspection', 'Interactive Architectural Walkthroughs', 'Simulated Training Enclosures'],
    telemetry: 'Sub-20ms Motion-to-Photon Latency',
    cx: 384,
    cy: 315,
  },
  {
    id: 'blockchain',
    name: 'Blockchain, Web-3 & DApp',
    domain: 'specialized',
    domainLabel: 'Specialized Sector',
    ring: 'ASSESS',
    fluencyRate: 75,
    synopsis: 'Decentralized ledger protocols, smart contract auditing, and verifiable multi-party state machines.',
    useCases: ['Audited Smart Contracts', 'Verifiable Multi-Signature Escrows', 'Decentralized Identity Verification'],
    telemetry: 'Formal Verification Test Coverage 100%',
    cx: 279,
    cy: 401,
  }
];

export const TechRadar: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<TechDomain>('all');
  const [selectedRing, setSelectedRing] = useState<TechRing>('all');
  const [activeTechId, setActiveTechId] = useState<string>('react');

  const filteredItems = useMemo(() => {
    return TECH_RADAR_ITEMS.filter(item => {
      const matchDomain = selectedDomain === 'all' || item.domain === selectedDomain;
      const matchRing = selectedRing === 'all' || item.ring === selectedRing;
      return matchDomain && matchRing;
    });
  }, [selectedDomain, selectedRing]);

  const activeItem = useMemo(() => {
    return TECH_RADAR_ITEMS.find(item => item.id === activeTechId) || TECH_RADAR_ITEMS[0];
  }, [activeTechId]);

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case 'frontend':
        return {
          fill: '#3B82F6',
          text: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/40',
          dot: 'text-blue-500',
        };
      case 'backend':
        return {
          fill: '#10B981',
          text: 'text-emerald-600 dark:text-emerald-400',
          bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/40',
          dot: 'text-emerald-500',
        };
      case 'infrastructure':
        return {
          fill: '#6366F1',
          text: 'text-indigo-600 dark:text-indigo-400',
          bg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/40',
          dot: 'text-indigo-500',
        };
      case 'specialized':
        return {
          fill: '#F43F5E',
          text: 'text-rose-600 dark:text-rose-400',
          bg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/40',
          dot: 'text-rose-500',
        };
      default:
        return {
          fill: '#38BDF8',
          text: 'text-sky-600 dark:text-sky-400',
          bg: 'bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-900/40',
          dot: 'text-sky-500',
        };
    }
  };

  const activeColor = getDomainColor(activeItem.domain);

  return (
    <section id="tech-stack" className="py-20 sm:py-24 bg-slate-50 dark:bg-[#070A13] relative overflow-hidden transition-colors duration-500">
      
      {/* Top Hairline Divider Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent pointer-events-none" />
      
      {/* Blueprint Dot Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] bg-[size:24px_24px] opacity-25 dark:opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100/70 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] rounded-full border border-sky-200/50 dark:border-sky-800/50">
              <SlidersHorizontal className="w-3 h-3 animate-pulse text-sky-500" />
              <span>TECHNOLOGY ECOSYSTEM ADOPTION RADAR</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              Operational Tech Radar
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
              We monitor, benchmark, and adopt next-generation architectures grouped across our core delivery quadrants.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 lg:gap-12">
            <div className="space-y-1 text-left">
              <span className="font-mono text-[9px] tracking-wider text-slate-400 dark:text-slate-500 uppercase block font-semibold">
                RADAR RADIAL DOMAINS
              </span>
              <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-white font-mono block">
                4 Key Sectors
              </span>
            </div>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />
            
            <div className="space-y-1 text-left">
              <span className="font-mono text-[9px] tracking-wider text-slate-400 dark:text-slate-500 uppercase block font-semibold">
                TOTAL CAPABILITIES CATALOG
              </span>
              <span className="text-xl md:text-2xl font-black text-sky-600 dark:text-sky-400 font-mono block">
                25 Active Stacks
              </span>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-white/90 dark:bg-[#0A1020]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm">
          
          {/* Domain Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { key: 'all', label: 'All Domains' },
              { key: 'frontend', label: 'Frontend' },
              { key: 'backend', label: 'Backend' },
              { key: 'infrastructure', label: 'Infrastructure' },
              { key: 'specialized', label: 'Specialized' },
            ].map(dom => (
              <button
                key={dom.key}
                type="button"
                onClick={() => setSelectedDomain(dom.key as TechDomain)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-mono uppercase tracking-wider transition-all border font-semibold ${
                  selectedDomain === dom.key
                    ? 'bg-sky-600 text-white border-sky-600 dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/40 shadow-sm'
                    : 'bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {dom.label}
              </button>
            ))}
          </div>

          {/* Status Ring Filters */}
          <div className="flex items-center gap-1.5">
            {[
              { key: 'all', label: 'All Statuses' },
              { key: 'ADOPT', label: 'ADOPT' },
              { key: 'TRIAL', label: 'TRIAL' },
              { key: 'ASSESS', label: 'ASSESS' },
            ].map(ring => (
              <button
                key={ring.key}
                type="button"
                onClick={() => setSelectedRing(ring.key as TechRing)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-mono uppercase tracking-wider transition-all border font-semibold ${
                  selectedRing === ring.key
                    ? 'bg-sky-600 text-white border-sky-600 dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/40 shadow-sm'
                    : 'bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {ring.label}
              </button>
            ))}
          </div>

        </div>

        {/* Main Interactive Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: SVG Radar Quadrant Visualizer */}
          <div className="lg:col-span-6 xl:col-span-7 bg-white dark:bg-[#0A1020]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 rounded-[2rem] p-6 shadow-sm flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute top-4 left-6 font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 block font-bold">
              RADAR QUADRANT VISUALIZER
            </div>

            <div className="w-full max-w-[440px] aspect-square relative py-6 flex items-center justify-center">
              <svg viewBox="0 0 440 440" className="w-full h-full overflow-visible select-none drop-shadow-sm">
                
                {/* Concentric Rings */}
                <circle cx="220" cy="220" r="190" fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-800/80" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="220" cy="220" r="130" fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-800/80" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="220" cy="220" r="70" fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-800/80" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Quadrant Divider Axes */}
                <line x1="220" y1="20" x2="220" y2="420" stroke="currentColor" className="text-slate-200 dark:text-slate-800/80" strokeWidth="1.2" />
                <line x1="20" y1="220" x2="420" y2="220" stroke="currentColor" className="text-slate-200 dark:text-slate-800/80" strokeWidth="1.2" />

                {/* Ring Labels */}
                <text x="220" y="146" textAnchor="middle" className="fill-slate-400 dark:fill-slate-500 font-mono text-[8px] font-bold uppercase tracking-widest pointer-events-none">ADOPT</text>
                <text x="220" y="86" textAnchor="middle" className="fill-slate-400 dark:fill-slate-500 font-mono text-[8px] font-bold uppercase tracking-widest pointer-events-none">TRIAL</text>
                <text x="220" y="26" textAnchor="middle" className="fill-slate-400 dark:fill-slate-500 font-mono text-[8px] font-bold uppercase tracking-widest pointer-events-none">ASSESS</text>

                {/* Quadrant Sector Titles */}
                <text x="390" y="45" textAnchor="end" className="fill-blue-500/80 dark:fill-blue-400/80 font-mono text-[9px] font-black uppercase tracking-widest pointer-events-none">FRONTEND</text>
                <text x="50" y="45" textAnchor="start" className="fill-emerald-500/80 dark:fill-emerald-400/80 font-mono text-[9px] font-black uppercase tracking-widest pointer-events-none">BACKEND</text>
                <text x="50" y="405" textAnchor="start" className="fill-indigo-500/80 dark:fill-indigo-400/80 font-mono text-[9px] font-black uppercase tracking-widest pointer-events-none">CLOUD</text>
                <text x="390" y="405" textAnchor="end" className="fill-rose-500/80 dark:fill-rose-400/80 font-mono text-[9px] font-black uppercase tracking-widest pointer-events-none">SPECIALIZED</text>

                {/* Interactive Tech Nodes */}
                {TECH_RADAR_ITEMS.map((item) => {
                  const isFiltered = filteredItems.some(f => f.id === item.id);
                  const isSelected = activeTechId === item.id;
                  const itemColor = getDomainColor(item.domain);

                  return (
                    <g 
                      key={item.id}
                      onClick={() => setActiveTechId(item.id)}
                      className={`cursor-pointer transition-all duration-300 ${
                        isFiltered ? 'opacity-100' : 'opacity-20 pointer-events-none'
                      }`}
                    >
                      {/* Selection Halo Ring */}
                      {isSelected && (
                        <circle
                          cx={item.cx}
                          cy={item.cy}
                          r={14}
                          fill="none"
                          stroke={itemColor.fill}
                          strokeWidth="2"
                          strokeDasharray="2 2"
                          className="animate-spin-slow"
                          style={{ transformOrigin: `${item.cx}px ${item.cy}px` }}
                        />
                      )}

                      {/* Outer Pulse Bubble */}
                      <circle
                        cx={item.cx}
                        cy={item.cy}
                        r={isSelected ? 10 : 6}
                        fill={itemColor.fill}
                        opacity={isSelected ? 0.35 : 0.15}
                      />

                      {/* Center Node Dot */}
                      <circle
                        cx={item.cx}
                        cy={item.cy}
                        r={isSelected ? 5.5 : 3.5}
                        fill={itemColor.fill}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? 1.5 : 0.8}
                        className="transition-all duration-200"
                      />

                      {/* Active Tooltip Tag */}
                      {isSelected && (
                        <g>
                          <rect
                            x={item.cx - 35}
                            y={item.cy - 24}
                            width="70"
                            height="18"
                            rx="5"
                            fill="#0F172A"
                            className="stroke-slate-700 stroke-[1]"
                          />
                          <text
                            x={item.cx}
                            y={item.cy - 12}
                            textAnchor="middle"
                            fill="#FFFFFF"
                            className="font-mono text-[8px] font-bold"
                          >
                            {item.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <p className="font-mono text-[9px] text-slate-400 dark:text-slate-500 text-center uppercase tracking-wider mt-4">
              * Click coordinates or items below to inspect domain-level architecture profiles
            </p>
          </div>

          {/* Right: Selected Adoption Profile Detail Card */}
          <div className="lg:col-span-6 xl:col-span-5 bg-white dark:bg-[#0A1020]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute top-4 right-6 font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold block">
              ADOPTION PROFILE
            </div>

            <div className="space-y-6 flex flex-col justify-between h-full">
              
              <div className="space-y-6">
                
                {/* Sector & Ring Header */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
                    {activeItem.domainLabel}
                  </span>
                  
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-black border ${
                    activeItem.ring === 'ADOPT'
                      ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30'
                      : activeItem.ring === 'TRIAL'
                      ? 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-900/30'
                      : 'bg-sky-100/70 text-sky-800 dark:bg-sky-950/40 dark:text-sky-400 border-sky-200 dark:border-sky-900/30'
                  }`}>
                    {activeItem.ring} RING
                  </span>
                </div>

                {/* Technology Name & Verified Badge */}
                <div className="space-y-1">
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {activeItem.name}
                  </h3>
                  <div className={`font-mono text-[9px] ${activeColor.text} font-bold uppercase tracking-widest flex items-center gap-1`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>OITS DEPLOYMENT NODE • VERIFIED</span>
                  </div>
                </div>

                {/* Architectural Synopsis */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 block font-bold">
                    ARCHITECTURAL SYNOPSIS
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {activeItem.synopsis}
                  </p>
                </div>

                {/* Fluency Gauge */}
                <div className="space-y-2.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center justify-between text-[9px] font-mono font-bold">
                    <span className="text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      ENGINEERING FLUENCY RATE
                    </span>
                    <span className={`${activeColor.text} font-black`}>
                      {activeItem.fluencyRate}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-sky-600 dark:bg-sky-400 rounded-full transition-all duration-500" 
                      style={{ width: `${activeItem.fluencyRate}%` }} 
                    />
                  </div>
                </div>

                {/* Proven Use Cases */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 block font-bold">
                    PROVEN USE CASES
                  </span>
                  <div className="flex flex-col gap-2">
                    {activeItem.useCases.map((uc, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/20 text-xs font-mono">
                        <div className="h-4 w-4 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20">
                          <CheckCircle2 className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span className="truncate text-slate-700 dark:text-slate-300">{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benchmark Release Telemetry */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 block font-bold">
                    BENCHMARK RELEASE TELEMETRY
                  </span>
                  <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 block bg-sky-50 dark:bg-sky-950/40 p-2.5 rounded-xl border border-sky-100 dark:border-sky-900/30">
                    {activeItem.telemetry}
                  </span>
                </div>

              </div>

              {/* Status Footer */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6">
                <div className="flex items-center justify-between font-mono text-[9px] text-slate-400 dark:text-slate-500">
                  <span className="uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                    <span>TARGET RADAR LOCKED</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    SLA COMPLIANT
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Operational Stack Checklist (25 Elements Grid) */}
        <div className="mt-12 bg-white/90 dark:bg-[#0A1020]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 text-left">
          
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-6">
            <Workflow className="w-4 h-4 text-sky-500" />
            <span>Operational Stack Checklist ({filteredItems.length} elements selected)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TECH_RADAR_ITEMS.map((item) => {
              const isFiltered = filteredItems.some(f => f.id === item.id);
              const isSelected = activeTechId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTechId(item.id);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between h-20 outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isSelected
                      ? 'bg-sky-600 text-white border-sky-600 dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/60 font-bold shadow-md scale-[1.02]'
                      : isFiltered
                      ? 'bg-white dark:bg-slate-900/30 border-slate-200 dark:border-slate-800/70 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                      : 'opacity-40 bg-slate-50 dark:bg-slate-950/20 border-transparent text-slate-400 dark:text-slate-600'
                  }`}
                >
                  <span className="font-sans text-xs font-bold leading-tight line-clamp-1">
                    {item.name}
                  </span>
                  
                  <span className="font-mono text-[8px] uppercase tracking-wider block opacity-80">
                    {item.ring} Ring
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
