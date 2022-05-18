import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { addOrder } from '../firebase/firebase-functions'


const Cart = (props) => {


    const { cartItems, onAdd, onRemove } = props;
    const finalPrice = cartItems.reduce((accumulator, current) => accumulator + current.value * current.qty, 0);
    const userName = <input id="inputName" type="text" className='text-center' placeholder="Nombre"></input>

    return (
        <Container>
            <h2><strong>Pedido</strong></h2>
            {userName}
            <div className="cart">
                {cartItems.length === 0 && <div>Comanda está vacía</div>}
                {cartItems.map((item) => (
                    <Row key={item.id} >
                        <Col >{item.text}</Col>
                        <Col >
                            <button onClick={() => onRemove(item)} className="rounded-pill">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="rounded-pill">
                                +
                            </button>
                        </Col>

                        <Col >
                            {item.qty} x ${item.value}

                        </Col>
                    </Row>

                ))}

                {cartItems.length !== 0 && (
                    <h3><strong>Total ${finalPrice}</strong></h3>
                )}

                <div >
                    <button className="text-center rounded-pill" onClick={() => addOrder(cartItems)}>
                        Checkout
                    </button>
                    
                

                </div>


            </div>
        </Container>
    );
}

export default Cart
