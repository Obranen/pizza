interface IImage {
  href: string
  src: string
  alt: string
}

interface ITitle {
  name: string
  weight: number
  href: string
}

interface ICheckbox {
  id: number
  name: string
  value: string
  price: number
}

export interface IProducts {
  id?: number
  image?: IImage
  title?: ITitle
  desc?: string
  checkbox?: ICheckbox[]
  price?: number
}

export interface IProductState {
  products: IProducts[]
  productsFilters: IProducts[]
  quantityShowedProducts: number
  totalPagesLoaded: number
  loading: boolean
  error: null | string
}

export enum ProductActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FILTERS_SUCCESS = 'FETCH_PRODUCTS_FILTERS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  SET_PRODUCTS_PAGE = 'SET_PRODUCTS_PAGE',
}

interface IFetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCTS
}

interface IFetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS
  payload: any
}

interface IFetchProductFiltersSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_FILTERS_SUCCESS
  payload: any
}

interface IFetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR
  payload: string
}

interface ISetProductPage {
  type: ProductActionTypes.SET_PRODUCTS_PAGE
  payload: number
}

export type ProductAction = IFetchProductSuccessAction | IFetchProductFiltersSuccessAction | IFetchProductAction | IFetchProductErrorAction | ISetProductPage