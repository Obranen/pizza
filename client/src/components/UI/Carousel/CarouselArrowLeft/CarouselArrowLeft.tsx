import React, {useContext} from 'react'
import classes from '../Carousel.module.scss';
import {MdArrowBackIosNew} from 'react-icons/md';
import {Context} from '../Carousel';
import {useSelectorHook} from '../../../../hooks/useSelectorHook';

const CarouselArrowLeft = () => {
  const {carousel} = useSelectorHook(state => state.carouselReducer)
  const {
    imagesOnWindow,
    circleList,
    itemList,
    navCircle,
    currentLengthList,
    setCurrentLengthList
  } = useContext(Context)

  const $circleWithClassActive = () => {
    return circleList.current.querySelector(`.${classes.active}`)
  }

  const styledCircleNavAtClickArrowLeft = () => {
    if ($circleWithClassActive().previousSibling === null) {
      circleList.current.childNodes[circleList.current.childNodes.length - 1].classList.add(classes.active)
      circleList.current.childNodes[0].classList.remove(classes.active)
    } else {
      $circleWithClassActive().previousSibling.classList.add(classes.active)
      $circleWithClassActive().nextSibling.classList.remove(classes.active)
    }
  }

  const arrowLeftHandler = () => {
    const lengthItem = itemList.current.offsetWidth
    const totalLength = (lengthItem * +(carousel.length)) / imagesOnWindow!
    if (currentLengthList! < 0) {
      const currentLengthItem = currentLengthList + lengthItem
      setCurrentLengthList!(currentLengthItem)
    } else {
      const currentLengthItem = +totalLength - +lengthItem
      setCurrentLengthList!(-currentLengthItem)
    }
    if (navCircle) {
      styledCircleNavAtClickArrowLeft()
    }
  }

  return (
    <MdArrowBackIosNew className={classes.arrowLeft} onClick={arrowLeftHandler}/>
  )
}

export default CarouselArrowLeft