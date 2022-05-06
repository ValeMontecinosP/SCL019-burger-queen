import Button from "./Button"
import breakfast from "../breakfast.json"
import { Link } from "react-router-dom";
import { fetchData } from "../firebase/firebase-functions";


const Breakfast = () => {

    return (
        <>
           
            <Link to="/">
                <button className="mainButton"> Volver a Home </button>
            </Link>
            {breakfast.map((brekkie) => (
                <Button key={brekkie.id} text={`${brekkie.text} $${brekkie.value}`} />
            )
            )}
            <button onClick={()=>fetchData()}>click me</button>

        </>

    )
}
export default Breakfast

//onClick as a prop