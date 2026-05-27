export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-subtle)' }}>
        Built with{' '}
        <a
          href="https://claude.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--color-text-subtle)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          Claude Code
        </a>
        {' × '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--color-text-subtle)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          Next.js
        </a>
      </p>
    </footer>
  );
}
