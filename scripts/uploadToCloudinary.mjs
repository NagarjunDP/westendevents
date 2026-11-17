import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_FILE = path.join(__dirname, 'cloudinary_mapping.json');

async function uploadFiles() {
  const files = fs.readdirSync(PUBLIC_DIR);
  const mediaFiles = files.filter(f => f.match(/\.(jpg|jpeg|png|webp|mp4|svg)$/i));
  
  console.log(`Found ${mediaFiles.length} media files in public/. Uploading with concurrency 10...`);
  
  let mapping = {};
  if (fs.existsSync(OUTPUT_FILE)) {
    mapping = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
  }

  // Upload with concurrency 10
  const limit = 10;
  let active = 0;
  let completed = 0;

  await new Promise((resolve) => {
    let index = 0;
    
    function next() {
      if (completed === mediaFiles.length) {
        return resolve();
      }
      
      while (active < limit && index < mediaFiles.length) {
        const file = mediaFiles[index++];
        active++;
        
        if (mapping[file]) {
          completed++;
          active--;
          continue;
        }

        const filePath = path.join(PUBLIC_DIR, file);
        const publicId = `westend/${path.parse(file).name}`;
        const resourceType = file.endsWith('.mp4') ? 'video' : 'image';

        cloudinary.uploader.upload(filePath, {
          public_id: publicId,
          resource_type: resourceType,
          overwrite: true
        })
        .then(result => {
          mapping[file] = result.secure_url;
          completed++;
          console.log(`[${completed}/${mediaFiles.length}] Uploaded ${file}`);
        })
        .catch(err => {
          console.error(`Failed ${file}:`, err.message);
          completed++;
        })
        .finally(() => {
          fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mapping, null, 2));
          active--;
          next();
        });
      }
    }
    
    next();
  });

  console.log("Upload complete!");
}

uploadFiles().catch(console.error);
