import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const baseDir = process.cwd();
const imagesDir = join(baseDir, 'public', 'images');
const outDir = join(baseDir, 'public', 'og');

const posts = [
  { slug: 'bluehost', title: 'Bluehost Review 2025', src: 'bluehost-toc.webp' },
  { slug: 'siteground', title: 'SiteGround Review 2025', src: 'siteground-toc.webp' },
  { slug: 'a2-hosting', title: 'A2 Hosting Review 2025', src: 'a2-hosting-toc.webp' },
  { slug: 'hostgator', title: 'HostGator Review 2025', src: 'hostgator-toc.webp' },
  { slug: 'dreamhost', title: 'DreamHost Review 2025', src: 'dreamhost-toc.webp' },
  { slug: 'interserver', title: 'InterServer Review 2025', src: 'interserver-toc.webp' },
  { slug: 'milesweb', title: 'MilesWeb Review 2025', src: 'milesweb-toc.webp' },
  { slug: 'namecheap', title: 'Namecheap Review 2025', src: 'namecheap-toc.webp' },
  { slug: 'comparison', title: 'Best Web Hosting Comparison', src: 'hostinger-toc.webp' },
];

const brand = 'Best Hosting Review';

function overlaySVG(title){
  const esc = (s)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
  return `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="rgba(0,0,0,0.50)"/>
        <stop offset="1" stop-color="rgba(0,0,0,0.65)"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <text x="60" y="360" fill="#fff" font-size="72" font-weight="700" font-family="Inter, Arial, sans-serif">${esc(title)}</text>
    <text x="60" y="560" fill="#cbd5e1" font-size="32" font-weight="600" font-family="Inter, Arial, sans-serif">${esc(brand)}</text>
  </svg>`;
}

async function main(){
  await mkdir(outDir, { recursive: true });
  for (const p of posts){
    const srcPath = join(imagesDir, p.src);
    const ogPath = join(outDir, `${p.slug}.png`);
    const svg = Buffer.from(overlaySVG(p.title));
    const base = sharp(srcPath).resize(1200, 630, { fit: 'cover' });
    const out = await base.composite([{ input: svg }]).png({ quality: 90 }).toBuffer();
    await writeFile(ogPath, out);
    console.log('OG generated:', ogPath);
  }
}

main().catch((e)=>{ console.error(e); process.exit(1); });
