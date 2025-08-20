/**
 * TextInput Component
 * Based on Figma InputField component with comprehensive states
 */

import React, { useState, forwardRef } from 'react';
import { cn } from '../../utils/cn.js';
import { MailIcon, CloseIcon } from '../../icons/MailIcon.jsx';

const textInputVariants = {
  state: {
    default: 'border-neutral-300 hover:border-neutral-500 focus:border-neutral-600',
    error: 'border-error-400 focus:border-error-400',
    disabled: 'border-neutral-300 bg-neutral-100 cursor-not-allowed opacity-60'
  },
  size: {
    sm: 'h-8 px-3 py-2 text-sm',
    md: 'h-10 px-3 py-2 text-sm',
    lg: 'h-12 px-4 py-3 text-base'
  }
};

const TextInput = forwardRef(({
  // Core props
  className,
  type = 'text',
  value,
  onChange,
  placeholder = 'Placeholder text',
  disabled = false,
  
  // Label props
  label,
  optional = false,
  optionalText = '• optional',
  
  // Icon props
  leadingIcon = false,
  LeadingIconComponent = MailIcon,
  showClearButton = false,
  onClear,
  
  // Validation props
  error,
  errorMessage,
  
  // Supporting text
  supportingText,
  showSupportingText = true,
  
  // Variants
  size = 'md',
  
  // Other props
  id,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');

  const currentValue = value !== undefined ? value : internalValue;
  const hasValue = currentValue && currentValue.length > 0;
  const hasError = error || errorMessage;
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(e);
  };

  const handleClear = () => {
    const syntheticEvent = {
      target: { value: '' },
      currentTarget: { value: '' }
    };
    
    if (value === undefined) {
      setInternalValue('');
    }
    onClear?.();
    onChange?.(syntheticEvent);
  };

  // Determine the current state for styling
  const currentState = disabled ? 'disabled' : hasError ? 'error' : 'default';

  return (
    <div className={cn('w-full', className)}>
      {/* Label */}
      {label && (
        <div className="flex items-center gap-1 mb-2">
          <label 
            htmlFor={id}
            className="text-sm font-normal text-neutral-900 leading-5"
          >
            {label}
          </label>
          {optional && (
            <span className="text-sm font-normal text-text-secondary leading-5">
              {optionalText}
            </span>
          )}
        </div>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Input Field */}
        <div 
          className={cn(
            // Base styles
            'relative flex items-center gap-2 bg-surface-container rounded-lg border transition-colors duration-200',
            
            // Size variants
            textInputVariants.size[size],
            
            // State variants  
            textInputVariants.state[currentState],
            
            // Focus ring
            !disabled && !hasError && 'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2'
          )}
        >
          {/* Leading Icon */}
          {leadingIcon && LeadingIconComponent && (
            <div className="flex-shrink-0">
              <LeadingIconComponent 
                className="w-6 h-6 text-neutral-500" 
              />
            </div>
          )}

          {/* Input Element */}
          <input
            ref={ref}
            type={type}
            id={id}
            value={currentValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              // Base input styles
              'flex-1 bg-transparent border-none outline-none',
              'text-sm text-neutral-900 leading-5',
              'placeholder:text-text-placeholder',
              'disabled:cursor-not-allowed disabled:text-text-secondary'
            )}
            {...props}
          />

          {/* Clear Button */}
          {showClearButton && hasValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="flex-shrink-0 p-0 border-none bg-transparent cursor-pointer"
            >
              <CloseIcon className="w-6 h-6 text-neutral-500 hover:text-neutral-700 transition-colors" />
            </button>
          )}
        </div>

        {/* Error Message */}
        {hasError && (errorMessage || error) && (
          <div className="flex items-center gap-1 mt-1">
            <p className="text-xs text-error-400 leading-[17px]">
              {errorMessage || error}
            </p>
          </div>
        )}

        {/* Supporting Text */}
        {showSupportingText && supportingText && !hasError && (
          <div className="flex items-start gap-2.5 mt-1">
            <p className="flex-1 text-xs text-text-secondary leading-[17px]">
              {supportingText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

TextInput.displayName = 'TextInput';

// Preset configurations for common use cases
const EmailInput = forwardRef((props, ref) => (
  <TextInput
    ref={ref}
    type="email"
    leadingIcon={true}
    LeadingIconComponent={MailIcon}
    placeholder="Enter your email"
    showClearButton={true}
    {...props}
  />
));

const PasswordInput = forwardRef((props, ref) => (
  <TextInput
    ref={ref}
    type="password"
    placeholder="Enter your password"
    {...props}
  />
));

const SearchInput = forwardRef((props, ref) => (
  <TextInput
    ref={ref}
    type="search"
    placeholder="Search..."
    showClearButton={true}
    {...props}
  />
));

export { TextInput, EmailInput, PasswordInput, SearchInput, textInputVariants };
