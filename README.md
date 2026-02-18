# am a DANCE STUDIO ウェブサイト

am a DANCE STUDIO（アムア ダンススタジオ）の公式ウェブサイト

## 🎯 プロジェクト概要

チアダンス・バトントワリング・K-POP・ジャズなど、多彩なダンスプログラムを提供するダンススタジオのウェブサイトです。

## ✨ 主な機能

### 実装済み機能

- **トップページ**: スタジオ紹介とインストラクター（RIKO）のプロフィール
- **クラス紹介**: 全14クラスのタブ切り替え表示
- **レッスンスケジュール**: 週間タイムテーブル（木曜変則スケジュール対応）
- **料金システム**: シンプルでわかりやすい月謝表示
- **活動報告**: Instagram風の画像＋テキストフィード
- **体験申込フォーム**: お問い合わせ・体験レッスン申込
- **グッズ販売案内**: スタジオオリジナルグッズの紹介

## 🚀 技術スタック

- **フレームワーク**: React 19
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **ビルドツール**: Vite 7
- **バックエンド**: Firebase (Firestore, Storage)
- **開発環境**: Node.js

## 🔥 Firebase セットアップ

### 1. Firebaseプロジェクトの作成

1. [Firebase Console](https://console.firebase.google.com/) にアクセス
2. 新しいプロジェクトを作成
3. Firestoreデータベースを有効化（本番モード推奨）
4. Firebase Storageを有効化

### 2. 環境変数の設定

`.env.example` をコピーして `.env` ファイルを作成：

```bash
cp .env.example .env
```

Firebaseコンソールから取得した設定値を `.env` に記入：

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

### 3. Firestoreセキュリティルール

Firestoreのルールを以下のように設定（Firebase Console > Firestore > ルール）：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 活動報告は誰でも読める、書き込みは認証済みのみ
    match /activities/{activityId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 4. Storageセキュリティルール

Storageのルールを設定（Firebase Console > Storage > ルール）：

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /activities/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 📱 レスポンシブデザイン

モバイルファーストデザインで、あらゆるデバイスに最適化：

- スマートフォン（320px〜）
- タブレット（768px〜）
- デスクトップ（1024px〜）

## 🎨 デザイン特徴

- 親しみやすいカラースキーム（プライマリー：レッド、セカンダリー：ブルー）
- スムーズなスクロールナビゲーション
- タブ切り替えによる効率的な情報表示
- 直感的なUI/UX

## 📦 セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## 🔧 開発

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセス

### ビルド

```bash
npm run build
```

ビルド成果物は `dist/` ディレクトリに出力されます。

## 📂 プロジェクト構造

```
/
├── src/
│   ├── components/         # Reactコンポーネント
│   │   ├── Header.tsx      # ヘッダーナビゲーション
│   │   ├── Hero.tsx        # トップセクション
│   │   ├── Classes.tsx     # クラス紹介（タブ形式）
│   │   ├── Schedule.tsx    # レッスンスケジュール
│   │   ├── Price.tsx       # 料金システム
│   │   ├── Activities.tsx  # 活動報告フィード
│   │   ├── Contact.tsx     # 体験申込フォーム
│   │   └── Footer.tsx      # フッター
│   ├── data/               # データファイル
│   │   ├── classes.ts      # クラス情報
│   │   ├── schedule.ts     # スケジュール情報
│   │   └── prices.ts       # 料金情報
│   ├── types/              # TypeScript型定義
│   │   └── index.ts
│   ├── App.tsx             # メインアプリケーション
│   ├── main.tsx            # エントリーポイント
│   └── index.css           # グローバルスタイル
├── public/                 # 静的ファイル
├── index.html              # HTMLテンプレート
├── package.json            # プロジェクト設定
├── vite.config.ts          # Vite設定
├── tailwind.config.js      # Tailwind CSS設定
└── tsconfig.json           # TypeScript設定
```

## 🎓 クラス一覧

1. CHEER DANCE一般
2. CHEER DANCE スキルアップ
3. JAZZ
4. BATON ビギナー
5. BATON
6. KPOP ビギナー
7. KPOP
8. GIRLS ビギナー
9. GIRLS
10. HIMARI Freestyle
11. 体操
12. OVER 20 DANCE
13. TONE UP（exercise）
14. ゆったりYOGA

## ⚠️ 特記事項

### 表記統一

- **HIMARI Freestyle**: 「Free」と「Style」の間にスペースなし

### 木曜日の変則スケジュール

17:30-18:30の時間帯は週によってクラスが変わります：

- 第1・3週：CHEER DANCE skill up
- 第2・4週：ゆったりYOGA

### 料金表示

複数受講割引の表示は行わず、シンプルな月謝のみを表示しています。

## 🔮 今後の拡張予定

- お知らせ（News）管理機能
- 管理画面でのコンテンツ更新機能
- 実際の画像・動画の追加
- 外部予約システムとの連携
- SNS連携機能の強化

## 📄 ライセンス

© 2026 am a DANCE STUDIO. All rights reserved.

## 👤 開発者

GenSpark AI Developer

## 📞 お問い合わせ

体験レッスンやお問い合わせは、ウェブサイトのフォームからお願いします。
