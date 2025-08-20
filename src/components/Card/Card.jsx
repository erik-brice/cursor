/**
 * Card Component
 * Based on existing card patterns from payroll settings
 */

import React from 'react';
import { cn } from '../../utils/cn.js';

const cardVariants = {
  variant: {
    default: 'bg-white border-neutral-200 shadow-sm',
    elevated: 'bg-white border-neutral-100 shadow-md',
    outlined: 'bg-white border-neutral-300 shadow-none'
  },
  padding: {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-5',  // Default from existing components
    lg: 'p-6',
    xl: 'p-8'
  }
};

const Card = React.forwardRef(({
  className,
  variant = 'default',
  padding = 'md',
  children,
  ...props
}, ref) => {
  return (
    <div
      className={cn(
        // Base styles
        'rounded-xl border overflow-hidden',
        
        // Variant styles
        cardVariants.variant[variant],
        
        // Padding styles
        cardVariants.padding[padding],
        
        // Custom classes
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Sub-components for better composition
const CardHeader = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <div
    className={cn('pb-4', className)}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <h2
    className={cn('text-lg font-bold text-neutral-900', className)}
    ref={ref}
    {...props}
  >
    {children}
  </h2>
));
CardTitle.displayName = 'CardTitle';

const CardContent = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <div
    className={cn('', className)}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <div
    className={cn('pt-4 flex items-center justify-end gap-4', className)}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardContent, CardFooter, cardVariants };
