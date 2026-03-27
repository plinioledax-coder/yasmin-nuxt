<script setup>
import { Calendar, Clock, ArrowLeft } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

const { data: article } = await useAsyncData(`post-${slug}`, () =>
  queryCollection('content').path(`/blog/${slug}`).first()
)

if (article.value) {
  useSeoMeta({
    title: `${article.value.title} | Yasmin Santana Advocacia`,
    description: article.value.description,
    ogTitle: `${article.value.title} | Yasmin Santana Advocacia`,
    ogDescription: article.value.description,
    ogImage: article.value.image || '/images/yasmin-share.jpg',
    ogType: 'article',
    twitterCard: 'summary_large_image',
  })
} else {
  useSeoMeta({
    title: 'Artigo não encontrado | Yasmin Santana Advocacia',
    description: 'O artigo que você está procurando não existe ou foi removido do nosso portal jurídico.'
  })
}
</script>

<template>
  <main class="bg-charcoal min-h-screen pt-32 pb-24">

    <article v-if="article" class="container mx-auto px-6 max-w-3xl">

      <NuxtLink to="/#blog"
        class="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-gold transition-colors mb-12">
        <ArrowLeft class="w-3 h-3" />
        Voltar para a Home
      </NuxtLink>

      <header class="mb-12">
        <div class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
          {{ article.category }}
        </div>

        <h1 class="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          {{ article.title }}
        </h1>

        <div class="flex items-center gap-4 text-white/40 text-xs border-b border-white/10 pb-8">
          <div class="flex items-center gap-1.5">
            <Calendar class="w-4 h-4 text-gold" />
            <span>{{ article.date }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <Clock class="w-4 h-4 text-gold" />
            <span>{{ article.readTime }}</span>
          </div>
        </div>
      </header>

      <div v-if="article.image" class="aspect-[21/9] w-full mb-12 overflow-hidden shadow-2xl shadow-black/30">
        <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
      </div>

      <div class="prose-blog">
        <ContentRenderer :value="article" />
      </div>

    </article>

    <div v-else class="container mx-auto px-6 max-w-3xl text-center py-20 flex flex-col items-center">
      <h1 class="font-display text-4xl font-bold text-white mb-4">Artigo não encontrado</h1>
      <p class="text-white/50 mb-8 max-w-md">Não conseguimos localizar este texto. Ele pode ter sido movido ou o link
        está incorreto.</p>
      <NuxtLink to="/#blog"
        class="px-8 py-3 bg-white text-charcoal font-bold text-[10px] uppercase tracking-widest hover:bg-gold transition-colors">
        Voltar para o site
      </NuxtLink>
    </div>

  </main>
</template>

<style>
.prose-blog p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.prose-blog h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #ffffff;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose-blog ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
}

.prose-blog ul li {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}

.prose-blog strong {
  font-weight: 600;
  color: #ffffff;
}

.prose-blog blockquote {
  border-left: 4px solid #C9A84C;
  padding: 1.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.04);
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
}

.prose-blog blockquote p {
  margin-bottom: 0;
}
</style>