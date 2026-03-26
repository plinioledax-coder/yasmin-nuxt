import { defineCollection } from '@nuxt/content'

export const collections = {
  content: defineCollection({
    type: 'page',
    source: 'blog/**/*.md', // 👈 aponta para a pasta certa
  })
}