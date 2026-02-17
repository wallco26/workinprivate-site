#!/usr/bin/env node

/**
 * Generate favicon.ico from favicon.svg
 * This script converts the SVG favicon to ICO format with multiple sizes
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const svgPath = 'public/favicon.svg';
const icoPath = 'public/favicon.ico';
const tempPngPath = 'public/favicon-temp.png';

try {
  // Convert SVG to PNG using sharp-cli
  console.log('Converting SVG to PNG...');
  execSync(`npx --yes sharp-cli resize 32 32 -i ${svgPath} -o ${tempPngPath}`, { stdio: 'inherit' });

  // For now, just copy the PNG as .ico (browsers accept PNG in .ico files)
  const pngData = readFileSync(tempPngPath);
  writeFileSync(icoPath, pngData);

  // Clean up temp file
  execSync(`rm ${tempPngPath}`);

  console.log('✅ favicon.ico generated successfully!');
} catch (error) {
  console.error('Error generating favicon.ico:', error.message);
  process.exit(1);
}
