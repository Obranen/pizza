import React, {FC, useState} from 'react'
import Input from '../../../UI/Input/Input'
import classes from './FindProducts.module.scss'
import {CgCloseR} from 'react-icons/cg';


interface IFindProducts {
  getFindValue: (value: string) => void
}

const FindProducts: FC<IFindProducts> = ({getFindValue}) => {
  const [findValue, setFindValue] = useState<string>('')
  const [isClearFind, setIsClearFind] = useState<boolean>(false)

  const findChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const $target = event.currentTarget
    setFindValue($target.value)
    getFindValue($target.value)

    if ($target.value === '') {
      setIsClearFind(false)
    } else {
      setIsClearFind(true)
    }
  }

  const ClearFindClickHandler = () => {
    getFindValue('')
    setFindValue('')
    setIsClearFind(false)
  }

  return (
    <div className={classes.wrapper}>
      <Input
        value={findValue}
        onChange={findChangeHandler}
        className={classes.find}
        type={'text'}
        placeholder={'Поиск'}
      />
      {isClearFind ?
        <CgCloseR onClick={ClearFindClickHandler} className={classes.clearFind}/>
        : <></>}
    </div>
  )
}

export default FindProducts