import {Dispatch} from 'redux';
import {CarouselAction, CarouselActionTypes} from '../types/carouselTypes';
// import axios from 'axios';

export const fetchCarousel = (data: any) => {
  return async  (dispatch: Dispatch<CarouselAction>) => {
    try {
      // dispatch({type: CarouselActionTypes.FETCH_CAROUSEL})
      // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      // dispatch({type: CarouselActionTypes.FETCH_CAROUSEL_SUCCESS, payload: data})
    } catch (e) {
      // dispatch({type: CarouselActionTypes.FETCH_CAROUSEL_ERROR, payload: 'Произошла ошибка при загрузке картинки'})
    }
  }
}