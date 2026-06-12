import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

async function optimizeImages() {
  const files = fs.readdirSync(PUBLIC_DIR);
  const imageFiles = files.filter(f => f.match(/\.(jpg|jpeg|png)$/i));
  
  console.log(`Found ${imageFiles.length} images to optimize.`);
  
  let originalSize = 0;
  let newSize = 0;

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];
    const filePath = path.join(PUBLIC_DIR, file);
    
    const stats = fs.statSync(filePath);
    originalSize += stats.size;
    
    // Skip small images already < 500KB
    if (stats.size < 500 * 1024) {
      newSize += stats.size;
      continue;
    }

    try {
      const tempPath = filePath + '.tmp';
      
      await sharp(filePath)
        .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(tempPath);
        
      fs.renameSync(tempPath, filePath);
      
      const newStats = fs.statSync(filePath);
      newSize += newStats.size;
      
      console.log(`[${i+1}/${imageFiles.length}] Compressed ${file}: ${(stats.size/1024/1024).toFixed(1)}MB -> ${(newStats.size/1024/1024).toFixed(1)}MB`);
    } catch (err) {
      console.error(`Failed to process ${file}:`, err.message);
      newSize += stats.size;
    }
  }

  console.log(`\nOptimization Complete!`);
  console.log(`Original Total Size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`New Total Size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${((originalSize - newSize) / 1024 / 1024).toFixed(2)} MB!`);
}

optimizeImages().catch(console.error);
