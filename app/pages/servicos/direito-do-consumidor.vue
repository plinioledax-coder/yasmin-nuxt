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

// ─── SEO Dinâmico focado no Consumidor em Salvador ───────────
useHead({
  title: 'Advogada de Direito do Consumidor em Salvador | Yasmin Santana',
  meta: [
    {
      name: 'description',
      content:
        'Especialista em Direito do Consumidor em Salvador: Cobranças indevidas, SPC/Serasa, voos atrasados e planos de saúde. Proteja seus direitos contra abusos.'
    },
    { property: 'og:title', content: 'Advogada de Direito do Consumidor em Salvador | Yasmin Santana' },
    {
      property: 'og:description',
      content:
        'Especialista em Direito do Consumidor em Salvador: Cobranças indevidas, negativação no SPC/Serasa, problemas com voos e planos de saúde.'
    },
    { property: 'og:type', content: 'website' }
  ]
})

// ─── Dados da página ─────────────────────────────────────────
const WHATSAPP_NUMBER = '5571992128914'
const message = "Olá Yasmin! Visitei seu site e gostaria de saber mais sobre seus serviços jurídicos em Direito do Consumidor.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const benefits = [
  'Ações de indenização por negativação indevida (SPC/Serasa).',
  'Reparação por problemas com companhias aéreas (voos atrasados, bagagem extraviada).',
  'Atuação contra abusos de planos de saúde (negativas de cobertura e reajustes).',
  'Defesa contra fraudes bancárias, clonagem de cartões e empréstimos não reconhecidos.',
  'Resolução de falhas na prestação de serviços (telefonia, internet, construtoras).'
]

const trustItems = [
  { icon: Clock,         label: 'Análise Ágil do Caso'     },
  { icon: MessageSquare, label: 'Atendimento Direto'       },
  { icon: Scale,         label: 'Reparação Justa de Danos' }
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
          Direito do <em class="text-gold not-italic font-medium">Consumidor</em>
        </h1>

        <p class="text-white/60 text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
          Equilibrando a balança entre você e as grandes empresas, garantindo o respeito aos seus direitos e a devida reparação por danos.
        </p>
      </div>
    </header>

    <section class="py-20 lg:py-32 relative" aria-label="Conteúdo sobre Direito do Consumidor">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <article class="w-full lg:w-2/3">
            <div class="space-y-8 text-charcoal/80 text-lg font-light leading-relaxed">

              <p class="text-xl lg:text-2xl font-medium text-charcoal leading-snug">
                Muitas vezes, o consumidor se sente impotente e frustrado diante de práticas abusivas cometidas por bancos, companhias aéreas, planos de saúde e concessionárias de serviços públicos.
              </p>

              <p>
                As grandes corporações frequentemente utilizam a burocracia e o desgaste emocional como táticas para que você desista de lutar pelo que é seu. É exatamente nesse cenário de desequilíbrio que nosso escritório atua: sendo a sua <strong class="text-charcoal font-semibold">voz e o seu escudo jurídico</strong> para exigir reparação.
              </p>

              <h2 class="font-display text-3xl font-bold text-charcoal mt-12 mb-6">
                Como podemos reverter essa situação?
              </h2>

              <p>
                Seja por um nome sujo indevidamente, uma recusa de tratamento médico ou a frustração de uma viagem cancelada, aplicamos as normas do Código de Defesa do Consumidor para solucionar conflitos de forma ágil, buscando sempre a justa compensação. Atuamos em casos de:
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
                Não aceite o descaso como resposta
              </h2>

              <p>
                A lei existe para proteger a parte mais vulnerável dessa relação: você. Nossa abordagem é voltada para resolver o seu problema com o menor desgaste possível, acionando as vias judiciais ou extrajudiciais mais eficientes para responsabilizar as empresas por suas falhas e garantir a sua indenização.
              </p>

              <blockquote class="my-12 p-8 border-l-4 border-gold bg-charcoal/5 not-italic">
                <p class="font-display text-2xl italic text-charcoal font-medium">
                  "O seu tempo, a sua honra e o seu dinheiro merecem respeito. Nós lutamos para que as grandes empresas também entendam isso."
                </p>
              </blockquote>

            </div>
          </article>

          <aside class="w-full lg:w-1/3 self-start">
            <div class="sticky top-32 bg-white shadow-2xl p-8 xl:p-10 border-t-4 border-gold flex flex-col gap-6">

              <h2 class="font-display text-2xl font-bold text-charcoal">
                Foi lesado por uma empresa?
              </h2>

              <p class="text-charcoal/60 text-sm leading-relaxed">
                Pare de perder tempo com SACs que não resolvem nada. Agende uma avaliação com a nossa equipe e descubra os seus direitos.
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
                aria-label="Agendar avaliação sobre direito do consumidor via WhatsApp"
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