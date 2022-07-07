import React, {FC} from 'react'

interface IInput {
  type: string
  name?: string
  value?: string
  onChange?: (event: any) => void
}

const Input: FC<IInput> =
  ({...props}) => {
    return (
      <input {...props}/>
    )
  }

export default Input