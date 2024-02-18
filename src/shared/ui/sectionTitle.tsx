import { Typography } from 'antd'

interface Props {
  title: string
}
export const SectionTitle = ({ title }: Props) => {
  return <Typography.Title style={{ padding: '0' }}>{title}</Typography.Title>
}
