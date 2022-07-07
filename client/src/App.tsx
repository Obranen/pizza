import React from 'react'
import './App.module.scss'
import Header from './components/Header/Header';
import RootPage from './pages/RootPage/RootPage';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RootPage/>
    </BrowserRouter>
  );
}

export default App
