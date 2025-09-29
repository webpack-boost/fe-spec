# 前端编码规范工程化

## 技术选型

- pnpm-workspace + lerna的monorepo架构

- React Vue Ts Js Node Eslint

- css预处理器 stylelint

- git commitlint husky

- cspell

- cli脚手架 一键接入 一键修复 一键升级

- jest mocha 提供验证

问题记录：

- `lerna version --conventional-commits` 会为每个子包添加`CHANGELOG.md`文件，这与外部的`CHANGELOG.md`有重复的情况产生。不需要为每个子包添加，因此不使用或者传递`--no-changelog`命令。若有需要，先在`lerna.json`文件中设置changelog的预设配置：`changelogPreset: 'angular'` 或者使用命令行`lerna version --conventional-commits --changelog-preset angular`

### Day1-commitlint and husky

- 使用commitlint校验git提交信息

- 使用husky commit-msg拦截git提交信息

```shell
# 安装commitlint cli
pnpm i @commitlint/cli -D

# commitlint-config 推荐配置
pnpm i @commitlint/config-conventional -D

# 安装husky
pnpm i husky -D
```

`**1.配置commitlint规则**`

1. 在多包项目`packages/config/commitlint`下安装`conventional-changelog-conventionalcommits`
2. 在根目录下创建`.commitlintrc.js`文件，配置commitlint规则 - 继承自packages/config/commitlint

```js
// packages/config/commitlint/index.js
module.exports = {
    // 继承@commitlint/config-conventional推荐配置
    extends: ['@commitlint/config-conventional'],
    // 使用conventional-changelog-conventionalcommits解析提交信息
    parserPreset: 'conventional-changelog-conventionalcommits',
    // 自定义规则
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [0],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
    },
};

```

使用prompt提示Git提交内容

```shell

# 全局安装commitizen
pnpm i commitizen -g

# 安装adapter
# 诸多adapter可选，比如：cz-commitlint-changelog、cz-customizable、@commitlint/prompt、@commitlint/cz-commitlint，这里使用cz-commitlint-changelog
pnpm i cz-commitlint-changelog -wD

```

`**2.配置husky**`

```shell
# 安装
pnpm i husky -wD

# 初始化husky
pnpm exec husky init

# 在创建提交之前对其进行lint，使用 Husky 的 commit-msg hook
# Windows users should use ` to escape dollar signs
echo "pnpm dlx commitlint --edit `$1" > .husky/commit-msg

```
