import { GovernedClaim, GovernedCaseStudy, ServiceOutcome, TeamLead, SecurityPractice, NavItem } from '../types';

export type { GovernedClaim, GovernedCaseStudy, ServiceOutcome, TeamLead, SecurityPractice, NavItem };

export const COMPANY_NAME = "OITS";
export const LEGAL_ENTITY_NAME = "OITS Dhaka Limited";
export const TAGLINE = "We build and modernise the software your business runs on.";
export const CONTACT_EMAIL = "info@oitsdhaka.com";
export const CONTACT_PHONE = "+880 1711-456789";
export const CONTACT_PHONE_NORDIC = "+46 (0)8 500 123 45";
export const REGISTERED_ADDRESS = "House # 42, Road # 2/A, Block # Z, Dhaka 1209, Bangladesh";

export const PRIMARY_CTA = {
  label: "Book a 90-minute Delivery Review",
  href: "/start",
  subtext: "Free, confidential architectural review with a named lead engineer."
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Services',
    href: '/services/modernise',
    children: [
      {
        label: 'Modernise & Decouple',
        href: '/services/modernise',
        description: 'Legacy refactoring, database partitioning & monolith decoupling.'
      },
      {
        label: 'Build Critical Applications',
        href: '/services/build',
        description: 'Industrial-grade web portals, SaaS platforms & mobile apps.'
      },
      {
        label: 'Operate & SRE Pods',
        href: '/services/operate',
        description: 'Embedded reliability engineering, automated rollbacks & SLAs.'
      },
      {
        label: 'On-Demand Dev Support',
        href: '/services/build',
        description: 'Senior engineer staff augmentation & agile acceleration.'
      },
      {
        label: '24/7 Monitoring & Maintenance',
        href: '/services/operate',
        description: 'Continuous uptime monitoring, incident response & secops.'
      },
      {
        label: 'Digital Transformation Services',
        href: '/services/modernise',
        description: 'Cloud migration strategy, tech debt elimination & advisory.'
      }
    ]
  },
  {
    label: 'Our Works',
    href: '/work',
    children: [
      {
        label: 'Case Studies & Delivered Systems',
        href: '/work',
        description: 'Audited benchmark results and real-world system transformations.'
      },
      {
        label: 'Enterprise Solutions & Architecture',
        href: '/work',
        description: 'Distributed ledger, telehealth & logistics dispatch engines.'
      }
    ]
  },
  {
    label: 'How We Work',
    href: '/how-we-work',
    children: [
      {
        label: 'Engagement Model & Progression',
        href: '/how-we-work',
        description: 'Low-risk 4-step progression from 90-min review to full scale.'
      },
      {
        label: 'Agile Workflow & Sprints',
        href: '/how-we-work#agile-workflow',
        description: '2-week sprint cadences, automated CI/CD, and live demo verification.'
      },
      {
        label: 'AI & Accountability',
        href: '/ai',
        description: 'AI code acceleration governed by named senior human sign-off.'
      },
      {
        label: 'Security & Trust',
        href: '/security',
        description: 'Zero-trust perimeters, ISO/SOC2 alignment & vendor security pack.'
      }
    ]
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      {
        label: 'Know OITS',
        href: '/about#know-oits',
        description: 'Our engineering command base in Dhaka & European delivery hub.'
      },
      {
        label: 'Why Us',
        href: '/about#why-us',
        description: 'Zero-debt architecture, 4 core pillars & senior lead ownership.'
      },
      {
        label: 'Mission & Vision',
        href: '/about#mission-vision',
        description: 'Swiss-modern craftsmanship and precision software engineering.'
      },
      {
        label: 'Our Policies & Compliance',
        href: '/about#policies',
        description: 'ISO 27001, SOC2 Type II, OWASP ASVS, and GDPR DPA defaults.'
      },
      {
        label: 'Our Team & Leadership',
        href: '/team',
        description: 'Meet the senior technical directors and architects building your software.'
      },
      {
        label: 'Client Testimonials',
        href: '/about#testimonials',
        description: 'Verifiable feedback from product and engineering leadership.'
      }
    ]
  },
];

