import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Cart = (props) => {


    const { cartItems, onAdd, onRemove } = props;
    const finalPrice = cartItems.reduce((accumulator ,current)=> accumulator + current.value * current.qty, 0 );


    return (
        <Container>
            <h2>Pedido</h2>
            <input id="inputName" type="text" placeholder="Nombre"></input>

            <div className="cart">
                {cartItems.length === 0 && <div>Comanda está vacía</div>}
                {cartItems.map((item) => (
                    <Row key={item.id} >
                        <Col >{item.text}</Col>
                        <Col >
                            <button onClick={() => onRemove(item)} className="modifyButton">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="modifyButton">
                                +
                            </button>
                        </Col>

                        <Col >
                            {item.qty} x ${item.value}

                        </Col>
                    </Row>
               
                ))}

                {cartItems.length!==0 && (
                    <p>Total ${finalPrice}</p>
                )}




                <div className="row">
                    <button onClick={() => alert('Implement Checkout!')}>
                        Checkout
                    </button>
                </div>


            </div>
        </Container>
    );
}

export default Cart
