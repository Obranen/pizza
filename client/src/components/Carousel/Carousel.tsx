import React from 'react'
import CarouselUI from '../UI/CarouselUI/CarouselUI';

const Carousel = () => {
  return (
    <>
      <CarouselUI autoplay={{time: 2000, start: true}}/>
    </>
  )
}

export default Carousel