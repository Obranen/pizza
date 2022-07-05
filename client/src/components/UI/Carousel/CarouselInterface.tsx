interface IAutoplay {
  time: number
  start: boolean
}

export interface ICarousel {
  autoplay?: IAutoplay
  navArrow?: boolean
  navCircle?: boolean
  imagesOnWindow?: number
  stopAtHover?: boolean
}

export interface ICurrentLengthListState {
  currentLengthList?: number
  setCurrentLengthList?: any
}

export interface IItemList {
  itemList?: any
}

export interface ICircleList {
  circleList?: any
}