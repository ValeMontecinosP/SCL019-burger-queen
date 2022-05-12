import { useState } from "react";
import dailymenu from "../dailymenu.json"
import { Link } from "react-router-dom";
import Cart from "./Cart.js";



const DailyMenu = () => {
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (
        <>
            <Link to="/">
                <button className="mainButton"> Volver a Home </button>
            </Link>
            {dailymenu.map((menu) => (
                <button className="foodButton" key={menu.id} onClick={() =>
                    onAdd(menu)} >{menu.text} ${menu.value}</button>
            )
            )}




            <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
            ></Cart>
        </>

    )
}
export default DailyMenu

//onClick as a prop