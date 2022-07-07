import React, {FC} from 'react'
import classes from './Button.module.scss'

interface IButton {
  children?: React.ReactNode
  onClick?: (event: any) => void
}

const Button: FC<IButton> = ({children, ...props}) => {

  return (
    <>
      <button {...props} className={classes.button}>{children}</button>
    </>
  )
}

export default Button