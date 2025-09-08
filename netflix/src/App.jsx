import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals, trending, actions, comedy, horror, romance } from './constants/constants';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Trending' isSmall url={trending} />
      <RowPost title='Action' isSmall url={actions} />
      <RowPost title='Comedy' isSmall url={comedy} />
      <RowPost title='Horror' isSmall url={horror} />
    </div>
  )
}


export default App;