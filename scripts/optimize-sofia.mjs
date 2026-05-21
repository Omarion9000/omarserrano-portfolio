import sharp from 'sharp';

const SRC = '/tmp/assets-omar/sofia-widget.png';
const OUT = 'public/work/sofia.webp';

const image = sharp(SRC);
const meta = await image.metadata();

// El widget de Sofia ocupa aprox los últimos 35-40% del ancho.
const left = Math.round(meta.width * 0.60);
const cropWidth = meta.width - left;

const targetRatio = 4 / 3;
let cropHeight = Math.round(cropWidth / targetRatio);
if (cropHeight > meta.height) cropHeight = meta.height;
const top = Math.round((meta.height - cropHeight) / 2);

await image
  .extract({ left, top, width: cropWidth, height: cropHeight })
  .resize(1200, 900, { fit: 'cover' })
  .webp({ quality: 85 })
  .toFile(OUT);

console.log('✓ Sofia widget recortado → public/work/sofia.webp');
