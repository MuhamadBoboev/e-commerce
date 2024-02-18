import { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Button, message } from 'antd'

import { clearFavorite } from '../model/slice'

export const Clear = () => {
  const [messageApi, contextHolder] = message.useMessage()

  const dispatch = useDispatch()

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    dispatch(clearFavorite())
  }
  const info = () => {
    messageApi.error('Очищено!')
  }
  return (
    <Button
      type="primary"
      size="large"
      onClick={(event) => {
        handleClick(event)
        info()
      }}
    >
      {contextHolder}
      Очистить
    </Button>
  )
}
