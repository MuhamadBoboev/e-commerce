import { Layout, Spin } from 'antd'
import styled from 'styled-components'

const LoaderLayout = styled(Layout)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PageLoader = () => {
  return (
    <LoaderLayout>
      <Spin size="large" />
    </LoaderLayout>
  )
}
