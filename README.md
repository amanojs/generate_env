# generate_env

環境変数テンプレートファイル と 環境変数ファイル の差分を自動更新することができる npm パッケージです。

## インストール

```shell
# npm
npm install --save-dev @amanojs/generate_env
```

```shell
# yarn
yarn add --dev @amanojs/generate_env
```

## 利点

- プロジェクトをクローンしてきたばかりでも、コマンド一つで必要な項目が全てそろっている環境変数ファイルを適切な名前で生成できる。
- 元から環境変数ファイルがあった場合、最新の環境変数テンプレートファイルとの差分だけを追加するので保持している値は消えない。
- 項目の入れ替えにも対応しており、全員の環境変数ファイルのフォーマットが統一される。

## 使用例

```json
  "scripts": {
    "gen-env": "SET ENV_NAME=.env&& SET ENVBASE_NAME=.env.base&& npx generate_env"
  },
```

上の例だと .env.base という名前のファイルを元に .env という名前のファイルを生成または更新するというコマンドになります。

### 必要な環境変数

- 環境変数テンプレートファイル名を指定する環境変数: **ENVBASE_NAME**
- 生成する環境変数ファイル名を指定する環境変数: **ENV_NAME**
