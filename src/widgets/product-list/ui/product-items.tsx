import { Col, Row } from 'antd'

import { CartButton } from '@features/cart'
import { FavoriteButton } from '@features/favorite'
import { Product, ProductCard } from '@entities/products'

interface Props {
  products: Product[]
}
export const ProductItems = ({ products }: Props) => {

  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      justify="start"
    >
      {products.map((product) => (
        <Col
          key={product.id}
          xs={32}
          sm={12}
          md={8}
          lg={6}
        >
          <ProductCard
            product={product}
            cartSlot={
              <CartButton
                key={product.id}
                product={product}
              />
            }
            favoriteSlot={
              <FavoriteButton
                key={product.id}
                product={product}
              />
            }
          />
        </Col>
      ))}
    </Row>
  )
}
