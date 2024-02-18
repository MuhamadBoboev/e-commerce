import { Route, Routes } from 'react-router-dom'

import { groupingRoutes, renderRoutes } from '@shared/router'

import { routes } from '../config/routes'
import { Layout } from '../layout'

const { withLayout, withoutLayout } = groupingRoutes(routes)

export const AppRouter = () => {
  return (
    <Routes>
      {/** layout route */}
      <Route
        path="/"
        element={<Layout />}
      >
        {renderRoutes(withLayout)}
      </Route>
      {renderRoutes(withoutLayout)}

    </Routes>
  )
}
