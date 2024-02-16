interface ImportMetaEnv {
  readonly VITE_APP_SERVER_URL: string
  readonly VITE_APP_API_URL: string
  readonly VITE_APP_LS_STORAGE_TOKEN_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare type RootState = ReturnType<typeof store.getState>
declare type AppDispatch = typeof store.dispatch
