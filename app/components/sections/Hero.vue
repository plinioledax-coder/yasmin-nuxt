<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Scale, ShieldCheck, Award, Globe } from 'lucide-vue-next'


// --- Mouse parallax ---
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  mouseX.value = (clientX / innerWidth - 0.5) * 2
  mouseY.value = (clientY / innerHeight - 0.5) * 2
}

onMounted(() => window.addEventListener('mousemove', handleMouseMove))
onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))

// --- Scroll suave (seguro para SSR) ---
const scrollTo = (id) => {
  if (import.meta.client) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}

// --- Stagger reveal na entrada ---
const revealed = ref(false)
onMounted(() => {
  // pequeno delay para garantir que o CSS de animação seja aplicado após mount
  requestAnimationFrame(() => { revealed.value = true })
})
</script>

<template>
  <header class="relative min-h-screen flex items-center overflow-hidden bg-charcoal pt-24">

    <!-- Geometric diagonal lines -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
      style="background-image: repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(201,168,76,0.5) 80px, rgba(201,168,76,0.5) 81px);">
    </div>

    <!-- Radial gold glow que segue o mouse — parallax lento -->
    <div class="absolute z-0 pointer-events-none transition-transform duration-500 ease-out"
      :style="{ transform: `translate(${mouseX * -25}px, ${mouseY * -25}px)` }">
      <div class="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style="background: radial-gradient(circle, #C9A84C 0%, transparent 70%);"></div>
    </div>

    <!-- Segundo glow (canto direito) em direção oposta para profundidade -->
    <div class="absolute z-0 pointer-events-none transition-transform duration-700 ease-out"
      :style="{ transform: `translate(${mouseX * 15}px, ${mouseY * 15}px)` }">
      <div class="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
        style="background: radial-gradient(circle, #C9A84C 0%, transparent 70%);"></div>
    </div>


    <!-- Grid principal -->
    <div
      class="container mx-auto px-6 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-8 lg:py-0">

      <!-- ========== FOTO ========== -->
      <div class="w-full lg:col-span-6 lg:order-last relative flex justify-center items-center"
        :class="{ 'hero-photo-reveal': revealed }">
        <div
          class="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-[420px] transition-transform duration-200 ease-out"
          :style="{ transform: `translate(${mouseX * 8}px, ${mouseY * 8}px)` }">
          <div
            class="absolute inset-x-6 inset-y-4 border border-gold/20 rotate-2 translate-x-3 translate-y-3 hidden sm:block">
          </div>
          <div class="absolute inset-x-3 inset-y-2 border border-gold/10 -rotate-1 hidden sm:block"></div>

          <div class="relative w-full aspect-[2/3] overflow-hidden shadow-2xl shadow-black/40 mx-auto group"
            style="clip-path: polygon(0 0, 95% 0, 100% 3%, 100% 100%, 5% 100%, 0 97%);">
            <NuxtImg src="/images/yasmin-hero.webp" alt="Yasmin Santana - Advogada" width="600" height="900" preload
              format="webp" quality="90"
              class="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-[2s]" />

            <div class="absolute inset-0 pointer-events-none"
              style="background: linear-gradient(to top, rgba(26,24,20,0.65) 0%, transparent 40%);"></div>

            <div
              class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:hidden pointer-events-none">
              <div class="p-3 sm:p-4 backdrop-blur-md border border-gold/30" style="background: rgba(26,24,20,0.82);">
                <p class="font-display text-white font-bold text-xs sm:text-sm tracking-widest uppercase">Yasmin Santana
                </p>
                <p class="text-gold text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mt-1">Advogada · OAB/BA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========== TEXTO ========== -->
      <div class="w-full lg:col-span-6 space-y-6 lg:space-y-8">

        <!-- Tagline -->
        <div class="flex items-center gap-3 hero-item" :class="{ 'hero-item--visible': revealed }" style="--delay: 0ms">
          <div class="h-px w-10 bg-gold"></div>
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">OAB/BA · Advocacia</span>
        </div>

        <!-- Título -->
        <h1
          class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white tracking-tight hero-item"
          :class="{ 'hero-item--visible': revealed }" :style="{
            '--delay': '120ms',
            transform: `translate(${mouseX * -3}px, ${mouseY * -3}px)`
          }">
          Seu direito,
          <br>
          <span class="text-gold">defendido</span>
          <br>
          com excelência.
        </h1>

        <!-- Parágrafo -->
        <p class="font-body text-white/55 text-base lg:text-lg leading-relaxed max-w-md hero-item"
          :class="{ 'hero-item--visible': revealed }" style="--delay: 220ms">
          Atendimento jurídico personalizado, estratégico e humanizado.
          Cada caso é único — e merece cuidado dedicado.
        </p>

        <!-- Botões -->
        <div class="flex flex-row flex-wrap gap-3 pt-2 hero-item" :class="{ 'hero-item--visible': revealed }"
          style="--delay: 320ms">
          <button @click="scrollTo('contato')"
            class="group relative px-6 sm:px-8 py-3 sm:py-4 text-charcoal font-bold text-[10px] sm:text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/20 whitespace-nowrap"
            style="background: linear-gradient(135deg, #C9A84C, #F0D080);">
            <span class="flex items-center gap-2">
              Agendar Consulta
              <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button @click="scrollTo('sobre')"
            class="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-bold text-[10px] sm:text-[11px] tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-300 whitespace-nowrap">
            Conheça Yasmin
          </button>
        </div>

        <!-- Trust badges -->
        <div class="pt-3 flex flex-wrap items-center gap-5 border-t border-white/10 hero-item"
          :class="{ 'hero-item--visible': revealed }" style="--delay: 420ms">
          <div
            class="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors duration-300 cursor-default">
            <Scale class="w-4 h-4 text-gold" />
            <span>OAB/BA</span>
          </div>
          <div
            class="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors duration-300 cursor-default">
            <ShieldCheck class="w-4 h-4 text-gold" />
            <span>Presencial & Online</span>
          </div>
          <div
            class="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors duration-300 cursor-default">
            <Award class="w-4 h-4 text-gold" />
            <span>+5 anos de atuação</span>
          </div>
          <div
            class="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors duration-300 cursor-default">
            <Globe class="w-4 h-4 text-gold" />
            <span>Atendimento Nacional</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hero-item"
      :class="{ 'hero-item--visible': revealed }" style="--delay: 600ms">
      <span class="text-white/30 text-[9px] tracking-[0.35em] uppercase">Deslize</span>
      <div class="w-px h-10 overflow-hidden">
        <div class="w-full h-full bg-gradient-to-b from-gold/60 to-transparent animate-scroll-line"></div>
      </div>
    </div>

  </header>
</template>

<style scoped>
/* ─── Stagger reveal ─────────────────────────────────────────── */
.hero-item {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms),
    transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms);
}

.hero-item--visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Foto: fade + leve scale na entrada ─────────────────────── */
.hero-photo-reveal {
  animation: photoReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 150ms both;
}

@keyframes photoReveal {
  from {
    opacity: 0;
    transform: scale(0.97) translateY(20px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* ─── Scroll indicator: linha caindo em loop ─────────────────── */
@keyframes scrollLine {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

.animate-scroll-line {
  animation: scrollLine 1.8s ease-in-out infinite;
}
</style>