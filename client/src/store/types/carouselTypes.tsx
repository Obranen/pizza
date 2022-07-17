export interface ICarouselState {
  carousel: any[]
  loading: boolean
  error: null | string
}

export enum CarouselActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchCarouselAction {
  type: CarouselActionTypes.FETCH_USERS
}
interface IFetchCarouselSuccessAction {
  type: CarouselActionTypes.FETCH_USERS_SUCCESS
  payload: any
}
interface IFetchCarouselErrorAction {
  type: CarouselActionTypes.FETCH_USERS_ERROR
  payload: string
}
export type CarouselAction = IFetchCarouselAction | IFetchCarouselSuccessAction | IFetchCarouselErrorAction
