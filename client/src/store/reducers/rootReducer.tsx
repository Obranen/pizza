import {combineReducers} from 'redux';
import {carouselReducer} from './carouselReducer';

export const rootReducer = combineReducers({
  carouselReducer: carouselReducer
})

export type RootReducer = ReturnType<typeof rootReducer>