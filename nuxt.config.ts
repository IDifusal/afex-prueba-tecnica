// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@nuxtjs/tailwindcss'
  ],
  css:['@/assets/css/global.css'],
    runtimeConfig: {
        public: {
          apiKey: 'AIzaSyALNVNitPMtKSX-GeQQmoYWism8yQ2vqUM'
        }
      }
})
