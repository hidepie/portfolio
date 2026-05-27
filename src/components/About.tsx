'use client';
import { motion } from 'framer-motion';

const skills = [
  'Next.js', 'React', 'TypeScript', 'Python',
  'Tailwind CSS', 'Claude Code', 'AI-Driven Dev',
];

/**
 * skills のアニメーション定義 (P4 対応)
 *
 * 各 motion.span に個別 viewport + IntersectionObserver を設定するのではなく、
 * 親の staggerChildren で制御することで Observer を 1 つに集約する。
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function About() {
  return (
    <section
      style={{
        background: 'var(--color-bg-subtle)',
        padding: '5rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '768px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--color-accent)',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}
        >
          ABOUT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            marginBottom: '1.25rem',
          }}
        >
          AI と共に、
          <br />
          動くものを作る。
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--color-text-secondary)',
            marginBottom: '2.5rem',
          }}
        >
          Claude Code を活用した AI 駆動開発で、ゲームからプロダクティビティツールまで
          幅広いアプリケーションを構築しています。
          アイデアを素早く形にし、実際に動く成果物として仕上げることにこだわっています。
        </motion.p>

        {/* Skills — staggerChildren で Observer を 1 個に集約 (P4) */}
        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              style={{
                padding: '0.375rem 0.875rem',
                borderRadius: '9999px',
                border: '1px solid var(--color-border)',
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                background: 'var(--color-surface)',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
