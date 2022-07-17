import {Dispatch} from 'redux';
import {ProductAction, ProductActionTypes} from '../types/productTypes';
// import axios from 'axios';

export const fetchCarousel = (data: any) => {
  return async  (dispatch: Dispatch<ProductAction>) => {
    try {
      // dispatch({type: CarouselActionTypes.FETCH_USERS})
      // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      // dispatch({type: ProductActionTypes.FETCH_PRODUCTS_FIND_SUCCESS, payload: data})
    } catch (e) {
      // dispatch({type: CarouselActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'})
    }
  }
}