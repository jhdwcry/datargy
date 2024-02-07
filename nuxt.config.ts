// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css', 
    '~/assets/css/carousel-custom.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-swiper', 'vue3-carousel-nuxt'],

    carousel: {
      prefix: 'MyPrefix'
    },

  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination'],
  }
})