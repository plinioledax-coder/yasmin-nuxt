<template>
  <div
    class="font-body text-charcoal bg-ivory selection:bg-gold/30 selection:text-charcoal-dark min-h-screen flex flex-col">
    <LayoutNavbar />

    <main class="flex-grow">
      <SectionsHero />
      <SectionsAbout />
      <SectionsServices />
      <SectionsTestimonials />
      <SectionsContact />
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

<script setup>
</script>