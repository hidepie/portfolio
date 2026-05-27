import type { NextConfig } from "next";

/**
 * GitHub Pages へのデプロイ設定。
 *
 * ⚠️ basePath / assetPrefix / NEXT_PUBLIC_BASE_PATH は同じ値を持つ必要がある。
 *   リポジトリ名を変更する場合は `repo` の 1 行だけ更新すること。
 *   他の値を個別に変えると静的アセットと画像の URL が乖離して 404 になる。
 *
 * NEXT_PUBLIC_BASE_PATH はビルド時に env ブロックで確定し、
 * ProjectCard の <Image src> に手動で付与している（next/image は
 * unoptimized: true のとき basePath を src に付与しないため）。
 */
const repo = "portfolio"; // ← GitHub リポジトリ名。変更する場合はここだけ編集。
const isProd = process.env.NODE_ENV === "production";
const base = isProd ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: base,
  assetPrefix: isProd ? `${base}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
};

export default nextConfig;
