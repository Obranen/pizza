import React from 'react'
import {Route, Routes} from 'react-router-dom';
import HomePage from '../public/HomePage/HomePage';
import {authRoutes, publicRoutes} from '../routesPages';

const RootPage = () => {
  //false - перенаправляет на HomePage
  const isAuth = false

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Element}) =>
        <Route key={path} path={path} element={<Element/>}/>
      )}

      {publicRoutes.map(({path, Element}) =>
        <Route key={path} path={path} element={<Element/>}/>
      )}

      <Route path="*" element={<HomePage/>}/>
    </Routes>
  )
}

export default RootPage