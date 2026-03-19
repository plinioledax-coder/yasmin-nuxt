<script setup>
import { CheckCircle2, ArrowRight, MessageSquare, Scale, Clock, ShieldCheck } from 'lucide-vue-next'
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

// ─── SEO Dinâmico focado em Direito Civil em Salvador ─────────
useHead({
  title: 'Advogada Cível em Salvador | Yasmin Santana',
  meta: [
    {
      name: 'description',
      content:
        'Especialista em Direito Civil em Salvador: Elaboração de contratos, cobranças de dívidas, indenizações e responsabilidade civil. Segurança jurídica para você.'
    },
    { property: 'og:title', content: 'Advogada Cível em Salvador | Yasmin Santana' },
    {
      property: 'og:description',
      content:
        'Especialista em Direito Civil em Salvador: Elaboração de contratos, cobranças judiciais, indenizações por danos morais e materiais.'
    },
    { property: 'og:type', content: 'website' }
  ]
})

// ─── Dados da página ─────────────────────────────────────────
const WHATSAPP_NUMBER = '5571999999999'
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20%C3%A1rea%20c%C3%ADvel.`

const benefits = [
  'Elaboração, revisão e rescisão de contratos com segurança jurídica.',
  'Ações de indenização por danos morais e materiais.',
  'Cobrança judicial e extrajudicial de dívidas e inadimplências.',
  'Defesa em ações de responsabilidade civil.',
  'Notificações extrajudiciais e mediação preventiva de conflitos.'
]

const trustItems = [
  { icon: ShieldCheck,   label: 'Segurança Contratual'     },
  { icon: MessageSquare, label: 'Mediação Eficaz'          },
  { icon: Scale,         label: 'Proteção do seu Patrimônio'}
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
          Direito <em class="text-gold not-italic font-medium">Civil</em>
        </h1>

        <p class="text-white/60 text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
          Garantindo segurança jurídica para os seus negócios, contratos e relações interpessoais, prevenindo riscos e resolvendo litígios.
        </p>
      </div>
    </header>

    <section class="py-20 lg:py-32 relative" aria-label="Conteúdo sobre Direito Civil">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <article class="w-full lg:w-2/3">
            <div class="space-y-8 text-charcoal/80 text-lg font-light leading-relaxed">

              <p class="text-xl lg:text-2xl font-medium text-charcoal leading-snug">
                O Direito Civil é a base de todas as nossas relações cotidianas. Desde a assinatura de um simples contrato até a resolução de conflitos complexos envolvendo danos e obrigações, a prevenção é sempre o melhor caminho.
              </p>

              <p>
                A ausência de uma assessoria jurídica adequada na hora de fechar um negócio ou de cobrar uma dívida pode resultar em prejuízos financeiros incalculáveis. Nosso escritório atua como uma <strong class="text-charcoal font-semibold">blindagem para os seus interesses</strong>, seja atuando de forma consultiva para evitar problemas, ou de forma contenciosa no judiciário.
              </p>

              <h2 class="font-display text-3xl font-bold text-charcoal mt-12 mb-6">
                Como protegemos os seus interesses?
              </h2>

              <p>
                Tratamos cada demanda com o rigor técnico que ela exige. Nosso objetivo é apresentar soluções rápidas, práticas e eficientes, atuando em frentes como:
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
                Prevenção e Resolução Estratégica
              </h2>

              <p>
                Muitos conflitos civis podem ser resolvidos antes mesmo de se tornarem processos longos e custosos. Por meio de negociações sólidas, acordos extrajudiciais e notificações precisas, buscamos a resolução mais econômica e vantajosa para o seu cenário. Quando o litígio for inevitável, atuamos com vigor em sua defesa.
              </p>

              <blockquote class="my-12 p-8 border-l-4 border-gold bg-charcoal/5 not-italic">
                <p class="font-display text-2xl italic text-charcoal font-medium">
                  "Bons contratos evitam processos; uma boa defesa garante os seus direitos. Nós entregamos excelência em ambos os cenários."
                </p>
              </blockquote>

            </div>
          </article>

          <aside class="w-full lg:w-1/3 self-start">
            <div class="sticky top-32 bg-white shadow-2xl p-8 xl:p-10 border-t-4 border-gold flex flex-col gap-6">

              <h2 class="font-display text-2xl font-bold text-charcoal">
                Enfrentando um conflito civil?
              </h2>

              <p class="text-charcoal/60 text-sm leading-relaxed">
                Não deixe que um desentendimento ou quebra de contrato afete o seu patrimônio e a sua tranquilidade. Agende uma consultoria especializada.
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
                aria-label="Agendar consulta cível via WhatsApp"
                class="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-charcoal text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Agendar Consulta
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