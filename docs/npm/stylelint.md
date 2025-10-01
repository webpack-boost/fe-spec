---
title: stylelint-config-lok
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: webpack-boost
  link: https://github.com/webpack-boost/fe-spec
---

# stylelint-config-lok

:::tip
印客学院 CSS 规范
:::

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install stylelint-config-lok stylelint stylelint-scss --save-dev
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "stylelint-config-lok"
}
```
