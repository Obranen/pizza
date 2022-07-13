import {combineReducers} from 'redux';
import {carouselReducer} from './carouselReducer';
import {productReducer} from './productReducer';

export const rootReducer = combineReducers({
  carouselReducer: carouselReducer,
  productReducer: productReducer
})

export type RootReducer = ReturnType<typeof rootReducer>