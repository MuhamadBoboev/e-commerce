import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Card as AntCard, Typography } from 'antd'


import { Product } from '../model/product'

interface Props {
  product: Product
  favoriteSlot: ReactNode
}

export const Card = ({ product, favoriteSlot }: Props) => {
  const { brand, description, image, name, base_price, slug } = product
  return (
    <Link
      to={`product/${slug}`}>
      <AntCard
        style={{
          width: '300px',
          height: '100%',
          position: 'relative'
        }}
        cover={
          <img
            alt="example"
            src={image}
            style={{
              maxHeight: '150px',
            }}
          />
        }
      >
        <div>{favoriteSlot}</div>
        <AntCard.Meta
          avatar={<Avatar src={brand.image} />}
          title={name}
          description={description.slice(0, 50)}
        />
        <Typography.Text>{base_price}$</Typography.Text>
        {/* <div>{cartSlot}</div> */}
      </AntCard>
    </Link>
  )
}
