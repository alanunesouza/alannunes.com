import sharp from 'sharp';

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // 1. Process profile avatar: resize to 200x200 with rounded circle mask
  const avatarSize = 200;
  const circleSvg = Buffer.from(`
    <svg width="${avatarSize}" height="${avatarSize}">
      <circle cx="${avatarSize / 2}" cy="${avatarSize / 2}" r="${avatarSize / 2}" fill="#fff" />
    </svg>
  `);

  const avatar = await sharp('src/assets/profile.png')
    .resize(avatarSize, avatarSize)
    .composite([{ input: circleSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 2. Base vector graphic for the card
  const cardSvg = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b0f19" />
          <stop offset="50%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#1e1b4b" />
        </linearGradient>
        <radialGradient id="glow" cx="80%" cy="20%" r="50%">
          <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#4f46e5" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glow-bottom" cx="20%" cy="80%" r="60%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Backgrounds -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect width="${width}" height="${height}" fill="url(#glow)" />
      <rect width="${width}" height="${height}" fill="url(#glow-bottom)" />

      <!-- Subtle border -->
      <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="24" fill="none" stroke="#334155" stroke-opacity="0.5" stroke-width="2" />

      <!-- Avatar ring -->
      <circle cx="210" cy="315" r="108" fill="none" stroke="#6366f1" stroke-width="4" stroke-opacity="0.8" />

      <!-- Domain Pill -->
      <g transform="translate(360, 185)">
        <rect width="180" height="36" rx="18" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.6" />
        <circle cx="20" cy="18" r="5" fill="#38bdf8" />
        <text x="36" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#e2e8f0" letter-spacing="1">alannunes.com</text>
      </g>

      <!-- Main Titles -->
      <text x="360" y="280" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="56" font-weight="800" fill="#ffffff" letter-spacing="-1">Alan Nunes</text>
      <text x="360" y="340" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="30" font-weight="600" fill="#818cf8">Senior Software Engineer</text>
      
      <!-- Description / Tags -->
      <text x="360" y="405" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="400" fill="#94a3b8">
        Frontend Architecture • TypeScript • AI Specialization • Tech Blog
      </text>

      <!-- Decorative bottom bar -->
      <rect x="360" y="450" width="120" height="4" rx="2" fill="#6366f1" />
    </svg>
  `);

  // Composite avatar onto the SVG card
  await sharp(cardSvg)
    .composite([
      {
        input: avatar,
        top: 215,
        left: 110,
      },
    ])
    .png({ quality: 95 })
    .toFile('public/og-image.png');

  console.log('Successfully generated public/og-image.png (1200x630)');
}

generateOgImage().catch(console.error);
