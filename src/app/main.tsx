import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Providers } from '@app/providers'

import { AppRouter } from './router'

import '@fontsource/ibm-plex-sans/300.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans/700.css'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>,
)
