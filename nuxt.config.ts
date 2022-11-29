// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Afex | Prueba tecnica',
    }
  },
  css:['@/assets/css/global.css'],
    runtimeConfig: {
        public: {
          apiKey: 'AIzaSyALNVNitPMtKSX-GeQQmoYWism8yQ2vqUM'
        }
      }
})
