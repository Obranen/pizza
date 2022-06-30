import React, {useEffect, useRef, useState} from 'react'
import classes from './CarouselUI.module.scss'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';
import {useSelectorHook} from '../../../hooks/useSelectorHook';

const CarouselUI = () => {
  const {carousel} = useSelectorHook(state => state.carouselReducer)
  const itemList = useRef<any>(null)
  const circleList = useRef<any>(null)
  const [currentLengthList, setCurrentLengthList] = useState<number>(0)

  useEffect(() => {
    circleList.current.childNodes[0].classList.add(classes.active)
  }, [])

  const lengthCarousel = () => {
    const lengthItem = +getComputedStyle(itemList.current).width.slice(0, -2)
    const totalLength = lengthItem * +(carousel.length)
    return {lengthItem, totalLength}
  }

  const styledCircleNavAtClickArrowLeft = () => {
    if(circleList.current.querySelector('.CarouselUI_active__okCRK').previousSibling === null) {
      circleList.current.childNodes[circleList.current.childNodes.length - 1].classList.add(classes.active)
      circleList.current.childNodes[0].classList.remove(classes.active)
    } else {
      circleList.current.querySelector('.CarouselUI_active__okCRK').previousSibling.classList.add(classes.active)
      circleList.current.querySelector('.CarouselUI_active__okCRK').nextElementSibling.classList.remove(classes.active)
    }
  }

  const styledCircleNavAtClickArrowRight = () => {
    if(circleList.current.querySelector('.CarouselUI_active__okCRK').nextElementSibling === null) {
      circleList.current.querySelector('.CarouselUI_active__okCRK').classList.remove(classes.active)
      circleList.current.childNodes[0].classList.add(classes.active)
    } else {
      circleList.current.querySelector('.CarouselUI_active__okCRK').nextElementSibling.classList.add(classes.active)
      circleList.current.querySelector('.CarouselUI_active__okCRK').classList.remove(classes.active)
    }
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
    styledCircleNavAtClickArrowLeft()
  }

  const arrowRightHandler = () => {
    const {lengthItem, totalLength} = lengthCarousel()
    const currentLengthItem = +lengthItem - +currentLengthList
    if (currentLengthItem !== totalLength) {
      setCurrentLengthList(-currentLengthItem)
    } else {
      setCurrentLengthList(0)
    }
    styledCircleNavAtClickArrowRight()
  }

  const circleNavHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const {lengthItem} = lengthCarousel()
    const numberCircle = event.currentTarget.getAttribute('data-number')
    const currentLengthItem = lengthItem * Number(numberCircle)
    setCurrentLengthList(-currentLengthItem)

    circleList.current.querySelector('.CarouselUI_active__okCRK').classList.remove(classes.active)
    event.currentTarget.classList.add(classes.active)
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
      <div ref={circleList} className={classes.circleWrapper}>
        {carousel.map((item, index) =>
          <div key={index} data-number={index} onClick={circleNavHandler} className={classes.circle}></div>
        )}
      </div>
      <MdArrowForwardIos onClick={arrowRightHandler} className={classes.arrowRight}/>
    </div>
  )
}

export default CarouselUI