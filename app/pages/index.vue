<script setup>
const { data: posts } = await useAsyncData('home-posts', () =>
  queryCollection('content').all().then(articles => {
    console.log('ARTIGOS NO SERVIDOR:', articles.length, articles[0]) // 👈
    return articles
      .sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort))
      .slice(0, 3)
  })
)

useHead({
  title: 'Yasmin Santana | Advocacia Humanizada e Estratégica',
  meta: [
    { name: 'description', content: 'Escritório de advocacia referência em Direito de Família, Trabalhista e Consumidor em Camaçari e Salvador. Atendimento presencial e online.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Yasmin Santana Advocacia",
        "image": "https://yasminsantana.adv.br/images/yasmin-logo.png",
        "@id": "https://yasminsantana.adv.br",
        "url": "https://yasminsantana.adv.br",
        "telephone": "+557192128914",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Camaçari",
          "addressRegion": "BA",
          "addressCountry": "BR"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      })
    }
  ]
})
console.log('POSTS RESULTADO:', posts.value) // 👈
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsAbout />
    <SectionsServices />
    <SectionsTestimonials />
    <SectionsBlog :posts="posts" />
    <SectionsContact />
  </div>
</template>