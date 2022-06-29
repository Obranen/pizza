import React, {useRef, useState} from 'react'
import classes from './CarouselUI.module.scss'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';
import {useSelectorHook} from '../../../hooks/useSelectorHook';

const CarouselUI = () => {
  const {carousel} = useSelectorHook(state => state.carouselReducer)
  const itemList = useRef<any>(null)
  const [currentLengthList, setCurrentLengthList] = useState<number>(0)

  const lengthCarousel = () => {
    const lengthItem = +getComputedStyle(itemList.current).width.slice(0, -2)
    const totalLength = lengthItem * +(carousel.length)
    return {lengthItem, totalLength}
  }

  const arrowLeftHandler = () => {
    const {lengthItem, totalLength} = lengthCarousel()
    if (currentLengthList < 0) {
      const currentLengthItem = currentLengthList + lengthItem
      setCurrentLengthList(currentLengthItem)
    } else {
      const currentLengthItem = +totalLength - +lengthItem
      setCurrentLengthList(-currentLengthItem)
    }
  }

  const arrowRightHandler = () => {
    const {lengthItem, totalLength} = lengthCarousel()
    const currentLengthItem = +lengthItem - +currentLengthList
    if (currentLengthItem !== totalLength) {
      setCurrentLengthList(-currentLengthItem)
    } else {
      setCurrentLengthList(0)
    }
  }

  const circleNavHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const {lengthItem} = lengthCarousel()
    const numberCircle = event.currentTarget.getAttribute('data-number')
    const currentLengthItem = lengthItem * Number(numberCircle)
    setCurrentLengthList(-currentLengthItem)
  }

  return (
    <div className={classes.slider}>
      <MdArrowBackIosNew className={classes.arrowLeft} onClick={arrowLeftHandler}/>
      <div className={classes.visibleItem}>
        <div ref={itemList} style={{transform: `translateX(${currentLengthList}px)`}} className={classes.list}>
          {carousel.map((item, index) =>
            <div key={index}>
              <Link to={item.linkUrl}>
                <img src={item.imageSrc} alt={item.imageAlt}/>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className={classes.circleWrapper}>
        {carousel.map((item, index) =>
          <div key={index} data-number={index} onClick={circleNavHandler} className={classes.circle}></div>
        )}
      </div>
      <MdArrowForwardIos onClick={arrowRightHandler} className={classes.arrowRight}/>
    </div>
  )
}

export default CarouselUI