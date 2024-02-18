import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '../store/store'
import { ApiProvider } from './api-provider'
import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <ThemeProvider>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  )
}
