import React from 'react'
import {useSelectorHook} from '../../../../hooks/useSelectorHook';
import CarouselCircleNavItem from './CarouselCircleNavItem/CarouselCircleNavItem';

const CarouselCircleNavList = () => {
  const {carousel} = useSelectorHook(state => state.carouselReducer)

  return (
    <>
      {carousel.map((item, index) =>
        <CarouselCircleNavItem
          index={index}
          key={index}
        />
      )}
    </>
  )
}

export default CarouselCircleNavList