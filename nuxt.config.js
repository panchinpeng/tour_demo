const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/tour_demo/"
        },
        axios: {
          proxy: true, // Can be also an object with default options
          prefix: "/tour_demo"
        },

        proxy: {
          "/scenic_spot_C_f.json": {
            target: "https://panchinpeng.github.io/",
            changeOrigin: true
          }
        }
      }
    : {
        router: {
          base: "/"
        },
        axios: {
          proxy: true, // Can be also an object with default options
          prefix: "/"
        },
        proxy: {
          "/scenic_spot_C_f.json": {
            target: "http://192.168.0.29/",
            changeOrigin: true
          }
        }
      }

export default {
  ...routerBase,
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "景點分享平台",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: "景點分享平台練習"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios",
    "~/plugins/bootstrap-vue",
    "~/plugins/firebase.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "nuxt-fontawesome"
    // "bootstrap-vue/nuxt"
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      }
    ]
  },
  env: {
    onlineApi:
      process.env.DEPLOY_ENV === "GH_PAGES" ? "user-release" : "user-test",
    release: process.env.DEPLOY_ENV === "GH_PAGES"
  },
  server: {
    host: "192.168.0.29"
  }
}
