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
    name: 'TechAcademy',
    description: '現役エンジニアのサポートで実践的なプログラミングスキルを習得できるオンラインスクール。',
    url: 'https://techacademy.jp',
    tags: ['プログラミングスクール', 'オンライン学習', 'メンタリング'],
    featured: true,
  },
  {
    id: '2',
    name: 'DMM WEBCAMP',
    description: '未経験から最短3ヶ月でITエンジニアを目指せる転職保証付きプログラミングスクール。',
    url: 'https://web-camp.io',
    tags: ['転職支援', 'プログラミングスクール', 'キャリアサポート'],
    featured: true,
  },
  {
    id: '3',
    name: 'RUNTEQ',
    description: 'Webエンジニア育成に特化した実践型プログラミングスクール。現場で通用する開発力を養成。',
    url: 'https://runteq.jp',
    tags: ['Webエンジニア', 'Ruby on Rails', '実践型'],
    featured: true,
  },
  {
    id: '4',
    name: 'Progate',
    description: 'イラスト中心のスライドで基礎からプログラミングを学べるオンライン学習サービス。',
    url: 'https://prog-8.com',
    tags: ['初心者向け', 'オンライン学習', '基礎学習'],
    featured: false,
  },
  {
    id: '5',
    name: 'Udemy',
    description: '世界最大級のオンライン学習プラットフォーム。多様なプログラミングコースを提供。',
    url: 'https://www.udemy.com',
    tags: ['オンライン学習', '動画講座', 'グローバル'],
    featured: false,
  },
  {
    id: '6',
    name: 'paiza',
    description: 'プログラミングスキルを可視化し、IT企業とのマッチングを支援する転職プラットフォーム。',
    url: 'https://paiza.jp',
    tags: ['転職支援', 'スキル診断', 'IT企業'],
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
