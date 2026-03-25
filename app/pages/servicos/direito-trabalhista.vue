<script setup>
import { CheckCircle2, ArrowRight, MessageSquare, Scale, Clock } from 'lucide-vue-next'
import { onMounted, onUnmounted } from 'vue'

// ─── Detecção automática da altura do navbar ──────────────────
let navbarObserver = null

onMounted(() => {
  const setNavbarHeight = () => {
    const navbar =
      document.querySelector('nav') ||
      document.querySelector('header[role="navigation"]') ||
      document.querySelector('[data-navbar]')

    if (navbar) {
      const height = navbar.getBoundingClientRect().height
      document.documentElement.style.setProperty('--navbar-height', `${height}px`)
    } else {
      document.documentElement.style.setProperty('--navbar-height', '80px')
    }
  }

  setNavbarHeight()

  const navbar = document.querySelector('nav') || document.querySelector('[data-navbar]')
  if (navbar && typeof ResizeObserver !== 'undefined') {
    navbarObserver = new ResizeObserver(setNavbarHeight)
    navbarObserver.observe(navbar)
  }
})

onUnmounted(() => {
  navbarObserver?.disconnect()
})

// ─── SEO Dinâmico focado no Trabalhador em Salvador ───────────
useHead({
  title: 'Advogada Trabalhista em Salvador | Yasmin Santana',
  meta: [
    {
      name: 'description',
      content:
        'Especialista em Direito do Trabalho em Salvador: Rescisões, Horas Extras, Assédio Moral e Vínculo Empregatício. Proteja seus direitos. Agende uma consulta.'
    },
    { property: 'og:title', content: 'Advogada Trabalhista em Salvador | Yasmin Santana' },
    {
      property: 'og:description',
      content:
        'Especialista em Direito do Trabalho em Salvador: Rescisões, Horas Extras, Assédio Moral e Vínculo Empregatício. Proteja seus direitos.'
    },
    { property: 'og:type', content: 'website' }
  ]
})

// ─── Dados da página ─────────────────────────────────────────
const WHATSAPP_NUMBER = '5571992128914'
const message = "Olá Yasmin! Visitei seu site e gostaria de saber mais sobre seus serviços jurídicos em Direito Trabalhista.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const benefits = [
  'Cálculo, cobrança e revisão de verbas rescisórias e multas.',
  'Reconhecimento de vínculo de emprego (trabalho sem carteira assinada).',
  'Cobrança de horas extras, adicional noturno e insalubridade.',
  'Indenização por danos morais, assédio no trabalho ou acidente.',
  'Rescisão indireta (justa causa do empregador por descumprimento de contrato).'
]

const trustItems = [
  { icon: Clock,         label: 'Análise Rápida do Caso'   },
  { icon: MessageSquare, label: 'Comunicação Clara'        },
  { icon: Scale,         label: 'Estratégia Focada no Êxito'}
]
</script>

