import React, {useEffect, useState} from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid';
import classes from './Product.module.scss'
import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import {useSelectorHook} from '../../hooks/useSelectorHook';

const Product = () => {
  const {products} = useSelectorHook(state => state.productReducer)
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

  const clickHandler = () => {

  }

  return (
    <Grid fluid>
      <Row>
        {products.map((product, indexProduct) =>
          <Col key={indexProduct} sm={3}>
            <div className={classes.product}>
              <a
                className={classes.imageLink}
                href={product.image.href}>
                <img
                  className={classes.image}
                  src={product.image.src}
                  alt={product.image.alt}
                />
              </a>
              <div className={classes.content}>
                <div className={classes.title}>
                  <a href={product.title.href}>
                    <span>{product.title.name}</span>
                  </a>
                  <span className={classes.weight}>{product.title.weight} г</span>
                </div>
                <div className={classes.desc}>
                  {product.desc}
                </div>
                <div className={classes.checkboxWrapper}>
                  {product.checkbox.map((checkbox: { value: string; name: string; price: number; id: number; }, index: React.Key) =>
                    <Checkbox
                      key={index}
                      onChange={checkboxChangeHandler}
                      value={checkbox.value}
                      name={checkbox.name}
                      data-price={checkbox.price}
                      price={checkbox.price}
                    />
                  )}
                </div>
                <div className={classes.priceWrapper}>
                  <span data-id={indexProduct} className={classes.price}>
                    {product.price}
                  </span>грн
                </div>
                <Button className={classes.button} onClick={clickHandler}>Заказать</Button>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </Grid>
  )
}

export default Product