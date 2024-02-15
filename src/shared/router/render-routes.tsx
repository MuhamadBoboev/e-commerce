import { Route } from 'react-router-dom'

import { RouteType } from './route-type'
import { WithLoader } from './with-loader'

export const renderRoutes = (routes: RouteType[]) => {
  return routes.map((route) => renderRoute(route))
}

const renderRoute = ({ path, element, children, loader }: RouteType) => {
  const Component = <WithLoader loader={loader}>{element}</WithLoader>

  return (
    <Route
      key={path}
      path={path}
      element={Component}
    >
      {children && children.length > 0 && renderRoutes(children)}
    </Route>
  )
}
