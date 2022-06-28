import React from 'react'
import './App.module.scss'
import Header from './components/Header/Header';
import RootPage from './pages/RootPage/RootPage';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <RootPage>
      <Header/>
      <Carousel/>
    </RootPage>
  );
}

export default App
