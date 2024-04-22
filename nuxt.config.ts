// https://nuxt.com/docs/api/configuration/nuxt-config
import {createResolver} from "@nuxt/kit";
const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
  app: {
    pageTransition: {name: "page", mode: "out-in"},
  },
  experimental: {
    sharedPrerenderData: true,
  },
  alias: {
    assets: "/<rootDir>/assets",
  },
  // devtools: {enabled: true},
  css: [
    "~/assets/css/main.scss",
    "primevue/resources/themes/aura-light-green/theme.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [resolve("./plugins/init.ts")],
  modules: [
    "nuxt-icon",
    "nuxt-primevue",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "nuxt-graphql-client",
    "@nuxt/image",
  ],
  // "graphql-client": {
  //   clients: {
  //     default: {
  //       host: process.env.GQL_HOST || "https://nvu.teknix.dev/graphql",
  //       corsOptions: {mode: "cors", credentials: "include"},
  //     },
  //   },
  // },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  i18n: {
    locales: [
      {code: "en_US", file: "en-US.json", name: "English us"},
      {code: "vi_VN", file: "vi-VN.json", name: "Vietnamese vi"},
    ],
    langDir: "locales",
    defaultLocale: "en_US",
    strategy: "no_prefix",
  },
  image: {
    provider: process.env.IMAGE_PROVIDER || "ipx",
    domains: process.env.NUXT_IMAGE_DOMAINS
      ? process.env.NUXT_IMAGE_DOMAINS.replace(/ /g, "").split(",")
      : [],
    format: ["avif", "webp"],
  },
});
