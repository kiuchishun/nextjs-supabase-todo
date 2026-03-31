# Todo App

Next.js と Supabase を用いて開発した、CRUD 操作を備えた Todo 管理アプリです。
Server Actions を活用し、サーバー側でデータ更新とUI再描画を行う構成で実装しています。

データは Supabase（PostgreSQL）に保存され、更新後は `revalidatePath` により一覧を再取得し、画面へ即時反映されます。
クライアント側の状態管理に依存せず、サーバーを単一のデータソースとするシンプルな設計を意識しました。

---

## URL

https://nextjs-supabase-todo-git-main-kiuchishuns-projects.vercel.app

---

## 主な機能

* Todo の追加 / 削除
* 完了 / 未完了の切り替え
* ステータス別フィルター表示（all / completed / active）
* Supabase によるデータ永続化

---

## 使用技術

* Next.js（App Router / Server Actions）
* React
* TypeScript
* Supabase（PostgreSQL）

---

## アーキテクチャ / 実装

### ■ データ更新フロー

1. ユーザー操作（フォーム送信 / チェックボックス）
2. Server Action を実行
3. Supabase に対して INSERT / UPDATE / DELETE
4. `revalidatePath("/")` によりキャッシュ無効化
5. 最新データを再取得してUI更新

クライアントで状態を持たず、サーバーを唯一のデータソースとして設計しています。

---

### ■ フィルター機能

* クエリパラメータ（例：`?filter=completed`）で状態管理
* URLから状態の復元が可能
* ページリロード後も表示状態を維持

---

### ■ コンポーネント構成

* Server Component：データ取得・描画
* Client Component：ユーザー操作・イベント処理

責務を分離し、シンプルで保守しやすい構成にしています。

---

## 工夫した点

* Server Actions を利用し、クライアント側の状態管理を最小限に抑えた点
* URL に状態を持たせることで、再現性のあるUIを実現した点
* チェックボックス操作で直感的に状態変更できるUI設計

---

## 課題と改善点

* 入力バリデーションの強化
* エラーハンドリングの改善
* Todo の編集機能追加
* 認証機能の導入
* UI / UX の改善

---

## セットアップ

```bash
npm install
npm run dev
```

環境変数は `.env.local` に設定してください。
