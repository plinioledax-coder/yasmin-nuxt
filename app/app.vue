<script setup>
// O "Seguro" de Compartilhamento (WhatsApp, Instagram, LinkedIn)
useSeoMeta({
  ogImage: '/images/yasmin-share.png', // A imagem que vai aparecer no WhatsApp
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="font-body text-charcoal bg-ivory selection:bg-gold/30 selection:text-charcoal-dark min-h-screen flex flex-col">
    
    <LayoutNavbar />
    
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <LayoutFooter />
    <UiFloatingWhatsapp />
    
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
</style>