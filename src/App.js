import React, { useState } from 'react';
import Bannerfront from './components/Bannerfront';
import './App.css';
import Busca from './components/Busca';

const App = () => {
  return (
    <div className="container">
      <div className="Frontcontainer">
        <Bannerfront />
      </div>
      <Busca />
      
    </div>
    
   );
}
 
export default App;
