import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Card as AntCard, Space, Typography } from 'antd'

import { Product } from '../model/product'

interface Props {
  product: Product
  cartSlot?: ReactNode
  favoriteSlot?: ReactNode
}

export const Card = ({ product, cartSlot, favoriteSlot }: Props) => {
  const { description, image, name, base_price, slug } = product

  return (
    <AntCard
      style={{
        position: 'relative',
      }}
      cover={
        <img
          alt={slug}
          src={image}
          style={{
            maxHeight: '230px',
          }}
          width="300px"
          height="230px"
        />
      }
    >
      <Space
        direction="vertical"
        size={16}
      >
        <AntCard.Meta
          avatar={<Avatar src={image} alt={name} style={{ width: '35px', height: '35px' }} />}
          title={name}
          description={description.slice(0, 50)}
        />
        <Space
          style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', width: '100%' }}
        >
          <Typography.Text>Цена:</Typography.Text>
          <Typography.Text strong>{base_price} сомони</Typography.Text>
        </Space>
      </Space>
      {cartSlot}
      {favoriteSlot}
      <Link
        to={`/products/${slug}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </AntCard>
  )
}
