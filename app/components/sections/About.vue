<script setup>
import { GraduationCap, Sparkles } from 'lucide-vue-next'

const profile = {
  name: 'Yasmin Santana',
  role: 'Advogada · OAB/BA',
  oab: 'OAB/BA Nº XXXXX',
  bio: [
    'Olá! Sou a Yasmin, advogada apaixonada por justiça e pelo ser humano por trás de cada processo. Acredito que o Direito vai além das leis — é sobre proteger histórias reais.',
    'Atuo com dedicação total ao cliente, oferecendo orientação clara, estratégica e sem juridiquês. Do primeiro contato até a resolução do caso, você nunca estará sozinho.',
    'Para mim, cada cliente merece atenção individualizada e uma estratégia construída especialmente para seu caso. Porque no Direito, detalhes fazem toda a diferença.',
  ],
  quote: 'Defendo seus direitos com a mesma dedicação que eu defenderia os meus.',
  specialties: ['Direito Civil', 'Direito do Consumidor', 'Direito de Família', 'Direito Trabalhista', 'Contratos', 'Inventários'],
}
</script>

<template>
  <section id="sobre" class="py-24 relative overflow-hidden" style="background: #FAFAF8;">

    <!-- Top gold line -->
    <div
      class="absolute top-0 left-0 w-full h-px"
      style="background: linear-gradient(to right, transparent, #C9A84C40, transparent);"
    ></div>

    <!-- Subtle grid texture -->
    <div
      class="absolute inset-0 opacity-[0.025] pointer-events-none"
      style="background-image: repeating-linear-gradient(0deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px);"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center justify-center">

        <!-- Image column -->
        <div class="w-full lg:w-2/5 max-w-md relative group shrink-0">

          <!-- Offset decorative border -->
          <div
            class="absolute inset-0 border border-gold/30 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"
          ></div>

          <div
            class="relative w-full aspect-[3/4] overflow-hidden shadow-2xl"
            style="clip-path: polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%);"
          >
            <!--
              Coloque em /public/images/ a foto da Yasmin com o nome: yasmin-about.jpg
              Proporção ideal: retrato, 800x1067px mínimo
              Pode ser a mesma foto do hero ou uma diferente (sugestão: ambiente de escritório)
            -->
            <img
              src="/images/yasmin-about.png"
              alt="Yasmin Santana"
              class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            >
            <div
              class="absolute inset-0"
              style="background: linear-gradient(to top, rgba(26,24,20,0.25) 0%, transparent 60%);"
            ></div>
          </div>

          <!-- Credential badge -->
          <div
            class="absolute bottom-8 -right-6 bg-charcoal text-white p-4 shadow-xl border-l-2 border-gold flex items-center gap-3"
          >
            <div class="p-2 text-gold">
              <GraduationCap class="w-5 h-5" />
            </div>
            <div>
              <p class="font-display font-bold text-xs tracking-widest uppercase text-white">Pós-Graduada</p>
              <p class="text-[10px] text-gold/80 uppercase tracking-wide mt-0.5">Direito Civil</p>
            </div>
          </div>
        </div>

        <!-- Text column -->
        <div class="w-full lg:w-1/2 space-y-8">

          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="h-px w-10 bg-gold"></div>
              <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Sobre</span>
            </div>

            <h2 class="font-display text-5xl lg:text-6xl text-charcoal font-bold mb-3 leading-tight">
              {{ profile.name }}
            </h2>
            <p class="text-gold text-base tracking-[0.2em] uppercase font-semibold">
              {{ profile.role }}
            </p>
          </div>

          <div class="space-y-4 text-charcoal/65 leading-relaxed text-base lg:text-lg">
            <p v-for="(p, i) in profile.bio" :key="i">{{ p }}</p>
          </div>

          <!-- Quote -->
          <div class="relative pl-6 py-4 border-l-2 border-gold/50">
            <p class="font-display italic text-charcoal text-xl leading-relaxed">
              <Sparkles class="inline w-4 h-4 text-gold mb-1 mr-2" />
              "{{ profile.quote }}"
            </p>
          </div>

          <!-- OAB badge -->
          <div
            class="inline-block px-4 py-2 border border-gold/30 text-[10px] font-bold tracking-[0.3em] uppercase text-charcoal/50"
          >
            {{ profile.oab }}
          </div>

          <!-- Specialties -->
          <div class="pt-2">
            <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-4">
              Áreas de Especialização
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="spec in profile.specialties"
                :key="spec"
                class="px-4 py-2 border border-charcoal/10 text-charcoal text-xs font-semibold tracking-wider uppercase hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 cursor-default"
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
