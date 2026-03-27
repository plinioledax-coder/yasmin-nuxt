<script setup>
import { ArrowRight, Calendar, Clock } from 'lucide-vue-next'

defineProps({
  posts: Array
})
</script>

<template>
  <section id="blog" class="py-28 bg-ivory relative overflow-hidden">
    <div class="container mx-auto px-6 max-w-7xl relative z-10">

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-5">
            <div class="h-px w-10 bg-gold"></div>
            <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Informação & Direito</span>
          </div>
          <h2 class="font-display text-4xl md:text-5xl text-charcoal font-bold leading-tight">
            Artigos e <span class="text-gold italic font-medium">Atualizações</span>
          </h2>
          <p class="mt-6 text-charcoal/60 text-lg leading-relaxed">
            Respostas claras e objetivas para as dúvidas jurídicas mais comuns do seu dia a dia.
          </p>
        </div>

        <NuxtLink to="/blog"
          class="hidden md:inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 group shrink-0">
          Ver todos os artigos
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <NuxtLink v-for="post in posts" :key="post.path" :to="post.path"
          class="group flex flex-col bg-white border border-charcoal/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-charcoal/5 transition-all duration-500 overflow-hidden cursor-pointer">

          <div class="relative aspect-[16/10] overflow-hidden block shrink-0">
            <img
              :src="post.meta?.image || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'"
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500"></div>

            <div v-if="post.meta?.category"
              class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal shadow-sm">
              {{ post.meta?.category }}
            </div>
          </div>

          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-4 text-charcoal/40 text-xs mb-4">
              <div v-if="post.meta?.date" class="flex items-center gap-1.5">
                <Calendar class="w-3.5 h-3.5" />
                <span>{{ post.meta?.date }}</span>
              </div>
              <div v-if="post.meta?.date && post.meta?.readTime" class="w-1 h-1 rounded-full bg-gold/50"></div>
              <div v-if="post.meta?.readTime" class="flex items-center gap-1.5">
                <Clock class="w-3.5 h-3.5" />
                <span>{{ post.meta?.readTime }}</span>
              </div>
            </div>

            <div class="block group-hover:text-gold transition-colors duration-300">
              <h3 class="font-display text-xl lg:text-2xl font-bold text-charcoal leading-snug mb-4 line-clamp-2">
                {{ post.title }}
              </h3>
            </div>

            <p class="text-charcoal/60 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
              {{ post.description }}
            </p>
            <div
              class="mt-auto inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gold group-hover:text-charcoal transition-colors w-fit border-b border-gold/30 group-hover:border-charcoal pb-1">
              Ler Artigo
              <ArrowRight class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </NuxtLink>

      </div>

      <div class="mt-12 md:hidden">
        <NuxtLink to="/blog"
          class="flex items-center justify-center gap-3 w-full px-8 py-4 bg-charcoal text-white text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 group">
          Ver todos os artigos
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>