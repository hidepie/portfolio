"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        background: "#ffffff",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "640px", width: "100%" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            border: "1px solid #e5e7eb",
            background: "#ffffff",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "9999px",
              background: "#5865f2",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#374151",
            }}
          >
            BUILT WITH AI
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#111827",
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          AI で作る、
          <br />
          <span style={{ color: "#5865f2" }}>動くもの</span>を。
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.75,
            color: "#6b7280",
            marginBottom: "2.5rem",
          }}
        >
          Claude Code を使った AI 駆動開発で、
          <br />
          ゲームからプロダクティビティツールまで構築しています。
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#works"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.75rem 1.75rem",
            borderRadius: "9999px",
            background: "#5865f2",
            color: "#ffffff",
            fontSize: "0.9375rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#4752c4";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#5865f2";
          }}
        >
          制作実績を見る ↓
        </motion.a>
      </div>
    </section>
  );
}
