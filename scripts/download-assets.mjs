import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const ASSETS = [
  ["public/logo.svg", "https://safolio.com/wp-content/uploads/2025/07/safolio_logo.svg"],
  [
    "public/logo-white.svg",
    "https://safolio.com/wp-content/uploads/2025/07/safolio_logo_white.svg",
  ],
  ["public/icon.png", "https://safolio.com/wp-content/uploads/2025/07/safolio-icon-1.png"],
  [
    "public/images/hero-portrait.png",
    "https://safolio.com/wp-content/uploads/2025/07/20250724_1245_Gercekci_Adam_Portresi_remix_01k0y0f4h8fk4bz2qz9kk742gf-removebg-preview-2.png",
  ],
  ["public/images/hero-bg.webp", "https://safolio.com/wp-content/uploads/2025/04/h2-1.webp"],
  [
    "public/images/team.jpg",
    "https://safolio.com/wp-content/uploads/2025/07/20250724_1303_Uluslararasi-Ekip-Calismasi_remix_01k0y1h93zfg1v27bd35z8xe66-Large.jpeg",
  ],
  [
    "public/images/designed-for-you.jpg",
    "https://safolio.com/wp-content/uploads/2025/07/20250724_1313_Fotograf-Yeniden-Olusturma_remix_01k0y23q23fm6ve3pycznaw925.jpeg",
  ],
  ["public/images/cta-bg.webp", "https://safolio.com/wp-content/uploads/2025/04/h2-32.webp"],
];

for (const [target, url] of ASSETS) {
  console.log(`Fetching ${url} -> ${target}`);
  const res = await fetch(url, {
    headers: { "User-Agent": "safolio-web/asset-download" },
  });
  if (!res.ok) throw new Error(`Failed: ${url} (${res.status})`);
  await mkdir(dirname(target), { recursive: true });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(target, buf);
}
console.log("Done.");
