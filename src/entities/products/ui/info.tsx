import { ReactNode } from 'react'
import { Col, Row, Space, Typography } from 'antd'

interface Props {
  clearSlot?: ReactNode
  amountPrice?: number | null
  amountDiscount?: number | null
  lengthProducts: number
}
export const Info = ({
  amountPrice,
  amountDiscount,
  lengthProducts,
  clearSlot,
}: Props) => {
  return (
    <Row
      gutter={[20, 20]}
      justify="space-between"
      align="top"
      wrap
      style={{ width: '100%' }}
    >
      <Col
        xs={24}
        lg={8}
      >
        <Space
          size={[16, 16]}
          wrap
          style={{ width: '100%' }}
          direction="vertical"
        >
          <Space
            size={16}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography.Text>Количество товаров:</Typography.Text>
            <Typography.Text strong>{lengthProducts}</Typography.Text>
          </Space>
          <Space
            size={16}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography.Text>Скидка:</Typography.Text>
            <Typography.Text strong>{amountDiscount} сомони</Typography.Text>
          </Space>
          <Space
            size={16}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography.Text>В сумме:</Typography.Text>
            <Typography.Text strong>{amountPrice} сомони</Typography.Text>
          </Space>
        </Space>
      </Col>
      {clearSlot && (
        <Col
          xs={24}
          lg={8}
          style={{ display: 'flex', justifyContent: 'end' }}
        >
          {clearSlot}
        </Col>
      )}
    </Row>
  )
}
