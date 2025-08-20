#!/usr/bin/env node

/**
 * Build Design Tokens
 * Processes design tokens and generates CSS/JS outputs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import design tokens
const tokenFiles = [
  '../src/design-tokens/colors.js',
  '../src/design-tokens/typography.js', 
  '../src/design-tokens/spacing.js',
  '../src/design-tokens/shadows.js'
];

async function buildTokens() {
  console.log('🔨 Building Design Tokens...\n');
  
  let allCssVariables = ':root {\n';
  const tokenExports = [];

  for (const tokenFile of tokenFiles) {
    try {
      const module = await import(tokenFile);
      const fileName = path.basename(tokenFile, '.js');
      
      console.log(`✅ Loaded ${fileName} tokens`);
      
      // Collect CSS variables
      if (module[`${fileName}CssVariables`]) {
        allCssVariables += module[`${fileName}CssVariables`] + '\n';
      }
      
      // Collect exports for JS bundle
      tokenExports.push(`export * from './design-tokens/${fileName}.js';`);
      
    } catch (error) {
      console.error(`❌ Error loading ${tokenFile}:`, error.message);
    }
  }
  
  allCssVariables += '}';
  
  // Write CSS file
  const cssPath = path.join(__dirname, '../dist/tokens.css');
  const distDir = path.dirname(cssPath);
  
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(cssPath, allCssVariables);
  console.log(`📄 Generated CSS tokens: ${cssPath}`);
  
  // Write JS index file
  const jsContent = [
    '/**',
    ' * Generated design tokens bundle',
    ' * Auto-generated - do not edit directly',
    ' */',
    '',
    ...tokenExports,
    '',
    '// CSS variables as string for injection',
    `export const cssVariables = \`${allCssVariables}\`;`
  ].join('\n');
  
  const jsPath = path.join(__dirname, '../dist/tokens.js');
  fs.writeFileSync(jsPath, jsContent);
  console.log(`📄 Generated JS tokens: ${jsPath}`);
  
  console.log('\n✨ Design tokens built successfully!');
}

buildTokens().catch(console.error);
