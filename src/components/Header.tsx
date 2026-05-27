export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "56px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "9999px",
            background: "#5865f2",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "#111827",
            letterSpacing: "-0.01em",
          }}
        >
          Portfolio
        </span>
      </div>
    </header>
  );
}
