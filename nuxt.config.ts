// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @nuxtjs/sitemap DEVE vir antes do @nuxt/content
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/sitemap', '@nuxt/content', '@vercel/analytics'],

  nitro: {
    preset: 'vercel'
  },

  site: {
    url: 'https://yasminsantana.adv.br',
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },

  content: {
    database: {
      type: 'libsql',
      url: ':memory:'
    },
    collections: {
      content: {
        type: 'page',
        source: 'blog/**/*.md',
      }
    }
  },

  app: {
    head: {
      title: 'Yasmin Santana | Advocacia',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600;700&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }
      ]
    }
  },

  compatibilityDate: '2024-11-01',
})