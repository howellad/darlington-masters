<template>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <div class="header-inner">
      <NuxtLink to="/" class="header-brand">
        <img src="@/assets/logo.png" alt="Darlington Masters Logo" class="header-logo" />
        <span class="header-name">Darlington Masters</span>
      </NuxtLink>

      <button
        class="mobile-toggle"
        @click="isOpen = !isOpen"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
      >
        <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <nav class="header-nav" :class="{ 'header-nav--open': isOpen }">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          @click="isOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/membership" class="btn btn--blue nav-cta" @click="isOpen = false">
          Join Us
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { to: '/', label: 'About' },
  { to: '/coachinfo', label: 'Coaches' },
  { to: '/training', label: 'Sessions' },
  { to: '/membership', label: 'Membership' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  transition: all 0.3s ease;
}

.site-header--scrolled {
  background: rgba(11, 29, 58, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: 1px;
}

.header-logo {
  width: 42px;
  height: auto;
}

.site-header--scrolled .header-logo {
  width: 36px;
}

.header-name {
  color: #fff;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 8px;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.nav-cta {
  margin-left: 12px;
  padding: 10px 24px;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .header-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(11, 29, 58, 0.98);
    padding: 16px 24px 24px;
    gap: 4px;
  }

  .header-nav--open {
    display: flex;
  }

  .nav-link {
    padding: 12px 16px;
    width: 100%;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 8px;
    text-align: center;
  }
}
</style>
