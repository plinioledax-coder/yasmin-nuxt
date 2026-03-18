<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Scale, ShieldCheck } from 'lucide-vue-next'

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  mouseX.value = (clientX / innerWidth - 0.5) * 2
  mouseY.value = (clientY / innerHeight - 0.5) * 2
}

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('mousemove', handleMouseMove))
onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))
</script>

<template>
  <header class="relative min-h-screen flex items-center overflow-hidden bg-charcoal pt-24">

    <!-- Geometric diagonal lines -->
    <div
      class="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
      style="background-image: repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(201,168,76,0.5) 80px, rgba(201,168,76,0.5) 81px);"
    ></div>

    <!-- Radial gold glow that follows mouse -->
    <div
      class="absolute z-0 pointer-events-none transition-transform duration-200 ease-out"
      :style="{ transform: `translate(${mouseX * -20}px, ${mouseY * -20}px)` }"
    >
      <div
        class="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style="background: radial-gradient(circle, #C9A84C 0%, transparent 70%);"
      ></div>
    </div>

    <!-- Logo YS monogram as watermark (canto direito, atrás) -->
    <div class="absolute right-0 top-0 h-full w-[55%] overflow-hidden z-0 hidden lg:block pointer-events-none">
      <!-- Diagonal gold overlay -->
      <div
        class="absolute inset-0 opacity-[0.06]"
        style="background: linear-gradient(135deg, transparent 30%, #C9A84C 100%);"
      ></div>
      <!-- Logo circular como marca d'água -->
      <img
        src="/images/logo-circle.png"
        alt=""
        class="absolute top-1/2 right-[-8%] -translate-y-1/2 w-[520px] h-[520px] object-contain opacity-[0.06] select-none"
        aria-hidden="true"
      />
      <!-- Linhas verticais decorativas -->
      <div class="absolute top-1/4 right-0 w-px h-2/3 bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>
      <div class="absolute top-1/3 right-20 w-px h-1/2 bg-gradient-to-b from-transparent via-gold/15 to-transparent"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-8 lg:py-0">

      <!-- Photo side — aparece PRIMEIRO no mobile, mas menor e com aspect-ratio fixo -->
      <div class="w-full lg:col-span-6 lg:order-last relative flex justify-center items-center">
        <div
          class="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-none lg:h-[580px] transition-transform duration-150 ease-out"
          :style="{ transform: `translate(${mouseX * 8}px, ${mouseY * 8}px)` }"
        >
          <!-- Decorative offset frames — ocultos no mobile para não vazar -->
          <div class="absolute inset-x-8 inset-y-4 border border-gold/20 rotate-2 translate-x-3 translate-y-3 hidden sm:block"></div>
          <div class="absolute inset-x-4 inset-y-2 border border-gold/10 -rotate-1 hidden sm:block"></div>

          <!-- Main photo -->
          <div
            class="relative w-full aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden shadow-2xl shadow-black/40 mx-auto group"
            style="clip-path: polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%);"
          >
            <img
              src="/images/yasmin-hero.png"
              alt="Yasmin Santana - Advogada"
              class="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-[2s]"
            >
            <div
              class="absolute inset-0"
              style="background: linear-gradient(to top, rgba(26,24,20,0.55) 0%, transparent 55%);"
            ></div>

            <!-- Name card -->
            <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div
                class="p-3 sm:p-4 backdrop-blur-md border border-gold/30"
                style="background: rgba(26,24,20,0.82);"
              >
                <p class="font-display text-white font-bold text-xs sm:text-sm tracking-widest uppercase">Yasmin Santana</p>
                <p class="text-gold text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mt-1">Advogada · OAB/BA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Text side -->
      <div class="w-full lg:col-span-6 space-y-6 lg:space-y-8 animate-slide-up">

        <div class="flex items-center gap-3">
          <div class="h-px w-10 bg-gold"></div>
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">OAB/BA · Advocacia</span>
        </div>

        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white tracking-tight">
          Seu direito,
          <br>
          <span class="text-gold">defendido</span>
          <br>
          com excelência.
        </h1>

        <p class="font-body text-white/55 text-base lg:text-lg leading-relaxed max-w-md">
          Atendimento jurídico personalizado, estratégico e humanizado.
          Cada caso é único — e merece cuidado dedicado.
        </p>

        <!-- Botões: lado a lado no mobile mesmo, com tamanho natural -->
        <div class="flex flex-row flex-wrap gap-3 pt-2">
          <button
            @click="scrollTo('contato')"
            class="group relative px-6 sm:px-8 py-3 sm:py-4 text-charcoal font-bold text-[10px] sm:text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/20 whitespace-nowrap"
            style="background: linear-gradient(135deg, #C9A84C, #F0D080);"
          >
            <span class="flex items-center gap-2">
              Agendar Consulta
              <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            @click="scrollTo('sobre')"
            class="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-bold text-[10px] sm:text-[11px] tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-300 whitespace-nowrap"
          >
            Conheça Yasmin
          </button>
        </div>

        <!-- Trust badges -->
        <div class="pt-3 flex flex-wrap items-center gap-5 border-t border-white/10">
          <div class="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase">
            <Scale class="w-4 h-4 text-gold" />
            <span>OAB/BA</span>
          </div>
          <div class="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase">
            <ShieldCheck class="w-4 h-4 text-gold" />
            <span>Presencial & Online</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <div class="w-px h-14 bg-gradient-to-b from-transparent via-gold/50 to-transparent animate-pulse"></div>
    </div>

  </header>
</template>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>