import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Col, Image, Row, Space, Spin, Typography } from 'antd'

import { getProduct } from '@pages/product'
import { CartButton } from '@features/cart'
import { Product as ProductType } from '@entities/products'
import { Api, Keys } from '@shared/api'

export const Main = () => {
  const { slug } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: [Keys.products],
    queryFn: getProduct<{ data: ProductType }>(Api.product, slug),
    refetchOnWindowFocus: false,
  })

  if (isLoading) {
    return (
      <Spin
        tip="Loading"
        size="default"
      >
        <div className="content" />
      </Spin>
    )
  }
  if (isError) {
    return <p>Ошибка</p>
  }
  if (!data) {
    return <p>Товар не найден</p>
  }

  const { image, name, base_price, brand, description } = data.data

  return (
    <Row
      gutter={[16, 32]}
      justify="space-around"
    >
      <Col md={8}>
        <Image
          src={image}
          alt={name}
          width={310}
          height={250}
        />
      </Col>
      <Col md={12}>
        <Col>
          <Space direction="vertical">
            <Typography.Title style={{ textTransform: 'uppercase' }}>
              {name}
            </Typography.Title>
            <Typography.Paragraph>{description}</Typography.Paragraph>
            <Typography.Text>Цена: {base_price}сомони</Typography.Text>
            <Typography.Text>Бренд: {brand.name}</Typography.Text>
            <CartButton product={data.data} />
          </Space>
        </Col>
      </Col>
    </Row>
  )
}
