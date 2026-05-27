'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { buildImageSrc } from '@/lib/image';

export interface Project {
  id: string;
  title: string;
  description: string;
  /**
   * root-relative かつ basePath 非付与の画像パス。
   * 例: "/images/foo.jpg"（"/portfolio/images/foo.jpg" や CDN URL は不可）
   *
   * buildImageSrc() が NEXT_PUBLIC_BASE_PATH を付与するため、
   * basePath 付きのパスや絶対 URL を渡すと二重プレフィックスになる。
   * また buildImageSrc 内で SAFE_IMAGE_PATH_RE によるバリデーションが走る (S2)。
   */
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  /** アニメーションの遅延順序。0 のカードは priority 画像読み込みの対象になる (P1) */
  animationOrder: number;
}

export default function ProjectCard({ project, index, animationOrder }: ProjectCardProps) {
  // index=0（最初のカード）は LCP 候補のため priority で即時フェッチ (P1)
  const isLCP = animationOrder === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: animationOrder * 0.12 }}
      // CSS クラスでホバーを管理（JS ハンドラ排除・デザイントークン参照）(R1・R4)
      className="project-card"
    >
      {/* 画像エリア */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
          borderRadius: '8px 8px 0 0',
        }}
      >
        <Image
          // buildImageSrc が NEXT_PUBLIC_BASE_PATH 付与 + パスバリデーションを担う (R2・S2)
          src={buildImageSrc(project.image)}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
          // LCP 候補（index=0）は priority を設定して loading='lazy' を解除する (P1)
          priority={isLCP}
        />
      </div>

      {/* テキストコンテンツ */}
      <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: 1.65,
            color: 'var(--color-text-muted)',
            marginBottom: '1rem',
          }}
        >
          {project.description}
        </p>

        {/* タグ一覧 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '0.25rem 0.625rem',
                borderRadius: '9999px',
                border: '1px solid var(--color-border)',
                fontSize: '0.75rem',
                color: 'var(--color-text-secondary)',
                background: 'var(--color-surface)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
