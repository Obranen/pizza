import React, {FC} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../public/HomePage/HomePage';
import {authRoutes, publicRoutes} from '../routesPages';

interface IRootPage {
  children: React.ReactNode
}

const RootPage: FC<IRootPage> = ({children}) => {
  //false - перенаправляет на HomePage
  const isAuth = false

  return (
    <BrowserRouter>
      {children}
      <Routes>
        {isAuth && authRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>}/>
        )}

        {publicRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>}/>
        )}

        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RootPage