import {CarouselAction, CarouselActionTypes} from '../types/carouselTypes';
import {Dispatch} from 'redux';
// import axios from 'axios';

export const fetchCarousel = (data: any) => {
  return async  (dispatch: Dispatch<CarouselAction>) => {
    try {
      // dispatch({type: CarouselActionTypes.FETCH_USERS})
      // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({type: CarouselActionTypes.FETCH_USERS_SUCCESS, payload: data})
    } catch (e) {
      // dispatch({type: CarouselActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'})
    }
  }
}