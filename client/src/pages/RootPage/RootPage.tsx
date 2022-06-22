import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../public/HomePage/HomePage';
import {authRoutes, publicRoutes} from '../routesPages';
import NavBar from '../../components/Header/NavBar/NavBar';

const RootPage = () => {
    const isAuth = true

    return (
      <BrowserRouter>
        <NavBar/>
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