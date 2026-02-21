// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @nuxt/ui-pro is the module for Nuxt UI Pro v3; it includes @nuxt/ui automatically.
  modules: ['@nuxt/ui-pro'],

  ui: {
    colors: {
      primary: 'orange',
      neutral: 'zinc',
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },

  css: ['~/assets/css/main.css'],

  // Static site generation for Docker/nginx hosting
  nitro: {
    preset: 'static',
  },

  app: {
    head: {
      link: [
        // Exo 2 italic bold — used in the logo wordmark
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,700&display=swap',
        },
      ],
    },
  },

  devtools: { enabled: true },

  compatibilityDate: '2025-01-01',
})
