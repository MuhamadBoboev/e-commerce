import { useState } from 'react'
import { useQuery } from 'react-query'
import { Pagination, Row, Spin } from 'antd'

import { ProductsFilter } from '@features/product-filters'
import { Product } from '@entities/products'
import { Api, getQuery, Keys } from '@shared/api'
import { useAppSelector, WithPagination } from '@shared/model'
import { SectionTitle } from '@shared/ui'

import { ProductItems } from './product-items'

export const Main = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const { price, brand, category } = useAppSelector((state) => state.filter)

  let filterApi: string = Api.products + `?page=${page}&per_page=${pageSize}`
  if (category !== null) {
    filterApi += `&category_id[]=${category}`
  }
  if (brand !== null) {
    filterApi += `&brand_id[]=${brand}`
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: [[Keys.products], page, category, brand, pageSize],
    queryFn: getQuery<WithPagination<Product>>(filterApi),
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
    return <p>Нет товаров</p>
  }

  const filteredProducts = data.data.filter(
    (product) => product.base_price < price,
  )

  return (
    <Row gutter={[24, 24]}>
      <SectionTitle title="Главная" />
      <ProductsFilter />
      <ProductItems products={filteredProducts} />
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="start"
      />
      <Pagination
        defaultCurrent={page}
        total={data.meta.total}
        onChange={(page, pageSize) => {
          setPage(page)
          setPageSize(pageSize)
        }}
        showLessItems
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
        defaultPageSize={pageSize}
        showSizeChanger
      />
    </Row>
  )
}
