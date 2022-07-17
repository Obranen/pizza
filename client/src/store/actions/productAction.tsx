import {Dispatch} from 'redux';
import {ProductAction, ProductActionTypes} from '../types/productTypes';

export const fetchProduct = (data: any) => {
  return async  (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: data})
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchProductFilters = (data: any) => {
  return async  (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS_FILTERS_SUCCESS, payload: data})
    } catch (e) {
      console.log(e)
    }
  }
}