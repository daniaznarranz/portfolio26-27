import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const MAX_WIDTH = 1600;
const SIZE_THRESHOLD_BYTES = 300 * 1024; // 300 KB
const QUALITY = 78;

async function optimizeImages() {
  console.log('--- Iniciando optimización de imágenes ---');
  console.log(`Buscando imágenes de más de 300KB en: ${ASSETS_DIR}\n`);

  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`Error: El directorio de assets no existe: ${ASSETS_DIR}`);
    return;
  }

  const files = fs.readdirSync(ASSETS_DIR);
  let processedCount = 0;
  let totalSavedBytes = 0;

  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    const stat = fs.statSync(filePath);
    
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      continue;
    }

    if (stat.size <= SIZE_THRESHOLD_BYTES) {
      continue;
    }

    const originalSizeMb = (stat.size / (1024 * 1024)).toFixed(2);
    console.log(`Optimizando: ${file} (${originalSizeMb} MB)...`);

    try {
      // Leer el archivo en memoria primero para evitar bloqueos de archivo en Windows
      const fileBuffer = fs.readFileSync(filePath);
      
      const image = sharp(fileBuffer);
      const metadata = await image.metadata();

      let pipeline = image;

      if (metadata.width > MAX_WIDTH) {
        console.log(`  -> Redimensionando de ${metadata.width}px a ${MAX_WIDTH}px ancho`);
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }

      let buffer;
      if (ext === '.png') {
        buffer = await pipeline
          .png({ quality: QUALITY, compressionLevel: 8, palette: true })
          .toBuffer();
      } else {
        buffer = await pipeline
          .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
          .toBuffer();
      }

      fs.writeFileSync(filePath, buffer);

      const newStat = fs.statSync(filePath);
      const newSizeMb = (newStat.size / (1024 * 1024)).toFixed(2);
      const savedBytes = stat.size - newStat.size;
      const savedPercent = ((savedBytes / stat.size) * 100).toFixed(1);
      
      processedCount++;
      totalSavedBytes += savedBytes;

      console.log(`  -> ¡Éxito! Nuevo tamaño: ${newSizeMb} MB (Reducido en un ${savedPercent}%)\n`);

    } catch (err) {
      console.error(`  Error procesando ${file}:`, err.message);
    }
  }

  const totalSavedMb = (totalSavedBytes / (1024 * 1024)).toFixed(2);
  console.log('--- Proceso de optimización finalizado ---');
  console.log(`Imágenes optimizadas en lote: ${processedCount}`);
  console.log(`Espacio total ahorrado: ${totalSavedMb} MB\n`);
}

optimizeImages();
