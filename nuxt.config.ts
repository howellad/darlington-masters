// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap'
        },
        { rel: 'canonical', href: 'https://www.darlingtondolphinmasters.org' }
      ],
      meta: [
        { name: 'theme-color', content: '#0B1D3A' },
        { name: 'author', content: 'Darlington Dolphin Masters ASC' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Darlington Dolphin Masters ASC' },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@darlington_dolphin_masters_asc' },
        { name: 'geo.region', content: 'GB-DUR' },
        { name: 'geo.placename', content: 'Darlington' },
      ]
    }
  },
  ssr: true,
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/main.css'
  ],
  modules: [
    "vue3-carousel-nuxt",
    "@nuxt/ui",
  ]
})
