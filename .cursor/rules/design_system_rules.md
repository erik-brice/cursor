# Design System Rules for Figma MCP Integration

## Current Analysis

### Design System Structure

1. **Token Definitions**
   - Currently: Inline Tailwind classes and CSS custom styles
   - Target: Structured design tokens in JSON/JS format
   - Location: `src/design-tokens/` directory

2. **Component Library**
   - Currently: HTML templates with inline styles
   - Target: Reusable React/Vue/HTML components
   - Location: `src/components/` directory

3. **Frameworks & Libraries**
   - Current: Tailwind CSS, vanilla HTML/JS
   - Build system: To be implemented (Vite/Webpack)
   - Styling: Tailwind CSS with custom tokens

4. **Asset Management**
   - Current: External font loading (Google Fonts)
   - Target: Local asset management with optimization
   - Location: `src/assets/` directory

5. **Icon System**
   - Current: Inline SVG elements
   - Target: Icon component system with Figma imports
   - Location: `src/icons/` directory

6. **Styling Approach**
   - CSS-in-JS approach with Tailwind integration
   - Custom CSS properties for design tokens
   - Responsive-first design

7. **Project Structure**
   ```
   src/
   ├── design-tokens/     # Color, typography, spacing tokens
   ├── components/        # Reusable UI components
   ├── icons/            # Icon components from Figma
   ├── assets/           # Images, fonts, etc.
   ├── utils/            # Helper functions
   └── examples/         # Usage examples
   ```

## Figma Integration Patterns

### Token Extraction
- Use `mcp_Figma_get_variable_defs` for design tokens
- Transform Figma variables to CSS custom properties
- Generate Tailwind config from Figma tokens

### Component Generation  
- Use `mcp_Figma_get_code` for component templates
- Extract components as React/Vue/HTML variants
- Maintain consistent API across frameworks

### Asset Management
- Use `mcp_Figma_get_image` for assets
- Optimize and store locally
- Generate responsive image variants

## Implementation Strategy

1. Extract design tokens from Figma
2. Generate base component library
3. Set up build system for distribution
4. Create usage documentation and examples
5. Package for easy import in future projects

## Usage Conventions

- All components should accept `className` prop for extension
- Design tokens accessible via CSS custom properties
- Icon components follow `Icon[Name]` naming convention
- Consistent prop naming across all components
