export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [],
  runtimeConfig: {

    IP_JWT_SECRET: process.env.IP_JWT_SECRET,
    X_API_KEY: process.env.X_API_KEY,

    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_PORT: process.env.POSTGRES_PORT || '5432',

    PGBOUNCER_HOST: process.env.PGBOUNCER_HOST,
    PGBOUNCER_PORT: process.env.PGBOUNCER_PORT || '5432',

    IP_INFO_API_TOKEN: process.env.IP_INFO_API_TOKEN,
    IP_INFO_DEFAULT_IP : process.env.IP_INFO_DEFAULT_IP,

    SEND_GRID_API_KEY : process.env.SEND_GRID_API_KEY,

    MESSAGE_BIRD_API_URL : process.env.MESSAGE_BIRD_API_URL,
    MESSAGE_BIRD_API_KEY : process.env.MESSAGE_BIRD_API_KEY,

    REDIS_URL : process.env.REDIS_URL,

    EE_API_URL : process.env.EE_API_URL,
    EE_API_TOKEN : process.env.EE_API_TOKEN,
    EE_WEBHOCK_ALLOWED_IPS: process.env.EE_WEBHOCK_ALLOWED_IPS,

    // Public Keys (falls nötig)
    public: {
    }
  },
  imports : {
    dirs : [
      '../shared',
      '../server/models/**',
      '../stores'
    ]
  },
  nitro: {
    imports : {
      dirs : [
        'shared',
        'server/models/**',
        'server/modules',
      ]
    },
  },
})
