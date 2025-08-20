/**
 * Design tokens for colors
 * Generated from Figma design system
 */

export const colors = {
  // Primary colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe', 
    500: '#3a67d4', // Main brand blue from existing components
    600: '#3a67d4',
    700: '#1d4ed8',
    900: '#1e3a8a'
  },
  
  // Neutral colors (updated with Figma tokens)
  neutral: {
    50: '#fafbfc',  // Background gray from existing components
    100: '#f9fafb', // Surface/surface-background from Figma
    200: '#e5e7eb',
    300: '#d4d4d8', // Border/border-default from Figma
    400: '#9ca3af',
    500: '#68728a', // Border/border-hovered from Figma  
    600: '#464d5d', // Border/border-active from Figma
    700: '#374151',
    800: '#1f2937',
    900: '#161a24'  // Base/base-gray-100 from Figma (primary text)
  },
  
  // Text colors with opacity (from Figma)
  text: {
    primary: '#161a24',      // Base/base-gray-100
    secondary: '#091a4299',  // Base/base-gray-060 (60% opacity)
    placeholder: '#061a4a4d' // Base/base-gray-030 (30% opacity)
  },
  
  // Semantic colors
  success: {
    50: '#f0f9f4',
    500: '#10b981',
    600: '#059669'
  },
  
  warning: {
    50: '#fffbeb', 
    500: '#f59e0b',
    600: '#d97706'
  },
  
  error: {
    50: '#fef2f2',
    400: '#ee4052',  // Accent/Red/accent-red-400 from Figma
    500: '#ef4444',
    600: '#dc2626'
  },
  
  // Surface colors
  surface: {
    container: '#ffffff', // Surface/surface-container from Figma
    background: '#f9fafb' // Surface/surface-background from Figma
  },
  
  // Background colors (from payroll form)
  background: {
    gray2: '#fafbfc' // Background/bg-gray-2 from Figma
  },
  
  // Border colors (from payroll form)  
  border: {
    light: '#e4e4e7' // Border/border-light from Figma
  }
};

// CSS Custom Properties
export const cssVariables = `
  :root {
    --color-primary-50: ${colors.primary[50]};
    --color-primary-100: ${colors.primary[100]};
    --color-primary-500: ${colors.primary[500]};
    --color-primary-600: ${colors.primary[600]};
    --color-primary-700: ${colors.primary[700]};
    --color-primary-900: ${colors.primary[900]};
    
    --color-neutral-50: ${colors.neutral[50]};
    --color-neutral-100: ${colors.neutral[100]};
    --color-neutral-200: ${colors.neutral[200]};
    --color-neutral-300: ${colors.neutral[300]};
    --color-neutral-400: ${colors.neutral[400]};
    --color-neutral-500: ${colors.neutral[500]};
    --color-neutral-600: ${colors.neutral[600]};
    --color-neutral-700: ${colors.neutral[700]};
    --color-neutral-800: ${colors.neutral[800]};
    --color-neutral-900: ${colors.neutral[900]};
    
    --color-text-primary: ${colors.text.primary};
    --color-text-secondary: ${colors.text.secondary};
    --color-text-placeholder: ${colors.text.placeholder};
    
    --color-success-50: ${colors.success[50]};
    --color-success-500: ${colors.success[500]};
    --color-success-600: ${colors.success[600]};
    
    --color-warning-50: ${colors.warning[50]};
    --color-warning-500: ${colors.warning[500]};
    --color-warning-600: ${colors.warning[600]};
    
    --color-error-50: ${colors.error[50]};
    --color-error-400: ${colors.error[400]};
    --color-error-500: ${colors.error[500]};
    --color-error-600: ${colors.error[600]};
    
    --color-surface-container: ${colors.surface.container};
    --color-surface-background: ${colors.surface.background};
  }
`;