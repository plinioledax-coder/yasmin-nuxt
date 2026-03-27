<script setup>
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-vue-next'

const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('content').all().then(articles =>
    articles.sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort))
  )
)

useHead({
  title: 'Blog e Artigos Jurídicos | Yasmin Santana',
  meta: [
    { name: 'description', content: 'Fique por dentro dos seus direitos. Artigos sobre Direito de Família, Trabalhista, Consumidor e muito mais.' }
  ]
})
</script>

<template>
  <div class="bg-charcoal min-h-screen pt-32 pb-24 selection:bg-gold/30 selection:text-charcoal-dark">
    <div class="container mx-auto px-6 max-w-7xl">

      <header class="mb-16 md:mb-24">
        <NuxtLink to="/#blog"
          class="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-gold transition-colors mb-8">
          <ArrowLeft class="w-3 h-3" />
          Voltar para Home
        </NuxtLink>

        <div class="flex items-center gap-3 mb-5">
          <div class="h-px w-10 bg-gold"></div>
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Informação Jurídica</span>
        </div>
        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl">
          Nossos <span class="text-gold italic font-medium">Artigos</span>
        </h1>
        <p class="mt-6 text-white/50 text-lg leading-relaxed max-w-2xl">
          Tudo o que você precisa saber sobre os seus direitos, explicado de forma simples, direta e humanizada.
        </p>
      </header>

      <div v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <article v-for="post in posts" :key="post.path"
          class="group flex flex-col bg-[#14120E] border border-white/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 overflow-hidden">

          <NuxtLink :to="post.path" class="relative aspect-[16/10] overflow-hidden block">
            <img
              :src="post.image || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'"
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            <div class="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <div v-if="post.category"
              class="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase text-gold">
              {{ post.category }}
            </div>
          </NuxtLink>

          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-4 text-white/40 text-xs mb-4">
              <div v-if="post.date" class="flex items-center gap-1.5">
                <Calendar class="w-3.5 h-3.5" />
                <span>{{ post.date }}</span>
              </div>
              <div v-if="post.date && post.readTime" class="w-1 h-1 rounded-full bg-gold/50"></div>
              <div v-if="post.readTime" class="flex items-center gap-1.5">
                <Clock class="w-3.5 h-3.5" />
                <span>{{ post.readTime }}</span>
              </div>
            </div>

            <NuxtLink :to="post.path" class="block group-hover:text-gold transition-colors duration-300">
              <h2 class="font-display text-xl lg:text-2xl font-bold text-white leading-snug mb-4 line-clamp-2">
                {{ post.title }}
              </h2>
            </NuxtLink>

            <p class="text-white/50 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
              {{ post.description }}
            </p>

            <NuxtLink :to="post.path"
              class="mt-auto inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gold hover:text-white transition-colors w-fit border-b border-gold/30 hover:border-white pb-1">
              Ler Artigo
              <ArrowRight class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <div v-else class="text-center py-20 border border-dashed border-white/10">
        <p class="text-white/40 text-lg">Novos artigos em breve.</p>
      </div>

    </div>
  </div>
</template>