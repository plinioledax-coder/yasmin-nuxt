<script setup>
import { Quote, Star, ArrowLeft, BadgeCheck } from 'lucide-vue-next'

// O Nuxt puxa a listaDepoimentos lá da pasta utils automaticamente!
// Nós contamos quantos depoimentos têm para avisar o Google.
const totalDeAvaliacoes = listaDepoimentos.length

useHead({
  title: 'Avaliações e Depoimentos | Yasmin Santana Advocacia',
  meta: [
    { name: 'description', content: 'Leia relatos reais de clientes que tiveram seus direitos garantidos pela advogada Yasmin Santana. Excelência e humanização na advocacia.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Yasmin Santana Advocacia",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "bestRating": "5",
          "ratingCount": totalDeAvaliacoes
        }
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen pt-32 pb-24 relative overflow-hidden" style="background: #FAFAF8;">

    <div class="absolute inset-0 opacity-[0.025] pointer-events-none"
      style="background-image: repeating-linear-gradient(0deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px);">
    </div>

    <div class="container mx-auto px-6 max-w-7xl relative z-10">
      
      <header class="mb-16 md:mb-24 text-center flex flex-col items-center">
        <NuxtLink to="/#depoimentos" class="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-charcoal/40 hover:text-gold transition-colors mb-8">
          <ArrowLeft class="w-3 h-3" />
          Voltar para Home
        </NuxtLink>
        
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="h-px w-10 bg-gold"></div>
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Mural de Clientes</span>
          <div class="h-px w-10 bg-gold"></div>
        </div>
        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight max-w-3xl">
          Histórias de <span class="text-gold italic font-medium">Sucesso</span>
        </h1>
        <p class="mt-6 text-charcoal/50 text-lg leading-relaxed max-w-2xl">
          Mais do que processos ganhos, celebramos o impacto real na vida de quem confiou em nosso trabalho.
        </p>

        <div class="mt-8 inline-flex items-center gap-2.5 px-5 py-2 border border-gold/30 bg-gold/5 shadow-sm">
          <BadgeCheck class="w-4 h-4 text-gold" />
          <span class="text-[10px] font-bold tracking-[0.25em] uppercase text-charcoal mt-0.5">Depoimentos reais e verificados</span>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div
          v-for="item in listaDepoimentos"
          :key="item.id"
          class="group p-8 border border-charcoal/8 bg-white hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 relative flex flex-col"
          style="clip-path: polygon(0 0, 100% 0, 100% 92%, 94% 100%, 0 100%);"
        >
          <div class="absolute top-0 left-0 w-12 h-12 overflow-hidden">
            <div class="absolute top-0 left-0 w-0 h-0 border-t-[48px] border-t-gold/20 border-r-[48px] border-r-transparent group-hover:border-t-gold/40 transition-colors duration-300"></div>
          </div>

          <Quote class="absolute top-6 right-6 w-10 h-10 text-gold/10 rotate-180" />

          <div class="flex gap-0.5 mb-6">
            <Star v-for="n in 5" :key="n" class="w-3.5 h-3.5 text-gold fill-gold" />
          </div>

          <p class="text-charcoal/65 text-base leading-relaxed mb-8 grow">
            "{{ item.text }}"
          </p>

          <div class="pt-6 border-t border-charcoal/8 mt-auto">
            <p class="font-display text-sm text-charcoal font-bold tracking-wide">{{ item.author }}</p>
            <span class="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold block mt-0.5">
              {{ item.role }}
            </span>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
