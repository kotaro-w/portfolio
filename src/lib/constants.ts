import { Like, Experience, Partner, ContactLink } from '@/types'

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

export const PARTNERS: Partner[] = [
  {
    id: '1',
    name: 'NOT DESIGN SCHOOL',
    description: '本気で即戦力デザイナーを目指すデザインスクール。Webデザイン、UIデザイン、グラフィックデザインなど実践的なスキルを習得できます。',
    url: 'https://notdesignschool.jp/',
    tags: ['デザインスクール', 'Webデザイン', 'UIデザイン'],
    featured: true,
  },
  {
    id: '2',
    name: 'ShiftB',
    description: 'React、Next.js、TypeScript特化型Webアプリ開発スクール。オリジナルアプリ開発と実務体験課題で本当の実践力が身につきます。',
    url: 'https://shiftb.dev/',
    tags: ['React', 'Next.js', 'TypeScript'],
    featured: true,
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
