# 🎨 Design System - Figma to Code

A reusable design system that leverages **Figma MCP (Model Context Protocol)** to extract design components and tokens directly from Figma into production-ready front-end components.

## 🚀 Quick Start

### 1. Extract from Figma

To extract components from your Figma design system:

1. Open your Figma design system file
2. Select the component/page you want to extract
3. Copy the URL or note the node ID (e.g., `1:2`)
4. Use Figma MCP tools in Cursor:

```javascript
// Extract design variables (colors, spacing, typography)
await mcp_Figma_get_variable_defs({ nodeId: "1:2" });

// Extract component code
await mcp_Figma_get_code({ nodeId: "1:2" });

// Get component mappings
await mcp_Figma_get_code_connect_map({ nodeId: "1:2" });

// Extract images/assets
await mcp_Figma_get_image({ nodeId: "1:2" });
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Design System

```bash
# Build design tokens
npm run build-tokens

# Build component library
npm run build

# Run development server
npm run dev
```

### 4. Use in Your Projects

#### React Components
```jsx
import { Button, Modal, Card, Input } from '@your-company/design-system';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter your email" />
        <Button variant="primary">Get Started</Button>
      </Card.Content>
    </Card>
  );
}
```

#### CSS Variables
```css
.custom-button {
  background-color: var(--color-primary-500);
  color: white;
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
}
```

## 📁 Project Structure

```
src/
├── design-tokens/          # Design tokens from Figma
│   ├── colors.js          # Color palette
│   ├── typography.js      # Font families, sizes, weights
│   ├── spacing.js         # Spacing scale
│   ├── shadows.js         # Shadow/elevation tokens
│   └── index.js           # Combined exports
├── components/             # React components
│   ├── Button/            # Button component
│   ├── Modal/             # Modal component
│   ├── Card/              # Card component
│   ├── Input/             # Input component
│   ├── Checkbox/          # Checkbox component
│   └── index.js           # All component exports
└── utils/
    └── cn.js              # Class name utility

scripts/
├── extract-figma.js       # Figma extraction helper
└── build-tokens.js        # Token build script

examples/
└── basic-usage.html       # HTML usage example
```

## 🎯 Available Components

### Button
```jsx
<Button variant="primary" size="md">
  Click me
</Button>

<Button variant="secondary" size="lg">
  Secondary
</Button>
```

### Modal
```jsx
<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <Modal.Content>
    Are you sure you want to continue?
  </Modal.Content>
  <Modal.Footer>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </Modal.Footer>
</Modal>
```

### Card
```jsx
<Card variant="elevated">
  <Card.Header>
    <Card.Title>Settings</Card.Title>
  </Card.Header>
  <Card.Content>
    Card content goes here
  </Card.Content>
  <Card.Footer>
    <Button>Save</Button>
  </Card.Footer>
</Card>
```

### Input
```jsx
<Input 
  placeholder="Enter your email"
  variant="default"
  size="md"
/>

<Input 
  error="This field is required"
  variant="error"
/>
```

### Checkbox
```jsx
<Checkbox 
  id="agree"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

<CheckboxWithLabel
  id="newsletter"
  label="Subscribe to newsletter"
  description="Get updates about new features"
  checked={subscribed}
  onChange={(e) => setSubscribed(e.target.checked)}
/>
```

## 🎨 Design Tokens

All design tokens are available as CSS custom properties and JavaScript exports:

### Colors
- Primary: `--color-primary-500`, `--color-primary-700`
- Neutral: `--color-neutral-50` to `--color-neutral-900`
- Semantic: `--color-success-500`, `--color-warning-500`, `--color-error-500`

### Typography
- Font family: `--font-family-sans`
- Font sizes: `--font-size-sm`, `--font-size-base`, `--font-size-lg`
- Font weights: `--font-weight-normal`, `--font-weight-semibold`, `--font-weight-bold`

### Spacing
- Scale: `--spacing-1` (4px) to `--spacing-64` (256px)
- Component spacing: `--button-padding-x`, `--modal-padding`

### Shadows
- Elevation: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- Component shadows: `--shadow-modal`

## 🔄 Figma Integration Workflow

1. **Design in Figma**: Create your design system in Figma with proper variables and components
2. **Extract with MCP**: Use Figma MCP tools to extract design tokens and components
3. **Auto-generate**: Tokens are automatically converted to CSS variables and JavaScript
4. **Build Components**: Components are generated based on Figma designs
5. **Distribute**: Package and use across multiple projects

## 🛠 Development

### Adding New Components

1. Create component directory: `src/components/NewComponent/`
2. Add component file: `NewComponent.jsx`
3. Add index file: `index.js`
4. Export from main index: `src/components/index.js`
5. Add to examples

### Updating Design Tokens

1. Extract latest from Figma using MCP tools
2. Update token files in `src/design-tokens/`
3. Run `npm run build-tokens`
4. Update Tailwind config if needed

### Building for Distribution

```bash
# Build everything
npm run build

# Build only tokens
npm run build-tokens

# Development mode
npm run dev
```

## 📚 Examples

- **HTML Example**: `examples/basic-usage.html` - Complete HTML example
- **React Example**: Create React app and import components
- **Tailwind Integration**: Use with existing Tailwind projects

## 🚀 Future Projects Setup

To use this design system in future projects:

1. **Install the package** (after publishing):
   ```bash
   npm install @your-company/design-system
   ```

2. **Import CSS variables**:
   ```css
   @import '@your-company/design-system/dist/tokens.css';
   ```

3. **Import React components**:
   ```jsx
   import { Button, Modal, Card } from '@your-company/design-system';
   ```

4. **Use with Tailwind**: Extend your Tailwind config with the design tokens

## 🤝 Contributing

1. Extract new components from Figma using MCP tools
2. Follow existing component patterns
3. Update documentation and examples
4. Test across different projects

---

**Built with ❤️ using Figma MCP and modern web technologies**