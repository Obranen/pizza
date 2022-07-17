interface ICarousel {
  imageSrc: string
  imageAlt: string
  linkUrl: string
}

export interface ICarouselState {
  carousel: ICarousel[]
  loading: boolean
  error: null | string
}

export enum CarouselActionTypes {
  FETCH_CAROUSEL = 'FETCH_CAROUSEL',
  FETCH_CAROUSEL_SUCCESS = 'FETCH_CAROUSEL_SUCCESS',
  FETCH_CAROUSEL_ERROR = 'FETCH_CAROUSEL_ERROR',
}

interface IFetchCarouselAction {
  type: CarouselActionTypes.FETCH_CAROUSEL
}
interface IFetchCarouselSuccessAction {
  type: CarouselActionTypes.FETCH_CAROUSEL_SUCCESS
  payload: any
}
interface IFetchCarouselErrorAction {
  type: CarouselActionTypes.FETCH_CAROUSEL_ERROR
  payload: string
}
export type CarouselAction = IFetchCarouselAction | IFetchCarouselSuccessAction | IFetchCarouselErrorAction
