import React, {FC} from 'react'
import classes from './Checkbox.module.scss'

interface ICheckbox {
  type: string
  value: string
  name: string
}

const Checkbox: FC<ICheckbox> = ({value, type, name}) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.checkbox}>
        <input value={value} type={type}/>
        <span>{name}</span>
      </label>
    </div>
  )
}

export default Checkbox