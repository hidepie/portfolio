import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsGrid() {
  return (
    <section
      id="works"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1152px',
        margin: '0 auto',
      }}
    >
      {/* セクションヘッダー */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--color-accent)',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}
        >
          WORKS
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          制作実績
        </h2>
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--color-text-muted)',
          }}
        >
          Claude Code を使った AI 駆動開発の成果物
        </p>
      </div>

      {/* グリッド */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            animationOrder={i}
          />
        ))}
      </div>
    </section>
  );
}