export const BUYER_PROBLEMS = [
  {
    id: 'legacy-drag',
    title: 'The Legacy Drag',
    problem: 'Core legacy monolithic systems are too brittle to change, blocking product roadmaps and slowing feature delivery to a crawl.',
    resolution: 'We isolate domains using strangler patterns, refactor bottlenecks, and build safe migration paths without system downtime.'
  },
  {
    id: 'unaccountable-outsourcing',
    title: 'Unaccountable Outsourcing',
    problem: 'Traditional dev shops deliver junior code churn, vague time-and-materials billing, and no operational ownership.',
    resolution: 'Every sprint and architectural decision is led and signed off by a named senior engineer with explicit delivery commitments.'
  },
  {
    id: 'uncontrolled-ai-adoption',
    title: 'Unchecked AI Hallucination',
    problem: 'Teams rush to generate code with AI without architectural governance, accumulating silent security debt and technical risk.',
    resolution: 'AI accelerates scaffolding and boilerplate. Senior human engineers review, test, secure, and own production outcomes.'
  }
];

export const SERVICES_OUTCOMES: Record<string, ServiceOutcome> = {
  modernise: {
    id: 'modernise',
    slug: 'modernise',
    title: 'Modernise',
    tagline: 'Refactor, decouple, and migrate legacy systems without downtime.',
    problemStatement: 'Legacy systems slow down business velocity, incur exponential maintenance overhead, and introduce silent security vulnerabilities.',
    targetSituations: [
      'Monolithic codebases where deployments carry high risk of regression',
      'Database query latency and resource bottlenecks under peak load',
      'Outdated frameworks blocking modern integrations and hiring',
      'On-premise infrastructure requiring cloud-native resilience'
    ],
    approach: [
      'Comprehensive code and dependency audit with static risk mapping',
      'Domain isolation using incremental Strangler Fig architecture',
      'Database optimization, caching tiers, and connection pooling',
      'Zero-downtime deployment pipelines with automated rollback safety'
    ],
    deliverables: [
      'Architectural Health & Risk Assessment Report',
      'Decoupled microservice or modular monolith roadmap',
      'Optimized database indexing and caching layer',
      'Automated regression test suite with >85% critical coverage'
    ],
    exclusions: [
      'We do not execute high-risk big-bang rewrites',
      'We do not support legacy systems without establishing automated test safety nets'
    ],
    deliveryModel: 'Phased sprint milestones with continuous operational verification.',
    governedProof: [
      {
        id: 'claim-mod-1',
        statement: 'Reduced API response p95 latency from 1,200ms to 180ms during multi-tenant database decoupling.',
        tier: 'internal-benchmark',
        source: 'Engineering Benchmark Log #BM-2025-04',
        measurementMethod: 'Apache JMeter load tests across 10k simulated concurrent transactions',
        owner: 'Lead Systems Architect',
        reviewedAt: '2026-02-15',
        publishable: true
      },
      {
        id: 'claim-mod-2',
        statement: 'Zero unintended downtime during 4-phase microservice migration.',
        tier: 'validated-pilot',
        source: 'Delivery Sprint Retrospective #SR-2025-11',
        measurementMethod: 'Synthetic multi-region uptime monitor',
        owner: 'DevOps & Delivery Lead',
        reviewedAt: '2026-01-20',
        publishable: true
      }
    ],
    objections: [
      {
        question: 'Will modernising our system disrupt active customer operations?',
        answer: 'No. We operate strictly on incremental decoupling patterns. Existing production paths remain untouched while new modules are validated in shadow or canary deployments.'
      },
      {
        question: 'How do you guarantee that business logic is not lost during refactoring?',
        answer: 'We construct a comprehensive suite of characterization and regression tests prior to touching a single line of business code.'
      }
    ]
  },
  build: {
    id: 'build',
    slug: 'build',
    title: 'Build',
    tagline: 'Engineer scalable, resilient business-critical web and mobile applications.',
    problemStatement: 'Rushed MVPs and off-the-shelf templates fail under real enterprise throughput, creating expensive rewrites within 12 months.',
    targetSituations: [
      'New digital products requiring industrial-grade transactional integrity',
      'Complex multi-tenant SaaS platforms with enterprise RBAC and compliance',
      'High-performance iOS, Android, and cross-platform native applications',
      'Internal operational portals replacing manual spreadsheet workflows'
    ],
    approach: [
      'Strict domain-driven design and modular architecture',
      'Type-safe full-stack engineering (Next.js, TypeScript, PostgreSQL, Go)',
      'Security-by-design incorporating OWASP Top 10 and data encryption at rest/transit',
      'CI/CD with automated static analysis, linting, and smoke tests'
    ],
    deliverables: [
      'Production-ready application codebase with full IP handover',
      'Modular Figma design system and component token library',
      'Infrastructure as Code (Terraform / CloudFormation) configurations',
      'Comprehensive developer and operational documentation'
    ],
    exclusions: [
      'We do not build speculative crypto schemes or non-compliant schemes',
      'We do not engage on un-scoped fixed-price requests without an initial Delivery Review'
    ],
    deliveryModel: 'Dedicated 2-week agile sprints with bi-weekly runnable builds.',
    governedProof: [
      {
        id: 'claim-bld-1',
        statement: 'Engineered sub-50ms render times across complex data tables with over 50,000 active records.',
        tier: 'internal-benchmark',
        source: 'Frontend Benchmark Lab #FL-2025-08',
        measurementMethod: 'Chrome DevTools Lighthouse & User Timing API on simulated mid-tier devices',
        owner: 'Principal Frontend Engineer',
        reviewedAt: '2026-03-01',
        publishable: true
      }
    ],
    objections: [
      {
        question: 'Who owns the intellectual property and code repository?',
        answer: 'You retain 100% ownership of all source code, design assets, and infrastructure definitions from day one.'
      },
      {
        question: 'Can our in-house team take over after launch?',
        answer: 'Yes. We build with standard, clean TypeScript patterns and provide structured knowledge transfer and onboarding sessions.'
      }
    ]
  },
  operate: {
    id: 'operate',
    slug: 'operate',
    title: 'Operate',
    tagline: 'Reliability engineering, continuous enhancement, and SRE for business-critical software.',
    problemStatement: 'Software decays when neglected. Security patches fall behind, dependencies break, and operational knowledge walks out the door.',
    targetSituations: [
      'Live enterprise systems needing committed SLA response and incident ownership',
      'Continuous feature development alongside internal product teams',
      'Cloud cost optimization and infrastructure scaling management',
      'Ongoing compliance audits, dependency updates, and penetration testing triage'
    ],
    approach: [
      'Embedded senior engineering pods integrated into your Slack and Jira workflows',
      'Proactive telemetry, distributed tracing (OpenTelemetry), and alerting',
      'Regular dependency updates and automated vulnerability scanning',
      'Monthly architectural reviews and continuous capacity planning'
    ],
    deliverables: [
      '24/7 or business-hours Incident Response SLAs',
      'Monthly Security & Dependency Hygiene Reports',
      'Continuous sprint delivery velocity for roadmap enhancements',
      'Quarterly Cloud Spend & Performance Optimization Audits'
    ],
    exclusions: [
      'We do not provide call-center Level 1 customer support',
      'We do not operate legacy systems without administrative access and logging hooks'
    ],
    deliveryModel: 'Quarterly retainers with transparent hourly utilization and named lead engineers.',
    governedProof: [
      {
        id: 'claim-op-1',
        statement: 'Reduced mean time to recovery (MTTR) by 60% through automated health probes and structured rollback triggers.',
        tier: 'internal-benchmark',
        source: 'SRE Playbook Benchmark #SRE-2025-10',
        measurementMethod: 'Simulated disaster recovery drills in isolated staging environments',
        owner: 'Lead SRE Specialist',
        reviewedAt: '2026-02-10',
        publishable: true
      }
    ],
    objections: [
      {
        question: 'How do you handle time zone alignment for European or US clients?',
        answer: 'We provide 4 to 5 hours of direct daily overlap with European business hours (UTC+1 to UTC+3) and maintain asynchronous handovers for US teams.'
      }
    ]
  }
};

