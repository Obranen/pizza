import {Dispatch} from 'redux';
import {CarouselAction, CarouselActionTypes} from '../types/carousel';

export const fetchCarousel = () => {
  return (dispatch: Dispatch<CarouselAction>) => {
    dispatch({type: CarouselActionTypes.FETCH_CAROUSEL})
    // dispatch({type: CarouselActionTypes.FETCH_CAROUSEL_SUCCESS, payload: response})
  }
}