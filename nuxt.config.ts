// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-16",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/mdc"],
  // imports: {
  //   scan: false, // disable auto import utils & composable
  // },

  runtimeConfig: {
    // By default its private
    // CAN BE OVERRIDEN BY .ENV NUXT_OPEN_AI_APIKEY
    openaiApiKey: "",
    // Public

    // CAN BE OVERRIDEN BY .ENV NUXT_PUBLIC_SOME_VALUE
    public: {
      someValue: "on the frontend",
    },
  },

  mdc: {
    highlight: {
      theme: "material-theme-palenight",
      langs: ["html", "markdown", "vue", "typescript", "javascript"],
    },
  },
});
