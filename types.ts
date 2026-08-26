export type EvidenceTier =
  | 'verified-client-result'
  | 'validated-pilot'
  | 'internal-benchmark'
  | 'projection'
  | 'external-source';

export interface GovernedClaim {
  id: string;
  statement: string;
  tier: EvidenceTier;
  source?: string;
  measurementMethod?: string;
  permissionReference?: string;
  owner: string;
  reviewedAt: string;
  expiresAt?: string;
  publishable: boolean;
}

export interface ServiceOutcome {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  problemStatement: string;
  targetSituations: string[];
  approach: string[];
  deliverables: string[];
  exclusions: string[]; // Explicit scope boundaries
  deliveryModel: string;
  governedProof: GovernedClaim[];
  objections: { question: string; answer: string }[];
}

export interface GovernedCaseStudy {
  slug: string;
  title: string;
  clientSector: string;
  evidenceTier: EvidenceTier;
  permissionReference?: string;
  summary: string;
  context: string;
  constraint: string;
  approach: string[];
  tradeOffs: string;
  architectureNotes: string;
  governedResults: GovernedClaim[];
  leadEngineer: {
    name: string;
    role: string;
  };
  technologies: string[];
  publishable: boolean;
}

export interface TeamLead {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  verified: boolean;
}

export interface SecurityPractice {
  id: string;
  category: string;
  title: string;
  description: string;
  verificationStatus: 'verified' | 'in-review' | 'operational-standard';
  lastAudited: string;
  owner: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: { label: string; href: string; description: string }[];
}

/* =========================================================================
   Backward-compatible Legacy Types for Archived / Deprecated Components
   ========================================================================= */

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  PROCESS = 'process',
  ABOUT = 'about',
  PORTFOLIO = 'portfolio',
  INSIGHTS = 'insights',
  CONTACT = 'contact',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  longDescription?: string;
  technicalSpecs?: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  fullDescription?: string;
  problemStatement?: string;
  technicalApproach?: string;
  results?: string;
  technologies?: string[];
  link?: string;
  caseStudyUrl?: string;
  demoVideoUrl?: string;
  captionsUrl?: string;
  duration?: string;
  status?: 'Completed' | 'In Progress' | 'Maintenance';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechDomain {
  id: string;
  label: string;
  skills: string[];
}