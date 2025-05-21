# Gekiatsu Konchu

Gekiatsu Konchuは、Next.jsを用いて開発された、昆虫・樹木・ランドマーク情報を地図上で可視化するWebアプリケーションです。山口県のオープンデータを活用し、地図上でさまざまな情報を閲覧できます。

## 主な機能

- 昆虫・樹木・ランドマークの地図表示（Leaflet使用）
- スライド形式のランディングページ
- Twitterシェアボタン
- オープンデータ参照機能

## ディレクトリ構成

```
components/         UIコンポーネント
  landing/          ランディングページ用
  controls/         地図コントロール
  atoms/            汎用小コンポーネント
hooks/              カスタムフック
icons/              アイコン
pages/              Next.jsページ
  api/              APIルート
  landing/          ランディングページ
  ready-to-go/      準備ページ
  trees/            樹木詳細ページ
public/             画像・データ・アイコン
  data/             GeoJSON, CSV等のオープンデータ
styles/             グローバルCSS
utility/            ユーティリティ
```

## セットアップ

1. 依存パッケージのインストール

```bash
npm install
# または
yarn install
```

2. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開いて動作を確認してください。

## ビルド・デプロイ

```bash
npm run build
npm start
```

Vercel等のサービスを利用してデプロイ可能です。

## 主な技術

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Leaflet](https://leafletjs.com/)
- TypeScript

## データについて

- `public/data/` 配下にGeoJSONやCSV形式のオープンデータを配置しています。
- 画像やアイコンも `public/` 配下に整理されています。

## コントリビュート

バグ報告・機能提案・プルリクエストを歓迎します。お気軽にIssueやPRをお送りください。
