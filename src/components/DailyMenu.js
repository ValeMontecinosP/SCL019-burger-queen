import { useState } from "react";
import dailymenu from "../dailymenu.json"
import { Link } from "react-router-dom";

let order = [];

const DailyMenu = () => {
    const [pedido, setPedido] = useState("");
    order.push(pedido);

    return (
        <>
            <Link to="/">
                <button className="mainButton"> Volver a Home </button>
            </Link>
            {dailymenu.map((menu) => (
                <button className="foodButton" key={menu.id} onClick={() =>
                    setPedido(menu)}>{menu.text} ${menu.value}</button>
            )
            )}
            {order.map((text) => (
                <p key={text.id}>{text.text} {text.value}</p>

            ))}

        </>

    )
}
export default DailyMenu

//onClick as a prop