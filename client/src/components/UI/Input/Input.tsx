import React, {FC} from 'react'
import classes from './Input.module.scss'

interface IInput {
  type: string
  name?: string
  value?: string
  placeholder?: string
  className?: any
  onChange?: (event: any) => void
}

const Input: FC<IInput> =
  ({...props}) => {
    return (
      <input {...props} className={[classes.input, props.className].join(' ')}/>
    )
  }

export default Input