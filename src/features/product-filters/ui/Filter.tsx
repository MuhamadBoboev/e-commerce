import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { Form, Select, Slider, Spin } from 'antd'

import { Category } from '@entities/products'
import { Api, getQuery, Keys } from '@shared/api'
import { useAppSelector, WithPagination } from '@shared/model'

import { setBrand, setCategory, setPrice } from '../model/filterSlice'

export const Filter = () => {
  const { price, brand, category } = useAppSelector((state) => state.filter)
  const dispatch = useDispatch()

  const { data: dataCategory, isLoading: isLoadingCategory } = useQuery({
    queryKey: [Keys.categories],
    queryFn: getQuery<WithPagination<Category>>(Api.categories),
    refetchOnWindowFocus: false,
  })
  const { data: dataBrand, isLoading: isLoadingBrand } = useQuery({
    queryKey: [Keys.brands],
    queryFn: getQuery<WithPagination<Category>>(Api.brands),
    refetchOnWindowFocus: false,
  })

  if (isLoadingCategory || isLoadingBrand) {
    return (
      <Spin
        tip="Loading"
        size="default"
      >
        <div className="content" />
      </Spin>
    )
  }
  if (!dataCategory || !dataBrand) {
    return <p>Нет категории или бренда</p>
  }

  return (
    <div style={{ width: '100%' }}>
      <Form
        name="wrap"
        labelAlign="left"
        labelCol={{ span: 4 }}
        layout="horizontal"
        wrapperCol={{ span: 8 }}
        size="large"
      >
        <Form.Item label="Категория">
          <Select
            onChange={(element) => {
              dispatch(setCategory(element))
            }}
            value={category}
          >
            {dataCategory.data.map((category) => (
              <Select.Option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Бренд">
          <Select
            onChange={(element) => {
              dispatch(setBrand(element))
            }}
            value={brand}
          >
            {dataBrand.data.map((brand) => (
              <Select.Option
                key={brand.id}
                value={brand.id}
              >
                {brand.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Цена">
          <Slider
            onChangeComplete={(element) => {
              dispatch(setPrice(element))
            }}
            min={0}
            max={5000}
            defaultValue={price}
          />
        </Form.Item>
      </Form>
    </div>
  )
}
