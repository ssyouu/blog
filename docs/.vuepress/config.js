import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: "/blog/",
  bundler: viteBundler(),
  theme: defaultTheme(),
  lang: 'zh-CN',
  title: 'Syouu\'s Blog',
  description: '这是我的第一个 VuePress 站点',
})