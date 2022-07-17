// interface IImage {
//   href: string
//   src: string
//   alt: string
// }
//
// interface ITitle {
//   name: string
//   weight: number
//   href: string
// }
//
// interface ICheckbox {
//   name: string
//   value: string
//   price: number
// }

// export interface IProductState {
//   image?: IImage
//   title?: ITitle
//   desc?: string
//   checkbox?: ICheckbox
//   price?: number
// }

export interface IProductState {
  products: any[]
  productsFilters: any[]
}

export enum ProductActionTypes {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FILTERS_SUCCESS = 'FETCH_PRODUCTS_FILTERS_SUCCESS',
}

interface IFetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS
  payload: any
}

interface IFetchProductFiltersSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_FILTERS_SUCCESS
  payload: any
}

export type ProductAction = IFetchProductSuccessAction | IFetchProductFiltersSuccessAction