export const GOVERNED_CASE_STUDIES: GovernedCaseStudy[] = [
  {
    slug: 'ledger-modernisation',
    title: 'High-Throughput Financial Ledger Refactoring',
    clientSector: 'Fintech & Transaction Processing',
    evidenceTier: 'validated-pilot',
    permissionReference: 'PERM-2025-ARCH-01',
    summary: 'Decoupled a monolithic transaction processing system into an event-driven transactional pipeline handling high concurrency.',
    context: 'The client faced database lock contention and unpredictable latency spikes during high-volume end-of-month batch processing.',
    constraint: 'Zero data inconsistency tolerance with mandatory double-entry ledger verification on every transaction.',
    approach: [
      'Engineered an outbox pattern with Kafka message queuing for reliable asynchronous processing.',
      'Refactored relational schemas with partitioned tables and optimistic locking.',
      'Constructed a shadow-traffic testing framework to validate calculations against production data.'
    ],
    tradeOffs: 'Accepted slight eventual consistency on reporting endpoints in exchange for strict immediate consistency on ledger writes.',
    architectureNotes: 'Next.js admin console, Go microservices, PostgreSQL with partitioned indexes, Redis cache, and Kafka streaming.',
    governedResults: [
      {
        id: 'cs-res-1',
        statement: 'Eliminated deadlocks and reduced peak batch processing time by 72%.',
        tier: 'validated-pilot',
        source: 'Pilot Simulation Test Run #PILOT-882',
        measurementMethod: 'Side-by-side run against 2.5 million simulated transactions',
        owner: 'Principal Backend Engineer',
        reviewedAt: '2026-01-15',
        publishable: true
      },
      {
        id: 'cs-res-2',
        statement: 'Maintained 100% ledger audit consistency across 100 consecutive automated test runs.',
        tier: 'internal-benchmark',
        source: 'Audit Verification Suite #AVS-401',
        measurementMethod: 'Automated cryptographic checksum verification',
        owner: 'Security & QA Lead',
        reviewedAt: '2026-01-18',
        publishable: true
      }
    ],
    leadEngineer: {
      name: 'Tanvir Hossain',
      role: 'Lead Systems Architect'
    },
    technologies: ['Go', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'TypeScript'],
    publishable: true
  },
  {
    slug: 'telehealth-platform',
    title: 'Encrypted Telehealth Consultation & Records Architecture',
    clientSector: 'Healthcare & Telemedicine',
    evidenceTier: 'validated-pilot',
    permissionReference: 'PERM-2025-ARCH-02',
    summary: 'Built a low-latency WebRTC video consultation system with end-to-end encrypted medical record exchange.',
    context: 'Required a resilient mobile and web application capable of operating over variable cellular connections in emerging markets.',
    constraint: 'Strict data privacy controls, zero-knowledge storage for patient records, and bandwidth adaptability.',
    approach: [
      'Implemented WebRTC peer connections with dynamic bitrate scaling for poor network environments.',
      'Designed client-side cryptographic envelope encryption for patient clinical notes.',
      'Integrated automated offline data synchronisation using SQLite and background service workers.'
    ],
    tradeOffs: 'Chose client-side encryption key management which increased client bundle size by 40KB but eliminated server-side record exposure.',
    architectureNotes: 'React 19 web app, Flutter cross-platform mobile, WebSockets, Node.js signaling server, encrypted PostgreSQL.',
    governedResults: [
      {
        id: 'cs-res-3',
        statement: 'Achieved video call connection success rate of 99.4% on 3G cellular test simulations.',
        tier: 'validated-pilot',
        source: 'Network Emulation Testing Lab #NET-90',
        measurementMethod: 'Network link conditioner with 150ms latency and 3% packet loss',
        owner: 'Lead Mobile Engineer',
        reviewedAt: '2026-02-05',
        publishable: true
      }
    ],
    leadEngineer: {
      name: 'Arif Chowdhury',
      role: 'Staff Mobile & Security Engineer'
    },
    technologies: ['React', 'Flutter', 'WebRTC', 'Node.js', 'PostgreSQL', 'TypeScript'],
    publishable: true
  },
  {
    slug: 'logistics-dispatch-engine',
    title: 'Multi-Modal Logistics Route & Dispatch Optimization Platform',
    clientSector: 'Supply Chain & Logistics',
    evidenceTier: 'internal-benchmark',
    permissionReference: 'PERM-2025-ARCH-03',
    summary: 'Modernised legacy dispatch spreadsheets into an interactive real-time dispatch dashboard with automated route clustering.',
    context: 'Dispatchers spent 3+ hours daily manually matching freight orders to carrier capacities.',
    constraint: 'Must render hundreds of live vehicle locations and multi-stop routes simultaneously without browser lag.',
    approach: [
      'Constructed a geospatial clustering engine with WebGL vector map rendering.',
      'Implemented WebWorker background computation for constraint-satisfaction route solving.',
      'Automated dispatch notification webhooks with carrier telematics integrations.'
    ],
    tradeOffs: 'Offloaded route clustering computation to browser WebWorkers to minimize backend infrastructure costs while maintaining 60FPS UI response.',
    architectureNotes: 'Next.js, TypeScript, Mapbox GL / WebGL, Python FastAPI, PostgreSQL PostGIS.',
    governedResults: [
      {
        id: 'cs-res-4',
        statement: 'Rendered 5,000 active geo-coordinates simultaneously while maintaining 60 FPS viewport transitions.',
        tier: 'internal-benchmark',
        source: 'UI Performance Audit #PA-312',
        measurementMethod: 'Chrome DevTools FPS meter across continuous panning and zooming operations',
        owner: 'Senior Frontend Architect',
        reviewedAt: '2026-02-22',
        publishable: true
      }
    ],
    leadEngineer: {
      name: 'Nazmul Islam',
      role: 'Principal Full-Stack Engineer'
    },
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'PostGIS', 'WebGL', 'TypeScript'],
    publishable: true
  }
];

