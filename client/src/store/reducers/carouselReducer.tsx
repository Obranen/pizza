import {ICarouselState, CarouselAction, CarouselActionTypes} from '../types/carouselTypes';

const initialState: ICarouselState = {
  carousel: [
    {
      imageSrc: 'https://www.amd.com/system/files/2022-01/1209353-GOW-key-art-1920x600.jpg',
      imageAlt: 'фотка1',
      linkUrl: '/'
    },
    {
      imageSrc: 'https://wallpapercave.com/wp/wp6004853.jpg',
      imageAlt: 'фотка2',
      linkUrl: '/'
    },
    {
      imageSrc: 'https://wallpapercave.com/wp/wp6004978.jpg',
      imageAlt: 'фотка3',
      linkUrl: '/'
    },
    {
      imageSrc: 'https://wallpapercave.com/wp/wp6004835.jpg',
      imageAlt: 'фотка4',
      linkUrl: '/'
    }
  ],
  loading: false,
  error: null
}

export const carouselReducer = (state = initialState, action: CarouselAction): ICarouselState => {
  switch (action.type) {
    // case CarouselActionTypes.FETCH_USERS_SUCCESS:
    //   return {
    //     // Пример:
    //     // ...state,
    //     // users: state.users.concat(action.payload)
    //     // users: [action.payload, ...state.users]
    //     // users: [...state.users, action.payload]
    //     loading: false,
    //     error: null,
    //     carousel: action.payload
    //   }
    default:
      return state
  }
}