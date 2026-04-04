import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = [
  "https://storage.googleapis.com/aistudio-user-uploads/112674287819876274484/4567a6df-f3d8-4623-8178-7b1897571201/01217030-97c7-43b6-965a-0f81d856b3e0/e939a3f9-7629-42b7-84a1-0f4b810d7936.png",
  "https://storage.googleapis.com/aistudio-user-uploads/112674287819876274484/4567a6df-f3d8-4623-8178-7b1897571201/8144c9b2-3864-4161-893d-4c330f4a8f90/1908d085-f20d-4033-a309-8472506b3e44.png",
  "https://storage.googleapis.com/aistudio-user-uploads/112674287819876274484/4567a6df-f3d8-4623-8178-7b1897571201/44f12257-2e21-4d37-afb9-b6845214088a/694b407e-1282-429a-989d-7f722650059e.png",
  "https://storage.googleapis.com/aistudio-user-uploads/112674287819876274484/4567a6df-f3d8-4623-8178-7b1897571201/214f8808-8e6f-451e-913a-c85215712534/fdd1c469-8f35-4f40-a35d-6379963e696f.png"
];

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

urls.forEach((url, index) => {
  const dest = path.join(publicDir, "watch" + (index + 1) + ".png");
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log("Downloaded watch" + (index + 1) + ".png");
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error("Error downloading " + url + ": " + err.message);
  });
});
