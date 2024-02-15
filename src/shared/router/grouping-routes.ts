import { RouteType } from './route-type'

interface GroupingRoutesReturnType {
  withLayout: RouteType[]
  withoutLayout: RouteType[]
}

export const groupingRoutes = (
  routes: RouteType[],
): GroupingRoutesReturnType => {
  const groupedRoutes: GroupingRoutesReturnType = {
    withLayout: [],
    withoutLayout: [],
  }
  for (const route of routes) {
    if (route.withoutLayout) {
      groupedRoutes.withoutLayout.push(route)
    } else {
      groupedRoutes.withLayout.push(route)
    }
  }
  return groupedRoutes
}
