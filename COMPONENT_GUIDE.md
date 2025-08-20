# 🧩 Component Creation Guide

## Quick Start

### Method 1: Use the Script (Fastest)
```bash
# Create a new component automatically
node scripts/create-component.js Alert
node scripts/create-component.js Avatar
node scripts/create-component.js Tooltip
```

This will create:
- `src/components/Alert/Alert.jsx`
- `src/components/Alert/index.js`
- Template code following design system patterns

### Method 2: Extract from Figma (Best Quality)
1. **Select component in Figma**
2. **Run in Cursor:**
   ```javascript
   // Extract component code
   mcp_Figma_get_code({ nodeId: "1:2" });
   
   // Extract design variables
   mcp_Figma_get_variable_defs({ nodeId: "1:2" });
   ```
3. **Component auto-generated** with exact Figma styling

### Method 3: Manual Creation (Full Control)

## 📁 Component Structure

Every component follows this structure:
```
src/components/ComponentName/
├── ComponentName.jsx    # Main component file
├── index.js            # Export file
└── ComponentName.stories.js (optional)
```

## 🎯 Component Patterns

### 1. Basic Component Template
```jsx
import React from 'react';
import { cn } from '../../utils/cn.js';

const componentVariants = {
  variant: {
    default: 'bg-neutral-100 text-neutral-900',
    primary: 'bg-primary-500 text-white'
  },
  size: {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2.5'
  }
};

const ComponentName = React.forwardRef(({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}, ref) => {
  return (
    <div
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-lg',
        
        // Variants
        componentVariants.variant[variant],
        componentVariants.size[size],
        
        // Custom classes
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';

export { ComponentName, componentVariants };
```

### 2. Composite Components (like Card)
```jsx
// Main component
const Card = ({ children, ...props }) => (
  <div className="bg-white rounded-xl border" {...props}>
    {children}
  </div>
);

// Sub-components
const CardHeader = ({ children, ...props }) => (
  <div className="p-6 pb-4" {...props}>{children}</div>
);

const CardContent = ({ children, ...props }) => (
  <div className="px-6 py-4" {...props}>{children}</div>
);

// Export all
export { Card, CardHeader, CardContent };
```

### 3. Form Components (like Input)
```jsx
const Input = React.forwardRef(({
  className,
  type = 'text',
  error,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'w-full px-3 py-2 border rounded-lg',
        error ? 'border-error-500' : 'border-neutral-300',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
```

## 🎨 Using Design Tokens

Always use design tokens from your color palette:

```jsx
// ✅ Good - uses design tokens
'bg-primary-500 text-white'
'text-neutral-900'
'border-neutral-300'

// ❌ Bad - hardcoded colors
'bg-blue-600 text-white'
'text-gray-900'
'border-gray-300'
```

## 📤 Exporting Components

### 1. Component index.js
```jsx
// src/components/Alert/index.js
export { Alert, alertVariants } from './Alert.jsx';
```

### 2. Main components index.js
```jsx
// src/components/index.js
export { Alert, alertVariants } from './Alert';
export { Avatar } from './Avatar';
export { Tooltip } from './Tooltip';
```

## 🧪 Testing Your Component

### 1. Create a Test File
```jsx
// test-component.html
import { Alert } from './src/components/index.js';

<Alert variant="success">Success message!</Alert>
```

### 2. Update the Examples
Add your component to `examples/basic-usage.html`:

```html
<section class="bg-white p-6 rounded-xl shadow-sm">
  <h2 class="text-lg font-semibold mb-4">New Component</h2>
  <!-- Your component examples here -->
</section>
```

## 🔄 Figma Extraction Workflow

### When You Have a Figma Component:

1. **Select the component** in Figma
2. **Tell me:** "Extract this Figma component as [ComponentName]"
3. **I'll run:**
   ```javascript
   mcp_Figma_get_code({ nodeId: "selected" });
   mcp_Figma_get_variable_defs({ nodeId: "selected" });
   ```
4. **Component auto-created** with exact Figma styling and tokens

## 📋 Component Checklist

When creating a new component, make sure it has:

- [ ] **Variants** (default, primary, secondary, etc.)
- [ ] **Sizes** (sm, md, lg)
- [ ] **forwardRef** for proper ref handling
- [ ] **displayName** for React DevTools
- [ ] **className prop** for custom styling
- [ ] **Design tokens** instead of hardcoded colors
- [ ] **Consistent API** with other components
- [ ] **TypeScript support** (if using TS)
- [ ] **Export** from component index and main index
- [ ] **Documentation** and examples

## 🚀 Common Components to Add

Here are some common components you might want to create:

```bash
# Status & Feedback
node scripts/create-component.js Alert
node scripts/create-component.js Toast
node scripts/create-component.js Progress

# Navigation
node scripts/create-component.js Tabs
node scripts/create-component.js Breadcrumb
node scripts/create-component.js Pagination

# Data Display
node scripts/create-component.js Table
node scripts/create-component.js Avatar
node scripts/create-component.js Badge

# Overlays
node scripts/create-component.js Tooltip
node scripts/create-component.js Popover
node scripts/create-component.js Dropdown

# Forms
node scripts/create-component.js Select
node scripts/create-component.js Textarea
node scripts/create-component.js Switch
```

## 💡 Pro Tips

1. **Start with Figma extraction** when possible - it's the most accurate
2. **Use the script for speed** - then customize the generated code
3. **Follow existing patterns** - look at Button/Modal for reference
4. **Test early and often** - use the examples file to verify styling
5. **Keep variants consistent** - primary, secondary, success, warning, error
6. **Document as you go** - add usage examples to README

---

Ready to create your next component? 🎨
