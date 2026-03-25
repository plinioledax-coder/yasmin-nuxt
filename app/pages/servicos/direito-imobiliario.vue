<script setup>
import { CheckCircle2, ArrowRight, Home, ShieldCheck, FileText } from 'lucide-vue-next'
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

// ─── SEO Dinâmico focado em Direito Imobiliário em Salvador ───
useHead({
  title: 'Advogada Imobiliária em Salvador | Yasmin Santana',
  meta: [
    {
      name: 'description',
      content:
        'Especialista em Direito Imobiliário em Salvador: Regularização de imóveis, usucapião, contratos de compra e venda, distrato e locação. Proteja seu patrimônio.'
    },
    { property: 'og:title', content: 'Advogada Imobiliária em Salvador | Yasmin Santana' },
    {
      property: 'og:description',
      content:
        'Especialista em Direito Imobiliário em Salvador: Regularização de imóveis, usucapião, auditoria de compra e venda e ações de despejo.'
    },
    { property: 'og:type', content: 'website' }
  ]
})

// ─── Dados da página ─────────────────────────────────────────
const WHATSAPP_NUMBER = '5571992128914'
const message = "Olá Yasmin! Visitei seu site e gostaria de saber mais sobre seus serviços jurídicos em Direito Imobiliário.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const benefits = [
  'Auditoria jurídica (Due Diligence) para compra e venda segura de imóveis.',
  'Regularização imobiliária, escrituras e ações de Usucapião.',
  'Elaboração e revisão de contratos de locação residencial e comercial.',
  'Ações de despejo, cobrança de aluguéis e renovatórias.',
  'Distrato imobiliário (devolução de imóvel comprado na planta).'
]

const trustItems = [
  { icon: ShieldCheck, label: 'Proteção Patrimonial'    },
  { icon: FileText,    label: 'Segurança Contratual'    },
  { icon: Home,        label: 'Regularização Completa'  }
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
          Direito <em class="text-gold not-italic font-medium">Imobiliário</em>
        </h1>

        <p class="text-white/60 text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
          Segurança jurídica completa para a compra, venda, locação e regularização do seu patrimônio.
        </p>
      </div>
    </header>

    <section class="py-20 lg:py-32 relative" aria-label="Conteúdo sobre Direito Imobiliário">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <article class="w-full lg:w-2/3">
            <div class="space-y-8 text-charcoal/80 text-lg font-light leading-relaxed">

              <p class="text-xl lg:text-2xl font-medium text-charcoal leading-snug">
                Transações imobiliárias envolvem altos valores financeiros e o suor de uma vida inteira. Um pequeno erro contratual ou a falta de uma análise prévia da documentação podem resultar em prejuízos incalculáveis e anos de litígio na justiça.
              </p>

              <p>
                Acreditamos que a melhor defesa do seu patrimônio é a <strong class="text-charcoal font-semibold">prevenção inteligente</strong>. Nosso escritório atua de forma consultiva e contenciosa para garantir que os seus negócios imobiliários sejam fechados com risco zero de surpresas desagradáveis no futuro.
              </p>

              <h2 class="font-display text-3xl font-bold text-charcoal mt-12 mb-6">
                Amparo jurídico de ponta a ponta
              </h2>

              <p>
                Seja você um investidor, proprietário, comprador ou locatário, oferecemos a expertise necessária para destravar negócios e proteger os seus interesses nas seguintes frentes:
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
                Due Diligence e Regularização
              </h2>

              <p>
                Um imóvel irregular perde valor de mercado e impede negociações seguras. Atuamos fortemente na regularização de propriedades através de Usucapião, inventários e retificação de registros. Além disso, realizamos a <em>Due Diligence</em> imobiliária — uma auditoria completa que investiga o vendedor e o imóvel antes de você assinar o contrato de compra, evitando fraudes e bloqueios judiciais.
              </p>

              <blockquote class="my-12 p-8 border-l-4 border-gold bg-charcoal/5 not-italic">
                <p class="font-display text-2xl italic text-charcoal font-medium">
                  "O seu patrimônio é valioso demais para estar amparado por contratos de gaveta ou modelos da internet. Invista em segurança jurídica."
                </p>
              </blockquote>

            </div>
          </article>

          <aside class="w-full lg:w-1/3 self-start">
            <div class="sticky top-32 bg-white shadow-2xl p-8 xl:p-10 border-t-4 border-gold flex flex-col gap-6">

              <h2 class="font-display text-2xl font-bold text-charcoal">
                Vai fechar um negócio imobiliário?
              </h2>

              <p class="text-charcoal/60 text-sm leading-relaxed">
                Não assine nenhum documento antes de uma avaliação jurídica. Agende uma consultoria para blindar a sua transação.
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
                aria-label="Agendar assessoria imobiliária via WhatsApp"
                class="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-charcoal text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Blindar meu Patrimônio
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