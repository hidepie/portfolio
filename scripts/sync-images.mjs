/**
 * sync-images.mjs
 * image/（日本語ファイル名）→ public/images/（英語ファイル名）へのコピースクリプト。
 * 実行: npm run sync-images
 *
 * 対応表を更新するだけで新しい画像を追跡できる。
 * image フィールドは root-relative かつベースパス非付与のパスであること
 * （例: /images/foo.jpg — /portfolio/images/foo.jpg ではない）。
 */
import { copyFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

/** 日本語ファイル名 → 英語ファイル名 の対応表 */
const IMAGE_MAP = [
  { src: "image/ぷよぷよ②.jpg",       dst: "public/images/puyopuyo.jpg" },
  { src: "image/テトリス.png",         dst: "public/images/tetris.png" },
  { src: "image/ポモドーロアプリ.png", dst: "public/images/pomodoro.png" },
];

const md5 = (filePath) =>
  createHash("md5").update(readFileSync(filePath)).digest("hex");

let updated = 0;
let skipped = 0;
let errors  = 0;

for (const { src, dst } of IMAGE_MAP) {
  const srcPath = resolve(root, src);
  const dstPath = resolve(root, dst);

  if (!existsSync(srcPath)) {
    console.error(`[ERROR] 元ファイルが見つかりません: ${src}`);
    errors++;
    continue;
  }

  // ハッシュ比較を先に行い、同一なら mkdirSync / copyFileSync を省略する
  // （read-only FS でも skip できるよう mkdirSync を後回しにする）
  if (existsSync(dstPath) && md5(srcPath) === md5(dstPath)) {
    console.log(`[SKIP]   ${src}  →  ${dst}  (同一ファイル)`);
    skipped++;
    continue;
  }

  try {
    mkdirSync(dirname(dstPath), { recursive: true });
    copyFileSync(srcPath, dstPath);
    console.log(`[COPY]   ${src}  →  ${dst}`);
    updated++;
  } catch (err) {
    console.error(`[ERROR] コピー失敗 ${src} → ${dst}: ${err.message}`);
    errors++;
  }
}

console.log(`\n完了: ${updated} ファイルをコピー / ${skipped} スキップ / ${errors} エラー`);
if (errors > 0) process.exit(1);
