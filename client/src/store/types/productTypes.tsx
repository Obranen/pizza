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
  loading: boolean
  error: null | string
}

export enum ProductActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FILTERS_SUCCESS = 'FETCH_PRODUCTS_FILTERS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
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

export type ProductAction = IFetchProductSuccessAction | IFetchProductFiltersSuccessAction | IFetchProductAction | IFetchProductErrorAction