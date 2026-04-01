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
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/montserrat/600.css',
    '@fontsource/montserrat/700.css',
    '@fontsource/montserrat/800.css',
    '@/assets/main.css'
  ],
  modules: [
    "vue3-carousel-nuxt",
    "@nuxt/ui",
  ]
})
