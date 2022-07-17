import {IProductState, ProductActionTypes} from '../types/productTypes'

const initialState: IProductState = {
  products: [
    {
      id: 1,
      image: {
        href: '#',
        src: 'https://mafia.ua/storage/editor/fotos/480x0/karbonara-metrovaya_1566297127558.jpeg',
        alt: 'pizza1'
      },
      title: {
        name: 'Карбонара метровая',
        weight: 1200,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [{
        name: 'Сырный бортик к метровой пицце',
        value: 'CheeseSide',
        price: 59
      }],
      price: 429
    },
    {
      id: 2,
      image: {
        href: '#',
        src: 'https://mafia.ua/storage/editor/fotos/480x0/margarita_156706066239.jpeg',
        alt: 'pizza2'
      },
      title: {
        name: 'Маргарита',
        weight: 450,
        href: '#'
      },
      desc: 'Соус маринара, помидоры, сыр моцарелла, соус песто Сирный соус в ПОДАРОК!',
      checkbox: [{
        name: 'Сырный бортик к средней пицце',
        value: 'CheeseSide',
        price: 29
      }],
      price: 149
    },
    {
      id: 3,
      image: {
        href: '#',
        src: 'https://mafia.ua/storage/editor/fotos/480x0/pollo_1567060914824.jpeg',
        alt: 'pizza3'
      },
      title: {
        name: 'Поло',
        weight: 550,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [{
        name: 'Соус барбекю',
        value: 'barbecueSauce',
        price: 15
      }],
      price: 219
    },
    {
      id: 4,
      image: {
        href: '#',
        src: 'https://mafia.ua/storage/editor/fotos/480x0/gurmeo-metrovaya_1566296981221.jpeg',
        alt: 'pizza4'
      },
      title: {
        name: 'Гурмео метровая',
        weight: 1300,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [
        {
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25
        },
        {
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15
        },
        {
          name: 'Сырный бортик к средней пицце',
          value: 'CheeseSide',
          price: 29
        }
      ],
      price: 439
    }
  ],
  productsFilters: [],
  loading: false,
  error: null
}

export const productReducer = (state = initialState, action: any): IProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    case ProductActionTypes.FETCH_PRODUCTS_FILTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        productsFilters: action.payload
      }
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}