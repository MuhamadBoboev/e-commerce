
import { Api, Keys } from '@shared/api';
import { Image, Typography } from 'antd';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Product as ProductType } from '@entities/products';
import { getProduct } from '@pages/product';
import Grid from 'antd/es/card/Grid';

export const Main = () => {
  const { slug } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: [Keys.product],
    queryFn: getProduct<{ data: ProductType }>(Api.product, slug),
    refetchOnWindowFocus: false,
  })



  if (isLoading) {
    return <p>Загрузка ...</p>
  }

  if (isError) {
    return <p>Ошибка</p>
  }

  if (!data) {
    return <p>Товар не найден</p>
  }

  const { image, name, base_price, brand } = data.data

  return (
    <Grid
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '24px',
        padding: '10px'
      }} >
      <Image src={image} width={'100%'} />
      <Grid style={{
        display: 'flex',
        flexDirection: 'column',
        gridGap: '16px'
      }}>
        <Typography.Title>{name}</Typography.Title>
        <Typography.Text>Цена товара: {base_price}сомони</Typography.Text>
        <Typography.Text>Бренд: {brand.name}</Typography.Text>
      </Grid>
    </Grid>
  )
}
