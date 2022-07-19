import React from 'react'
import Carousel from '../UI/Carousel/Carousel'
import {useSelectorHook} from '../../hooks/useSelectorHook';

const CarouselOnHomePage = () => {
  const {settings} = useSelectorHook(state => state.carouselReducer)

  return (
    <>
      <Carousel
        autoplay={{
          time: settings.autoplay!.time,
          start: settings.autoplay!.start
        }}
        stopAtHover={settings.stopAtHover}
        navArrow={settings.navArrow}
        navCircle={settings.navCircle}
        visible={settings.visible}
        imagesOnWindow={settings.imagesOnWindow}
      />
    </>
  )
}

export default CarouselOnHomePage