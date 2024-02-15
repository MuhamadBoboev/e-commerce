import { PropsWithChildren } from 'react'
import { App, ConfigProvider } from 'antd'

import 'antd/dist/reset.css'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"IBM Plex Sans"',
          fontFamilyCode: '"IBM Plex Sans"',
          // Seed Token
          colorPrimary: '#5A54F9',
          borderRadius: 4,
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  )
}
