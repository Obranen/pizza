import React from 'react'
import './App.module.scss'
import Header from './components/Header/Header';
import RootPage from './pages/RootPage/RootPage';
import CarouselOnMain from './components/CarouselOnMain/CarouselOnMain';

function App() {
  return (
    <RootPage>
      <Header/>
      <CarouselOnMain/>
    </RootPage>
  );
}

export default App
