<script setup>
import { Quote, Star, ArrowRight, BadgeCheck } from 'lucide-vue-next'

const testimonials = [
  {
    id: 1,
    text: 'Me faltam elogios para falar desta profissional. Uma advogada disposta a ir até o fim por uma causa. Alguém muito humana e empatica ao qual serei sempre grata. Age com muito profissionalismo e ética. Sem dúvidas ela me orientou e auxiliou demais no meu caso. Muito empenhada e atenciosa. Tive um retorno 100% positivo dentro do que esperávamos. E para quem estiver lendo este comentário, não tenha nem uma duvida em contratar os servicos dela. É de grande valia e confiança.',
    author: 'Maria Deodato',
    role: 'Direito do Consumidor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    id: 2,
    text: 'Excelente atendimento e profissionalismo! Orienta o cliente desde o primeiro contato, com explicações claras e muita transparência em todo o processo. Sinônimo de compromisso e transparência!',
    author: 'Tereza Cruz',
    role: 'Ação Trabalhista',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    id: 3,
    text: 'Conheci a Dtra, por um outro advogado, então após levar a ela a minha demanda, com toda atenção ela me ouviu e prontamente me solicitou as provas, logo em seguida deu entrada na documentação, um ponto importante a se destacar, me manteve a par do processo o tempo todo, e sempre que tinha dúvidas, perguntava e ela sempre solicita em responder, profissionalismo enorme, muita transparência, indico muito os serviços dela.',
    author: 'Diogo Santos',
    role: 'Direito do Consumidor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop',
  },
]
</script>

<template>
  <section id="depoimentos" class="py-28 relative overflow-hidden" style="background: #FAFAF8;">

    <div class="absolute top-0 left-0 w-full h-px" style="background: linear-gradient(to right, transparent, #C9A84C40, transparent);"></div>

    <div class="absolute inset-0 opacity-[0.025] pointer-events-none"
      style="background-image: repeating-linear-gradient(0deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px);">
    </div>

    <div class="container mx-auto px-6 relative z-10">

      <div class="text-center mb-20 flex flex-col items-center">
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="h-px w-10 bg-gold"></div>
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Depoimentos</span>
          <div class="h-px w-10 bg-gold"></div>
        </div>
        <h2 class="font-display text-4xl md:text-5xl text-charcoal font-bold">
          Clientes que
          <span class="text-gold">
            conquistaram seus direitos.
          </span>
        </h2>
        <p class="mt-5 text-charcoal/50 text-lg max-w-xl mx-auto">
          Histórias reais de pessoas que encontraram na advocacia um caminho para a justiça.
        </p>
        
        <div class="mt-8 inline-flex items-center gap-2.5 px-5 py-2 border border-gold/30 bg-gold/5 shadow-sm">
          <BadgeCheck class="w-4 h-4 text-gold" />
          <span class="text-[10px] font-bold tracking-[0.25em] uppercase text-charcoal mt-0.5">Depoimentos reais e verificados</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="item in testimonials"
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

          <div class="flex items-center gap-4 pt-6 border-t border-charcoal/8 mt-auto">
            <img
              :src="item.image"
              :alt="item.author"
              class="w-12 h-12 rounded-full object-cover border-2 border-charcoal/10 group-hover:border-gold/40 transition-colors"
            >
            <div>
              <p class="font-display text-sm text-charcoal font-bold tracking-wide">{{ item.author }}</p>
              <span class="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold block mt-0.5">
                {{ item.role }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink to="/depoimentos" class="inline-flex items-center justify-center gap-3 px-10 py-4 bg-charcoal text-white text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 group">
          Ler mais relatos
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
