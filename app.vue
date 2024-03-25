import NavBar from components

<template>
  <div class="app-container">
    <!-- Markup shared across all pages, ex: NavBar -->
    <AppHeader/>
    <NavBar/>
    <NuxtPage />
  </div>
</template>

<style>
.body {
  margin: 0 !important;
}
.app-container {
  margin: 0px !important;
  width: 100%;
  font-family: Arial;
}
</style>