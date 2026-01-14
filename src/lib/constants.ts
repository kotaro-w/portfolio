import { Like, Experience, Partner, ContactLink, VisitedCountry } from '@/types'

export const LIKES: Like[] = [
  // Hobbies（趣味）
  { name: '硬式テニス｜高校・大学', category: 'hobbies' },
  { name: 'バドミントン｜中学・大学', category: 'hobbies' },
  { name: '卓球｜大学', category: 'hobbies' },
  { name: '空手｜小学校', category: 'hobbies' },
  { name: '水泳｜小学校', category: 'hobbies' },

  // Entertainment（エンタメ）
  { name: 'ディズニー巡り｜残すはパリのみ', category: 'entertainment' },
  { name: '洋画鑑賞｜伏線が多い映画が好み', category: 'entertainment' },
  { name: '家族旅行｜国内外飛び回りたい', category: 'entertainment' },
  { name: 'ポーカー｜大型大会も出場中', category: 'entertainment' },
  { name: '麻雀｜麻雀記事の執筆経験あり', category: 'entertainment' },

  // Food & Drink（食べ物）
  { name: 'ラーメン', category: 'food' },
  { name: '肉全般', category: 'food' },
  { name: '海鮮全般', category: 'food' },
  { name: 'スイーツ全般', category: 'food' },
  { name: 'キリン メッツ アルギニンV', category: 'food' },
]

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Sole Proprietor',
    position: 'IT Career Advisor',
    period: '2026/1 -',
    description: [
      'フリーランスエンジニア向けのキャリアエージェント',
      'IT業界のエンジニア向けの案件紹介、営業活動',
      'iOSアプリ開発講師',
      'Web/iOSアプリ個人開発者',
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
      'アルツハイマー型認知症の研究',
    ],
  },
  {
    id: '4',
    company: 'Tokyo University of Science',
    position: 'Undergraduate student',
    period: '2015/4 - 2019/3',
    description: [
      'RNAと遺伝暗号の研究',
    ],
  },
]

export const PARTNERS: Partner[] = [
  {
    id: '1',
    name: '株式会社テックビズ',
    description: 'ITフリーランスエンジニア向けの案件紹介・独立支援サービスを提供。コンサルタントとしてエンジニアの独立のお手伝いをしています。',
    url: 'https://techbiz.com/',
    tags: ['フリーランス', '案件紹介', '独立支援'],
    featured: true,
  },
  {
    id: '2',
    name: 'ShiftB',
    description: 'React、Next.js、TypeScript特化型Webアプリ開発スクール。受講生限定のキャリア支援を実施中。',
    url: 'https://shiftb.dev/',
    tags: ['React', 'Next.js', 'TypeScript'],
    featured: true,
  },
  {
    id: '3',
    name: 'NOT DESIGN SCHOOL',
    description: '本気で即戦力デザイナーを目指すデザインスクール。iOSアプリ開発の講師として活動中。',
    url: 'https://notdesignschool.jp/',
    tags: ['デザインスクール', 'Webデザイン', 'UIデザイン'],
    featured: true,
  },
  {
    id: '4',
    name: '合同会社Bremch',
    description: 'ITを活用してエンジニアに「居場所」を提供する企業。特別顧問という謎の役職として活動中。',
    url: 'https://www.bremch.co.jp/',
    tags: ['IT企業', 'エンジニア支援', 'キャリア'],
    featured: true,
  },
  {
    id: '5',
    name: '合同会社STREAMLINE',
    description: '日本に優秀なITエンジニアを増やすことを目指す企業。現在は休眠中です。',
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
  description: 'エージェントとエンジニアの二刀流。IT業界で働くエンジニア向けにフリーランスの案件紹介や独立支援を行っています。現在、チームで200名以上のエンジニアの稼働をサポート中です！',
  avatar: '/images/avatar.jpg',
}

export const VISITED_COUNTRIES: VisitedCountry[] = [
  // アジア
  { name: 'Japan', nameJa: '日本', lat: 35.6762, lng: 139.6503 },
  { name: 'South Korea - Seoul', nameJa: '韓国｜ソウル', lat: 37.5665, lng: 126.9780 },
  { name: 'China - Shanghai', nameJa: '中国｜上海', lat: 31.2304, lng: 121.4737 },
  { name: 'Hong Kong', nameJa: '香港', lat: 22.3193, lng: 114.1694 },
  { name: 'Macau', nameJa: 'マカオ', lat: 22.1987, lng: 113.5439 },
  // ヨーロッパ
  { name: 'France - Paris', nameJa: 'フランス｜パリ', lat: 48.8566, lng: 2.3522 },
  { name: 'UK - London', nameJa: 'イギリス｜ロンドン', lat: 51.5074, lng: -0.1278 },
  // 北米・太平洋
  { name: 'USA - Hawaii', nameJa: 'アメリカ｜ハワイ', lat: 21.3069, lng: -157.8583 },
  { name: 'USA - Guam', nameJa: 'アメリカ｜グアム', lat: 13.4443, lng: 144.7937 },
  { name: 'USA - Florida', nameJa: 'アメリカ｜フロリダ', lat: 25.7617, lng: -80.1918 },
]
