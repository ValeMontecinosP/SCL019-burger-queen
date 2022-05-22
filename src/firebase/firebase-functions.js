import { db } from "./firebase-config";
import { collection, getDocs, addDoc, query, orderBy, Timestamp } from "firebase/firestore";


/* export const fetchData = async () => {
    const allOrders = query(collection(db, "orders"), orderBy("datepost", "desc"));
    console.log(allOrders)

    const order = await getDocs(allOrders);

    console.log (order)
    order.forEach((doc) => {
        console.log(doc.data())
        return doc
    })



console.log(querySnapshot)
}; */

export const fetchOrders = async () => {
    const allOrders = query(collection(db, "orders"), orderBy("datepost", "desc"));

    const order = await getDocs(allOrders);
    /* const arrayOrders = []; */
  /*   order.forEach((doc) => {
        arrayOrders.push(doc.data())
        //console.log(doc.data())
    }) */
    //console.log(order.docs.data())
    //console.log(arrayOrders)

    return order;
    // console.log(querySnapshot)
};

export const addOrder = async (cartItems) => {
    let user = document.getElementById("inputName");
    let userName = user.value;
    const docRef = await addDoc(collection(db, "orders"), {
        userName,
        cartItems,
        date: Timestamp.fromDate(new Date()),

    });

    alert("El pedido fue ingresado")

    console.log("Document written with ID: ", docRef.id)
}
