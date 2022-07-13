import React, {FC, useEffect, useState} from 'react'
import Checkbox from '../../UI/Checkbox/Checkbox';
import classes from '../Product.module.scss';

interface ICheckboxProductItem {
  checkbox: any
}

const CheckboxProductItem: FC<ICheckboxProductItem> =
  ({checkbox}) => {
    const [increment, setIncrement] = useState<number>(0)
    const [decrement, setDecrement] = useState<number>(0)
    const [priceSum, setPriceSum] = useState<number>(0)
    const [isTimer, setIsTimer] = useState<boolean>(false)
    const [attrPriceId, setAttrPriceId] = useState<number>(0)

    const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const $priceCurrentProduct = event.currentTarget.parentNode?.parentNode?.parentNode?.parentNode?.querySelector(`.${classes.price}`)
      const priceCurrentProduct = event.currentTarget.parentNode?.parentNode?.parentNode?.parentNode?.querySelector(`.${classes.price}`)?.innerHTML
      const additionalPriceChecked = event.currentTarget.getAttribute('data-price')
      const attrPriceDataId = Number($priceCurrentProduct!.getAttribute('data-id'))
      const isChecked = event.currentTarget.checked.valueOf()

      if (isChecked) {
        const priceIncrement = Number(priceCurrentProduct) + Number(additionalPriceChecked)
        setPriceSum(priceIncrement)
        setIncrement(Number(priceCurrentProduct))
        setIsTimer(true)
        setAttrPriceId(attrPriceDataId)
      } else {
        const priceDecrement = Number(priceCurrentProduct) - Number(additionalPriceChecked)
        setPriceSum(priceDecrement)
        setDecrement(Number(priceCurrentProduct))
        setIsTimer(false)
        setAttrPriceId(attrPriceDataId)
      }
    }

    useEffect(() => {
      let timer: any = null
      const $attrPriceId = document.querySelector(`[data-id="${attrPriceId}"]`)
      if (isTimer) {
        if (increment < priceSum) {
          timer = setInterval(() => {
            setIncrement((prevState: number) => prevState + 1)
            $attrPriceId!.innerHTML = `${increment}`
          }, 7)
        }
      } else {
        if (priceSum < decrement) {
          timer = setInterval(() => {
            setDecrement((prevState: number) => prevState - 1)
            $attrPriceId!.innerHTML = `${decrement}`
          }, 7)
        }
      }
      return () => {
        clearInterval(timer)
      }
    }, [increment, isTimer, decrement])

    return (
      <>
        <Checkbox
          onChange={checkboxChangeHandler}
          value={checkbox.value}
          name={checkbox.name}
          data-price={checkbox.price}
          price={checkbox.price}
        />
      </>
    )
  }

export default CheckboxProductItem