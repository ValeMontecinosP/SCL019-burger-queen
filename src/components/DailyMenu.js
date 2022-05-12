import { useState } from "react";
import dailymenu from "../dailymenu.json"
import { Link } from "react-router-dom";
import Cart from "./Cart.js";
import { ButtonGroup, Container, Row, Col } from "react-bootstrap";





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
            <Container>
                <Row >
                    <Col xs={12} >
                        
                            {dailymenu.map((menu) => (
                                <ButtonGroup size = "lg" className="mb-2">

                                <button className="foodButton"  key={menu.id} onClick={() =>
                                    onAdd(menu)} >{menu.text} ${menu.value}</button>
                                </ButtonGroup>
                            )
                            )}
                        
                    </Col>
                </Row>
            </Container>




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