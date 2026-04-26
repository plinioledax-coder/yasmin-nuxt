<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phone = '5571996558882'
const message = encodeURIComponent('Olá Yasmin! Visitei seu site e gostaria de saber mais sobre seus serviços jurídicos.')
const link = `https://wa.me/${phone}?text=${message}`

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 100
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <transition name="fade-slide">
    <a
      v-if="visible"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Yasmin Santana via WhatsApp"
      class="group fixed bottom-12 right-8 z-50 flex items-center justify-center w-14 h-14 transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-2xl border border-gold/30"
      style="background: linear-gradient(135deg, #C9A84C, #F0D080);"
    >
      <!-- Pulse ring -->
      <span
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style="transform: scale(1.5); background: radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%);"
      />

      <!-- WhatsApp SVG -->
      <svg
        class="w-7 h-7 relative text-charcoal"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>

      <!-- Label tooltip -->
      <span
        class="absolute right-16 whitespace-nowrap text-[10px] tracking-[0.2em] uppercase px-4 py-2 font-bold shadow-lg border border-gold/30 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-charcoal"
        style="background: linear-gradient(135deg, #C9A84C, #F0D080);"
      >
        Fale com Yasmin
      </span>
    </a>
  </transition>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.5);
}
</style>
