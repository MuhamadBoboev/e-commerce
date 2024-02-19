interface ImportMetaEnv {
  readonly VITE_APP_SERVER_URL: string
  readonly VITE_APP_API_URL: string
  readonly VITE_APP_LS_STORAGE_TOKEN_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare type RootState = import('../src/app/store').RootState
declare type AppDispatch = import('../src/app/store').AppDispatch
