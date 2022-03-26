import React from "react";
import "./ItemBusca.css";

const ItemBusca = ({busca}) => {
    return ( 
        <div className="item-container">{busca.title}</div>
     );
}
 
export default ItemBusca;