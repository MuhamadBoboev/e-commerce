import { Layout, Menu, theme } from 'antd'
import { Link, Outlet } from 'react-router-dom'

const { Header, Content, Footer } = Layout
const items = [
  {
    key: 'main',
    label: <Link to='/'>Главная</Link>,
  },
  {
    key: 'cart',
    label: <Link to='/cart'>Корзина</Link>,
  },
  {
    key: 'favorite',
    label: <Link to='/favorite'>Избранное</Link>,
  }
]
export const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 10,
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          left: '50%',
          padding: '0 10px',
          transform: 'translate(-50%, 0)'
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={
        {
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          paddingTop: '64px'
        }
      }>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        E-commerce ©{new Date().getFullYear()} Created by MuhammadBoboev
      </Footer>
    </Layout>
  )
}
