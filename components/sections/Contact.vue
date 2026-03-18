<script setup>
import { ref } from 'vue'
import { MessageCircle, CheckCircle2, MapPin, Mail, Clock } from 'lucide-vue-next'

const form = ref({ name: '', phone: '', subject: '', message: '' })
const status = ref({ submitting: false, success: false })

const handleSubmit = async () => {
  status.value.submitting = true
  await new Promise(r => setTimeout(r, 1500))
  status.value.submitting = false
  status.value.success = true
  form.value = { name: '', phone: '', subject: '', message: '' }
  setTimeout(() => { status.value.success = false }, 5000)
}
</script>

<template>
  <section id="contato" class="py-28 bg-charcoal relative overflow-hidden">

    <div class="absolute inset-0 opacity-[0.04] pointer-events-none"
      style="background-image: repeating-linear-gradient(45deg, transparent, transparent 100px, #C9A84C 100px, #C9A84C 101px);">
    </div>
    <div class="absolute top-0 left-0 w-full h-px" style="background: linear-gradient(to right, transparent, #C9A84C50, transparent);"></div>

    <div class="container mx-auto px-6 relative z-10">

      <!-- Header -->
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="h-px w-10 bg-gold"></div>
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Contato</span>
          <div class="h-px w-10 bg-gold"></div>
        </div>
        <h2 class="font-display text-4xl md:text-5xl text-white font-bold">
          Vamos conversar sobre
          <span class="text-gold">
            o seu caso?
          </span>
        </h2>
      </div>

      <div class="flex flex-col lg:flex-row border border-white/8 overflow-hidden">

        <!-- Left info panel -->
        <div class="lg:w-2/5 p-12 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 100%);">
          <div class="absolute top-0 left-0 w-1 h-full" style="background: linear-gradient(to bottom, #C9A84C, #F0D080, #C9A84C);"></div>
          <div class="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10" style="background: #C9A84C;"></div>

          <div class="relative z-10 space-y-8">
            <div>
              <h3 class="font-display text-2xl font-bold text-white mb-3">Primeiro passo: a consulta.</h3>
              <p class="text-white/50 leading-relaxed">
                Entendo seu caso, apresento as opções e definimos juntos a melhor estratégia. Sem jargões jurídicos.
              </p>
            </div>

            <div class="space-y-8 pt-4">
              <div class="flex items-start gap-4">
                <MapPin class="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-1">Escritório</h4>
                  <p class="text-white/45 text-sm leading-relaxed">Camaçari – BA<br>Atendimento presencial & online</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Clock class="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-1">Horários</h4>
                  <p class="text-white/45 text-sm">Seg a Sex: 08h às 18h<br>Sáb: 09h às 12h (online)</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Mail class="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-1">E-mail</h4>
                  <p class="text-white/45 text-sm">contato@yasminsantana.adv.br</p>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-white/10">
              <a
                href="https://wa.me/5571992128914?text=Ol%C3%A1%20Yasmin%2C%20gostaria%20de%20agendar%20uma%20consulta%20e%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os."
                target="_blank"
                class="group inline-flex items-center gap-3 text-gold hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
              >
                <MessageCircle class="w-4 h-4 group-hover:scale-110 transition-transform" />
                WhatsApp Direto
              </a>
            </div>
          </div>
        </div>

        <!-- Right form panel -->
        <div class="lg:w-3/5 p-12 bg-[#141210]">
          <form @submit.prevent="handleSubmit" class="space-y-8">

            <div v-if="status.success" class="p-4 border border-gold/30 text-gold flex items-center gap-3">
              <CheckCircle2 class="w-5 h-5 shrink-0" />
              <span class="text-sm font-bold tracking-wide">Mensagem enviada! Retorno em até 24 horas.</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="relative group">
                <input v-model="form.name" required type="text" placeholder=" "
                  class="peer w-full bg-transparent border-b border-white/15 py-3 text-white focus:border-gold focus:outline-none transition-colors text-sm" />
                <label class="absolute left-0 -top-3.5 text-[10px] text-gold font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-[10px]">
                  Seu Nome
                </label>
              </div>

              <div class="relative group">
                <input v-model="form.phone" required type="tel" placeholder=" "
                  class="peer w-full bg-transparent border-b border-white/15 py-3 text-white focus:border-gold focus:outline-none transition-colors text-sm" />
                <label class="absolute left-0 -top-3.5 text-[10px] text-gold font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-[10px]">
                  WhatsApp
                </label>
              </div>
            </div>

            <div class="relative group">
              <input v-model="form.subject" required type="text" placeholder=" "
                class="peer w-full bg-transparent border-b border-white/15 py-3 text-white focus:border-gold focus:outline-none transition-colors text-sm" />
              <label class="absolute left-0 -top-3.5 text-[10px] text-gold font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-[10px]">
                Área do Caso
              </label>
            </div>

            <div class="relative group">
              <textarea v-model="form.message" required rows="3" placeholder=" "
                class="peer w-full bg-transparent border-b border-white/15 py-3 text-white focus:border-gold focus:outline-none transition-colors resize-none text-sm"></textarea>
              <label class="absolute left-0 -top-3.5 text-[10px] text-gold font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-[10px]">
                Descreva seu caso
              </label>
            </div>

            <button
              type="submit"
              :disabled="status.submitting"
              class="w-full md:w-auto px-12 py-4 font-bold uppercase tracking-[0.3em] text-xs text-charcoal transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style="background: linear-gradient(135deg, #C9A84C, #F0D080);"
            >
              <span v-if="status.submitting">Enviando...</span>
              <span v-else>Agendar Consulta</span>
            </button>

          </form>
        </div>

      </div>
    </div>
  </section>
</template>
