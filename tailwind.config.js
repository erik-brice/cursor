/** @type {import('tailwindcss').Config} */
import { colors } from './src/design-tokens/colors.js';
import { typography } from './src/design-tokens/typography.js';
import { spacing } from './src/design-tokens/spacing.js';
import { shadows } from './src/design-tokens/shadows.js';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./examples/**/*.{js,jsx,ts,tsx,html}",
    "./stories/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        neutral: colors.neutral,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        // Figma extracted colors
        text: colors.text,
        surface: colors.surface,
      },
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      letterSpacing: typography.letterSpacing,
      spacing,
      boxShadow: {
        ...shadows,
        'modal': shadows.modal
      },
      animation: {
        'modal-appear': 'modal-appear 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
        'modal-backdrop': 'modal-backdrop 300ms cubic-bezier(0.25, 0.1, 0.25, 1)'
      },
      keyframes: {
        'modal-appear': {
          '0%': { 
            transform: 'scale(0.95) translateY(-10px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1) translateY(0)',
            opacity: '1'
          }
        },
        'modal-backdrop': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};
