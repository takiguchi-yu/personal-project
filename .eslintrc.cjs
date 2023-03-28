// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: [
    "@typescript-eslint",
    "sort-keys-custom-order",
    "simple-import-sort",
    "import",
    "unused-imports",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    // import構文のLintingをサポート
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    // import/exportを自動でソート
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    // objectやtypeを自動でソート
    "sort-keys-custom-order/object-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    "sort-keys-custom-order/type-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    // 未使用importを削除
    "unused-imports/no-unused-imports": "error",
  },
};

module.exports = config;
