/**
 * Badge Component
 * Small status indicators and labels
 */

import React from 'react';
import { cn } from '../../utils/cn.js';

const badgeVariants = {
  variant: {
    default: 'bg-neutral-100 text-neutral-600 border-neutral-200',
    primary: 'bg-primary-100 text-primary-700 border-primary-200',
    success: 'bg-success-50 text-success-600 border-success-200',
    warning: 'bg-warning-50 text-warning-600 border-warning-200',
    error: 'bg-error-50 text-error-600 border-error-200'
  },
  size: {
    sm: 'px-2 py-0.5 text-xs h-5',
    md: 'px-2.5 py-1 text-sm h-6',
    lg: 'px-3 py-1.5 text-sm h-7'
  }
};

const Badge = React.forwardRef(({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}, ref) => {
  return (
    <span
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-full border font-medium',
        'transition-colors duration-200',
        
        // Variant styles
        badgeVariants.variant[variant],
        
        // Size styles
        badgeVariants.size[size],
        
        // Custom classes
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
