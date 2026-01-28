import { useState } from "react";
import ContadorHijo from "./ContadorHijo";

export default function Contador(){
    const [contador, setContador] = useState(0);
    const [input, setInput] = useState("");

    const myStyle ={
        textAlign: "center"
    }
    const sumar = () => {
        setContador(contador + 1)
    };

    const restar = () => {
        setContador(contador - 1)
    }

    const handleInput = e => {
        setInput(e.target.value);
    };

    return(
        <div style={myStyle}>
            <h2>Contador</h2>
            <nav>
                <div>{contador}</div>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <input 
                type="text" 
                onChange={handleInput}
                value={input}
            />
            <ContadorHijo/>
        </div>
    );
}