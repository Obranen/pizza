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
  visible?: boolean
}

export interface ICurrentLengthListState {
  currentLengthList?: number
  setCurrentLengthList?: (number: number) => void
}

export interface IToggleStopAtHoverState {
  toggleStopAtHover: boolean
}

export interface IItemList {
  itemList?: any
}

export interface ICircleList {
  circleList?: any
}