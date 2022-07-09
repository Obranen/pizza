import React, {FC} from 'react'
import classes from './Checkbox.module.scss'

interface ICheckbox {
  value?: string
  name?: string
  price?: number
  onChange?: (event: any) => void
}

const Checkbox: FC<ICheckbox> = ({onChange, price, name, value}) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.checkbox}>
        <input value={value} data-price={price} onChange={onChange} type={'checkbox'}/>
        <span className={classes.name}>{name}</span>
        <span className={classes.additionalPrice}>+{price} грн</span>
      </label>
    </div>
  )
}

export default Checkbox