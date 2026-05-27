/**
 * sync-images.mjs
 * image/（日本語ファイル名）→ public/images/（英語ファイル名）へのコピースクリプト。
 * 実行: npm run sync-images
 *
 * 対応表を更新するだけで新しい画像に追跡できる。
 */
import { copyFileSync, mkdirSync, existsSync, statSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import { readFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

/** 日本語ファイル名 → 英語ファイル名 の対応表 */
const IMAGE_MAP = [
  { src: "image/ぷよぷよ②.jpg",    dst: "public/images/puyopuyo.jpg" },
  { src: "image/テトリス.png",      dst: "public/images/tetris.png" },
  { src: "image/ポモドーロアプリ.png", dst: "public/images/pomodoro.png" },
];

const md5 = (path) =>
  createHash("md5").update(readFileSync(path)).digest("hex");

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

  // コピー先ディレクトリを作成（なければ）
  mkdirSync(dirname(dstPath), { recursive: true });

  // ハッシュ比較: 同一なら skip
  if (existsSync(dstPath) && md5(srcPath) === md5(dstPath)) {
    console.log(`[SKIP]   ${src}  →  ${dst}  (同一ファイル)`);
    skipped++;
    continue;
  }

  copyFileSync(srcPath, dstPath);
  console.log(`[COPY]   ${src}  →  ${dst}`);
  updated++;
}

console.log(`\n完了: ${updated} ファイルをコピー / ${skipped} スキップ / ${errors} エラー`);
if (errors > 0) process.exit(1);
