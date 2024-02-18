import { Col, Row } from 'antd'

import { CartButton } from '@features/cart'
import { FavoriteButton, FavoriteClear } from '@features/favorite'
import { Product, ProductCard, ProductsInfo } from '@entities/products'
import { sumTotalValues } from '@shared/lib'
import { useAppSelector } from '@shared/model'
import { SectionTitle } from '@shared/ui'

export const Main = () => {
  const { favoritesProducts } = useAppSelector((state) => state.favorite)

  const totalProducts = sumTotalValues(favoritesProducts)

  let amountPrice

  if (totalProducts) {
    amountPrice = totalProducts.base_price - totalProducts.discount
  }
  return (
    <Row gutter={[16, 16]}>
      <SectionTitle title="Избранные" />
      <ProductsInfo
        amountPrice={amountPrice}
        amountDiscount={totalProducts?.discount}
        lengthProducts={favoritesProducts.length}
        clearSlot={<FavoriteClear />}
      />
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="start"
        style={{ marginBottom: '24px', gridRowGap: '24px', width: '100%' }}
      >
        {favoritesProducts.map((product: Product) => (
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
