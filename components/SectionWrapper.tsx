import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  withTopBorder?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  id,
  withTopBorder = true,
}) => {
  return (
    <section id={id} className={`w-full relative ${className}`}>
      {withTopBorder && (
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent pointer-events-none" 
        />
      )}
      {children}
    </section>
  );
};
