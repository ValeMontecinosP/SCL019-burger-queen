const Cart = (props) => {

    const { cartItems, onAdd, onRemove } = props;

    return (
        <aside className="cart">
            <h2>Pedido</h2>
            <div className="cart">
                {cartItems.length === 0 && <div>Comanda está vacía</div>}
                {cartItems.map((item) => (
                    <div key={item.id} >
                        <div >{item.text}</div>
                        <div >
                            <button onClick={() => onRemove(item)} className="modifyButton">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="modifyButton">
                                +
                            </button>
                        </div>

                        <div >
                            {item.qty} x ${item.value}

                        </div>
                    </div>
                ))}



                    
                <div className="row">
                    <button onClick={() => alert('Implement Checkout!')}>
                        Checkout
                    </button>
                </div>


            </div>
        </aside>
    );
}

export default Cart
