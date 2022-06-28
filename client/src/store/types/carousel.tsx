export interface ICarouselState {

    imageSrc: string
    imageAlt: string
    linkUrl: string


}

export enum CarouselActionTypes {
  FETCH_CAROUSEL = 'FETCH_CAROUSEL',
  FETCH_CAROUSEL_SUCCESS = 'FETCH_CAROUSEL_SUCCESS',
}

interface IFetchCarouselAction {
  type: CarouselActionTypes.FETCH_CAROUSEL
}
interface IFetchCarouselSuccessAction {
  type: CarouselActionTypes.FETCH_CAROUSEL_SUCCESS
  payload: any
}

export type CarouselAction = IFetchCarouselAction | IFetchCarouselSuccessAction