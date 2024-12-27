import classNames from 'classnames'
import React, { FC, memo } from 'react'
import styles from './Button.module.scss'

type ButtonProps = React.JSX.IntrinsicElements['button']

type Props = ButtonProps & {
  align?: 'left' | 'center' | 'right'
  color?: 'tertiary' | 'tertiary-light' | 'blue-green' | 'primary'
  label?: string
  shape?: 'square' | 'round'
  size?: 'small' | 'medium' | 'large' | 'sm' | 'lg' | 'icon'
  textColor?: 'black' | 'white'
  variant?: 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
  children: React.ReactNode
}

const Button: FC<Props> = memo(function button(props: Props) {
  const {
    align = 'center',
    color = 'primary',
    shape = 'square',
    size = 'medium',
    textColor = 'black',
    children,
    ...buttonProps
  } = props

  return (
    <button
      className={classNames(
        styles[align],
        styles.button,
        styles[color],
        styles[shape],
        styles[size]
      )}
      {...buttonProps}
    >
      <span className={classNames(styles.label, styles[textColor])}>{children}</span>
    </button>
  )
})

export default Button
