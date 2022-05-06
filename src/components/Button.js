import { useState } from "react";

let pedido = [];

const Button = ({ text }) => {
    const [click, setClick] = useState("");
    pedido.push(click)
    return (
        <div>
            <button className="foodButton" onClick={() => setClick(text)}>
                {text}</button> 
            <h1>{pedido}</h1>
        </div>
        
    )
}
export default Button

