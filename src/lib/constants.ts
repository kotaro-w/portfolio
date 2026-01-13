import { Likes, Experience, Project, ContactLink } from '@/types'

export const SKILLS: Likes[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'Next.js', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'Tailwind CSS', category: 'frontend', level: 5 },
  { name: 'Framer Motion', category: 'frontend', level: 4 },
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  { name: 'Vue.js', category: 'frontend', level: 3 },

  // Backend
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express', category: 'backend', level: 4 },
  { name: 'Python', category: 'backend', level: 3 },
  { name: 'PostgreSQL', category: 'backend', level: 3 },
  { name: 'MongoDB', category: 'backend', level: 3 },
  { name: 'REST API', category: 'backend', level: 4 },

  // Tools
  { name: 'Git', category: 'tools', level: 5 },
  { name: 'GitHub', category: 'tools', level: 5 },
  { name: 'Docker', category: 'tools', level: 3 },
  { name: 'VS Code', category: 'tools', level: 5 },
  { name: 'Figma', category: 'tools', level: 4 },
  { name: 'Vercel', category: 'tools', level: 4 },
]

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Tech Company A',
    position: 'Senior Frontend Developer',
    period: '2022年4月 - 現在',
    description: [
      '大規模Webアプリケーションの設計・開発をリード',
      'Next.js + TypeScriptを用いた高速なSPA構築',
      'デザインシステムの構築とコンポーネントライブラリの整備',
      'パフォーマンス最適化により、ページ読み込み速度を40%改善',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: '2',
    company: 'Startup B',
    position: 'Frontend Developer',
    period: '2020年4月 - 2022年3月',
    description: [
      'React/TypeScriptを用いたWebアプリケーション開発',
      'レスポンシブデザインの実装とモバイル最適化',
      'パフォーマンス最適化とアクセシビリティ改善',
      'GitHubを使ったチーム開発とコードレビュー',
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Material-UI'],
  },
  {
    id: '3',
    company: 'Web Agency C',
    position: 'Graduate student',
    period: '2018年4月 - 2020年3月',
    description: [
      '企業サイトやLPの制作・運用',
      'HTML/CSS/JavaScriptによるフロントエンド開発',
      'WordPressを使ったCMS構築',
      'クライアントとの要件定義と提案',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
  },
  {
    id: '4',
    company: 'Web Agency C',
    position: 'Undergraduate student',
    period: '2018年4月 - 2020年3月',
    description: [
      '企業サイトやLPの制作・運用',
      'HTML/CSS/JavaScriptによるフロントエンド開発',
      'WordPressを使ったCMS構築',
      'クライアントとの要件定義と提案',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: '最新技術を用いたモダンなECサイト。決済、在庫管理、レビューシステムを実装し、スムーズなショッピング体験を提供。',
    image: '/images/placeholder-project.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'チーム向けタスク管理アプリケーション。リアルタイム同期、ドラッグ&ドロップ対応で、直感的なタスク管理を実現。',
    image: '/images/placeholder-project.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: '動きのあるリッチなポートフォリオサイト。グラデーションアニメーション背景とglassmorphismデザインが特徴。',
    image: '/images/placeholder-project.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: '天気情報をビジュアルに表示するダッシュボード。複数都市の天気を一覧表示し、詳細な予報データを提供。',
    image: '/images/placeholder-project.jpg',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'マークダウン対応のブログプラットフォーム。シンタックスハイライト、タグ検索、レスポンシブデザインを実装。',
    image: '/images/placeholder-project.jpg',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '6',
    title: 'Chat Application',
    description: 'リアルタイムチャットアプリケーション。プライベートメッセージ、グループチャット、ファイル共有機能を搭載。',
    image: '/images/placeholder-project.jpg',
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    featured: false,
  },
]

export const CONTACT_LINKS: ContactLink[] = [
  { name: 'Email', url: 'mailto:kw0504@techbiz.com', icon: 'mail' },
  { name: 'Instagram', url: 'https://www.instagram.com/it_zukai_sekai/', icon: 'Instagram' },
]

export const HERO_DATA = {
  name: 'Kotaro Wakatsuki',
  title: 'IT Career Advisor',
  description: 'IT業界で働くエンジニア向けにフリーランスの案件紹介や独立支援を行っています。チームで200名以上のエンジニアの稼働をサポート中です。',
  avatar: '/images/avatar.jpg',
}
