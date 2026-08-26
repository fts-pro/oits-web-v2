import React from 'react';
import { GovernedClaim } from '../../types';
import { EvidenceBadge } from './EvidenceBadge';
import { Info } from 'lucide-react';

interface ClaimGuardProps {
  claim: GovernedClaim;
  showMetadata?: boolean;
  className?: string;
}

export const ClaimGuard: React.FC<ClaimGuardProps> = ({ 
  claim, 
  showMetadata = false,
  className = '' 
}) => {
  // STRICT PUBLISHING RULE: Suppress or block unverified/non-publishable claims
  if (!claim.publishable) {
    return null;
  }

  return (
    <div className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2 text-left ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <EvidenceBadge tier={claim.tier} />
        {claim.reviewedAt && (
          <span className="text-[10px] font-mono text-slate-400">
            Audited: {claim.reviewedAt}
          </span>
        )}
      </div>

      <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
        {claim.statement}
      </p>

      {showMetadata && (
        <div className="pt-2 mt-2 border-t border-slate-200/50 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 font-mono">
          {claim.measurementMethod && (
            <p className="flex items-start gap-1">
              <Info className="w-3 h-3 mt-0.5 shrink-0 text-slate-400" />
              <span><strong>Method:</strong> {claim.measurementMethod}</span>
            </p>
          )}
          {claim.source && (
            <p className="pl-4">
              <strong>Source:</strong> {claim.source}
            </p>
          )}
          <p className="pl-4">
            <strong>Owner:</strong> {claim.owner}
          </p>
        </div>
      )}
    </div>
  );
};
