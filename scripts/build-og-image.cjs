// Generates public/og-image.png at 1200x630.
// Pill widths are computed from the ACTUAL rendered text width (via sharp trim)
// so the text can never overflow its pill. Run: node scripts/build-og-image.js
const sharp = require('sharp');

const HELV = "Helvetica, Arial, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

// Measure the rendered pixel width of a text string for the given font.
async function textWidth(text, size, weight = 400, family = HELV) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="4000" height="400">
    <text x="20" y="200" font-family="${family}" font-size="${size}" font-weight="${weight}">${text}</text></svg>`;
  const { info } = await sharp(Buffer.from(svg)).trim().toBuffer({ resolveWithObject: true });
  return info.width;
}

function pill({ x, y, w, h, fill, stroke }) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
}

(async () => {
  const W = 1200, H = 630;

  // --- Top-left privacy badge: lock icon + label ---
  const badgeText = "100% PRIVATE";
  const badgeSize = 24;
  const bTextW = await textWidth(badgeText, badgeSize, 700);
  const padX = 28, iconW = 26, iconGap = 14;
  const badgeW = padX + iconW + iconGap + bTextW + padX;
  const badgeH = 56, badgeX = 80, badgeY = 82;
  const badgeTextX = badgeX + padX + iconW + iconGap;

  // --- Top-right price chip ---
  const priceText = "$49.99 once · no subscription";
  const priceSize = 23;
  const pTextW = await textWidth(priceText, priceSize, 700);
  const chipPad = 30;
  const chipW = pTextW + chipPad * 2;
  const chipH = 56, chipY = 82, chipX = 1120 - chipW; // right edge at 1120

  const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#EDF2FA"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#4B8BD4"/>

  <!-- Privacy badge -->
  ${pill({ x: badgeX, y: badgeY, w: badgeW, h: badgeH, fill: "#F0FFF4", stroke: "#C6F6D5" })}
  <g transform="translate(${badgeX + padX},${badgeY + (badgeH - 26) / 2})" stroke="#38A169" stroke-width="2.5" fill="none">
    <rect x="0" y="9" width="24" height="15" rx="3"/>
    <path d="M5 9 V5 a7 7 0 0 1 14 0 V9"/>
  </g>
  <text x="${badgeTextX}" y="${badgeY + badgeH / 2}" dominant-baseline="central" font-family="${HELV}" font-size="${badgeSize}" font-weight="700" fill="#38A169">${badgeText}</text>

  <!-- Price chip -->
  ${pill({ x: chipX, y: chipY, w: chipW, h: chipH, fill: "#EDF2FA", stroke: "#D4E3F5" })}
  <text x="${chipX + chipW / 2}" y="${chipY + chipH / 2}" text-anchor="middle" dominant-baseline="central" font-family="${HELV}" font-size="${priceSize}" font-weight="700" fill="#2E6BB5">${priceText}</text>

  <!-- Headline -->
  <text x="80" y="256" font-family="${SERIF}" font-size="76" font-weight="700" fill="#1B3A5C">Private AI that never</text>
  <text x="80" y="342" font-family="${SERIF}" font-size="76" font-weight="700" fill="#4B8BD4">leaves your computer.</text>

  <!-- Subhead -->
  <text x="80" y="416" font-family="${HELV}" font-size="30" fill="#5A6474">A ChatGPT-style assistant that runs on your own machine.</text>
  <text x="80" y="458" font-family="${HELV}" font-size="30" fill="#5A6474">No cloud. No account. Nothing used to train AI.</text>

  <!-- Footer brand -->
  <g transform="translate(80,540)">
    <g stroke="#4B8BD4" stroke-width="3" fill="none">
      <rect x="0" y="12" width="30" height="20" rx="4"/>
      <path d="M6 12 V6 a9 9 0 0 1 18 0 V12"/>
    </g>
    <text x="46" y="30" dominant-baseline="central" font-family="${SERIF}" font-size="34" font-weight="700" fill="#1B3A5C">WorkInPrivate</text>
  </g>
  <text x="1120" y="556" text-anchor="end" dominant-baseline="central" font-family="${HELV}" font-size="26" font-weight="700" fill="#8A9AB5">workinprivate.com</text>
</svg>`;

  const info = await sharp(Buffer.from(svg), { density: 150 })
    .resize(W, H)
    .png()
    .toFile("public/og-image.png");
  console.log(`og-image.png ${info.width}x${info.height} ${info.size}b`);
  console.log(`badge pill w=${Math.round(badgeW)} (text ${bTextW}px) | price chip w=${Math.round(chipW)} (text ${pTextW}px)`);
})().catch((e) => { console.error(e); process.exit(1); });
