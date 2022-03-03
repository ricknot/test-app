import React, { useState } from 'react';
import Bannerfront from './components/Bannerfront';
import './App.css';
import Busca from './components/Busca';

const App = () => {
  const [buscas, setBusca] = useState("");


  return (
    <div className="container">
      <Bannerfront />
       <Busca />
      
    </div>
    
   );
}
 
export default App;
