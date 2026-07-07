// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        class: 'dark'
      }
    }
  }
})
