/**
 * Central export for all design tokens
 */

export { colors, cssVariables as colorsCssVariables } from './colors.js';
export { typography, typographyClasses, typographyCssVariables } from './typography.js';
export { spacing, componentSpacing, spacingCssVariables } from './spacing.js';
export { shadows, shadowsCssVariables } from './shadows.js';

// Combined CSS variables for easy import
export const allCssVariables = `
${cssVariables}
${typographyCssVariables}
${spacingCssVariables}
${shadowsCssVariables}
`.trim();

// Token object for programmatic access
export const tokens = {
  colors,
  typography,
  spacing,
  shadows,
  componentSpacing
};
