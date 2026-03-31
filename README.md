# Todo App

Next.js と Supabase を用いて構築した、CRUD 操作を備えた Todo 管理アプリです。  
Server Actions を利用し、フロントエンドから直接データ更新を行い、サーバー主導で状態を管理する構成になっています。

データ更新後は `revalidatePath` により一覧を再取得し、UIへ即時反映されます。  
クライアント側の複雑な状態管理を持たず、シンプルかつ一貫性のある設計を意識しました。

## 機能

- Todo の追加 / 削除
- 完了 / 未完了の切り替え
- ステータスによるフィルター表示
- Supabase によるデータ永続化

## 技術スタック

- Next.js（App Router / Server Actions）
- React
- TypeScript
- Supabase（PostgreSQL）

## 実装ポイント

- Server Actions を用いた CRUD 処理の実装
- Supabase を用いたデータ取得・更新
- `revalidatePath` によるキャッシュ無効化とUI更新
- クエリパラメータによるフィルター状態管理

## 工夫した点

- サーバー側で状態を管理し、クライアントとの整合性を保つ設計にしたこと
- URL に状態を持たせ、表示の再現性を高めたこと
- チェック操作で直感的に状態変更できるUIにしたこと

## セットアップ

```bash
npm install
npm run dev