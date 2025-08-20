/**
 * Input Component
 * Consistent form input styling with design tokens
 */

import React from 'react';
import { cn } from '../../utils/cn.js';

const inputVariants = {
  variant: {
    default: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
    error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
    success: 'border-success-500 focus:border-success-500 focus:ring-success-500'
  },
  size: {
    sm: 'px-3 py-2 text-sm h-8',
    md: 'px-3 py-2.5 text-sm h-10',
    lg: 'px-4 py-3 text-base h-12'
  }
};

const Input = React.forwardRef(({
  className,
  type = 'text',
  variant = 'default',
  size = 'md',
  error,
  ...props
}, ref) => {
  const actualVariant = error ? 'error' : variant;
  
  return (
    <input
      type={type}
      className={cn(
        // Base styles
        'w-full rounded-lg border bg-white transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'placeholder:text-neutral-400',
        
        // Variant styles
        inputVariants.variant[actualVariant],
        
        // Size styles
        inputVariants.size[size],
        
        // Custom classes
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input, inputVariants };
