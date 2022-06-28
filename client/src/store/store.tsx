// import {applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import {rootReducer} from './reducers/rootReducer';
//
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
import React, {FC} from 'react'

interface Istore {}

const store: FC<Istore> =
  ({}) => {
    return (
      <>
        <h1>csz</h1>
      </>
    )
  }

export default store