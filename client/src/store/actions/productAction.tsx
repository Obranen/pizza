import {Dispatch} from 'redux'
import {ProductAction, ProductActionTypes} from '../types/productTypes'

export const fetchProductFilters = (data: any) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS_FILTERS_SUCCESS, payload: data})
    } catch (e) {
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Произошла ошибка при загрузке товара'})
    }
  }
}

export const setPage = (page: number): ProductAction => {
  return {type: ProductActionTypes.SET_PRODUCTS_PAGE, payload: page}
}