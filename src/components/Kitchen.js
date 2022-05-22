import { fetchOrders } from "../firebase/firebase-functions"
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';


const Kitchen = () => {
  const [orders, setOrders] = useState([])
  /* const ordersRef = collection(db, "orders") */

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders()
      setOrders(data)
      
    }
    fetchData()
   
  }, [])



  return (
    <>
      <Link to="/">
        <button className="mainButton"> Volver a Home </button>

      </Link>

      <h1>
        <a href="https://youtu.be/2WZ5X0AMdK4">Cooking up something good</a>
      </h1>
      <div >
      <p >Cocina</p>
      <p >Pedidos entrantes</p>

      {orders.forEach(element => {
        console.log(element.data())
        // console.log(element.id)
        return (
          <div >
            <p >{element.data().userName}</p>
          

            {element.cartItems.forEach(item => {
              return (
                <p >{item.text}
                </p>
              )
            })}
          </div>
        )
      }
      )}
      
    </div>
    

    </>
  )
}

export default Kitchen