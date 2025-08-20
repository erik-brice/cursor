#!/usr/bin/env node

/**
 * Component Creation Script
 * Scaffolds new components following design system patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createComponent(componentName) {
  if (!componentName) {
    console.error('❌ Please provide a component name');
    console.log('Usage: node scripts/create-component.js ComponentName');
    process.exit(1);
  }

  const componentDir = path.join(__dirname, '../src/components', componentName);
  const componentFile = path.join(componentDir, `${componentName}.jsx`);
  const indexFile = path.join(componentDir, 'index.js');

  // Check if component already exists
  if (fs.existsSync(componentDir)) {
    console.error(`❌ Component ${componentName} already exists`);
    process.exit(1);
  }

  // Create component directory
  fs.mkdirSync(componentDir, { recursive: true });

  // Component template
  const componentTemplate = `/**
 * ${componentName} Component
 * TODO: Add description
 */

import React from 'react';
import { cn } from '../../utils/cn.js';

const ${componentName.toLowerCase()}Variants = {
  variant: {
    default: 'bg-neutral-100 text-neutral-900',
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-white border border-neutral-300 text-neutral-600'
  },
  size: {
    sm: 'px-3 py-2 text-sm h-8',
    md: 'px-4 py-2.5 text-sm h-10',
    lg: 'px-6 py-3 text-base h-12'
  }
};

const ${componentName} = React.forwardRef(({
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
        'inline-flex items-center justify-center rounded-lg transition-colors duration-200',
        
        // Variant styles
        ${componentName.toLowerCase()}Variants.variant[variant],
        
        // Size styles
        ${componentName.toLowerCase()}Variants.size[size],
        
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

${componentName}.displayName = '${componentName}';

export { ${componentName}, ${componentName.toLowerCase()}Variants };`;

  // Index template
  const indexTemplate = `export { ${componentName}, ${componentName.toLowerCase()}Variants } from './${componentName}.jsx';`;

  // Write files
  fs.writeFileSync(componentFile, componentTemplate);
  fs.writeFileSync(indexFile, indexTemplate);

  console.log(`✅ Created ${componentName} component:`);
  console.log(`   📁 ${componentDir}`);
  console.log(`   📄 ${componentFile}`);
  console.log(`   📄 ${indexFile}`);
  console.log('');
  console.log('Next steps:');
  console.log(`1. Edit ${componentFile} to customize the component`);
  console.log(`2. Add export to src/components/index.js:`);
  console.log(`   export { ${componentName}, ${componentName.toLowerCase()}Variants } from './${componentName}';`);
  console.log(`3. Test the component in your app!`);
}

// Get component name from command line
const componentName = process.argv[2];
createComponent(componentName);
