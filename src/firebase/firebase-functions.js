import { db } from "./firebase-config";
import { collection, getDocs, addDoc, query, orderBy, Timestamp} from "firebase/firestore";


export const fetchData = async () => {
    const allOrders = query(collection(db, "orders"), orderBy("datepost", "desc"));

    const order = await getDocs(allOrders);
    order.forEach((doc) => {
        console.log(allOrders)
    })

   
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
