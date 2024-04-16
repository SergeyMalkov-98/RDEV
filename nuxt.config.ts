// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: ["@/assets/styles/index.scss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '@/assets/styles/dev/colors.scss' as *;
            @use '@/assets/styles/dev/typography.scss' as *;
          `,
        },
      },
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Jost: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  runtimeConfig: {
    public: {
      yandexMetrikaId: "97033992",
    },
  },
});
