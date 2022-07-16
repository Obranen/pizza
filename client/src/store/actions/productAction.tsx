import {Dispatch} from 'redux';
import {ProductAction, ProductActionTypes} from '../types/productTypes';;

export const changeProduct = (data: any) => {
  return async  (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({type: ProductActionTypes.FETCH_USERS_SUCCESS, payload: data})
    } catch (e) {
      console.log(e)
    }
  }
}