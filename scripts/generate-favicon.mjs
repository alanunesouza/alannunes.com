import sharp from 'sharp';
import fs from 'node:fs';

async function generateFavicon() {
  // Versão favorita: Monograma AN com Azul Tecnológico e Ciano Elétrico
  const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="50%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="60%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#c7d2fe" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#6366f1" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Base squircle background -->
  <rect x="24" y="24" width="464" height="464" rx="116" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="16" />

  <!-- Inner subtle glow ring -->
  <rect x="36" y="36" width="440" height="440" rx="104" fill="none" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.3" />

  <!-- Monogram AN with geometric precision -->
  <g filter="url(#glow)">
    <!-- Letter A -->
    <polygon points="120,380 185,130 225,130 160,380" fill="url(#brandGrad)" />
    <polygon points="265,380 200,130 240,130 305,380" fill="url(#brandGrad)" />
    <polygon points="152,280 273,280 263,315 142,315" fill="url(#accentGrad)" />

    <!-- Letter N -->
    <polygon points="275,380 275,130 315,130 315,380" fill="url(#brandGrad)" />
    <polygon points="295,130 380,380 415,380 330,130" fill="url(#accentGrad)" />
    <polygon points="380,380 380,130 420,130 420,380" fill="url(#brandGrad)" />
  </g>

  <!-- Tech Accent Dot / Spark -->
  <circle cx="436" cy="116" r="14" fill="#38bdf8" />
  <circle cx="436" cy="116" r="7" fill="#ffffff" />
</svg>`;

  // 1. Grava public/favicon.svg
  fs.writeFileSync('public/favicon.svg', svgContent, 'utf-8');

  // 2. Renderiza PNG 512x512
  await sharp(Buffer.from(svgContent))
    .resize(512, 512)
    .png()
    .toFile('public/favicon.png');

  // 3. Atualiza src/assets/favicon.png
  await sharp(Buffer.from(svgContent))
    .resize(512, 512)
    .png()
    .toFile('src/assets/favicon.png');

  console.log('Favicon restaurado com sucesso para a versão Azul Tecnológico / Ciano!');
}

generateFavicon().catch(console.error);
