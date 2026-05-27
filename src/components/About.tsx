"use client";
import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Tailwind CSS",
  "Claude Code",
  "AI-Driven Dev",
];

export default function About() {
  return (
    <section
      style={{
        background: "#f9fafb",
        padding: "5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "768px",
          margin: "0 auto",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#5865f2",
            marginBottom: "0.75rem",
            textTransform: "uppercase",
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
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
            marginBottom: "1.25rem",
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
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#374151",
            marginBottom: "2.5rem",
          }}
        >
          Claude Code を活用した AI 駆動開発で、ゲームからプロダクティビティツールまで
          幅広いアプリケーションを構築しています。
          アイデアを素早く形にし、実際に動く成果物として仕上げることにこだわっています。
        </motion.p>

        {/* Skills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              style={{
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                border: "1px solid #e5e7eb",
                fontSize: "0.875rem",
                color: "#374151",
                background: "#ffffff",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
