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

// export interface IProductState {
//   image?: IImage
//   title?: ITitle
//   desc?: string
//   checkbox?: ICheckbox
//   price?: number
// }

export interface IProductState {
  products: any[]
}