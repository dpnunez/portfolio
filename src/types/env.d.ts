declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_EMAIL: string
    EMAIL_PASSWORD: string
    NEXT_PUBLIC_TURNSFILE_CLIENT_KEY: string
    TURNSTILE_SECRET: string
    URL: string
    GITHUB_ID: string
    GITHUB_SECRET: string
    AUTH_SECRET: string
    NEXT_PUBLIC_API_URL: string
    DEV_TO_USERNAME: string
    NEXT_PUBLIC_GTM: string
  }
}
