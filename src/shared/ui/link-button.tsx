import { Link, LinkProps } from 'react-router-dom'
import { Button, ButtonProps } from 'antd'

interface Props extends ButtonProps {
  to: string
  linkProps?: Omit<LinkProps, 'to'>
}

export const LinkButton = ({ to, linkProps, ...buttonProps }: Props) => {
  return (
    <Link
      to={to}
      {...linkProps}
    >
      <Button {...buttonProps} />
    </Link>
  )
}
