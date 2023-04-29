// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
        '~/assets/css/main.css',
    ],
    postcss:{
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
