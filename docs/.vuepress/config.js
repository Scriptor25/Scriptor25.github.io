import { defineUserConfig } from 'vuepress'

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { blogPlugin } from '@vuepress/plugin-blog'

import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: hopeTheme({
        logo: '/misc/icon256.png',
        favicon: '/misc/icon32.png',
        author: 'Felix Schreiber',
        displayFooter: true,
        footer: 'Scriptor25',
    }),
})
