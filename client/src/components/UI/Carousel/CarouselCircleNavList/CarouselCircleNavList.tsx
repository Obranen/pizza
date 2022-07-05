import React, {useContext} from 'react'
import classes from '../Carousel.module.scss';
import {useSelectorHook} from '../../../../hooks/useSelectorHook';
import {Context} from '../Carousel';

const CarouselCircleNavList = () => {
  const {carousel} = useSelectorHook(state => state.carouselReducer)
  const {
    circleList,
    itemList,
    setCurrentLengthList
  } = useContext(Context)

  const $circleWithClassActive = () => {
    return circleList.current.querySelector(`.${classes.active}`)
  }

  const circleNavHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const lengthItem = itemList.current.offsetWidth
    const numberCircle = event.currentTarget.getAttribute('data-number')
    const currentLengthItem = lengthItem * Number(numberCircle)
    setCurrentLengthList(-currentLengthItem)

    $circleWithClassActive().classList.remove(classes.active)
    event.currentTarget.classList.add(classes.active)
  }

  return (
    <>
      {carousel.map((item, index) =>
        <div key={index} data-number={index} onClick={circleNavHandler} className={classes.circle}></div>
      )}
    </>
  )
}

export default CarouselCircleNavList