import {combineReducers} from 'redux';
// import {carouselReducer} from './carouselReducer';

export const rootReducer = combineReducers({
  // carousel: carouselReducer
})

export type RootState = ReturnType<typeof rootReducer>