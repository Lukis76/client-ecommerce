// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_BASE_URL: string
  readonly VITE_BASE_URL_BACK: string
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
