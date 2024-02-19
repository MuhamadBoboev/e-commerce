import { useEffect } from 'react'

import { getCartProducts } from '@features/cart/model/slice'
import { getFavoriteProducts } from '@features/favorite/model/slice'
import { AppLayout } from '@shared/layout'
import { useAppDispatch } from '@shared/model'

export const Layout = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFavoriteProducts())
    dispatch(getCartProducts())
  }, [])
  return <AppLayout />
}
