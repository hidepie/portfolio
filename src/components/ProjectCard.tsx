"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "#d1d5db";
        el.style.boxShadow = "0 1px 8px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "#e5e7eb";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "0.5rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "#6b7280",
            marginBottom: "1rem",
          }}
        >
          {project.description}
        </p>
        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.25rem 0.625rem",
                borderRadius: "9999px",
                border: "1px solid #e5e7eb",
                fontSize: "0.75rem",
                color: "#374151",
                background: "#ffffff",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
