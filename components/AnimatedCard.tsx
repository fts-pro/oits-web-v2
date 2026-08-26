import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverLift?: boolean;
  onClick?: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hoverLift = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-200 ${
        hoverLift ? 'hover:-translate-y-1 hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
