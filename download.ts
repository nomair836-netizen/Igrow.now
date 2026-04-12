import fs from 'fs';
import https from 'https';
import path from 'path';

const download = (url: string, dest: string) => {
  return new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  const dir = path.join(process.cwd(), 'public', 'assets');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  await download("https://i.ibb.co/s7zLgvX/Green-copy.png", path.join(dir, "project-genesis.png"));
  await download("https://i.ibb.co/4yYrjqv/2-copy.jpg", path.join(dir, "vision-bg.jpg"));
  await download("https://i.ibb.co/KjJc01YB/freepik-inspired-by-this-positon-and-camera-angel-img1-i-want-a-super-realistic-portrait-out-door-is.png", path.join(dir, "interactive-bg.png"));
  console.log("Downloads complete");
}

main();
