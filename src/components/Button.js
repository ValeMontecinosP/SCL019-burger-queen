import { useState } from "react";

let pedido = [];

const Button = ({ text }) => {
    const [click, setClick] = useState("");
    pedido.concat(click)
    return (
        <div>
            <button className="foodButton" onClick={() => setClick(text)}>
                {text}</button> 
            <h1>{pedido}</h1>
            {console.log(pedido)}
        </div>
        
    )
}
export default Button

