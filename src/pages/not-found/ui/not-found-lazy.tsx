import { lazy } from 'react'

export const Page = lazy(() =>
  import('./not-found').then(({ Page }) => ({ default: Page })),
)
