/**
 * image.ts — 画像パスのバリデーションと URL 組み立てユーティリティ
 *
 * ## 設計上のルール (S2 対応)
 * - image パスは必ず root-relative かつ basePath 非付与の形式であること
 * - 例: "/images/foo.jpg" ✅  "/portfolio/images/foo.jpg" ❌  "https://..." ❌
 * - NEXT_PUBLIC_BASE_PATH はビルド時に確定し、この関数内で付与する
 *
 * ## なぜ next/image に直接任せないか (S2 参照)
 * - unoptimized: true の場合、next/image は src をサニタイズせず通過させる
 * - javascript: / data: URI が渡されても next/image はブロックしない
 * - よって呼び出し前にここでバリデーションを行う
 */

/** 許可する image パスのパターン: 先頭 "/" から始まる相対パスのみ */
const SAFE_IMAGE_PATH_RE = /^\/[a-zA-Z0-9/_\-\.]+$/;

/**
 * image パスが安全かどうかを検証する。
 * @throws {Error} 不正なパスが渡された場合
 */
export function assertSafeImagePath(path: string): void {
  if (!SAFE_IMAGE_PATH_RE.test(path)) {
    throw new Error(
      `[image] 不正な image パス: "${path}". ` +
        'root-relative パス (/images/foo.jpg) のみ許可されます。'
    );
  }
}

/**
 * image パスを NEXT_PUBLIC_BASE_PATH 付きのフル URL に変換する。
 *
 * @example
 *   buildImageSrc("/images/puyopuyo.jpg")
 *   // dev:  "/images/puyopuyo.jpg"
 *   // prod: "/portfolio/images/puyopuyo.jpg"
 */
export function buildImageSrc(path: string): string {
  assertSafeImagePath(path);
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${base}${path}`;
}
