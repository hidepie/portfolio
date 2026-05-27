/**
 * Hero.tsx
 *
 * 入場アニメーションを framer-motion の initial={{ opacity:0 }} から
 * CSS @keyframes に移行。
 *
 * 理由 (P2):
 *   framer-motion の `animate` prop は SSR HTML に initial 値 (opacity:0) を
 *   インラインスタイルとして書き出すため、LCP 候補の h1 が JS 到達まで
 *   不可視になり Lighthouse LCP スコアが悪化する。
 *   CSS アニメーションならサーバー生成 HTML は常に opacity:1 で届く。
 *
 * 副次効果:
 *   - Hero コンポーネントが "use client" 不要になりサーバーコンポーネント化
 *   - framer-motion の import を Hero から除去しバンドルサイズを削減 (P3)
 *   - prefers-reduced-motion への自動対応 (globals.css 側で制御)
 */
export default function Hero() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '640px', width: '100%' }}>

        {/* Badge — CSS fadeInDown アニメーション */}
        <div
          className="hero-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: '9999px',
            border: '1px solid var(--color-border)',
            background: 'var(--color-surface)',
            marginBottom: '2rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '9999px',
              background: 'var(--color-accent)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--color-text-secondary)',
            }}
          >
            BUILT WITH AI
          </span>
        </div>

        {/* h1 — CSS fadeInUp アニメーション。SSR HTML は opacity:1 のまま (P2 修正) */}
        <h1
          className="hero-heading"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'var(--color-text-primary)',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          AI で作る、
          <br />
          <span style={{ color: 'var(--color-accent)' }}>動くもの</span>を。
        </h1>

        {/* サブテキスト — CSS fadeInUp アニメーション */}
        <p
          className="hero-sub"
          style={{
            fontSize: '1.0625rem',
            lineHeight: 1.75,
            color: 'var(--color-text-muted)',
            marginBottom: '2.5rem',
          }}
        >
          Claude Code を使った AI 駆動開発で、
          <br />
          ゲームからプロダクティビティツールまで構築しています。
        </p>

        {/* CTA — CSS fadeIn アニメーション (.cta-btn に animation 内包) */}
        <a href="#works" className="cta-btn">
          制作実績を見る ↓
        </a>
      </div>
    </section>
  );
}
