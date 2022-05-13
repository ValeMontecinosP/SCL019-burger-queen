import breakfast from "../breakfast.json"
import { Link } from "react-router-dom";
import { fetchData } from "../firebase/firebase-functions";
import { useState } from "react";
import Cart from "./Cart.js";
import { ButtonGroup, Container, Row, Col } from "react-bootstrap";



const Breakfast = () => {
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
                        
                            {breakfast.map((brekkie) => (
                                <ButtonGroup size = "lg" className="mb-2">

                                <button className="foodButton rounded-pill"  key={brekkie.id} onClick={() =>
                                    onAdd(brekkie)} >{brekkie.text} ${brekkie.value}</button>
                                </ButtonGroup>
                            )
                            )}
                        
                    </Col>
                </Row>
            </Container>



            <button onClick={() => fetchData()}>click me</button>
            <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
            ></Cart>
            {console.log(cartItems)}

        </>

    )
}
export default Breakfast



//onClick as a prop

