import React from 'react'
import Carousel from '../UI/Carousel/Carousel';

const CarouselOnMain = () => {
  return (
    <>
      <Carousel autoplay={{time: 2000, start: true}} />
    </>
  )
}

export default CarouselOnMain