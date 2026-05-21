import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

const SRC = '/tmp/assets-omar';
const OUT = resolve(process.cwd(), 'public/work');

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const images = [
  { src: 'prave.png',          out: 'prave.webp' },
  { src: 'jesse-merineau.png', out: 'jesse-merineau.webp' },
  { src: 'pokemon-battle.png', out: 'pokemon.webp' },
  { src: 'qr-generator.png',   out: 'qr-generator.webp' },
];

for (const { src, out } of images) {
  const inputPath = `${SRC}/${src}`;
  const outputPath = `${OUT}/${out}`;

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const targetRatio = 4 / 3;
  const currentRatio = metadata.width / metadata.height;

  let cropWidth = metadata.width;
  let cropHeight = metadata.height;
  let left = 0;
  let top = 0;

  if (currentRatio > targetRatio) {
    cropWidth = Math.round(metadata.height * targetRatio);
    left = Math.round((metadata.width - cropWidth) / 2);
  } else {
    cropHeight = Math.round(metadata.width / targetRatio);
    top = Math.round((metadata.height - cropHeight) / 4);
  }

  await image
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .resize(1200, 900, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(outputPath);

  console.log(`✓ ${src} → ${out}`);
}

console.log('\nDone. Generated WebP files in /public/work/');
