<script setup>
import { Users, FileText, Briefcase, Home, Scale, Car, CheckCircle2 } from 'lucide-vue-next'

const services = [
  {
    id: '01',
    icon: Users,
    title: 'Direito de Família',
    desc: 'Divórcio, guarda de filhos, pensão alimentícia e inventários com sensibilidade e agilidade. Cuido do seu processo como se fosse o meu.', 
    link: '/servicos/direito-de-familia' 
  },
  { 
    id: '02', 
    icon: Briefcase, 
    title: 'Trabalhista', 
    desc: 'Verbas rescisórias, horas extras, demissão indevida e assédio moral.', 
    link: '/servicos/direito-trabalhista' 
  },
  { 
    id: '03', 
    icon: FileText, 
    title: 'Consumidor', 
    desc: 'Cobranças indevidas, negativações, produtos com defeito e cancelamentos.', 
    link: '/servicos/direito-do-consumidor' 
  },
  { 
    id: '04', 
    icon: Home, 
    title: 'Imobiliário', 
    desc: 'Compra, venda, locação, usucapião e regularização de imóveis.', 
    link: '/servicos/direito-imobiliario' 
  },
  { 
    id: '05', 
    icon: Scale, 
    title: 'Civil', 
    desc: 'Contratos, responsabilidade civil, cobranças e danos morais e materiais.', 
    link: '/servicos/direito-civil' 
  },
{ 
    id: '06', 
    icon: Car,
    title: 'Busca e Apreensão', 
    desc: 'Defesa especializada contra busca e apreensão de veículos, bloqueios judiciais e revisão de juros abusivos.', 
    link: '/servicos/busca-e-apreensao' 
  }
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

    <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: repeating-linear-gradient(45deg, transparent, transparent 100px, #C9A84C 100px, #C9A84C 101px);">
    </div>
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent">
    </div>

    <div class="container mx-auto px-6 relative z-10 max-w-7xl">

      <div class="max-w-3xl mb-16 lg:mb-20">
        <div class="flex items-center gap-3 mb-5">
          <div class="h-px w-10 bg-gold"></div>
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Áreas de Atuação</span>
        </div>
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
          Soluções jurídicas para <br class="hidden md:block">
          <span class="text-gold italic font-medium">o que realmente importa.</span>
        </h2>
        <p class="mt-6 text-white/50 text-lg leading-relaxed max-w-xl">
          Atuo em áreas que impactam diretamente a vida das pessoas, aliando estratégia técnica à sensibilidade.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        <div v-for="item in services" :key="item.id"
          class="group relative bg-[#0C0A08] p-10 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full">

          <div
            class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
          <div
            class="absolute -top-20 -right-20 w-40 h-40 bg-gold rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
          </div>

          <div class="relative z-10 flex flex-col h-full">

            <div class="flex justify-between items-start mb-8">
              <span
                class="font-display text-white/10 text-4xl font-bold tracking-widest group-hover:text-gold/20 transition-colors duration-500">
                {{ item.id }}
              </span>
              <div
                class="w-12 h-12 flex items-center justify-center bg-white/5 text-gold rounded-sm group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                <component :is="item.icon" class="w-5 h-5" />
              </div>
            </div>

            <h3
              class="font-display text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
              {{ item.title }}
            </h3>

            <p class="text-white/45 text-sm leading-relaxed flex-grow">
              {{ item.desc }}
            </p>

            <div class="mt-6 pt-6 border-t border-white/5 mt-auto">
              <NuxtLink :to="item.link"
                class="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gold/80 hover:text-gold transition-colors group/btn">
                Saiba Mais
                <Icon name="lucide:arrow-right" class="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>

          </div>
        </div>

      </div>

      <div class="mt-20 p-8 md:p-12 border border-white/10 bg-[#0C0A08] relative overflow-hidden group">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gold rounded-full blur-[120px] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
        </div>

        <div class="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">
          <div class="text-center xl:text-left">
            <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">Compromisso</span>
            <h3 class="font-display text-3xl font-bold text-white leading-tight">
              Advocacia com <span class="text-gold italic font-medium">propósito e resultado.</span>
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div v-for="diff in differentials" :key="diff" class="flex items-center gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
              <p class="text-white/60 text-sm tracking-wide">{{ diff }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>