import { Col, Row } from 'antd'

import { CartButton, CartClear } from '@features/cart'
import { Product, ProductCard, ProductsInfo } from '@entities/products'
import { sumTotalValues } from '@shared/lib'
import { useAppSelector } from '@shared/model'
import { SectionTitle } from '@shared/ui'
import { FavoriteButton } from '@features/favorite'

export const Main = () => {
  const { cartProducts } = useAppSelector((state) => state.cart)

  const totalProducts = sumTotalValues(cartProducts)

  let amountPrice

  if (totalProducts) {
    amountPrice = totalProducts.base_price - totalProducts.discount
  }
  return (
    <Row gutter={[16, 16]}>
      <SectionTitle title="Корзина" />
      <ProductsInfo
        amountPrice={amountPrice}
        amountDiscount={totalProducts?.discount}
        lengthProducts={cartProducts.length}
        clearSlot={<CartClear />}
      />
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="start"
        style={{ marginBottom: '24px', gridRowGap: '24px', width: '100%' }}
      >
        {cartProducts.map((product: Product) => (
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
    </Row>
  )
}
