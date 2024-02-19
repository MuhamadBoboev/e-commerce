import { MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, message } from 'antd'

import { Product } from '@entities/products'
import { useAppSelector } from '@shared/model'

import { toggleCart } from '../model/slice'

interface Props {
  product: Product
}
export const Cart = ({ product }: Props) => {
  const [isToggle, setToggle] = useState(false)
  const { cartProducts } = useAppSelector((state) => state.cart)
  const isExist = cartProducts.find(({ id }) => id === product.id)
  const [messageApi, contextHolder] = message.useMessage()

  const dispatch = useDispatch()
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    setToggle(true)
    dispatch(toggleCart(product))
    setToggle(false)
  }

  const info = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (isExist) {
      messageApi.error('Удалено!')
    } else {
      messageApi.success('Добавлено в избранное!')
    }
  }
  return (
    <Button
      type="primary"
      size="large"
      style={{
        width: '100%',
        zIndex: '1',
        position: 'relative',
      }}
      loading={isToggle && true}
      onClick={(event) => {
        handleClick(event)
        info()
      }}
    >
      {contextHolder}
      {isExist ? 'Удалить' : 'Добавить в корзину'}
    </Button>
  )
}
