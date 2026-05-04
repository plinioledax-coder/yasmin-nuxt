<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { GraduationCap, Sparkles } from 'lucide-vue-next'

const profile = {
  name: 'Yasmin Santana',
  role: 'Advogada · OAB/BA',
  oab: 'OAB/BA Nº XXXXX',
  bio: [
    'O escritório Yasmin Santana Advocacia nasceu da crença de que o Direito vai além das leis. É sobre proteger histórias reais e as pessoas por trás de cada processo.',
    'Com dedicação total ao cliente, o escritório oferece orientação clara, estratégica e sem juridiquês. Do primeiro contato até a resolução do caso, cada cliente conta com acompanhamento próximo e comprometido em todas as etapas.',
    'A atuação do escritório é pautada pela atenção individualizada e por estratégias construídas especialmente para cada situação. Porque no Direito, detalhes fazem toda a diferença.',
  ],
  quote: 'Defendemos seus direitos com a mesma dedicação que defenderíamos os nossos.',
  specialties: ['Direito do Consumidor', 'Direito Civil', 'Direito de Família', 'Direito Trabalhista', 'Contratos', 'Inventários'],
}

// --- Scroll Reveal Logic ---
const sectionRef = ref(null)
const isRevealed = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isRevealed.value = true
      observer.disconnect()
    }
  }, { threshold: 0.15 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="sobre" ref="sectionRef" class="py-24 relative overflow-hidden bg-ivory text-charcoal">

    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: repeating-linear-gradient(0deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px);"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center justify-between max-w-7xl mx-auto">

        <div 
          class="w-full lg:w-[45%] max-w-2xl relative group shrink-0 about-item"
          :class="{ 'about-item--visible': isRevealed }"
          style="--delay: 100ms"
        >
          <div class="absolute inset-0 border border-gold/30 translate-x-4 translate-y-4 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6"></div>

          <div class="relative w-full aspect-[3/2] overflow-hidden shadow-2xl bg-charcoal/5">
            <NuxtImg
              src="/images/yasmin-about.webp"
              alt="Dra. Yasmin Santana em seu escritório"
              width="1200"
              height="800"
              format="webp"
              quality="95"
              densities="1x 2x"
              class="w-full h-full object-contain transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
            />
            
            <div class="absolute inset-0 pointer-events-none border-[12px] border-ivory opacity-50"></div>
          </div>

          <div class="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-charcoal text-white p-5 shadow-2xl border-l-2 border-gold flex items-center gap-4 transition-transform duration-500 hover:-translate-y-1 z-20">
            <div class="text-gold">
              <GraduationCap class="w-6 h-6" />
            </div>
            <div>
              <p class="font-display font-bold text-sm tracking-widest uppercase text-white">Especialista</p>
              <p class="text-[10px] text-gold/80 uppercase tracking-[0.2em] mt-1">Em Direito do Consumidor e Bancário</p>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-[50%] space-y-10">

          <div 
            class="about-item" 
            :class="{ 'about-item--visible': isRevealed }" 
            style="--delay: 200ms"
          >
            <div class="flex items-center gap-3 mb-5">
              <div class="h-px w-12 bg-gold"></div>
              <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Conheça a Advogada</span>
            </div>

            <h2 class="font-display text-5xl lg:text-6xl text-charcoal font-bold mb-4 leading-none">
              {{ profile.name }}
            </h2>
            <div class="flex items-center gap-4 flex-wrap">
              <p class="text-charcoal-light text-sm tracking-[0.25em] uppercase font-bold">
                {{ profile.role }}
              </p>
            </div>
          </div>

          <div 
            class="space-y-5 text-charcoal/70 leading-relaxed text-base lg:text-lg font-body font-light about-item"
            :class="{ 'about-item--visible': isRevealed }" 
            style="--delay: 300ms"
          >
            <p v-for="(p, i) in profile.bio" :key="i">{{ p }}</p>
          </div>

          <div 
            class="relative pl-8 py-2 border-l-2 border-gold about-item"
            :class="{ 'about-item--visible': isRevealed }" 
            style="--delay: 400ms"
          >
            <Sparkles class="absolute top-0 -left-[9px] w-4 h-4 text-gold bg-ivory py-0.5" />
            <p class="font-display italic text-charcoal-light text-2xl leading-relaxed font-medium">
              "{{ profile.quote }}"
            </p>
          </div>

          <div 
            class="pt-6 border-t border-charcoal/10 about-item"
            :class="{ 'about-item--visible': isRevealed }" 
            style="--delay: 500ms"
          >
            <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-5">
              Áreas de Especialização
            </p>
            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="spec in profile.specialties"
                :key="spec"
                class="px-5 py-2.5 bg-white border border-charcoal/5 text-charcoal text-[11px] font-semibold tracking-widest uppercase hover:bg-charcoal hover:text-gold hover:border-charcoal transition-all duration-300 cursor-default shadow-sm"
              >
                {{ spec }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ─── Stagger Reveal Animation ─────────────────────────────── */
.about-item {
  opacity: 0;
  transform: translateY(30px);
  transition: 
    opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms),
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms);
}

.about-item--visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
