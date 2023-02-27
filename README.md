# stylelint-config-vue

## Install

```bash
pnpm add @lxchapu/stylelint-config-vue -D
```

## Usage

在你的 Stylelint 配置文件中添加以下内容：

```js
{
  extends: ["@lxchapu/stylelint-config-vue"]
}
```

在 `package.json` 中添加脚本：

```json
{
  "lint:style": "stylelint --fix **/*.{css,scss,vue,html}"
}
```

## Auto lint on save

在 VSCode 工作区中添加以下配置：

```json
{
  "stylelint.validate": ["css", "scss", "vue", "html"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

## Lincense

MIT
