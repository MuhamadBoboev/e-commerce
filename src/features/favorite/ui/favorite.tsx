import { MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'

import { Product } from '@entities/products'
import { useAppSelector } from '@shared/model'

import { toggleFavorite } from '../model/slice'

interface Props {
  product: Product
}
export const Favorite = ({ product }: Props) => {
  const [isToggle, setToggle] = useState(false)
  const { favoritesProducts } = useAppSelector((state) => state.favorite)

  const isExist = favoritesProducts.find(({ id }) => id === product.id)
  const [messageApi, contextHolder] = message.useMessage()

  const dispatch = useDispatch()
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    setToggle(true)
    dispatch(toggleFavorite(product))
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
      type="dashed"
      size="large"
      style={{
        width: '40px',
        height: '40px',
        zIndex: '1',
        position: 'absolute',
        top: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      loading={isToggle && true}
      onClick={(event) => {
        handleClick(event)
        info()
      }}
    >
      {contextHolder}
      {isExist ? <HeartFilled /> : <HeartOutlined />}
    </Button>
  )
}
