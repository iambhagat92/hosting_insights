import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = join(process.cwd(), 'public', 'images');

async function optimizeTOC() {
  const files = await readdir(IMAGES_DIR);
  const targets = files.filter((f) => /-toc\.(png|jpg|jpeg|JPG|PNG)$/i.test(f));

  const results = [];
  for (const file of targets) {
    const srcPath = join(IMAGES_DIR, file);
    const base = basename(file, extname(file));
    const webpPath = join(IMAGES_DIR, `${base}.webp`);

    // Generate WebP (quality 80, effort 4)
    await sharp(srcPath)
      .webp({ quality: 80, effort: 4 })
      .toFile(webpPath);

    const s = await stat(webpPath);
    results.push({ out: webpPath, bytes: s.size });
  }

  // Log summary
  for (const r of results) {
    console.log(`${r.out} -> ${r.bytes} bytes`);
  }
}

optimizeTOC().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
