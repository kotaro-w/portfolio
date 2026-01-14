import { Like, Experience, Partner, ContactLink, VisitedCountry } from '@/types'

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
    name: '株式会社テックビズ',
    description: 'ITフリーランスエンジニア向けの案件紹介・独立支援サービスを提供。コンサルタントとしてIT業界の方々のキャリア支援を行っています。',
    url: 'https://techbiz.com/',
    tags: ['フリーランス', '案件紹介', '独立支援'],
    featured: true,
  },
  {
    id: '2',
    name: 'ShiftB',
    description: 'React、Next.js、TypeScript特化型Webアプリ開発スクール。受講生限定で。',
    url: 'https://shiftb.dev/',
    tags: ['React', 'Next.js', 'TypeScript'],
    featured: true,
  },
  {
    id: '3',
    name: 'NOT DESIGN SCHOOL',
    description: '本気で即戦力デザイナーを目指すデザインスクール。Webデザイン、UIデザイン、グラフィックデザインなど実践的なスキルを習得できます。',
    url: 'https://notdesignschool.jp/',
    tags: ['デザインスクール', 'Webデザイン', 'UIデザイン'],
    featured: true,
  },
  {
    id: '4',
    name: '合同会社Bremch',
    description: 'ITを活用してエンジニアに「居場所」を提供。勇気・寄り添い・技術と挑戦を大切に、自分らしく挑戦し続けられる環境づくりを行っています。',
    url: 'https://www.bremch.co.jp/',
    tags: ['IT企業', 'エンジニア支援', 'キャリア'],
    featured: true,
  },
  {
    id: '5',
    name: '合同会社STREAMLINE',
    description: '日本に優秀なITエンジニアを増やすことを目指し、キャリアコーチング・資格取得コーチング・副業コーチングを提供しています。',
    url: 'https://streamline0213.co.jp/',
    tags: ['キャリア支援', 'コーチング', 'エンジニア育成'],
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

export const VISITED_COUNTRIES: VisitedCountry[] = [
  // アジア
  { name: 'Japan', nameJa: '日本', lat: 35.6762, lng: 139.6503 },
  { name: 'South Korea', nameJa: '韓国', lat: 37.5665, lng: 126.9780 },
  { name: 'Taiwan', nameJa: '台湾', lat: 25.0330, lng: 121.5654 },
  { name: 'Thailand', nameJa: 'タイ', lat: 13.7563, lng: 100.5018 },
  { name: 'Vietnam', nameJa: 'ベトナム', lat: 21.0285, lng: 105.8542 },
  { name: 'Singapore', nameJa: 'シンガポール', lat: 1.3521, lng: 103.8198 },
  // ヨーロッパ
  { name: 'France', nameJa: 'フランス', lat: 48.8566, lng: 2.3522 },
  { name: 'Italy', nameJa: 'イタリア', lat: 41.9028, lng: 12.4964 },
  { name: 'Spain', nameJa: 'スペイン', lat: 40.4168, lng: -3.7038 },
  { name: 'United Kingdom', nameJa: 'イギリス', lat: 51.5074, lng: -0.1278 },
  // 北米
  { name: 'United States', nameJa: 'アメリカ', lat: 40.7128, lng: -74.0060 },
  // オセアニア
  { name: 'Australia', nameJa: 'オーストラリア', lat: -33.8688, lng: 151.2093 },
]
