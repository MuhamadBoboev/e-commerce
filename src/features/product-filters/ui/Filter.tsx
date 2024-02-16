import { Category } from '@entities/products';
import { Api, Keys, getQuery } from '@shared/api';
import { WithPagination, useAppSelector } from '@shared/model';
import {
  Form,
  Select,
  Slider
} from 'antd';
import { useQuery } from 'react-query';
import { setBrand, setCategory, setPrice } from '../model/filterSlice';
import { useDispatch } from 'react-redux';


export const Filter = () => {
  const { price, brand, category } = useAppSelector(state => state.filter)
  const dispatch = useDispatch()

  const { data: dataCategory, isLoading: isLoadingCategory } = useQuery({
    queryKey: [[Keys.categories]],
    queryFn: getQuery<WithPagination<Category>>(Api.categories,),
    refetchOnWindowFocus: false,
  })
  const { data: dataBrand, isLoading: isLoadingBrand } = useQuery({
    queryKey: [[Keys.brands]],
    queryFn: getQuery<WithPagination<Category>>(Api.brands,),
    refetchOnWindowFocus: false,
  })

  if (isLoadingCategory || isLoadingBrand) {
    return <p>Идет загрузка ...</p>
  }
  if (!dataCategory || !dataBrand) {
    return <p>Нет товаров</p>
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onSubmitCapture={() => alert('asdasd')}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px', width: '100%' }} >
        <Form.Item label="Категория"  >
          <Select
            onChange={(element) => { dispatch(setCategory(element)) }}
            defaultValue={category}
          >
            {dataCategory.data.map((category) =>
              <Select.Option
                value={category.id}
                key={category.id}
              >
                {category.name}
              </Select.Option>
            )}
          </Select>
        </Form.Item>
        <Form.Item label="Цена" >
          <Slider
            onChangeComplete={(element) => { dispatch(setPrice(element)) }}
            min={0}
            max={5000}
            defaultValue={price}
          />
        </Form.Item>
        <Form.Item label="Бренд">
          <Select
            onChange={(element) => { dispatch(setBrand(element)) }}
            defaultValue={brand}
          >
            {dataBrand.data.map((brand) =>
              <Select.Option
                value={brand.id}
                key={brand.id}
              >
                {brand.name}
              </Select.Option>
            )}
          </Select>
        </Form.Item>
      </div>
    </Form>
  );
};

