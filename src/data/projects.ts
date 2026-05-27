/**
 * projects.ts — ポートフォリオ掲載プロジェクトのデータ定義
 *
 * ビューコンポーネント (ProjectsGrid) と分離し、
 * CMS・API への移行やテストを容易にする。
 *
 * image フィールドのルール:
 *   - root-relative かつ basePath 非付与のパスのみ
 *   - buildImageSrc() が NEXT_PUBLIC_BASE_PATH を自動付与する
 */
import type { Project } from '@/components/ProjectCard';

export const projects: Project[] = [
  {
    id: 'puyopuyo',
    title: 'ぷよぷよ',
    description:
      'BFS 連鎖判定・スコアリング・ポーズ・ホールド機能を完全実装したぷよぷよゲーム。Next.js + React 19 で構築。',
    image: '/images/puyopuyo.jpg',
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
  },
  {
    id: 'tetris',
    title: 'テトリス',
    description:
      'ホールド・ゴーストピース・レベルアップ・ハードドロップを実装したテトリス。キーボード操作対応。',
    image: '/images/tetris.png',
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
  },
  {
    id: 'pomodoro',
    title: 'ポモドーロアプリ',
    description:
      '作業セッション管理・短い休憩・設定画面を備えたシンプルなモバイル UI のポモドーロタイマー。',
    image: '/images/pomodoro.png',
    tags: ['React Native', 'TypeScript', 'Mobile UI'],
  },
];
