import { Like, Experience, Project, ContactLink } from '@/types'

export const LIKES: Like[] = [
  // Hobbies（趣味）
  { name: 'サッカー', category: 'hobbies' },
  { name: '旅行', category: 'hobbies' },
  { name: '読書', category: 'hobbies' },
  { name: 'キャンプ', category: 'hobbies' },
  { name: '写真撮影', category: 'hobbies' },
  { name: 'ランニング', category: 'hobbies' },

  // Entertainment（エンタメ）
  { name: '映画鑑賞', category: 'entertainment' },
  { name: '音楽', category: 'entertainment' },
  { name: 'ゲーム', category: 'entertainment' },
  { name: 'アニメ', category: 'entertainment' },
  { name: 'Netflix', category: 'entertainment' },
  { name: 'YouTube', category: 'entertainment' },

  // Food & Drink（食べ物）
  { name: 'コーヒー', category: 'food' },
  { name: 'ラーメン', category: 'food' },
  { name: '寿司', category: 'food' },
  { name: 'カレー', category: 'food' },
  { name: 'クラフトビール', category: 'food' },
  { name: 'スイーツ', category: 'food' },
]

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Sole Proprietor',
    position: 'IT Career Advisor',
    period: '2026/1 -',
    description: [
      '大規模Webアプリケーションの設計・開発をリード',
      'Next.js + TypeScriptを用いた高速なSPA構築',
      'デザインシステムの構築とコンポーネントライブラリの整備',
      'パフォーマンス最適化により、ページ読み込み速度を40%改善',
    ],
    technologies: ['ITキャリア支援', '転職相談', 'フリーランス案件紹介', 'iOS/Webアプリ開発'],
  },
  {
    id: '2',
    company: 'NTT DATA Japan Corporation',
    position: 'Software Engineer',
    period: '2021/4 - 2025/12',
    description: [
      '日本最大規模の金融システムの企画検討、要件定義、品質管理',
      '決済システムの品質マネジメントに関するコンサルティング',
      'ECサイト開発の試験計画立案とバグ分析',
      '大規模会計システムの進捗管理、課題管理',
    ],
    technologies: ['プロジェクト管理', '品質管理', 'PM/PMO', '金融システム開発'],
  },
  {
    id: '3',
    company: 'The University of Tokyo',
    position: 'Graduate student',
    period: '2019/4 - 2021/3',
    description: [
      '企業サイトやLPの制作・運用',
    ],
  },
  {
    id: '4',
    company: 'Tokyo University of Science',
    position: 'Undergraduate student',
    period: '2015/4 - 2019/3',
    description: [
      '企業サイトやLPの制作・運用',
    ],
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
