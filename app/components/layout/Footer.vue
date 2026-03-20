<script setup>
import { ArrowUp, Instagram, Mail, MapPin, MessageCircle, Linkedin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Configuração do WhatsApp padronizada
const phone = '557192128914'
const message = encodeURIComponent('Olá Yasmin! Visitei seu site e gostaria de saber mais sobre seus serviços jurídicos.')
const link = `https://wa.me/${phone}?text=${message}`
</script>

<template>
  <footer id="footer" class="bg-[#0C0A08] text-white relative overflow-hidden border-t border-gold/10">

    <div class="absolute top-0 left-0 w-full h-px" style="background: linear-gradient(to right, transparent, #C9A84C50, transparent);"></div>

    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">

        <div class="md:col-span-5 space-y-6">
          <NuxtLink to="/" @click="scrollToTop" class="inline-block group">
            <NuxtImg 
              src="/images/yasmin-logo.png" 
              alt="Yasmin Santana Advocacia" 
              width="240" 
              class="h-auto w-48 sm:w-56 object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          </NuxtLink>

          <p class="text-sm text-white/40 leading-relaxed max-w-xs mt-4">
            Advocacia humanizada com estratégia e excelência. Cada caso, uma história. Cada cliente, uma prioridade.
          </p>

          <div class="inline-block px-4 py-2 border border-gold/20 text-[9px] font-bold tracking-[0.35em] uppercase text-gold/60">
            OAB/BA Nº XXXXX
          </div>

          <div class="flex items-center gap-3 pt-2">
            <a href="https://instagram.com/yasminsantana_adv" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:border-gold hover:text-gold transition-all duration-300">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:border-gold hover:text-gold transition-all duration-300">
              <Linkedin class="w-4 h-4" />
            </a>
            <a :href="link" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:border-gold hover:text-gold transition-all duration-300">
              <MessageCircle class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div class="md:col-span-3 space-y-5">
          <h3 class="text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Menu</h3>
          <ul class="space-y-3 text-sm text-white/40">
            <li><NuxtLink to="/#sobre" class="hover:text-gold transition-colors">Sobre</NuxtLink></li>
            <li><NuxtLink to="/#servicos" class="hover:text-gold transition-colors">Áreas de Atuação</NuxtLink></li>
            <li><NuxtLink to="/#depoimentos" class="hover:text-gold transition-colors">Depoimentos</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-gold transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/#contato" class="hover:text-gold transition-colors">Contato</NuxtLink></li>
            <li><a :href="link" target="_blank" rel="noopener noreferrer" class="hover:text-gold transition-colors">Agendar Consulta</a></li>
          </ul>
        </div>

        <div class="md:col-span-4 space-y-5">
          <h3 class="text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Contato</h3>
          <ul class="space-y-4 text-sm text-white/40">
            <li class="flex items-start gap-3">
              <MapPin class="w-4 h-4 text-gold/60 mt-0.5 shrink-0" />
              <span>Salvador – BA<br>Presencial & Online</span>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-4 h-4 text-gold/60 shrink-0" />
              <a href="mailto:contato@yasminsantana.adv.br" class="hover:text-gold transition-colors">
                contato@yasminsantana.adv.br
              </a>
            </li>
            <li class="flex items-center gap-3">
              <MessageCircle class="w-4 h-4 text-gold/60 shrink-0" />
              <a :href="link" target="_blank" rel="noopener noreferrer" class="hover:text-gold transition-colors">
                (71) 9212-8914
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="border-t border-white/5">
      <div class="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p class="text-[11px] text-white/25 tracking-wider text-center md:text-left">
          © {{ currentYear }} Yasmin Santana Advocacia. Todos os direitos reservados.
        </p>
        
        <button
          @click="scrollToTop"
          class="group flex items-center justify-center gap-2 text-[10px] uppercase font-bold text-white/25 hover:text-gold transition-colors tracking-widest shrink-0"
        >
          Topo
          <ArrowUp class="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
        </button>

        <p class="text-[10px] text-white/20 tracking-[0.2em] uppercase text-center md:text-right">
          Desenvolvido por <a href="https://www.apertef1.com.br" target="_blank" rel="noopener noreferrer" class="font-bold hover:text-gold transition-colors">Aperte F1 ©</a>
        </p>
        
      </div>
    </div>
  </footer>
</template>