import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {Context} from '../Carousel';
import {useSelectorHook} from '../../../../hooks/useSelectorHook';

const CarouselList = () => {
  const {carousel} = useSelectorHook(state => state.carouselReducer)
  const {imagesOnWindow} = useContext(Context)

  const numberOfPictures = (number: any) => {
    return 100 / number
  }

  return (
    <>
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
    </>
  )
}

export default CarouselList