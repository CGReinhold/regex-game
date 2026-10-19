const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(htmlFile)) {
  console.warn('No dist/index.html found; skipping crossorigin cleanup.');
  process.exit(0);
}

let html = fs.readFileSync(htmlFile, 'utf8');
html = html.replace(/\s+crossorigin(="")?/gi, '');
fs.writeFileSync(htmlFile, html);

console.log('Removed crossorigin attributes from dist/index.html');
