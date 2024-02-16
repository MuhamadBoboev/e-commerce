import { useQuery } from 'react-query';
import { Col, Pagination, Row } from 'antd'

import { Product, ProductCard } from '@entities/products'
import { Api, Keys } from '@shared/api'
import { WithPagination, useAppSelector } from '@shared/model'
import { useEffect, useState } from 'react';
import { ProductsFilter } from '@features/product-filters';
import { getProducts } from '@pages/products';


export const Main = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const { price, brand, category } = useAppSelector(state => state.filter)
  let filterApi: string = Api.products
  if (category !== null) {
    filterApi = filterApi + `?category_id[]=${category}`
  }
  if (brand !== null) {
    filterApi = filterApi + `&brand_id[]=${brand}`
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: [[Keys.products], page, category, brand, pageSize],
    queryFn: getProducts<WithPagination<Product>>(filterApi, page, pageSize),
    refetchOnWindowFocus: false,
  })
  useEffect(() => {
  }, [page])
  if (isLoading) {
    return <p>Идет загрузка ...</p>
  }

  if (isError) {
    return <p>Ошибка</p>
  }

  if (!data) {
    return <p>Нет товаров</p>
  }

  const filteredProducts = data.data.filter(product => product.base_price < price)
  return (
    <div>
      <ProductsFilter
      />
      <Row
        gutter={[16, 16]}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          minWidth: '948px'
        }}>
        {filteredProducts.map((product) =>
          <Col
            key={product.id}
            span={1}
            style={{ width: '100%' }}
          >
            <ProductCard product={product} favoriteSlot={<button>+</button>} />
          </Col>
        )}
      </Row>
      <Pagination
        defaultCurrent={page}
        total={data.meta.total}
        onChange={(page, pageSize) => {
          setPage(page)
          setPageSize(pageSize)
        }}
        showLessItems
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={pageSize}
        showSizeChanger
      />
    </div>
  )
}
