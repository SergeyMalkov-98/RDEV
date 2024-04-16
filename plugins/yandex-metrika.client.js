import VueYandexMetrika from "vue3-yandex-metrika";

export default defineNuxtPlugin({
  name: "yandex-metrika",
  async setup(nuxtApp) {
    const cfg = useRuntimeConfig();
    if (cfg.public.yandexMetrikaId) {

      const app = nuxtApp.vueApp;

      const router = useRouter();

      const metrikaCfg = {
        router,
        id: cfg.public.yandexMetrikaId,
        env: "production",
        options: {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        },
      };

      app.use(VueYandexMetrika, metrikaCfg);
    }
  },
});
