import { defineConfig, DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端编码规范工程化",
  description: "工程化工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "编码规范",
        items: [
          { text: "HTML 编码规范", link: "/coding/html.md" },
          { text: "CSS 编码规范", link: "/coding/css.md" },
          { text: "JavaScript 编码规范", link: "/coding/javascript.md" },
          { text: "TypeScript 编码规范", link: "/coding/typescript.md" },
          { text: "Node 编码规范", link: "/coding/node.md" },
        ],
      },
      {
        text: "工程规范",
        items: [
          { text: "Git 规范", link: "/engineering/git.md" },
          { text: "文档规范", link: "/engineering/doc.md" },
          { text: "CHANGELOG 规范", link: "/engineering/changelog.md" },
        ],
      },
      {
        text: "NPM包",
        items: [
          { text: "eslint-config-lok", link: "/npm/eslint.md" },
          { text: "stylelint-config-lok", link: "/npm/stylelint.md" },
          { text: "commitlint-config-lok", link: "/npm/commitlint.md" },
          { text: "markdownlint-config-lok", link: "/npm/markdownlint.md" },
          { text: "eslint-plugin-lok", link: "/npm/eslint-plugin.md" },
        ],
      },
      {
        text: "CLI 脚手架",
        items: [{ text: "lok-fe-cli", link: "/cli/lok-fe-cli.md" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
