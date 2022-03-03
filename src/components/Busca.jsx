import React from "react";
import './Busca.css';
import Button from "./Buttonbusca";


const Busca = () => {
    return (  
        <div className="busca-container">
            <input className="busca-input" type="text"/>
                <Button>Buscar</Button>
        </div>
        );
}
 
export default Busca;