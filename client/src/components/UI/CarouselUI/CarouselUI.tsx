import React, {useRef, useState} from 'react'
import classes from './CarouselUI.module.scss'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';
import {ICarouselState} from '../../../store/types/carousel';

const CarouselUI = () => {
  const itemList = useRef<any>(null)
  const [currentLengthList, setCurrentLengthList] = useState<number | string>(0)
  const [items, setItems] = useState([
    {
      imageSrc: 'https://wallpapercave.com/wp/wp6004835.jpg',
      imageAlt: 'фотка1',
      linkUrl: '/'
    },
    {
      imageSrc: 'https://wallpapercave.com/wp/wp6004853.jpg',
      imageAlt: 'фотка2',
      linkUrl: '/'
    },
    {
      imageSrc: 'https://wallpapercave.com/wp/wp6004978.jpg',
      imageAlt: 'фотка3',
      linkUrl: '/'
    }
  ])

  const optionsSlider = (optionsSlider: ICarouselState) => {
    setItems([...items, {
      imageSrc: optionsSlider.imageSrc,
      imageAlt: optionsSlider.imageAlt,
      linkUrl: optionsSlider.linkUrl
    }])
  }

  const arrowLeftHandler = () => {
    optionsSlider({imageSrc: 'фотка 4', imageAlt: 'фотка4', linkUrl: '/'})
    const LengthItem = getComputedStyle(itemList.current).width.slice(0, -2)
    const totalLength = +LengthItem * (items.length)
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
    const totalLength = +LengthItem * (items.length)
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
            {items.map((item, index) =>
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