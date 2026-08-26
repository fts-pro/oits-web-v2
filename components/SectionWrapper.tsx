import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      {children}
    </section>
  );
};
