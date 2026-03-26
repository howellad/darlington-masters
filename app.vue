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
  titleTemplate: '%s | Darlington Dolphin Masters ASC',
  meta: [
    { name: 'description', content: 'Darlington Dolphin Masters ASC — adult swimming club for ages 18+ in Darlington, County Durham. Coached sessions for fitness and competition at the Dolphin Centre.' }
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
