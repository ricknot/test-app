import React, { useState } from "react";
import './Busca.css';
import Button from "./Buttonbusca";


const Busca = () => {

    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        // console.log(e.target.value);
    }

    return (  
        <div className="busca-container">
            <input onChange={handleInputChange} value={inputData} className="busca-input" type="text"/>
                <Button>Buscar</Button>
        </div>
        );
}
 
export default Busca;