import React, {FC, useContext} from 'react'
import {Context} from '../../Carousel';
import classes from '../../Carousel.module.scss';
import {useSelectorHook} from '../../../../../hooks/useSelectorHook';

interface ICarouselCircleNavItem {
  index: number
}

const CarouselCircleNavItem: FC<ICarouselCircleNavItem> = ({index}) => {
  const {carousel} = useSelectorHook(state => state.carouselReducer)
  const {
    imagesOnWindow,
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
    setCurrentLengthList!(-currentLengthItem)

    $circleWithClassActive().classList.remove(classes.active)
    event.currentTarget.classList.add(classes.active)
  }

  const quantityCircles = () => {
    return carousel.length / imagesOnWindow!
  }

  return (
    <>
      {index < quantityCircles()
        ? <div data-number={index} onClick={circleNavHandler} className={classes.circle}></div>
        : <></>}
    </>
  )
}

export default CarouselCircleNavItem