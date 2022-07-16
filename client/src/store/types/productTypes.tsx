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
  products: any[],
  productsSort: any[]
}

export enum ProductActionTypes {
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
}

interface IFetchProductSuccessAction {
  type: ProductActionTypes.FETCH_USERS_SUCCESS
  payload: any
}

export type ProductAction = IFetchProductSuccessAction