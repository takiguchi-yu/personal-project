# Create T3 App

これは、create-t3-app で起動された[T3 Stack](https://create.t3.gg/)プロジェクトである。

## 次はどうする？これでアプリを作るにはどうしたらいい？

私たちは、このプロジェクトをできるだけシンプルに保つよう心がけています。私たちが用意した足場だけで始めて、必要になったときに後から追加することができます。

このプロジェクトで使われているさまざまな技術についてよく知らない場合は、それぞれのドキュメントを参照してください。

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## 詳細はこちら

[T3 Stack](https://create.t3.gg/)の詳細については、以下のリソースを参照してください。

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — これらの素晴らしいチュートリアルをチェックしてください。

[create-t3-app GitHub リポジトリ](https://github.com/t3-oss/create-t3-app)をチェックしてみてください。あなたのフィードバックや貢献を歓迎します！

## どうやってデプロイすればいい？

[Vercel](https://create.t3.gg/en/deployment/vercel)、[Netlify](https://create.t3.gg/en/deployment/netlify)、[Docker](https://create.t3.gg/en/deployment/docker)のデプロイガイドに従ってください。

## 初期セットアップ

```bash
# typeやobjectのキーを自動でソートしてくれるプラグイン
pnpm add -D eslint-plugin-sort-keys-custom-order
# import/exportを自動でソートしてくれるプラグイン
pnpm add -D eslint-plugin-simple-import-sort
# import/export構文をLintingしてくれるプラグイン
pnpm add -D eslint-plugin-import
# 未使用importや不足しているimportを追加してくれるプラグイン
pnpm add -D eslint-plugin-unused-imports
# ベンダープレフィックスを自動管理
pnpm add -D autoprefixer
```

## trpc + prisma のファイルごとのリレーション

```mermaid
graph TB %% トップダウン（上から下に描画する）

%% 宣言(登場人物)
A[utils/api.ts]
B[pages/index.tsx<br>pages/_app.ts]
D[画面]
E["pages/api/trpc/[trpc].ts"]
F[server/api/root.ts]
G["server/api/routers/*.ts"]
H[server/db.ts]
I["@prisma/client"]
J["@trpc/client"]
K["@trpc/server"]
L[zod]
M[DB]
N[server/api/trpc.ts]

%% リレーション
A --import--> B
D --localhost:3000--> B
B --hooks: /api/trpc/example.getAll--> E
F --import--> E
N --import--> E
F --import--> A
J --import--> A
K --import--> A
N --import--> G
G --query--> M
L --import--> G
H --import--> N
I --import--> H
N --import--> F
```

## API(hooks)

### すべてのプロジェクトを取得

```bash
# データ参照
GET http://localhost:3000/api/trpc/project.getProjects?batch=1&input={"0":{"json":{"page":1, "limit": 10}}}

# データ挿入
POST http://localhost:3000/api/trpc/project.createProject?batch=1
{
    "0": {
        "json": {
            "name": "テスト",
            "url": "https://www.google.com",
            "thumbnail": "https://www.google.com/samune",
            "published": false
        }
    }
}

```

## 動く URL

https://personal-project-eta.vercel.app/
