import { NotFoundPage } from '@pages/not-found'
import { ProductsPage } from '@pages/products'
import { RouterPaths, RouteType } from '@shared/router'

export const routes: RouteType[] = [
  {
    key: 'main',
    path: RouterPaths.products,
    element: <ProductsPage />,
  },
  {
    key: 'not-found',
    path: '*',
    element: <NotFoundPage />,
    withoutLayout: true,
  },
]
