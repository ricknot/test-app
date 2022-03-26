import React, { useState } from 'react';
import './App.css';
import Bannerfront from './components/Bannerfront';
import Busca from './components/Busca';
import Buscas from './components/Buscas';

const App = () => {
  const [buscas, setBusca] = useState([
    {
        id:"1",
        title: "Beira Rio ZL",
    },
    {
      id:"2",
      title: "Pista CEU Veredas ZL",
  },
  {
    id:"3",
    title: "MiniRamp From the Sea",
},
  ]);

 const handleBuscaAdd = (buscaTitle) => {
      const newBusca = [ ... buscas, {
          title: buscaTitle,
          id: Math.random(10),
      }];

      setBusca(newBusca);
 }

  return (
    <div className="container">
      <Bannerfront />
      <Busca handleBuscaAdd={handleBuscaAdd} />

      <Buscas buscas={buscas}/>
      
    </div>
    
   );
}
 
export default App;
