/**
 * Design tokens for spacing
 * Consistent spacing scale for margins, padding, gaps
 */

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  48: '192px',
  56: '224px',
  64: '256px'
};

// Component-specific spacing patterns from existing designs
export const componentSpacing = {
  button: {
    paddingX: spacing[4], // 16px - from existing buttons
    paddingY: spacing[3], // 12px (2.5 * 4px + 2px) - from existing buttons
    gap: spacing[3]       // 12px
  },
  
  modal: {
    padding: spacing[10], // 40px - from existing modal
    gap: spacing[5]       // 20px
  },
  
  card: {
    padding: spacing[6],  // 24px
    gap: spacing[4]       // 16px
  },
  
  form: {
    gap: spacing[4],      // 16px between form elements
    labelGap: spacing[1]  // 4px between label and input
  }
};

// CSS Custom Properties
export const spacingCssVariables = `
  :root {
    --spacing-0: ${spacing[0]};
    --spacing-1: ${spacing[1]};
    --spacing-2: ${spacing[2]};
    --spacing-3: ${spacing[3]};
    --spacing-4: ${spacing[4]};
    --spacing-5: ${spacing[5]};
    --spacing-6: ${spacing[6]};
    --spacing-8: ${spacing[8]};
    --spacing-10: ${spacing[10]};
    --spacing-12: ${spacing[12]};
    --spacing-16: ${spacing[16]};
    --spacing-20: ${spacing[20]};
    --spacing-24: ${spacing[24]};
    --spacing-32: ${spacing[32]};
    --spacing-40: ${spacing[40]};
    --spacing-48: ${spacing[48]};
    --spacing-56: ${spacing[56]};
    --spacing-64: ${spacing[64]};
    
    /* Component spacing */
    --button-padding-x: ${componentSpacing.button.paddingX};
    --button-padding-y: ${componentSpacing.button.paddingY};
    --modal-padding: ${componentSpacing.modal.padding};
    --card-padding: ${componentSpacing.card.padding};
  }
`;
