import { NotFoundPage } from '@pages/not-found'
import { ProductsPage } from '@pages/products'
import { ProductPage } from '@pages/product'
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
  {
    key: 'product',
    path: RouterPaths.product,
    element: <ProductPage />,
  },
]
