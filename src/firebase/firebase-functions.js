import { db } from "./firebase-config";
import { collection, getDocs, addDoc, query, orderBy, Timestamp} from "firebase/firestore";


/* export const fetchData = async () => {
    const allOrders = query(collection(db, "orders"), orderBy("datepost", "desc"));
    console.log(allOrders)

    const order = await getDocs(allOrders);

    console.log (order)
    /*order.forEach((doc) => {
        console.log(doc.data())
        return doc
    }) */

    
   
    // console.log(querySnapshot)
// };

export const fetchData = async () => {
    const order = await getDocs(collection(db, "orders"), orderBy("datepost", "desc"));
    order.forEach((doc) => {
        console.log(doc.data())
    })

    return order.docs[0].data();
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
 console.log("Document written with ID: ", docRef.id)
}
