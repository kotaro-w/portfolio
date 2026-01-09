# Portfolio Website

モダンでリッチなアニメーションを備えたポートフォリオサイトです。

## 技術スタック

- **Next.js 15** - React フレームワーク (App Router)
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Framer Motion** - アニメーション

## デザイン特徴

- 流動的なグラデーションアニメーション背景
- Glassmorphism（半透明カード）デザイン
- スクロール連動アニメーション
- レスポンシブデザイン
- ダークテーマ

## セクション

1. **Hero** - 自己紹介
2. **Skills** - 技術スタック
3. **Experience** - 職歴・経歴
4. **Projects** - 制作実績
5. **Contact** - 連絡先

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 開発サーバー

http://localhost:3000 でアクセスできます。

## カスタマイズ

### プレースホルダーデータの編集

`src/lib/constants.ts` を編集して、以下の情報を更新できます：

- 自己紹介（名前、肩書き、説明）
- スキルリスト
- 職歴
- プロジェクト
- 連絡先リンク

### カラースキームの変更

`tailwind.config.ts` でカラーパレットとグラデーションをカスタマイズできます。

### アニメーションの調整

各アニメーションコンポーネント（`src/components/animations/`）でアニメーションパラメータを調整できます。

## デプロイ

### Vercel（推奨）

```bash
# Vercel CLIのインストール
npm install -g vercel

# デプロイ
vercel

# 本番デプロイ
vercel --prod
```

GitHubと連携して自動デプロイすることも可能です。

## ライセンス

MIT