<template>
  <div class="bg-ivory min-h-screen selection:bg-gold/30 selection:text-charcoal-dark">

    <header
      class="relative bg-charcoal pb-20 lg:pb-28 overflow-hidden"
      style="padding-top: calc(var(--navbar-height, 80px) + 4rem)"
      role="banner"
    >
      <div
        aria-hidden="true"
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: repeating-linear-gradient(45deg, transparent, transparent 100px, #C9A84C 100px, #C9A84C 101px);"
      />

      <div
        aria-hidden="true"
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gold rounded-full blur-[150px] opacity-10 pointer-events-none"
      />

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-3 mb-6" aria-hidden="true">
          <div class="h-px w-8 bg-gold" />
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Área de Atuação</span>
          <div class="h-px w-8 bg-gold" />
        </div>

        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-4xl mx-auto mb-6">
          Direito <em class="text-gold not-italic font-medium">Trabalhista</em>
        </h1>

        <p class="text-white/60 text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
          Protegendo o seu sustento e o fruto do seu trabalho com atuação firme contra abusos e irregularidades contratuais.
        </p>
      </div>
    </header>

    <section class="py-20 lg:py-32 relative" aria-label="Conteúdo sobre Direito Trabalhista">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <article class="w-full lg:w-2/3">
            <div class="space-y-8 text-charcoal/80 text-lg font-light leading-relaxed">

              <p class="text-xl lg:text-2xl font-medium text-charcoal leading-snug">
                O ambiente de trabalho deve ser pautado pelo respeito mútuo e pelo cumprimento rigoroso da legislação. Infelizmente, abusos e descumprimentos contratuais ocorrem com frequência, colocando em risco a dignidade e o sustento de quem produz.
              </p>

              <p>
                Seja na ausência do pagamento correto das verbas rescisórias, na falta de assinatura da carteira de trabalho ou em situações de assédio moral, nosso escritório atua com <strong class="text-charcoal font-semibold">firmeza e estratégia técnica</strong> para garantir que nenhum direito seu seja negligenciado.
              </p>

              <h2 class="font-display text-3xl font-bold text-charcoal mt-12 mb-6">
                Como garantimos os seus direitos?
              </h2>

              <p>
                Cada relação de trabalho possui particularidades que exigem uma análise minuciosa dos fatos e da documentação. Oferecemos suporte especializado para resolver de forma assertiva demandas como:
              </p>

              <ul class="space-y-4 mt-8 mb-12" role="list">
                <li
                  v-for="item in benefits"
                  :key="item"
                  class="flex items-start gap-4 p-4 bg-white shadow-sm border border-charcoal/5 hover:border-gold/30 transition-colors rounded-sm"
                >
                  <CheckCircle2
                    class="w-6 h-6 text-gold shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span class="text-charcoal font-medium">{{ item }}</span>
                </li>
              </ul>

              <h2 class="font-display text-3xl font-bold text-charcoal mt-12 mb-6">
                Transparência e segurança do início ao fim
              </h2>

              <p>
                Sabemos que entrar com uma ação trabalhista pode gerar dúvidas e apreensão. Por isso, a nossa consultoria inicial é focada em ouvir a sua história, analisar provas e apresentar um diagnóstico realista sobre os riscos e as possibilidades de êxito do seu caso. Você terá total clareza sobre os próximos passos da sua defesa.
              </p>

              <blockquote class="my-12 p-8 border-l-4 border-gold bg-charcoal/5 not-italic">
                <p class="font-display text-2xl italic text-charcoal font-medium">
                  "O fruto do seu trabalho é o seu maior patrimônio. A nossa missão é garantir que ele seja sempre respeitado."
                </p>
              </blockquote>

            </div>
          </article>

          <aside class="w-full lg:w-1/3 self-start">
            <div class="sticky top-32 bg-white shadow-2xl p-8 xl:p-10 border-t-4 border-gold flex flex-col gap-6">

              <h2 class="font-display text-2xl font-bold text-charcoal">
                Teve seus direitos violados?
              </h2>

              <p class="text-charcoal/60 text-sm leading-relaxed">
                Não abra mão do que é seu por direito. Agende uma análise sigilosa do seu caso com a nossa equipe.
              </p>

              <ul class="space-y-4 pt-4 border-t border-charcoal/10" role="list">
                <li
                  v-for="trust in trustItems"
                  :key="trust.label"
                  class="flex items-center gap-3 text-charcoal/80"
                >
                  <component
                    :is="trust.icon"
                    class="w-5 h-5 text-gold shrink-0"
                    aria-hidden="true"
                  />
                  <span class="text-sm font-medium">{{ trust.label }}</span>
                </li>
              </ul>

              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar consulta trabalhista via WhatsApp"
                class="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-charcoal text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Analisar Meu Caso
                <ArrowRight
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>

            </div>
          </aside>

        </div>
      </div>
    </section>

  </div>
</template>