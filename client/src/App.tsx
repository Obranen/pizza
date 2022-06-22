import React from 'react'
import './App.module.scss'
import Header from './components/Header/Header';
import RootPage from './pages/RootPage/RootPage';

function App() {
  return (
    <RootPage>
      <Header/>
    </RootPage>
  );
}

export default App