export const ACCOUNTABILITY_MATRIX = [
  {
    area: 'Architecture & System Design',
    aiRole: 'Assists with rapid drafting of interface schemas and boilerplate scaffolding.',
    humanEngineerRole: 'Senior engineer evaluates domain trade-offs, security boundaries, and concurrency patterns. Signs off design before code is written.',
    guarantee: '100% human-approved architecture'
  },
  {
    area: 'Code Implementation',
    aiRole: 'Speeds up syntax completion, unit test template generation, and documentation drafting.',
    humanEngineerRole: 'Engineers write core business logic, refactor edge cases, and manually inspect every pull request line-by-line.',
    guarantee: 'Zero raw AI code in production'
  },
  {
    area: 'Security & Dependency Hygiene',
    aiRole: 'Static vulnerability scanners flag known CVEs and outdated package versions.',
    humanEngineerRole: 'Security leads verify permissions, data flow sanitization, encryption keys, and environment isolation.',
    guarantee: 'Mandatory senior code review on all PRs'
  },
  {
    area: 'Production Incident Ownership',
    aiRole: 'Log aggregation tools cluster error traces and anomaly reports.',
    humanEngineerRole: 'Named on-call engineers diagnose root causes, execute remediation, and write transparent post-mortems.',
    guarantee: 'Direct human accountability'
  }
];

