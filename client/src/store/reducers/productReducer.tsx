import {IProductState, ProductActionTypes} from '../types/productTypes'
import karbonaraMetrovaya from '../../utils/images/product/pizza/karbonara-metrovaya_1566297127558.jpeg'
import margarita from '../../utils/images/product/pizza/margarita_156706066239.jpeg'
import pollo from '../../utils/images/product/pizza/pollo_1567060914824.jpeg'
import gurmeoMetrovaya from '../../utils/images/product/pizza/gurmeo-metrovaya_1566296981221.jpeg'
import milano from '../../utils/images/product/pizza/milano_1654329100503.jpeg'
import chetyreSyra from '../../utils/images/product/pizza/chetyre-syra_1567059967719.jpeg'
import poloMetrovaya from '../../utils/images/product/pizza/polo-metrovaya_1566297194328.jpeg'
import karbonara from '../../utils/images/product/pizza/karbonara_1654274567805.jpeg'
import gurmeo from '../../utils/images/product/pizza/gurmeo_1567060279780.jpeg'

const initialState: IProductState = {
  products: [
    {
      id: 1,
      image: {
        href: '#',
        // src: 'https://mafia.ua/storage/editor/fotos/480x0/karbonara-metrovaya_1566297127558.jpeg',
        src: karbonaraMetrovaya,
        alt: 'pizza1'
      },
      title: {
        name: 'Карбонара метровая',
        weight: 1200,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [{
        id: 1,
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
        src: margarita,
        alt: 'pizza2'
      },
      title: {
        name: 'Маргарита',
        weight: 450,
        href: '#'
      },
      desc: 'Соус маринара, помидоры, сыр моцарелла, соус песто Сирный соус в ПОДАРОК!',
      checkbox: [{
        id: 1,
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
        src: pollo,
        alt: 'pizza3'
      },
      title: {
        name: 'Поло',
        weight: 550,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [{
        id: 1,
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
        src: gurmeoMetrovaya,
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
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15
        },
        {
          id: 3,
          name: 'Сырный бортик к средней пицце',
          value: 'CheeseSide',
          price: 29
        }
      ],
      price: 439
    },
    {
      id: 5,
      image: {
        href: '#',
        src: milano,
        alt: 'pizza5'
      },
      title: {
        name: 'Милано',
        weight: 530,
        href: '#'
      },
      desc: 'Салями милано, сыр моцарелла, томаты черри, руккола, соус маринара',
      checkbox: [
        {
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15
        },
        {
          id: 3,
          name: 'Сырный бортик к средней пицце',
          value: 'CheeseSide',
          price: 29
        }
      ],
      price: 179
    },
    {
      id: 6,
      image: {
        href: '#',
        src: chetyreSyra,
        alt: 'pizza6'
      },
      title: {
        name: 'Четыре сыра',
        weight: 430,
        href: '#'
      },
      desc: 'Cыр дор блю, сыр чеддер, сыр пармезан, сыр моцарелла, груша, грецкий орех, сливочный',
      checkbox: [
        {
          id: 1,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15
        },
        {
          id: 2,
          name: 'Сырный бортик к средней пицце',
          value: 'CheeseSide',
          price: 29
        }
      ],
      price: 197
    },
    {
      id: 7,
      image: {
        href: '#',
        src: poloMetrovaya,
        alt: 'pizza7'
      },
      title: {
        name: 'Поло метровая',
        weight: 1350,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [
        {
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15
        },
        {
          id: 3,
          name: 'Сырный бортик к средней пицце',
          value: 'CheeseSide',
          price: 29
        }
      ],
      price: 429
    },
    {
      id: 8,
      image: {
        href: '#',
        src: karbonara,
        alt: 'pizza8'
      },
      title: {
        name: 'Карбонара',
        weight: 500,
        href: '#'
      },
      desc: 'Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, томаты черри и трюфельное масло Сирный соус в ПОДАРОК!',
      checkbox: [
        {
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15
        },
        {
          id: 3,
          name: 'Сырный бортик к средней пицце',
          value: 'CheeseSide',
          price: 29
        }
      ],
      price: 239
    },
    {
      id: 9,
      image: {
        href: '#',
        src: gurmeo,
        alt: 'pizza9'
      },
      title: {
        name: 'Гурмео',
        weight: 580,
        href: '#'
      },
      desc: 'Филе куриное sous-vide, ветчина, колбаски охотничьи, пеперони, сыр моцарелла,',
      checkbox: [
        {
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25
        },
        {
          id: 2,
          name: 'Сырный бортик к средней пицце',
          value: 'CheeseSide',
          price: 29
        }
      ],
      price: 229
    },
  ],
  productsFilters: [],
  totalPagesLoaded: 4,
  quantityShowedProducts: 4,
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
    case ProductActionTypes.SET_PRODUCTS_PAGE:
      return {
        ...state,
        totalPagesLoaded: action.payload
      }
    default:
      return state
  }
}