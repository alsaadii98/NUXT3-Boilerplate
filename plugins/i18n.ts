import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "ar",
    fallbackFormat: "en",
    messages: {
      en,
      ar,
    },
  });

  vueApp.use(i18n);
});
