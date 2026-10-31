const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Users/Asus/.gemini/antigravity/brain/2ffa96a7-0c5d-47a4-bd57-efd1cd220f05/.user_uploaded/media_1793443280300_62465aab.jpg';
const destDir = path.join(__dirname, '../public/images');

async function run() {
  if (!fs.existsSync(srcPath)) {
    console.error('Source image does not exist:', srcPath);
    process.exit(1);
  }

  console.log('Reading source image from:', srcPath);

  // 1. meet-avatar.webp
  await sharp(srcPath)
    .webp({ quality: 85, effort: 6 })
    .toFile(path.join(destDir, 'meet-avatar.webp'));
  console.log('Generated meet-avatar.webp');

  // 2. yusuf-avatar.webp (replace existing)
  await sharp(srcPath)
    .webp({ quality: 85, effort: 6 })
    .toFile(path.join(destDir, 'yusuf-avatar.webp'));
  console.log('Updated yusuf-avatar.webp');

  // 3. meet-avatar.png
  await sharp(srcPath)
    .png({ quality: 90 })
    .toFile(path.join(destDir, 'meet-avatar.png'));
  console.log('Generated meet-avatar.png');

  // 4. yusuf-avatar.png (replace existing)
  await sharp(srcPath)
    .png({ quality: 90 })
    .toFile(path.join(destDir, 'yusuf-avatar.png'));
  console.log('Updated yusuf-avatar.png');

  // 5. meet-avatar.jpg
  fs.copyFileSync(srcPath, path.join(destDir, 'meet-avatar.jpg'));
  console.log('Copied meet-avatar.jpg');

  console.log('Avatar replacement complete!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

