import React, {FC, useState} from 'react'
import Input from '../../UI/Input/Input'
import classes from './FindProduct.module.scss'

interface IFindProduct {
  getFindValue: (value: string) => void
}

const FindProduct: FC<IFindProduct> = ({getFindValue}) => {
  const [findValue, setFindValue] = useState<string>('')

  const findChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const $target = event.currentTarget
    setFindValue($target.value)
    getFindValue($target.value)
  }

  return (
    <div className={classes.wrapper}>
      <Input
        value={findValue}
        onChange={findChangeHandler}
        className={classes.find}
        type={'text'}
        placeholder={'Поиск'}/>
    </div>
  )
}

export default FindProduct