import React, {createContext, FC, useEffect, useRef, useState} from 'react'
import classes from './Carousel.module.scss'
import CarouselList from './CarouselList/CarouselList';
import CarouselArrowLeft from './CarouselArrowLeft/CarouselArrowLeft';
import CarouselArrowRight from './CarouselArrowRight/CarouselArrowRight';
import CarouselCircleNavList from './CarouselCircleNavList/CarouselCircleNavList';
import {ICarousel, ICircleList, ICurrentLengthListState, IItemList, IToggleStopAtHoverState} from './CarouselInterface';

export const Context = createContext({} as ICarousel & ICurrentLengthListState & IToggleStopAtHoverState & IItemList & ICircleList)

const Carousel: FC<ICarousel> =
  ({
     autoplay = {
       time: 2000,
       start: false
     },
     navArrow = true,
     navCircle = true,
     imagesOnWindow = 1,
     stopAtHover = false,
     visible = true
   }) => {
    const itemList = useRef<any>(null)
    const circleList = useRef<any>(null)
    const [currentLengthList, setCurrentLengthList] = useState<number>(0)
    const [toggleStopAtHover, setToggleStopAtHover] = useState<boolean>(true)

    const firstActiveCircleNav = () => {
      return circleList.current.firstChild.classList.add(classes.active)
    }

    const movedCursorOnCarouselHandler = () => {
      if (stopAtHover) {
        setToggleStopAtHover(false)
      }
    }

    const leaveCursorOnCarouselHandler = () => {
      if (stopAtHover) {
        setToggleStopAtHover(true)
      }
    }

    const autoplayCarousel = () => {
    }

    useEffect(() => {
      if (autoplay.start) {
        autoplayCarousel()
      }
    }, [currentLengthList, toggleStopAtHover])

    useEffect(() => {
      if (navCircle) {
        firstActiveCircleNav()
      }
    }, [])

    return (
      <Context.Provider value={{
        imagesOnWindow,
        autoplay,
        navCircle,
        circleList,
        itemList,
        toggleStopAtHover,
        currentLengthList,
        setCurrentLengthList
      }}>
        {visible
          ? <div
            className={classes.carousel}
            onMouseEnter={movedCursorOnCarouselHandler}
            onMouseLeave={leaveCursorOnCarouselHandler}
          >
            {navArrow ?
              <CarouselArrowLeft/>
              : <></>}
            <div className={classes.visibleItem}>
              <div
                ref={itemList}
                style={{transform: `translateX(${currentLengthList}px)`}}
                className={classes.list}
              >
                <CarouselList/>
              </div>
            </div>
            {navCircle ?
              <div ref={circleList} className={classes.circleWrapper}>
                <CarouselCircleNavList/>
              </div>
              : <></>}
            {navArrow ? <CarouselArrowRight autoplayCarousel={autoplayCarousel}/> : <></>}
          </div>
          : <></>}
      </Context.Provider>
    )
  }

export default Carousel