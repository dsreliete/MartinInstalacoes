import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent/>
        <FooterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
