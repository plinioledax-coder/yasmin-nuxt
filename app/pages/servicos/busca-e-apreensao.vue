<script setup>
import { CheckCircle2, ArrowRight, Car, ShieldAlert, Clock } from 'lucide-vue-next'
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

// ─── SEO Dinâmico focado em Urgência ───────────
useHead({
  title: 'Defesa em Busca e Apreensão de Veículos em Salvador | Yasmin Santana',
  meta: [
    {
      name: 'description',
      content:
        'Ameaça de Busca e Apreensão do seu veículo? Atuação urgente para suspender liminares, revisar juros abusivos e proteger seu patrimônio. Fale agora com a advogada.'
    },
    { property: 'og:title', content: 'Defesa em Busca e Apreensão de Veículos em Salvador | Yasmin Santana' },
    {
      property: 'og:description',
      content:
        'Ameaça de Busca e Apreensão do seu veículo? Atuação urgente para suspender liminares, revisar juros abusivos e proteger seu patrimônio.'
    },
    { property: 'og:type', content: 'website' }
  ]
})

// ─── Dados da página ─────────────────────────────────────────
const WHATSAPP_NUMBER = '5571992128914'
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=URGENTE:%20Preciso%20de%20ajuda%20com%20busca%20e%20apreens%C3%A3o%20de%20ve%C3%ADculo.`

const benefits = [
  'Análise urgente do processo para identificar falhas na notificação do banco.',
  'Atuação imediata para tentar suspender a liminar de apreensão.',
  'Ação Revisional para reduzir juros abusivos e taxas ilegais do financiamento.',
  'Defesa em casos onde o veículo já foi apreendido (Purgação da Mora).',
  'Proteção contra leilões precipitados e bloqueios judiciais indevidos.'
]

const trustItems = [
  { icon: Clock,       label: 'Atendimento de Urgência' },
  { icon: ShieldAlert, label: 'Defesa Estratégica'      },
  { icon: Car,         label: 'Proteção do Veículo'     }
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
          Defesa em <em class="text-gold not-italic font-medium">Busca e Apreensão</em>
        </h1>

        <p class="text-white/60 text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
          O banco ameaçou tomar o seu veículo? Agimos com urgência para suspender liminares, revisar juros abusivos e proteger o seu patrimônio.
        </p>
      </div>
    </header>

    <section class="py-20 lg:py-32 relative" aria-label="Conteúdo sobre Busca e Apreensão">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <article class="w-full lg:w-2/3">
            <div class="space-y-8 text-charcoal/80 text-lg font-light leading-relaxed">

              <p class="text-xl lg:text-2xl font-medium text-charcoal leading-snug">
                Receber uma notificação de Busca e Apreensão ou ter o veículo levado pelo oficial de justiça é uma situação desesperadora. No entanto, <strong class="text-charcoal font-semibold">a lei também exige que os bancos cumpram regras rígidas</strong>, e muitas vezes eles falham nesse processo.
              </p>

              <p>
                As instituições financeiras costumam cobrar juros abusivos, taxas ocultas e enviar notificações irregulares. É exatamente nessas falhas processuais que a nossa defesa atua, buscando a suspensão da apreensão e a renegociação justa da sua dívida.
              </p>

              <h2 class="font-display text-3xl font-bold text-charcoal mt-12 mb-6">
                Ainda há tempo de reverter a situação?
              </h2>

              <p>
                Sim. Mas em casos de Busca e Apreensão, o <strong class="text-charcoal font-bold">tempo é o fator mais crítico</strong>. Após a apreensão do veículo, a lei estipula prazos curtíssimos (apenas 5 dias) para agir antes que o carro vá a leilão. Nossa atuação inclui:
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
                Revisão de Juros Abusivos
              </h2>

              <p>
                Muitas vezes, a dificuldade em pagar as parcelas nasce de um contrato de financiamento repleto de abusos (taxas de abertura de crédito, seguros embutidos, capitalização ilegal). Ao ingressar com a defesa, analisamos todo o seu contrato para extirpar essas cobranças, o que frequentemente reduz de forma drástica o valor real da dívida.
              </p>

              <blockquote class="my-12 p-8 border-l-4 border-red-700/80 bg-red-50/50 not-italic">
                <p class="font-display text-2xl italic text-charcoal font-medium">
                  "O veículo foi apreendido? Não perca tempo tentando negociar com o gerente do banco. Você precisa de defesa jurídica imediata."
                </p>
              </blockquote>

            </div>
          </article>

          <aside class="w-full lg:w-1/3 self-start">
            <div class="sticky top-32 bg-white shadow-2xl p-8 xl:p-10 border-t-4 border-red-700/80 flex flex-col gap-6">

              <h2 class="font-display text-2xl font-bold text-charcoal">
                Situação de Urgência?
              </h2>

              <p class="text-charcoal/60 text-sm leading-relaxed">
                Cada hora conta. Fale diretamente com a equipe agora para avaliarmos as falhas no pedido do banco e elaborarmos a sua defesa.
              </p>

              <ul class="space-y-4 pt-4 border-t border-charcoal/10" role="list">
                <li
                  v-for="trust in trustItems"
                  :key="trust.label"
                  class="flex items-center gap-3 text-charcoal/80"
                >
                  <component
                    :is="trust.icon"
                    class="w-5 h-5 text-red-700/80 shrink-0"
                    aria-hidden="true"
                  />
                  <span class="text-sm font-medium">{{ trust.label }}</span>
                </li>
              </ul>

              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar agora com advogada via WhatsApp"
                class="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                Falar Agora (Urgente)
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