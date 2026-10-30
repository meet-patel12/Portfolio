import React from 'react';
import { cn } from '@/utils/cn';

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const GlassButton: React.FC<GlassButtonProps> = React.memo(({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  href,
  target,
  rel,
  className,
  children,
  ...props
}) => {
  // Ultra-responsive 150ms composite transitions with will-change-transform
  const baseClasses =
    'relative inline-flex items-center justify-center font-semibold rounded-full transition-[transform,background-color,border-color,box-shadow] duration-150 ease-out focus-neon cursor-pointer select-none will-change-transform';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#39FF14] text-[#000000] hover:bg-[#00E676] shadow-[0_0_15px_rgba(57,255,20,0.35)] hover:shadow-[0_0_28px_rgba(57,255,20,0.6)] hover:-translate-y-0.5 active:translate-y-0 font-bold',
    secondary:
      'bg-[#1A1A1A]/70 text-[#FFFFFF] border border-[#2A2A2A] hover:border-[#39FF14]/60 hover:bg-[#1A1A1A] hover:shadow-[0_0_18px_rgba(57,255,20,0.2)] hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md',
    ghost:
      'bg-transparent text-[#BDBDBD] hover:text-[#39FF14] hover:bg-[#1A1A1A]/50 border border-transparent',
  };

  const combinedClasses = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
});

GlassButton.displayName = 'GlassButton';
