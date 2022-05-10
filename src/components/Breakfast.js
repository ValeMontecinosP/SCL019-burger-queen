import breakfast from "../breakfast.json"
import { Link } from "react-router-dom";
import { fetchData } from "../firebase/firebase-functions";
import { useState } from "react";

let order = [];

const Breakfast = () => {
    const [pedido, setPedido] = useState("");
/*     const [price, setPrice] = useState(0); */
    order.push(pedido);

    return (
        <>

            <Link to="/">
                <button className="mainButton"> Volver a Home </button>
            </Link>
            {breakfast.map((brekkie) => (
                <button className="foodButton" key={brekkie.id} onClick={() =>
                    setPedido(brekkie)}>{brekkie.text} ${brekkie.value}</button>
            )
            )}
            {order.map((text) => (
                <p key={text.id}>{text.text} {text.value}</p>

            ))}

{/*             {order.map((total) => (
                <button key={total.id}  onClick={() => setPrice(+total.value)}>
                    {price}
                </button>
            ))} */}




            <button onClick={() => fetchData()}>click me</button>

        </>

    )
}
export default Breakfast


//onClick as a prop

