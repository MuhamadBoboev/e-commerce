import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ApiProvider } from './api-provider'
import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  )
}
