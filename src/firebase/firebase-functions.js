import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";


export const fetchData = async () => {
    const order = await getDocs(collection(db, "orders"));
    order.forEach((doc)=>{
        console.log(doc.data())
    })

    return order.docs[0].data();
    // console.log(querySnapshot)
};

