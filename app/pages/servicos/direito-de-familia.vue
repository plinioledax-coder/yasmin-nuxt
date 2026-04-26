<script setup>
import { CheckCircle2, ArrowRight, MessageSquare, Scale, Clock } from 'lucide-vue-next'
import { onMounted, onUnmounted } from 'vue'

// ─── Detecção automática da altura do navbar ──────────────────
// Funciona com navbar fixed E sticky, sem precisar saber qual é.
// O ResizeObserver atualiza a variável CSS se o navbar mudar de
// tamanho (ex: menu mobile abre, font aumenta, etc.).
let navbarObserver = null

onMounted(() => {
  const setNavbarHeight = () => {
    // Tenta encontrar o navbar pelos seletores mais comuns em projetos Nuxt.
    // Ajuste o seletor se o seu navbar tiver um id ou classe diferente.
    const navbar =
      document.querySelector('nav') ||
      document.querySelector('header[role="navigation"]') ||
      document.querySelector('[data-navbar]')

    if (navbar) {
      const height = navbar.getBoundingClientRect().height
      document.documentElement.style.setProperty('--navbar-height', `${height}px`)
    } else {
      // Fallback seguro caso o seletor não encontre nada
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

// useHead é auto-importado pelo Nuxt 3 — não precisa de import explícito
useHead({
  title: 'Advogada de Direito de Família em Salvador | Yasmin Santana',
  meta: [
    {
      name: 'description',
      content:
        'Especialista em Direito de Família: Divórcio, Pensão Alimentícia, Guarda e Inventário. Atendimento humanizado e sigilo absoluto. Agende sua consulta.'
    },
    // Open Graph básico — melhora o compartilhamento em redes sociais
    { property: 'og:title', content: 'Advogada de Direito de Família em Salvador | Yasmin Santana' },
    {
      property: 'og:description',
      content:
        'Especialista em Direito de Família: Divórcio, Pensão Alimentícia, Guarda e Inventário. Atendimento humanizado e sigilo absoluto.'
    },
    { property: 'og:type', content: 'website' }
  ]
})


const WHATSAPP_NUMBER = '5571996558882'
const message = "Olá Yasmin! Visitei seu site e gostaria de saber mais sobre seus serviços jurídicos em Direito de Família.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const benefits = [
  'Estratégias para divórcios consensuais ou litigiosos.',
  'Regulamentação justa de guarda e convivência.',
  'Cálculo e revisão de pensão alimentícia.',
  'Planejamento sucessório e inventários ágeis.',
  'Reconhecimento e dissolução de união estável.'
]

const trustItems = [
  { icon: Clock,         label: 'Atendimento Rápido'       },
  { icon: MessageSquare, label: 'Sigilo Absoluto'           },
  { icon: Scale,         label: 'Estratégia Personalizada'  }
]
</script>

<template>
  <div class="bg-ivory min-h-screen selection:bg-gold/30 selection:text-charcoal-dark">

    <!-- ── Hero ──────────────────────────────────────────────── -->
    <header
      class="relative bg-charcoal pb-20 lg:pb-28 overflow-hidden"
      style="padding-top: calc(var(--navbar-height, 80px) + 4rem)"
      role="banner"
    >
      <!-- Padrão decorativo de fundo -->
      <div
        aria-hidden="true"
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: repeating-linear-gradient(45deg, transparent, transparent 100px, #C9A84C 100px, #C9A84C 101px);"
      />

      <!-- Brilho central dourado -->
      <div
        aria-hidden="true"
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gold rounded-full blur-[150px] opacity-10 pointer-events-none"
      />

      <div class="container mx-auto px-6 relative z-10 text-center">
        <!-- Pílula / etiqueta de área -->
        <div class="inline-flex items-center gap-3 mb-6" aria-hidden="true">
          <div class="h-px w-8 bg-gold" />
          <span class="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Área de Atuação</span>
          <div class="h-px w-8 bg-gold" />
        </div>

        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-4xl mx-auto mb-6">
          Direito de <em class="text-gold not-italic font-medium">Família e Sucessões</em>
        </h1>

        <p class="text-white/60 text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
          Protegendo o que é mais importante para você com sensibilidade, sigilo absoluto e excelência técnica.
        </p>
      </div>
    </header>

    <!-- ── Conteúdo principal ─────────────────────────────────── -->
    <section class="py-20 lg:py-32 relative" aria-label="Conteúdo sobre Direito de Família">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <!-- ── Artigo ── -->
          <article class="w-full lg:w-2/3">
            <div class="space-y-8 text-charcoal/80 text-lg font-light leading-relaxed">

              <p class="text-xl lg:text-2xl font-medium text-charcoal leading-snug">
                As questões familiares estão entre os momentos mais delicados da vida. Nosso escritório
                atua para garantir que transições como divórcios, partilhas e inventários ocorram com
                o menor desgaste emocional e o máximo de segurança jurídica possível.
              </p>

              <p>
                Acreditamos que o Direito de Família não trata apenas de patrimônio, mas de
                <strong class="text-charcoal font-semibold">reconstrução de histórias</strong>.
                Por isso, adotamos uma postura voltada para a resolução consensual de conflitos sempre
                que possível, preservando as relações — especialmente quando há filhos menores envolvidos.
              </p>

              <h2 class="font-display text-3xl font-bold text-charcoal mt-12 mb-6">
                Como podemos ajudar a sua família?
              </h2>

              <p>
                Cada núcleo familiar é único, e as soluções jurídicas devem ser personalizadas para
                a sua realidade. Oferecemos suporte completo e especializado em diversas frentes:
              </p>

              <!-- Lista de benefícios -->
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
                A importância de um suporte humanizado
              </h2>

              <p>
                Lidar com a perda de um ente querido ou com o fim de um relacionamento exige mais do
                que conhecimento técnico da lei. Exige um profissional capaz de acolher, escutar e
                traduzir o jargão jurídico para uma linguagem clara. Do primeiro atendimento até o
                encerramento do seu caso, você terá comunicação direta e transparente sobre cada
                andamento do processo.
              </p>

              <!-- Citação em destaque -->
              <blockquote class="my-12 p-8 border-l-4 border-gold bg-charcoal/5 not-italic">
                <p class="font-display text-2xl italic text-charcoal font-medium">
                  "O nosso maior objetivo é devolver a paz de espírito para que você possa focar no seu futuro."
                </p>
              </blockquote>

            </div>
          </article>

          <!-- ── Sidebar de CTA ── -->
          <!--
            "self-start" é necessário para que o sticky funcione dentro de um flex container.
            Sem ele, o filho flex se estica até a altura do pai e o sticky não tem efeito.
          -->
          <aside class="w-full lg:w-1/3 self-start">
            <div class="sticky top-32 bg-white shadow-2xl p-8 xl:p-10 border-t-4 border-gold flex flex-col gap-6">

              <h2 class="font-display text-2xl font-bold text-charcoal">
                Fale com a Especialista
              </h2>

              <p class="text-charcoal/60 text-sm leading-relaxed">
                Precisa de orientação jurídica segura? Agende uma consulta inicial para avaliarmos
                o seu caso com total sigilo.
              </p>

              <!-- Selos de confiança -->
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

              <!--
                CORREÇÃO CRÍTICA: adicionados rel="noopener noreferrer" (segurança em
                target="_blank"), aria-label descritivo e a URL correta do WhatsApp.
              -->
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar consulta via WhatsApp com Yasmin Santana"
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
<!-- Sem <style scoped> — toda a estilização é feita via Tailwind, mais fácil de manter. -->
