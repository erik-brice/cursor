/**
 * Button Component
 * Based on existing button patterns from HTML templates
 */

import React from 'react';
import { cn } from '../../utils/cn.js';

const buttonVariants = {
  variant: {
    primary: 'bg-primary-500 text-white hover:bg-primary-700 border-transparent',
    secondary: 'bg-white border border-neutral-300 text-neutral-600 hover:bg-neutral-50',
    ghost: 'bg-transparent border-transparent text-neutral-600 hover:bg-neutral-100'
  },
  size: {
    sm: 'px-3 py-2 text-sm min-w-[80px] h-8',
    md: 'px-4 py-2.5 text-sm min-w-[100px] h-10', // Default from existing components
    lg: 'px-6 py-3 text-base min-w-[120px] h-12'
  }
};

const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  ...props
}, ref) => {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        
        // Variant styles
        buttonVariants.variant[variant],
        
        // Size styles
        buttonVariants.size[size],
        
        // Custom classes
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
