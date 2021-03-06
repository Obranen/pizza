import React, {FC, useContext, useEffect} from 'react'
import classes from '../Carousel.module.scss';
import {MdArrowForwardIos} from 'react-icons/md';
import {useSelectorHook} from '../../../../hooks/useSelectorHook';
import {Context} from '../Carousel';

interface ICarouselArrowRight {
  autoplayCarousel?: (nextSlide: any) => void
}

const CarouselArrowRight: FC<ICarouselArrowRight> = ({autoplayCarousel}) => {
  const {carousel} = useSelectorHook(state => state.carouselReducer)
  const {
    imagesOnWindow,
    autoplay,
    circleList,
    itemList,
    navCircle,
    toggleStopAtHover,
    currentLengthList,
    setCurrentLengthList
  } = useContext(Context)

  const $circleWithClassActive = () => {
    return circleList.current.querySelector(`.${classes.active}`)
  }

  const styledCircleNavAtClickArrowRight = () => {
    if ($circleWithClassActive().nextSibling === null) {
      $circleWithClassActive().classList.remove(classes.active)
      circleList.current.firstChild.classList.add(classes.active)
    } else {
      $circleWithClassActive().nextSibling.classList.add(classes.active)
      $circleWithClassActive().classList.remove(classes.active)
    }
  }

  useEffect(() => {
    const time = setTimeout(() => {
      if (autoplay?.start && toggleStopAtHover) {
          autoplayCarousel!(arrowRightHandler())
      }
    }, autoplay?.time)
    return () => {
      clearTimeout(time);
    }
  }, [autoplayCarousel])

  const arrowRightHandler = () => {
    const lengthItem = itemList.current.offsetWidth
    const totalLength = (lengthItem * +(carousel.length)) / imagesOnWindow!
    const currentLengthItem = +lengthItem - +currentLengthList!
    if (currentLengthItem !== totalLength) {
      setCurrentLengthList!(-currentLengthItem)
    } else {
      setCurrentLengthList!(0)
    }

    if (navCircle) {
      styledCircleNavAtClickArrowRight()
    }
  }

  return (
    <MdArrowForwardIos onClick={arrowRightHandler} className={classes.arrowRight}/>
  )
}

export default CarouselArrowRight