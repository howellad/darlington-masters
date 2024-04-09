// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  router: {
    base: '/darlington-masters/'
  }
})
