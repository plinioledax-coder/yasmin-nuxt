<script setup>
import { Users, FileText, Briefcase, Home, Scale, Heart, CheckCircle2 } from 'lucide-vue-next'

const featured = {
  icon: Users,
  title: 'Direito de Família',
  desc: 'Divórcio, guarda de filhos, pensão alimentícia e inventários com sensibilidade e agilidade. Cuido do seu processo como se fosse o meu.',
}

const services = [
  { numeral: 'II',  icon: Briefcase, title: 'Trabalhista',  desc: 'Verbas rescisórias, horas extras, demissão indevida e assédio moral.' },
  { numeral: 'III', icon: FileText,  title: 'Consumidor',   desc: 'Cobranças indevidas, negativações, produtos com defeito e cancelamentos.' },
  { numeral: 'IV',  icon: Home,      title: 'Imobiliário',  desc: 'Compra, venda, locação, usucapião e regularização de imóveis.' },
  { numeral: 'V',   icon: Scale,     title: 'Civil',        desc: 'Contratos, responsabilidade civil, cobranças e danos morais e materiais.' },
  { numeral: 'VI',  icon: Heart,     title: 'Humanizado',   desc: 'Atenção individual, linguagem clara e total transparência em cada etapa.' },
]

const differentials = [
  'Atendimento 100% personalizado',
  'Consulta inicial sem burocracia',
  'Atuação presencial e online',
  'Comunicação clara e direta',
]
</script>

<template>
  <section id="servicos" class="py-28 bg-charcoal relative overflow-hidden">

    <div class="absolute inset-0 opacity-[0.035] pointer-events-none"
      style="background-image: repeating-linear-gradient(45deg, transparent, transparent 100px, #C9A84C 100px, #C9A84C 101px);"></div>
    <div class="absolute top-0 left-0 w-full h-px" style="background: linear-gradient(to right, transparent, #C9A84C50, transparent);"></div>
    <div class="absolute bottom-0 left-0 w-full h-px" style="background: linear-gradient(to right, transparent, #C9A84C50, transparent);"></div>

    <div class="container mx-auto px-6 relative z-10">

      <!-- Section header -->
      <div class="max-w-2xl mb-20">
        <div class="flex items-center gap-3 mb-5">
          <div class="h-px w-10 bg-gold"></div>
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Áreas de Atuação</span>
        </div>
        <h2 class="font-display text-4xl md:text-5xl text-white font-bold leading-tight">
          Soluções jurídicas para
          <span class="text-gold">
            o que realmente importa.
          </span>
        </h2>
        <p class="mt-5 text-white/45 text-lg leading-relaxed">
          Atuo em áreas que impactam diretamente a vida das pessoas, com estratégia e dedicação.
        </p>
      </div>

      <!-- Asymmetric grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/[0.05]">

        <!-- Featured card (big, left) -->
        <div class="lg:col-span-5 group bg-charcoal p-12 relative overflow-hidden transition-all duration-500 hover:bg-[#1E1B15] flex flex-col justify-between min-h-[360px]">
          <div class="absolute left-0 top-0 w-0 h-full group-hover:w-[2px] transition-all duration-400"
            style="background: linear-gradient(to bottom, #C9A84C, #F0D080);"></div>
          <span class="absolute bottom-4 right-6 font-display text-[110px] leading-none font-bold opacity-[0.05] select-none text-gold">I</span>

          <div>
            <div class="w-12 h-12 flex items-center justify-center border border-gold/25 text-gold mb-10 group-hover:border-gold transition-colors">
              <component :is="featured.icon" class="w-5 h-5" />
            </div>
            <div class="flex items-start gap-4 mb-5">
              <span class="font-display text-gold/25 text-5xl font-bold leading-none mt-1 select-none">I</span>
              <h3 class="font-display text-3xl font-bold text-white leading-tight">{{ featured.title }}</h3>
            </div>
            <p class="text-white/45 leading-relaxed">{{ featured.desc }}</p>
          </div>

          <div class="mt-8 flex items-center gap-3 text-gold text-[10px] tracking-[0.3em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="h-px w-8 bg-gold"></div>
            <span>Saiba mais</span>
          </div>
        </div>

        <!-- 5 smaller cards in 2-col sub-grid -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.05]">
          <div v-for="item in services" :key="item.numeral"
            class="group bg-charcoal p-8 relative overflow-hidden transition-all duration-400 hover:bg-[#1E1B15] flex flex-col gap-5">
            <div class="absolute left-0 top-0 w-0 h-full group-hover:w-[2px] transition-all duration-400"
              style="background: linear-gradient(to bottom, #C9A84C, #F0D080);"></div>
            <span class="absolute bottom-2 right-3 font-display text-[70px] leading-none font-bold opacity-[0.05] select-none text-gold">{{ item.numeral }}</span>

            <div class="flex items-center gap-3">
              <span class="font-display text-gold/25 text-2xl font-bold leading-none select-none">{{ item.numeral }}</span>
              <div class="w-9 h-9 flex items-center justify-center border border-gold/20 text-gold group-hover:border-gold/50 transition-colors shrink-0">
                <component :is="item.icon" class="w-4 h-4" />
              </div>
            </div>
            <h3 class="font-display text-xl font-bold text-white">{{ item.title }}</h3>
            <p class="text-white/40 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>

      </div>

      <!-- Differentials -->
      <div class="mt-16 p-10 md:p-14 border border-gold/20 relative overflow-hidden"
        style="background: linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%);">
        <div class="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-10" style="background: #C9A84C;"></div>
        <div class="flex flex-col lg:flex-row items-center gap-10">
          <div class="lg:w-2/5">
            <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">Por que nos escolher</span>
            <h3 class="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              Advocacia com propósito e resultado.
            </h3>
          </div>
          <div class="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div v-for="diff in differentials" :key="diff" class="flex items-start gap-3">
              <CheckCircle2 class="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p class="text-white/65 text-sm font-medium">{{ diff }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
