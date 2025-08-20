/**
 * Modal Component
 * Based on existing modal from HTML templates with backdrop blur and animations
 */

import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn.js';

const Modal = ({
  isOpen = false,
  onClose,
  title,
  children,
  className,
  showCloseButton = true,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        'bg-black/50 backdrop-blur-sm',
        'transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
      {...props}
    >
      <div
        className={cn(
          'relative w-full max-w-[600px] mx-4',
          'bg-white rounded-xl overflow-hidden',
          'shadow-[0px_8px_8px_0px_rgba(35,39,47,0.12),0px_16px_32px_4px_rgba(35,39,47,0.2)]',
          'transition-all duration-300',
          isVisible 
            ? 'scale-100 translate-y-0 opacity-100' 
            : 'scale-95 -translate-y-2 opacity-0',
          className
        )}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="bg-white flex items-center justify-between gap-3 px-10 pt-8 pb-5">
            {title && (
              <h2 className="text-neutral-900 text-base font-semibold flex-1">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="w-7 h-7 flex items-center justify-center text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="bg-white px-10 py-5">
          {children}
        </div>
      </div>
    </div>
  );
};

// Modal content components for better composition
const ModalContent = ({ children, className }) => (
  <div className={cn('text-neutral-900 text-sm leading-5', className)}>
    {children}
  </div>
);

const ModalFooter = ({ children, className }) => (
  <div className={cn(
    'bg-white px-10 pt-5 pb-8 flex items-center justify-end gap-5',
    className
  )}>
    {children}
  </div>
);

export { Modal, ModalContent, ModalFooter };
