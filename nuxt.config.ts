// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  modules: [
    ['nuxt-swiper', {
    // Swiper options
  }],
  // '@nuxtjs/axios',
  // ['nuxt-mail', {
  //   message: {
  //     to: 'thearaofficial1122@gmail.com',
  //   },
  //   smtp: {
  //     host: 'smtp.office365.com',
  //     port: 587,
  //     // auth: {
  //     //   user: 'username',
  //     //   pass: 'password'
  //     // },
  //   },
  // }],
],
  css: ['~/assets/css/main.css','~/assets/css/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,
  
});

