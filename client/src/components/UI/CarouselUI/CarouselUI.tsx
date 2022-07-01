import React, {FC, useEffect, useRef, useState} from 'react'
import classes from './CarouselUI.module.scss'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';
import {useSelectorHook} from '../../../hooks/useSelectorHook';

interface IAutoplay {
  time: number
  start: boolean
}

interface ICarouselUI {
  autoplay?: IAutoplay
  navArrow?: boolean
  navCircle?: boolean
  imagesOnWindow?: number
  stopAtHover?: boolean
}

const CarouselUI: FC<ICarouselUI> =
  ({
     autoplay = {
       time: 2000,
       start: false
     },
     navArrow = true,
     navCircle = true,
     imagesOnWindow = 1,
     stopAtHover = false
   }) => {
    const {carousel} = useSelectorHook(state => state.carouselReducer)
    const itemList = useRef<any>(null)
    const circleList = useRef<any>(null)
    const [currentLengthList, setCurrentLengthList] = useState<number>(0)
    const [toggleStopAtHover, setToggleStopAtHover] = useState<boolean>(true)

    const $circleWithClassActive = () => {
      return circleList.current.querySelector(`.${classes.active}`)
    }

    const firstActiveCircleNav = () => {
      return circleList.current.childNodes[0].classList.add(classes.active)
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

    const numberOfPictures = (number: number) => {
      return 100 / number
    }

    const autoplayCarousel = () => {
      if (toggleStopAtHover) {
        const time = setTimeout(() => {
          arrowRightHandler()
        }, autoplay.time)
        return () => {
          clearTimeout(time);
        }
      }
    }

    useEffect(() => {
      if (navCircle) {
        firstActiveCircleNav()
      }
    }, [])

    useEffect(() => {
      if (autoplay.start) {
        autoplayCarousel()
      }
    }, [currentLengthList, toggleStopAtHover])

    const lengthCarousel = () => {
      const lengthItem = itemList.current.offsetWidth
      const totalLength = lengthItem * +(carousel.length)
      return {lengthItem, totalLength}
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

    const styledCircleNavAtClickArrowRight = () => {
      if ($circleWithClassActive().nextSibling === null) {
        $circleWithClassActive().classList.remove(classes.active)
        circleList.current.childNodes[0].classList.add(classes.active)
      } else {
        $circleWithClassActive().nextSibling.classList.add(classes.active)
        $circleWithClassActive().classList.remove(classes.active)
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
      if (navCircle) {
        styledCircleNavAtClickArrowLeft()
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
      if (navCircle) {
        styledCircleNavAtClickArrowRight()
      }
    }

    const circleNavHandler = (event: React.MouseEvent<HTMLDivElement>) => {
      const {lengthItem} = lengthCarousel()
      const numberCircle = event.currentTarget.getAttribute('data-number')
      const currentLengthItem = lengthItem * Number(numberCircle)
      setCurrentLengthList(-currentLengthItem)

      $circleWithClassActive().classList.remove(classes.active)
      event.currentTarget.classList.add(classes.active)
    }

    return (
      <div
        className={classes.carousel}
        onMouseEnter={movedCursorOnCarouselHandler}
        onMouseLeave={leaveCursorOnCarouselHandler}
      >
        {navArrow ? <MdArrowBackIosNew className={classes.arrowLeft} onClick={arrowLeftHandler}/> : <></>}
        <div className={classes.visibleItem}>
          <div
            ref={itemList}
            style={{transform: `translateX(${currentLengthList}px)`}}
            className={classes.list}
          >
            {carousel.map((item, index) =>
              <div style=
                     {{
                       minWidth: `${numberOfPictures(imagesOnWindow)}%`,
                       maxWidth: `${numberOfPictures(imagesOnWindow)}%`
                     }} data-number={index} key={index}>
                <Link to={item.linkUrl}>
                  <img src={item.imageSrc} alt={item.imageAlt}/>
                </Link>
              </div>
            )}
          </div>
        </div>
        {navCircle ?
          <div ref={circleList} className={classes.circleWrapper}>
            {carousel.map((item, index) =>
              <div key={index} data-number={index} onClick={circleNavHandler} className={classes.circle}></div>
            )}
          </div>
          : <></>}
        {navArrow ? <MdArrowForwardIos onClick={arrowRightHandler} className={classes.arrowRight}/> : <></>}
      </div>
    )
  }

export default CarouselUI