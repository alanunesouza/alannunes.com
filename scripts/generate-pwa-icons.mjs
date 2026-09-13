import sharp from 'sharp';
import fs from 'node:fs';

async function generatePwaIcons() {
  if (!fs.existsSync('public/icons')) {
    fs.mkdirSync('public/icons', { recursive: true });
  }

  // Generate 512x512 standard icon
  const bg512 = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pwa-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b0f19" />
          <stop offset="100%" stop-color="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="100" fill="url(#pwa-bg)" />
      <circle cx="256" cy="256" r="210" fill="none" stroke="#6366f1" stroke-width="8" stroke-opacity="0.8" />
    </svg>
  `);

  const avatar400 = await sharp('src/assets/profile.png')
    .resize(400, 400)
    .composite([
      {
        input: Buffer.from(`
          <svg width="400" height="400">
            <circle cx="200" cy="200" r="200" fill="#fff" />
          </svg>
        `),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  await sharp(bg512)
    .composite([{ input: avatar400, top: 56, left: 56 }])
    .png()
    .toFile('public/icons/pwa-512x512.png');

  // Generate 512x512 Maskable Icon (safe zone is inner 80%, so avatar is 340px)
  const maskableBg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mask-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b0f19" />
          <stop offset="100%" stop-color="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" fill="url(#mask-bg)" />
      <circle cx="256" cy="256" r="175" fill="none" stroke="#6366f1" stroke-width="6" stroke-opacity="0.8" />
    </svg>
  `);

  const avatar340 = await sharp('src/assets/profile.png')
    .resize(340, 340)
    .composite([
      {
        input: Buffer.from(`
          <svg width="340" height="340">
            <circle cx="170" cy="170" r="170" fill="#fff" />
          </svg>
        `),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  await sharp(maskableBg)
    .composite([{ input: avatar340, top: 86, left: 86 }])
    .png()
    .toFile('public/icons/pwa-512x512-maskable.png');

  // Resize 512 to 192x192
  await sharp('public/icons/pwa-512x512.png')
    .resize(192, 192)
    .png()
    .toFile('public/icons/pwa-192x192.png');

  // Apple Touch Icon (180x180)
  await sharp('public/icons/pwa-512x512.png')
    .resize(180, 180)
    .png()
    .toFile('public/icons/apple-touch-icon.png');

  console.log('Successfully generated PWA icons in public/icons/');
}

generatePwaIcons().catch(console.error);
