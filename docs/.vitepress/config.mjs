import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCOPs 维护者指南",
  description: "快速成长为运维大师",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      { text: '写在前面', link: '/write-before' },

      {
        text: '基础篇',
        link: '/base',
        items: [
        ]
      },
      {
        text: '配置文件解读',
        link: '/configs',
      }




    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
