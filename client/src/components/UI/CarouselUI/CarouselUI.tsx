import React, {useRef, useState} from 'react'
import classes from './CarouselUI.module.scss'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';
// import {ICarouselState} from '../../../store/types/carouselTypes';
// import {useDispatchHook} from '../../../hooks/useDispatchHook';
import {useSelectorHook} from '../../../hooks/useSelectorHook';

const CarouselUI = () => {
  // const {fetchCarousel} = useDispatchHook()
  const {carousel, loading, error} = useSelectorHook(state => state.carouselReducer)
  const itemList = useRef<any>(null)
  const [currentLengthList, setCurrentLengthList] = useState<number | string>(0)

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  // useEffect(() => {
  //   fetchCarousel(items)
  // }, [])

  //Добавление
  // const optionsSlider = (optionsSlider: any) => {
  //   setItems([...items, {
  //     imageSrc: optionsSlider.imageSrc,
  //     imageAlt: optionsSlider.imageAlt,
  //     linkUrl: optionsSlider.linkUrl
  //   }])
  // }
  // optionsSlider({imageSrc: 'фотка 4', imageAlt: 'фотка4', linkUrl: '/'})

  const arrowLeftHandler = () => {
    const LengthItem = getComputedStyle(itemList.current).width.slice(0, -2)
    const totalLength = +LengthItem * (carousel.length)
    if (currentLengthList < 0) {
      const currentLengthItem = +currentLengthList + +LengthItem
      setCurrentLengthList(currentLengthItem)
    } else {
      const currentLengthItem = +totalLength - +LengthItem
      setCurrentLengthList(-currentLengthItem)
    }
  }

  const arrowRightHandler = () => {
    const LengthItem = getComputedStyle(itemList.current).width.slice(0, -2)
    const totalLength = +LengthItem * (carousel.length)
    const currentLengthItem = +LengthItem - +currentLengthList
    if (currentLengthItem !== totalLength) {
      setCurrentLengthList(-currentLengthItem)
    } else {
      setCurrentLengthList(0)
    }
  }

  return (
    <>
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
        <MdArrowForwardIos onClick={arrowRightHandler} className={classes.arrowRight}/>
      </div>
    </>
  )
}

export default CarouselUI