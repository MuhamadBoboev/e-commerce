import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ApiProvider } from './api-provider'
import { ThemeProvider } from './theme-provider'
import { Provider } from 'react-redux'
import { store } from '../store/store';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <ThemeProvider>
          <Provider store={store}>
            {children}
          </Provider>
        </ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  )
}
