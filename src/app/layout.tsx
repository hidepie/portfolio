import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  // 実際に使用するウェイトのみに絞り不要な woff2 preload を削減
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Built with AI',
  description: 'AI開発の成果物ポートフォリオ — Claude Code で構築したゲーム・アプリの実績集',
};

/**
 * Content Security Policy (S1 対応)
 *
 * GitHub Pages は静的ホスティングのためカスタム HTTP ヘッダを設定できず、
 * next.config.ts の headers() も output:'export' 時に無効になる。
 * そのため <meta http-equiv> による CSP を layout.tsx で設定する。
 *
 * ディレクティブの根拠:
 *   - script-src 'self' 'unsafe-inline': Next.js が生成するインラインスクリプトに必要
 *   - style-src  'self' 'unsafe-inline': Tailwind v4 が生成する <style> タグに必要
 *   - img-src    'self' data:           : next/image の blur placeholder (data: URI) に対応
 *   - font-src   'self'                 : next/font が /_next/static/media/ にセルフホスト
 *   - frame-ancestors 'none'            : クリックジャッキング防止
 *   - base-uri   'self'                 : <base href> インジェクション防止
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
].join('; ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* CSP: GitHub Pages は HTTP ヘッダ設定不可のため meta タグで代替 (S1) */}
        <meta httpEquiv="Content-Security-Policy" content={CSP} />
        {/* クリックジャッキング追加防御（CSP の frame-ancestors と併用） */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
