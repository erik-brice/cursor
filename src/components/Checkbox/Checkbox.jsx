/**
 * Checkbox Component
 * Based on existing checkbox patterns from payroll settings
 */

import React from 'react';
import { cn } from '../../utils/cn.js';

const Checkbox = React.forwardRef(({
  className,
  id,
  checked,
  onChange,
  disabled = false,
  ...props
}, ref) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={cn(
        // Base styles - matching existing checkbox design
        'w-6 h-6 text-primary-500 bg-neutral-100 border-neutral-300 rounded',
        'focus:ring-primary-500 focus:ring-2 focus:ring-offset-2',
        'transition-colors duration-200',
        'disabled:cursor-not-allowed disabled:opacity-50',
        
        // Custom classes
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Checkbox.displayName = 'Checkbox';

// Checkbox with label component for better UX
const CheckboxWithLabel = React.forwardRef(({
  className,
  id,
  label,
  description,
  checked,
  onChange,
  disabled = false,
  ...props
}, ref) => {
  return (
    <div className={cn('flex items-start gap-3', className)}>
      <div className="flex-1">
        {label && (
          <label 
            htmlFor={id}
            className={cn(
              'text-sm text-neutral-900 cursor-pointer',
              disabled && 'cursor-not-allowed opacity-50'
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <p className={cn(
            'text-sm text-neutral-500 mt-1',
            disabled && 'opacity-50'
          )}>
            {description}
          </p>
        )}
      </div>
      <Checkbox
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    </div>
  );
});

CheckboxWithLabel.displayName = 'CheckboxWithLabel';

export { Checkbox, CheckboxWithLabel };
