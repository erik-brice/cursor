/**
 * Design tokens for typography
 * Based on existing Plus Jakarta Sans usage
 */

export const typography = {
  fontFamily: {
    sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    mono: ['ui-monospace', 'SFMono-Regular', 'monospace']
  },
  
  fontSize: {
    xs: ['12px', { lineHeight: '16px' }],
    sm: ['14px', { lineHeight: '20px' }],  // Used in existing components
    base: ['16px', { lineHeight: '22px' }], // Used for titles
    lg: ['18px', { lineHeight: '25px' }],   // Used for headers
    xl: ['20px', { lineHeight: '28px' }],
    '2xl': ['24px', { lineHeight: '32px' }],
    '3xl': ['30px', { lineHeight: '36px' }]
  },
  
  fontWeight: {
    normal: '400',
    semibold: '600',  // Used in existing components
    bold: '700'
  },
  
  letterSpacing: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em'
  }
};

export const typographyClasses = {
  // Heading styles
  'heading-lg': 'text-lg font-bold text-neutral-900',
  'heading-base': 'text-base font-semibold text-neutral-900',
  
  // Body text styles  
  'body-sm': 'text-sm text-neutral-900',
  'body-sm-secondary': 'text-sm text-neutral-500',
  
  // Button text
  'button-sm': 'text-sm font-semibold',
  'button-base': 'text-base font-semibold'
};

// CSS Custom Properties
export const typographyCssVariables = `
  :root {
    --font-family-sans: ${typography.fontFamily.sans.join(', ')};
    --font-family-mono: ${typography.fontFamily.mono.join(', ')};
    
    --font-size-xs: ${typography.fontSize.xs[0]};
    --font-size-sm: ${typography.fontSize.sm[0]};
    --font-size-base: ${typography.fontSize.base[0]};
    --font-size-lg: ${typography.fontSize.lg[0]};
    --font-size-xl: ${typography.fontSize.xl[0]};
    --font-size-2xl: ${typography.fontSize['2xl'][0]};
    --font-size-3xl: ${typography.fontSize['3xl'][0]};
    
    --font-weight-normal: ${typography.fontWeight.normal};
    --font-weight-semibold: ${typography.fontWeight.semibold};
    --font-weight-bold: ${typography.fontWeight.bold};
  }
`;
