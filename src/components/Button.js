import { useState } from "react";

const Button = ({ text }) => {
    const [click, setClick] = useState("");
    return (
        <div>
            <button className="foodButton" onClick={() => setClick(text)}>
                {text}</button> 
            <p className="order">{click}</p>
        </div>
        
    )
}
export default Button

