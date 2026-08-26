import React from 'react';
import { EvidenceTier } from '../../types';
import { ShieldCheck, CheckCircle2, FlaskConical, LineChart, ExternalLink } from 'lucide-react';

interface EvidenceBadgeProps {
  tier: EvidenceTier;
  className?: string;
  showIcon?: boolean;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ 
  tier, 
  className = '',
  showIcon = true 
}) => {
  const getTierConfig = (tier: EvidenceTier) => {
    switch (tier) {
      case 'verified-client-result':
        return {
          label: 'Verified Client Result',
          icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />,
          classes: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
          description: 'Backed by verified production data and client sign-off.'
        };
      case 'validated-pilot':
        return {
          label: 'Validated Pilot',
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />,
          classes: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
          description: 'Tested and measured in an isolated pilot or staging environment.'
        };
      case 'internal-benchmark':
        return {
          label: 'Internal Benchmark',
          icon: <FlaskConical className="w-3.5 h-3.5 text-amber-500" />,
          classes: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
          description: 'Measured in automated lab load and stress test simulations.'
        };
      case 'projection':
        return {
          label: 'Engineering Projection',
          icon: <LineChart className="w-3.5 h-3.5 text-purple-500" />,
          classes: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
          description: 'Estimated impact based on architectural modeling.'
        };
      case 'external-source':
        return {
          label: 'External Reference',
          icon: <ExternalLink className="w-3.5 h-3.5 text-slate-500" />,
          classes: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
          description: 'Industry benchmark or standard external specification.'
        };
    }
  };

  const config = getTierConfig(tier);

  return (
    <span 
      title={config.description}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider border transition-colors ${config.classes} ${className}`}
    >
      {showIcon && config.icon}
      <span>{config.label}</span>
    </span>
  );
};
