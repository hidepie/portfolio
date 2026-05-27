export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
        Built with{" "}
        <a
          href="https://claude.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#9ca3af", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Claude Code
        </a>
        {" × "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#9ca3af", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Next.js
        </a>
      </p>
    </footer>
  );
}
