<template>
  <div class="app-root">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Darlington Dolphin Masters ASC',
  meta: [
    { name: 'description', content: 'Darlington Dolphin Masters Adult Swimming Club - Fitness, friendship and competition for swimmers aged 18+ in Darlington, County Durham.' }
  ],
})
</script>

<style>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
