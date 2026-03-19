<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const checkScroll = () => {
  // Passando de 50px para evitar que a animação dispare com qualquer micro-movimento
  isScrolled.value = window.scrollY > 50
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => window.addEventListener('scroll', checkScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  document.body.style.overflow = ''
})

const menuItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]
</script>

<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-500 ease-in-out" 
    :class="isScrolled && !isMenuOpen
      ? 'py-3 bg-ivory/95 backdrop-blur-md border-b border-gold/30 shadow-sm'
      : 'py-6 bg-transparent border-b border-transparent'"
  >
    <div class="container mx-auto px-6 flex justify-between items-center relative">

      <a href="#" class="relative z-50 flex items-center" @click="closeMenu">
        <NuxtImg 
          src="/images/yasmin-symbol.png" 
          alt="Yasmin Santana" 
          width="48"
          height="48"
          class="h-10 w-auto object-contain transition-transform duration-500 hover:scale-105" 
        />
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a v-for="item in menuItems" :key="item.label" :href="item.href"
          class="nav-link text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
          :class="isScrolled ? 'text-charcoal hover:text-gold' : 'text-white/80 hover:text-gold'">
          {{ item.label }}
        </a>

        <a href="#contato"
          class="px-6 py-2.5 border text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-md"
          :class="isScrolled
            ? 'border-gold text-gold hover:bg-gold hover:text-white'
            : 'border-white/50 text-white hover:bg-white hover:text-charcoal'">
          Consulta
        </a>
      </div>

      <button @click="isMenuOpen = !isMenuOpen"
        class="md:hidden z-50 transition-colors duration-300 relative focus:outline-none"
        :class="isMenuOpen ? 'text-gold' : isScrolled ? 'text-charcoal' : 'text-white'">
        <X v-if="isMenuOpen" class="w-7 h-7" />
        <Menu v-else class="w-7 h-7" />
      </button>
    </div>

    <Transition name="fade">
      <div v-if="isMenuOpen"
        class="fixed inset-0 bg-charcoal z-40 flex flex-col justify-center items-center w-screen h-screen">
        <div class="absolute inset-0 opacity-5 pointer-events-none"
          style="background-image: repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px);">
        </div>

        <div class="text-center space-y-10 animate-slide-up relative z-10">
          <NuxtImg src="/images/yasmin-logo.png" alt="Yasmin Santana Advocacia"
            width="240" 
            class="w-48 sm:w-56 h-auto object-contain mx-auto mb-8 opacity-90" />

          <div class="flex flex-col gap-7">
            <a v-for="item in menuItems" :key="item.label" :href="item.href" @click="closeMenu"
              class="font-display text-3xl text-white/90 hover:text-gold transition-colors font-light tracking-widest uppercase">
              {{ item.label }}
            </a>

            <a href="#contato" @click="closeMenu"
              class="mt-4 inline-block border border-gold text-gold text-sm tracking-[0.3em] uppercase font-bold py-3 px-10 hover:bg-gold hover:text-charcoal transition-all duration-300">
              Agendar Consulta
            </a>
          </div>
        </div>

        <div class="absolute bottom-10 text-white/20 text-[9px] uppercase tracking-[0.4em]">
          OAB/BA · Yasmin Santana
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #C9A84C;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.4s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>