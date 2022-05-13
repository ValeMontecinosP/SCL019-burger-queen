import { db } from "./firebase-config";
import { collection, getDocs, addDoc, Timestamp} from "firebase/firestore";


export const fetchData = async () => {
    const order = await getDocs(collection(db, "orders"));
    order.forEach((doc) => {
        console.log(doc.data())
    })

    return order.docs[0].data();
    // console.log(querySnapshot)
};

export const addOrder = async (cartItems) => {
    const docRef = await addDoc(collection(db, "orders"), {
        cartItems,
        date: Timestamp.fromDate(new Date()),

    });
    

    return console.log("Document written with ID: ", docRef.id)
}
