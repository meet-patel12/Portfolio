const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');

async function optimize() {
  const files = fs.readdirSync(imgDir);
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(imgDir, file);
      const baseName = path.basename(file, '.png');
      const outputPath = path.join(imgDir, `${baseName}.webp`);

      console.log(`Optimizing ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const oldSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      console.log(`Converted ${file} (${(oldSize / 1024).toFixed(1)} KB) -> ${baseName}.webp (${(newSize / 1024).toFixed(1)} KB)`);
    }
  }
}

optimize().catch(console.error);

