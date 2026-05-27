import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "puyopuyo",
    title: "ぷよぷよ",
    description:
      "BFS 連鎖判定・スコアリング・ポーズ・ホールド機能を完全実装したぷよぷよゲーム。Next.js + React 19 で構築。",
    image: "/images/puyopuyo.jpg",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4"],
  },
  {
    id: "tetris",
    title: "テトリス",
    description:
      "ホールド・ゴーストピース・レベルアップ・ハードドロップを実装したテトリス。キーボード操作対応。",
    image: "/images/tetris.png",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4"],
  },
  {
    id: "pomodoro",
    title: "ポモドーロアプリ",
    description:
      "作業セッション管理・短い休憩・設定画面を備えたシンプルなモバイル UI のポモドーロタイマー。",
    image: "/images/pomodoro.png",
    tags: ["React Native", "TypeScript", "Mobile UI"],
  },
];

export default function ProjectsGrid() {
  return (
    <section
      id="works"
      style={{
        padding: "5rem 1.5rem",
        maxWidth: "1152px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#5865f2",
            marginBottom: "0.75rem",
            textTransform: "uppercase",
          }}
        >
          WORKS
        </p>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          制作実績
        </h2>
        <p
          style={{
            fontSize: "0.9375rem",
            color: "#6b7280",
          }}
        >
          Claude Code を使った AI 駆動開発の成果物
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
