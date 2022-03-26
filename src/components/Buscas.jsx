import React from "react";
import ItemBusca from './ItemBusca';


const Buscas = ({buscas}) => {
    return ( 
        <>
            {buscas.map((busca) => (
                <ItemBusca busca={busca}/>
            ))} 
        </>
     );
}
 
export default Buscas;