export const ENGAGEMENT_PROGRESSION = [
  {
    step: '01',
    name: '90-Minute Delivery Review',
    duration: 'Week 1',
    description: 'We review your architecture, codebase, or roadmap bottleneck with zero sales fluff. You leave with actionable insights regardless of whether we work together.'
  },
  {
    step: '02',
    name: 'Focused 2-Week Discovery & Pilot',
    duration: 'Weeks 2–3',
    description: 'We tackle one tightly scoped slice—a performance bottleneck, refactoring prototype, or architecture blueprint—to prove velocity and quality.'
  },
  {
    step: '03',
    name: 'Agile Milestone Delivery',
    duration: 'Month 2+',
    description: 'Full sprint execution with bi-weekly runnable demos, transparent burndown, and direct Slack communication with your lead engineer.'
  },
  {
    step: '04',
    name: 'Operate & Handover',
    duration: 'Ongoing',
    description: 'Seamless transition to our SRE maintenance team or structured handover and documentation for your internal engineers.'
  }
];

export const SECURITY_PRACTICES: SecurityPractice[] = [
  {
    id: 'sec-1',
    category: 'Access & Source Control',
    title: 'Zero-Trust Repository Access & 2FA Enforcement',
    description: 'All code repositories require hardware token or TOTP multi-factor authentication with branch protection rules enforcing dual approvals.',
    verificationStatus: 'verified',
    lastAudited: '2026-02-01',
    owner: 'Security Lead'
  },
  {
    id: 'sec-2',
    category: 'Data Protection & Privacy',
    title: 'Data Minimization & Encryption Standard',
    description: 'All customer data in staging and transit is strictly sanitized or encrypted using AES-256 / TLS 1.3. No production PII in development environments.',
    verificationStatus: 'verified',
    lastAudited: '2026-01-15',
    owner: 'Compliance Officer'
  },
  {
    id: 'sec-3',
    category: 'Vulnerability Management',
    title: 'Automated SAST / DAST Dependency Scanning',
    description: 'Continuous integration pipelines run automated dependency checks (npm audit, Snyk) and fail builds on unresolved high-severity vulnerabilities.',
    verificationStatus: 'operational-standard',
    lastAudited: '2026-02-10',
    owner: 'DevOps Lead'
  },
  {
    id: 'sec-4',
    category: 'Procurement Governance',
    title: 'Pre-Audit Security Pack Availability',
    description: 'Formal security questionnaires, standard contractual clauses (SCCs), and data processing addendums (DPA) are ready for enterprise vendor review.',
    verificationStatus: 'in-review',
    lastAudited: '2026-01-30',
    owner: 'Legal Counsel'
  }
];

export const TEAM_LEADS: TeamLead[] = [
  {
    id: 'lead-1',
    name: 'Tanvir Hossain',
    role: 'Principal Systems Architect & Technical Director',
    specialization: 'Distributed Systems, High-Concurrency Databases, Go & Cloud Architecture',
    bio: '12+ years designing mission-critical backends, financial transaction ledgers, and zero-downtime database migration pipelines.',
    verified: true
  },
  {
    id: 'lead-2',
    name: 'Arif Chowdhury',
    role: 'Staff Mobile & Security Engineer',
    specialization: 'React Native, Flutter, WebRTC & Cryptographic Systems',
    bio: 'Specialist in low-latency mobile streaming, offline-first data synchronization, and medical privacy compliance architectures.',
    verified: true
  },
  {
    id: 'lead-3',
    name: 'Nazmul Islam',
    role: 'Lead Full-Stack & UI Architect',
    specialization: 'Next.js, TypeScript, Swiss Design Systems & Frontend Performance',
    bio: 'Pioneer of high-density data visualizations and modular design systems, ensuring sub-50ms user interactions under heavy workloads.',
    verified: true
  }
];
