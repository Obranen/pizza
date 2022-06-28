// import {CarouselAction, CarouselActionTypes, ICarouselState} from '../types/carousel';
//
// const initialState: ICarouselState = {
//   carousel: [{
//     imageSrc: '',
//     imageAlt: '',
//     linkUrl: ''
//   }],
//   loading: false,
//   error: null
// }
//
// export const carouselReducer = (state = initialState, action: CarouselAction): ICarouselState => {
//   switch (action.type) {
//     case CarouselActionTypes.FETCH_CAROUSEL:
//       return {
//         loading: true,
//         error: null,
//         carousel: [{
//           imageSrc: '',
//           imageAlt: '',
//           linkUrl: ''
//         }]
//       }
//     case CarouselActionTypes.FETCH_CAROUSEL_SUCCESS:
//       return {
//         loading: false,
//         error: null,
//         carousel: action.payload
//       }
//     default:
//       return state
//   }
// }
import React, {FC} from 'react'

interface IcarouselReducer {}

const carouselReducer: FC<IcarouselReducer> =
  ({}) => {
    return (
      <>
        <h1>sf</h1>
      </>
    )
  }

export default carouselReducer